import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
  return (
    <article className="place-card">

      <img
        src={place.image}
        alt={place.name}
        className="place-card-image"
      />

      <div className="place-card-content">

        <p className="place-card-city">
          📍 {place.city}
        </p>

        <h3>{place.name}</h3>

        <p className="place-card-description">
          {place.description}
        </p>

        <Link
          to={`/place/${place.id}`}
          className="place-card-button"
        >
          Explore Place →
        </Link>

      </div>

    </article>
  );
}






