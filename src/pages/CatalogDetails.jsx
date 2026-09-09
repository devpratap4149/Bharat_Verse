import { Link, useParams } from "react-router-dom";
import catalogDestinations from "../data/catalogDestinations";
import heritagePlaceholder from "../assets/heritage-placeholder.svg";
import "./CatalogDetails.css";

function NumberValue({ value }) {
  return value === null || value === undefined
    ? "Not Available"
    : value.toLocaleString("en-IN");
}

export default function CatalogDetails() {
  const { id } = useParams();
  const destination = catalogDestinations.find((item) => item.id === id);

  if (!destination) {
    return (
      <main className="catalog-not-found">
        <h1>Catalogue record not found</h1>
        <Link to="/explore">← Back to Explore</Link>
      </main>
    );
  }

  return (
    <main className="catalog-details-page">
      <section className="catalog-details-hero">
        <img src={heritagePlaceholder} alt="BharatVerse heritage placeholder" />
        <div className="catalog-details-hero-overlay">
          <Link to="/explore" className="catalog-back-button">← Back to Explore</Link>
          <p className="catalog-eyebrow">SOURCE-AWARE HERITAGE RECORD</p>
          <h1>{destination.name}</h1>
          <p>{destination.city}{destination.state !== "Not Available" ? `, ${destination.state}` : ""}</p>
        </div>
      </section>

      <section className="catalog-details-content">
        <div className="catalog-data-notice">
          <strong>Data status: {destination.dataConfidence}</strong>
          <p>
            This page shows only fields present in the BharatVerse dataset. Descriptions, safety ratings,
            accessibility claims, images, and hidden-gem scores are not shown until independently verified.
          </p>
        </div>

        <div className="catalog-detail-grid">
          <article>
            <h2>Heritage record</h2>
            <dl>
              <div><dt>Destination ID</dt><dd>{destination.id}</dd></div>
              <div><dt>Heritage category</dt><dd>{destination.heritageCategory || "Not Available"}</dd></div>
              <div><dt>ASI list status</dt><dd>{destination.asiListStatus}</dd></div>
            </dl>
          </article>

          <article>
            <h2>Visitor data</h2>
            <p className="catalog-period">Reported period: 2019-20. These are not current visitor figures.</p>
            <dl>
              <div><dt>Total visitors</dt><dd><NumberValue value={destination.visitorCount2019_20} /></dd></div>
              <div><dt>Domestic visitors</dt><dd><NumberValue value={destination.domesticVisitors2019_20} /></dd></div>
              <div><dt>International visitors</dt><dd><NumberValue value={destination.internationalVisitors2019_20} /></dd></div>
              <div><dt>Supplied popularity label</dt><dd>{destination.tourismPopularity || "Not Available"}</dd></div>
            </dl>
          </article>
        </div>

        <section className="catalog-unavailable-section">
          <h2>Information not yet available</h2>
          <p>
            Women-solo safety, accessibility, visit planning, budget, best time, local experiences, and detailed
            history require separate verified sources. BharatVerse does not infer them from this dataset.
          </p>
        </section>

        <footer className="catalog-provenance">
          <h2>Provenance</h2>
          <p>{destination.source}</p>
          <p>For field-level lineage, use <code>Dataset/Data/Final/destination_provenance.csv</code>.</p>
        </footer>
      </section>
    </main>
  );
}
