import { useState } from "react";
import "./Explore.css";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";

console.log("PLACES:", places);
export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  // Get unique cities automatically from places.js
  const cities = [
    "All",
    ...new Set(places.map((place) => place.city)),
  ];

  // Filter places based on search and selected city
  const filteredPlaces = places.filter((place) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      place.name.toLowerCase().includes(search) ||
      place.city.toLowerCase().includes(search) ||
      place.description.toLowerCase().includes(search);

    const matchesCity =
      selectedCity === "All" ||
      place.city === selectedCity;

    return matchesSearch && matchesCity;
  });

  return (
    <main className="explore-page">

      {/* Explore Header */}
      <section className="explore-header">

        <p className="explore-tag">
          EXPLORE BEYOND THE ORDINARY
        </p>

        <h1>Discover Hidden India</h1>

        <p className="explore-description">
          Explore forgotten heritage, local culture and
          extraordinary places beyond the usual tourist trail.
        </p>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search places, cities or heritage..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        {/* City Filters */}
        <div className="city-filters">

          {cities.map((city) => (
            <button
              key={city}
              type="button"
              className={
                selectedCity === city ? "active" : ""
              }
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}

        </div>

      </section>


      {/* Places */}
      <section className="explore-places">

        <div className="places-heading">
          <div>
            <h2>Hidden Heritage</h2>

            <p className="section-description">
              Discover places that deserve to be seen.
            </p>
          </div>

          <p className="places-count">
            {filteredPlaces.length}{" "}
            {filteredPlaces.length === 1
              ? "place"
              : "places"}
          </p>
        </div>


        {/* Place Cards */}

        <p style={{ color: "white" }}>
            Showing {filteredPlaces.length} places
        </p>
        
        <div className="places-grid">

          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No places found</h3>

              <p>
                Try another search or select a different
                location.
              </p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}