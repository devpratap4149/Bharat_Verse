import { Link } from "react-router-dom";
import places from "../data/places";
import "./Favorites.css";

export default function Favorites() {
  const favoriteIds =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const favoritePlaces = places.filter((place) =>
    favoriteIds.includes(place.id)
  );

  return (
    <main className="favorites-page">

      <section className="favorites-header">

        <p>YOUR COLLECTION</p>

        <h1>
          Places worth
          <span> remembering.</span>
        </h1>

        <p className="favorites-description">
          Keep track of the hidden places and stories
          you want to explore someday.
        </p>

      </section>


      {favoritePlaces.length === 0 ? (

        <section className="favorites-empty">

          <div className="favorites-icon">
            ♡
          </div>

          <h2>
            Your collection is empty.
          </h2>

          <p>
            Discover a place you love and save it here.
          </p>

          <Link
            to="/explore"
            className="favorites-explore-btn"
          >
            Explore Hidden India →
          </Link>

        </section>

      ) : (

        <section className="favorites-grid">

          {favoritePlaces.map((place) => (

            <Link
              key={place.id}
              to={`/place/${place.id}`}
              className="favorite-card"
            >

              <img
                src={place.image}
                alt={place.name}
              />

              <div className="favorite-card-overlay">

                <span>
                  {place.city}
                </span>

                <h3>
                  {place.name}
                </h3>

              </div>

            </Link>

          ))}

        </section>

      )}

    </main>
  );
}