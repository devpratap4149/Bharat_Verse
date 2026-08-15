import { Link, useParams } from "react-router-dom";
import artisans from "../data/artisans";
import "./ArtisanDetails.css";

export default function ArtisanDetails() {
  const { id } = useParams();

  const artisan = artisans.find(
    (item) => item.id === Number(id)
  );

  if (!artisan) {
    return (
      <main className="artisan-not-found">
        <h1>Artisan not found</h1>

        <p>
          We couldn't find this artisan in BharatVerse.
        </p>

        <Link to="/artisans">
          ← Back to Artisans
        </Link>
      </main>
    );
  }

  return (
    <main className="artisan-details-page">

      {/* =================================
          HERO
      ================================= */}

      <section
        className="artisan-details-hero"
        style={{
          backgroundImage: `url(${artisan.image})`,
        }}
      >

        <div className="artisan-details-overlay"></div>

        <div className="artisan-details-hero-content">

          <Link
            to="/artisans"
            className="back-artisans"
          >
            ← Back to Artisans
          </Link>

          <p className="artisan-details-craft">
            {artisan.craft}
          </p>

          <h1>
            {artisan.name}
          </h1>

          <p className="artisan-details-location">
            📍 {artisan.city}
          </p>

        </div>

      </section>


      {/* =================================
          CONTENT
      ================================= */}

      <section className="artisan-details-content">

        {/* INTRO */}

        <div className="artisan-details-intro">

          <div>

            <span>
              CRAFT SPECIALITY
            </span>

            <h2>
              {artisan.speciality}
            </h2>

          </div>


          <div className="artisan-experience-box">

            <strong>
              {artisan.experience}
            </strong>

            <small>
              of experience
            </small>

          </div>

        </div>


        {/* =================================
            STORY
        ================================= */}

        <section className="artisan-story-section">

          <p className="section-label">
            THE STORY
          </p>

          <h2>
            A craft shaped by generations
          </h2>

          <p>
            {artisan.story}
          </p>

        </section>


        {/* =================================
            PROCESS
        ================================= */}

        <section className="artisan-story-section">

          <p className="section-label">
            THE CRAFT
          </p>

          <h2>
            How the craft comes to life
          </h2>

          <p>
            {artisan.process}
          </p>

        </section>


        {/* =================================
            SIGNIFICANCE
        ================================= */}

        <section className="artisan-significance">

          <p className="section-label">
            CULTURAL SIGNIFICANCE
          </p>

          <p>
            {artisan.significance}
          </p>

        </section>


        {/* =================================
            BOTTOM LINK
        ================================= */}

        <Link
          to="/artisans"
          className="back-artisans-bottom"
        >
          ← Discover more artisans
        </Link>

      </section>

    </main>
  );
}
