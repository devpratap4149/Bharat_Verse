import { Link } from "react-router-dom";
import "./About.css";

const features = [
  {
    number: "01",
    title: "Discover Hidden Places",
    text:
      "Explore lesser-known destinations, heritage sites and cultural landmarks that deserve more attention.",
  },
  {
    number: "02",
    title: "Meet Local Artisans",
    text:
      "Learn about the people behind India's traditional crafts and the stories passed down through generations.",
  },
  {
    number: "03",
    title: "Explore With AI",
    text:
      "Get personalized recommendations and discover destinations based on your interests and travel preferences.",
  },
];

const experiences = [
  {
    icon: "🗺️",
    title: "Interactive Maps",
    text:
      "Find heritage destinations through an interactive map and understand where each place is located.",
  },
  {
    icon: "🎥",
    title: "Stories Through Video",
    text:
      "Watch historical and cultural videos to understand the story behind a destination instead of relying only on text.",
  },
  {
    icon: "✦",
    title: "AI Travel Guide",
    text:
      "Ask BharatVerse about hidden places, heritage, crafts and destinations across India.",
  },
  {
    icon: "♿",
    title: "Accessible Exploration",
    text:
      "Accessibility and senior-friendly information help travellers choose experiences that suit their needs.",
  },
  {
    icon: "₹",
    title: "Travel Preferences",
    text:
      "Consider budget, available time and crowd preference when planning a more suitable travel experience.",
  },
  {
    icon: "♥",
    title: "Save Your Discoveries",
    text:
      "Save interesting destinations to favorites and return to them whenever you want to plan your journey.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-label">
            THE IDEA BEHIND BHARATVERSE
          </p>

          <h1>
            Discover the India
            <span> beyond the obvious.</span>
          </h1>

          <p>
            BharatVerse is a cultural discovery platform built
            to help travellers explore India's hidden heritage,
            forgotten stories, local artisans and experiences
            beyond the usual tourist destinations.
          </p>

        </div>

      </section>


      {/* =================================
          OUR VISION
      ================================= */}

      <section className="about-section">

        <div className="about-section-label">
          OUR VISION
        </div>

        <div className="about-section-content">

          <h2>
            India has stories
            <span> waiting to be discovered.</span>
          </h2>

          <p>
            India's most famous destinations tell only part of
            its story. Across towns, villages and forgotten
            corners are forts, temples, crafts, traditions and
            communities that rarely make it onto mainstream
            travel lists.
          </p>

          <p>
            BharatVerse brings these experiences together in one
            place and makes discovering them easier, more
            personal and more meaningful.
          </p>

        </div>

      </section>


      {/* =================================
          WHAT WE DO
      ================================= */}

      <section className="about-features">

        {features.map((feature) => (

          <div
            className="about-feature"
            key={feature.number}
          >

            <div className="feature-number">
              {feature.number}
            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.text}
            </p>

          </div>

        ))}

      </section>


      {/* =================================
          BHARATVERSE EXPERIENCE
      ================================= */}

      <section className="about-experience">

        <div className="about-experience-heading">

          <p className="about-label">
            THE BHARATVERSE EXPERIENCE
          </p>

          <h2>
            More than a destination
            <span> discovery platform.</span>
          </h2>

          <p>
            BharatVerse combines cultural discovery with
            technology to help travellers understand,
            explore and plan their journey in a more
            meaningful way.
          </p>

        </div>


        <div className="experience-grid">

          {experiences.map((experience) => (

            <div
              className="experience-card"
              key={experience.title}
            >

              <div className="experience-icon">
                {experience.icon}
              </div>

              <div>

                <h3>
                  {experience.title}
                </h3>

                <p>
                  {experience.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================
          WHY BHARATVERSE
      ================================= */}

      <section className="about-story">

        <div className="about-story-inner">

          <p className="about-label">
            WHY BHARATVERSE
          </p>

          <h2>
            From tourist spots
            <br />
            to living stories.
          </h2>

          <p>
            We believe travel should be more than checking
            famous places off a list. It should be about
            understanding the people, traditions and stories
            that make a place unique.
          </p>

          <p>
            BharatVerse aims to create a bridge between
            curious travellers and the cultural richness that
            often remains hidden in plain sight.
          </p>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="about-cta">

        <p>
          READY TO EXPLORE?
        </p>

        <h2>
          Your next discovery
          <span> might be unexpected.</span>
        </h2>

        <Link
          to="/explore"
          className="about-explore-btn"
        >
          Explore Hidden India →
        </Link>

      </section>

    </main>
  );
}