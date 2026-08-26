import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import places from "../data/places";
import "./PlaceDetails.css";
import MapView from "../components/MapView";
import YouTubeVideo from "../components/YouTubeVideo";

export default function PlaceDetails() {
  const { id } = useParams();

  const place = places.find(
    (item) => item.id === Number(id)
  );

  const [isFavorite, setIsFavorite] = useState(false);

  /* =================================
     CHECK FAVORITE
  ================================= */

  useEffect(() => {
    if (!place) return;

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setIsFavorite(favorites.includes(place.id));
  }, [place]);


  /* =================================
     PLACE NOT FOUND
  ================================= */

  if (!place) {
    return (
      <main className="place-not-found">
        <h1>Place Not Found</h1>

        <p>
          We couldn't find this destination in BharatVerse.
        </p>

        <Link to="/explore">
          ← Back to Explore
        </Link>
      </main>
    );
  }


  /* =================================
     FAVORITE
  ================================= */

  const toggleFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    let updatedFavorites;

    if (favorites.includes(place.id)) {
      updatedFavorites = favorites.filter(
        (favoriteId) => favoriteId !== place.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        place.id,
      ];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setIsFavorite(
      updatedFavorites.includes(place.id)
    );
  };


  /* =================================
     RELATED PLACES
  ================================= */

  const relatedPlaces = place.related
    ? places.filter((item) =>
        place.related.includes(item.id)
      )
    : [];


  return (
    <main className="details-page">

      {/* =================================
          HERO
      ================================= */}

      <section
        className="details-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.92) 0%,
              rgba(0, 0, 0, 0.55) 40%,
              rgba(0, 0, 0, 0.08) 100%
            ),
            url(${place.image})
          `,
        }}
      >

        <div className="details-overlay">

          <div className="details-hero-content">

            <Link
              to="/explore"
              className="back-button"
            >
              ← Back to Explore
            </Link>

            <p className="details-location">
              {place.city}
            </p>

            <h1>
              {place.name}
            </h1>

            <p>
              {place.description}
            </p>

            <div className="place-actions">

              <button
                type="button"
                className={`favorite-btn ${
                  isFavorite ? "active" : ""
                }`}
                onClick={toggleFavorite}
              >
                {isFavorite
                  ? "♥ Saved to Favorites"
                  : "♡ Save to Favorites"}
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <section className="details-content">

        {/* =================================
            STORY + DESTINATION INFO
        ================================= */}

        <div className="details-grid">

          {/* =================================
              STORY
          ================================= */}

          <div className="details-main">

            <p className="details-tag">
              THE STORY
            </p>

            <h2>
              Discover the story of{" "}
              <span>{place.name}.</span>
            </h2>

            <p className="details-description">
              {place.history}
            </p>

          </div>


          {/* =================================
              DESTINATION INFO
          ================================= */}

          <aside className="details-info">

            <h3>
              Destination Info
            </h3>

            <div className="info-item">

              <span>
                Location
              </span>

              <strong>
                {place.city}
              </strong>

            </div>


            <div className="info-item">

              <span>
                Best Time
              </span>

              <strong>
                {place.bestTime}
              </strong>

            </div>


            <div className="info-item">

              <span>
                Coordinates
              </span>

              <strong>
                {place.lat}, {place.lng}
              </strong>

            </div>

          </aside>

        </div>

          

          {/* =================================
    SAFETY & ACCESSIBILITY
================================= */}

<section className="details-section">

  <p className="details-tag">
    TRAVEL SMART
  </p>

  <h2>
    Safety & Accessibility
  </h2>

  <div className="details-grid">

    {/* SAFETY */}

    <div className="details-main">

      <h3>
        🛡️ Safety
      </h3>

      <p>
        Safety level:{" "}
        <strong>
          {place.safety.level}
        </strong>
      </p>

      <ul>
        {place.safety.tips.map((tip, index) => (
          <li key={index}>
            {tip}
          </li>
        ))}
      </ul>

    </div>


    {/* ACCESSIBILITY ONLY */}

    <aside className="details-info">

      <h3>
        ♿ Accessibility
      </h3>

      <div className="info-item">
        <span>
          Senior Citizen Friendly
        </span>

        <strong>
          {place.accessibility.seniorFriendly
            ? "Yes"
            : "Limited"}
        </strong>
      </div>

      <div className="info-item">
        <span>
          Wheelchair Access
        </span>

        <strong>
          {place.accessibility.wheelchairAccessible
            ? "Available"
            : "Limited"}
        </strong>
      </div>

      <div className="info-item">
        <span>
          Walking Difficulty
        </span>

        <strong>
          {place.accessibility.walkingDifficulty}
        </strong>
      </div>

      <div className="info-item">
        <span>
          Seating
        </span>

        <strong>
          {place.accessibility.seatingAvailable
            ? "Available"
            : "Limited"}
        </strong>
      </div>

      <p className="details-description">
        {place.accessibility.notes}
      </p>

    </aside>

  </div>

</section>

        {/* =================================
            YOUTUBE VIDEO
        ================================= */}

        <YouTubeVideo
          videoId={place.youtubeVideoId}
          title={place.name}
        />


        {/* =================================
            SIGNIFICANCE
        ================================= */}

        <section className="details-section">

          <p className="details-tag">
            CULTURAL SIGNIFICANCE
          </p>

          <h2>
            Why this place matters.
          </h2>

          <p>
            {place.significance}
          </p>

        </section>


        {/* =================================
            MAP
        ================================= */}

        <section className="place-map-section">

          <p className="section-label">
            LOCATION
          </p>

          <h2>
            Find this heritage site
          </h2>

          <MapView
            latitude={place.lat}
            longitude={place.lng}
            name={place.name}
          />

        </section>


        {/* =================================
            RELATED PLACES
        ================================= */}

        <section className="related-section">

          <p className="details-tag">
            KEEP EXPLORING
          </p>

          <h2>
            More places to discover.
          </h2>

          <p className="related-intro">
            Continue your journey through India's
            hidden heritage and discover destinations
            beyond the usual tourist routes.
          </p>


          <div className="related-grid">

            {relatedPlaces.map((relatedPlace) => (

              <Link
                key={relatedPlace.id}
                to={`/place/${relatedPlace.id}`}
                className="related-card"
              >

                <div className="related-image-wrapper">

                  <img
                    src={relatedPlace.image}
                    alt={relatedPlace.name}
                  />

                </div>


                <div className="related-card-content">

                  <p className="related-city">
                    {relatedPlace.city}
                  </p>

                  <h3>
                    {relatedPlace.name}
                  </h3>

                  <p>
                    {relatedPlace.description}
                  </p>

                  <span>
                    Explore Place →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </section>

    </main>
  );
}