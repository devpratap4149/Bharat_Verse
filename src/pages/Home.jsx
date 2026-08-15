// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import heroImage from "../assets/hero-fort.png";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <section
//       className="hero"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="hero-content">

//         <p className="hero-tag">
//           DISCOVER THE INDIA YOU HAVEN'T SEEN
//         </p>

//         <h1>BharatVerse</h1>

//         {/* <h2 className="hero-tagline">Trend Se Pehle Discover Karo.</h2> */}
//         <p className="hero-tagline">
//   Trend Se Pehle Discover Karo.
// </p>

//         <p className="hero-description">
//           Explore India's hidden heritage, forgotten stories,
//           local artisans and cultural experiences beyond the
//           usual tourist destinations.
//         </p>

//         <div className="hero-buttons">

//           <button
//             type="button"
//             className="primary-btn"
//             onClick={() => navigate("/explore")}
//           >
//             Explore Hidden India
//           </button>

//           <button
//             type="button"
//             className="secondary-btn"
//             onClick={() => navigate("/ai-guide")}
//           >
//             Meet the AI Guide
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }
















import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImage from "../assets/hero-fort.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">

        <p className="hero-tag">
          DISCOVER THE INDIA YOU HAVEN'T SEEN
        </p>

        <h1>BharatVerse</h1>

        <p className="hero-tagline">
          Trend Se Pehle Discover Karo.
        </p>

        <p className="hero-description">
          Explore India's hidden heritage, forgotten stories,
          local artisans and cultural experiences beyond the
          usual tourist destinations.
        </p>

        <div className="hero-buttons">

          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("/explore")}
          >
            Explore Hidden India
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("/ai-guide")}
          >
            Meet the AI Guide
          </button>

        </div>

      </div>
    </section>
  );
}