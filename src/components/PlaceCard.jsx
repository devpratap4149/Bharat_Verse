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










// import { Link } from "react-router-dom";
// import heritagePlaceholder from "../assets/heritage-placeholder.svg";

// export default function PlaceCard({ place }) {
//   const isCatalogRecord = place.dataStatus === "source-backed-catalog";

//   return (
//     <article className="place-card">
//       {place.image ? (
//         <img src={place.image} alt={place.name} className="place-card-image" />
//       ) : (
//         <img
//           src={heritagePlaceholder}
//           alt="BharatVerse heritage placeholder"
//           className="place-card-image"
//         />
//       )}
//       <div className="place-card-content">
//         <p className="place-card-city">📍 {place.city}{place.state !== "Not Available" ? `, ${place.state}` : ""}</p>
//         <h3>{place.name}</h3>
//         {place.heritageCategory && <p className="place-card-description">{place.heritageCategory}</p>}
//         {isCatalogRecord ? (
//           <>
//             <p className="place-card-description">{place.asiListStatus}</p>
//             <Link to={`/catalog/${encodeURIComponent(place.id)}`} className="place-card-button">
//               View Data Record →
//             </Link>
//           </>
//         ) : (
//           <>
//             <p className="place-card-description">{place.description}</p>
//             <Link to={`/place/${place.id}`} className="place-card-button">Explore Place →</Link>
//           </>
//         )}
//       </div>
//     </article>
//   );
// }
