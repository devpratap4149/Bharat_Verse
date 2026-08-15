import { useState } from "react";
import artisans from "../data/artisans";
import "./Artisans.css";
import ArtisanCard from "../components/ArtisanCard";

export default function Artisans() {
  const [search, setSearch] = useState("");

  const filteredArtisans = artisans.filter((artisan) => {
    const text = search.toLowerCase();

    return (
      artisan.name.toLowerCase().includes(text) ||
      artisan.craft.toLowerCase().includes(text) ||
      artisan.city.toLowerCase().includes(text)
    );
  });

  return (
    <main className="artisans-page">

      <section className="artisans-header">
        <p> LIVING HERITAGE OF INDIA </p>

        <h1>Meet the Makers</h1>

        <p>
          Discover the people and traditional crafts
          that keep India's living heritage alive.
        </p>
      </section>

      <section className="artisans-content">

        <input
          type="text"
          placeholder="Search artisans, crafts or cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2>Stories Behind the Craft</h2>

        <div className="artisans-grid">
            {filteredArtisans.map((artisan) => (
                <ArtisanCard
                    key={artisan.id}
                    artisan={artisan}
                />
            ))}
        </div>

      </section>

    </main>
  );
}