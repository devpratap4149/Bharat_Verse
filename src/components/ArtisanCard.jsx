import { Link } from "react-router-dom";

export default function ArtisanCard({ artisan }) {
  return (
    <Link
      to={`/artisan/${artisan.id}`}
      className="artisan-card"
    >

      {/* IMAGE */}
      <div className="artisan-image">
        <img
          src={artisan.image}
          alt={artisan.name}
        />
      </div>

      {/* CONTENT */}
      <div className="artisan-card-content">

        <p className="artisan-craft">
          {artisan.craft}
        </p>

        <h3>{artisan.name}</h3>

        <p className="artisan-location">
          📍 {artisan.city}
        </p>

        <p className="artisan-experience">
          {artisan.experience} of experience
        </p>

        <p className="artisan-description">
          {artisan.description}
        </p>

        {/* FOOTER */}
        <div className="artisan-footer">

          <span>
            {artisan.speciality}
          </span>

          <span className="explore-link">
            View Story →
          </span>

        </div>

      </div>

    </Link>
  );
}

