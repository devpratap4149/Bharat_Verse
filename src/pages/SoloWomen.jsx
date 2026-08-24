// import { useNavigate } from "react-router-dom";
// import "./SoloWomen.css";

// export default function SoloWomen() {
//   const navigate = useNavigate();

//   return (
//     <section className="solo-women-page">

//       {/* Hero Section */}
//       <div className="solo-women-hero">
//         <div className="solo-women-overlay"></div>

//         <div className="solo-women-content">
//           <p className="solo-women-tag">
//             SOLO WOMEN TRAVELLER
//           </p>

//           <h1>
//             Discover India<br />
//             With Confidence
//           </h1>

//           <p>
//             Explore heritage, culture and hidden destinations
//             with travel information designed for women travelling solo.
//           </p>
//         </div>
//       </div>


//       {/* Introduction */}
//       <section className="solo-intro">

//         <p className="section-tag">
//           TRAVEL YOUR WAY
//         </p>

//         <h2>
//           Your Journey. Your Choice.
//         </h2>

//         <p className="section-description">
//           BharatVerse helps solo women travellers discover destinations
//           based on their interests, budget, duration and important
//           travel-suitability information.
//         </p>

//       </section>


//       {/* Feature Cards */}
//       <section className="solo-features">

//         <div className="solo-feature-card">
//           <div className="feature-icon">🛡️</div>

//           <h3>Traveller Suitability</h3>

//           <p>
//             Understand important destination factors before planning
//             your journey.
//           </p>
//         </div>


//         <div className="solo-feature-card">
//           <div className="feature-icon">🚆</div>

//           <h3>Transport Access</h3>

//           <p>
//             Check available transport and connectivity information
//             for easier planning.
//           </p>
//         </div>


//         <div className="solo-feature-card">
//           <div className="feature-icon">👥</div>

//           <h3>Crowd Information</h3>

//           <p>
//             Discover destinations according to your preferred
//             crowd level and travel experience.
//           </p>
//         </div>


//         <div className="solo-feature-card">
//           <div className="feature-icon">🏥</div>

//           <h3>Nearby Facilities</h3>

//           <p>
//             Get information about important facilities available
//             around the destination.
//           </p>
//         </div>

//       </section>


//       {/* Recommendation Section */}
//       <section className="solo-recommendation">

//         <div className="recommendation-content">

//           <p className="section-tag">
//             PERSONALIZED DISCOVERY
//           </p>

//           <h2>
//             Find Places That Fit You
//           </h2>

//           <p>
//             Tell BharatVerse what you are looking for and discover
//             destinations that match your interests, budget, travel
//             duration and preferred travel experience.
//           </p>

//           <button
//             className="solo-primary-btn"
//             onClick={() => navigate("/ai-guide")}
//           >
//             Try AI Guide
//           </button>

//         </div>

//       </section>


//       {/* Responsible Travel Notice */}
//       <section className="solo-notice">

//         <div className="notice-icon">
//           ⚠️
//         </div>

//         <div>
//           <h3>Travel Information, Not a Safety Guarantee</h3>

//           <p>
//             BharatVerse provides destination and travel-suitability
//             information to help users make informed decisions.
//             Information may change, so travellers should verify
//             important details before travelling.
//           </p>
//         </div>

//       </section>

//     </section>
//   );
// }




















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import places from "../data/places";
// import "./SoloWomen.css";

// export default function SoloWomen() {
//   const navigate = useNavigate();

//   const [interests, setInterests] = useState([]);
//   const [budget, setBudget] = useState("all");
//   const [crowd, setCrowd] = useState("all");
//   const [showResults, setShowResults] = useState(false);

//   const interestOptions = [
//     "History",
//     "Architecture",
//     "Culture",
//     "Spirituality",
//     "Nature",
//     "Archaeology",
//     "Art & Crafts",
//     "Photography"
//   ];

//   const toggleInterest = (interest) => {
//     setInterests((prev) =>
//       prev.includes(interest)
//         ? prev.filter((item) => item !== interest)
//         : [...prev, interest]
//     );
//   };

//   const getScore = (place) => {
//     let score = 0;

//     // Interest match
//     if (interests.length === 0) {
//       score += 20;
//     } else {
//       const matchedInterests = place.planning.idealFor.filter((item) =>
//         interests.includes(item)
//       );

//       score += Math.min(
//         matchedInterests.length * 20,
//         40
//       );
//     }

//     // Budget match
//     if (
//       budget === "all" ||
//       place.planning.budgetCategory === budget
//     ) {
//       score += 20;
//     }

//     // Crowd preference
//     if (
//       crowd === "all" ||
//       place.planning.crowdLevel === crowd
//     ) {
//       score += 15;
//     }

//     // Solo women suitability
//     if (place.soloWomen.suitability === "Good") {
//       score += 25;
//     } else if (
//       place.soloWomen.suitability === "Moderate"
//     ) {
//       score += 15;
//     }

//     return score;
//   };

//   const recommendations = [...places]
//     .map((place) => ({
//       ...place,
//       recommendationScore: getScore(place)
//     }))
//     .sort(
//       (a, b) =>
//         b.recommendationScore - a.recommendationScore
//     );

//   const displayedPlaces = showResults
//     ? recommendations
//     : [];

//   return (
//     <div className="solo-women-page">

//       {/* HERO */}

//       <section className="solo-hero">

//         <div className="solo-hero-content">

//           <p className="solo-label">
//             BHARATVERSE WOMEN TRAVEL
//           </p>

//           <h1>
//             Explore India,
//             <br />
//             <span>Your Way.</span>
//           </h1>

//           <p>
//             Discover heritage destinations curated
//             for solo women travellers with your
//             interests, budget and travel preferences
//             in mind.
//           </p>

//         </div>

//       </section>


//       {/* PLANNER */}

//       <section className="solo-planner">

//         <div className="planner-header">

//           <p className="section-label">
//             PERSONALIZED DISCOVERY
//           </p>

//           <h2>
//             Plan your solo journey
//           </h2>

//           <p>
//             Tell us what you are looking for and
//             BharatVerse will recommend destinations
//             from our heritage discovery collection.
//           </p>

//         </div>


//         {/* INTERESTS */}

//         <div className="planner-section">

//           <h3>
//             What are you interested in?
//           </h3>

//           <div className="interest-grid">

//             {interestOptions.map((interest) => (

//               <button
//                 key={interest}
//                 type="button"
//                 className={
//                   interests.includes(interest)
//                     ? "interest-btn active"
//                     : "interest-btn"
//                 }
//                 onClick={() =>
//                   toggleInterest(interest)
//                 }
//               >
//                 <span>
//                   {interests.includes(interest)
//                     ? "✓"
//                     : "+"}
//                 </span>

//                 {interest}
//               </button>

//             ))}

//           </div>

//         </div>


//         {/* BUDGET */}

//         <div className="planner-section">

//           <h3>
//             What is your budget?
//           </h3>

//           <div className="option-row">

//             <button
//               type="button"
//               className={
//                 budget === "all"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setBudget("all")}
//             >
//               Any Budget
//             </button>

//             <button
//               type="button"
//               className={
//                 budget === "low"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setBudget("low")}
//             >
//               Budget Friendly
//             </button>

//             <button
//               type="button"
//               className={
//                 budget === "medium"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setBudget("medium")}
//             >
//               Moderate
//             </button>

//           </div>

//         </div>


//         {/* CROWD */}

//         <div className="planner-section">

//           <h3>
//             What crowd level do you prefer?
//           </h3>

//           <div className="option-row">

//             <button
//               type="button"
//               className={
//                 crowd === "all"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setCrowd("all")}
//             >
//               Any
//             </button>

//             <button
//               type="button"
//               className={
//                 crowd === "low"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setCrowd("low")}
//             >
//               Quiet
//             </button>

//             <button
//               type="button"
//               className={
//                 crowd === "medium"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setCrowd("medium")}
//             >
//               Moderate
//             </button>

//             <button
//               type="button"
//               className={
//                 crowd === "high"
//                   ? "option-btn active"
//                   : "option-btn"
//               }
//               onClick={() => setCrowd("high")}
//             >
//               Lively
//             </button>

//           </div>

//         </div>


//         {/* SEARCH */}

//         <button
//           type="button"
//           className="find-destinations-btn"
//           onClick={() => setShowResults(true)}
//         >
//           Find My Destinations
//         </button>

//       </section>


//       {/* RESULTS */}

//       {showResults && (

//         <section className="solo-results">

//           <div className="results-header">

//             <p className="section-label">
//               YOUR BHARATVERSE MATCHES
//             </p>

//             <h2>
//               Recommended destinations
//             </h2>

//             <p>
//               Based on your selected interests,
//               budget and preferred crowd level.
//             </p>

//           </div>


//           <div className="solo-cards">

//             {displayedPlaces.map((place) => (

//               <article
//                 className="solo-card"
//                 key={place.id}
//               >

//                 <div className="solo-card-image">

//                   <img
//                     src={place.image}
//                     alt={place.name}
//                   />

//                   <div className="score-badge">
//                     {place.recommendationScore}/100
//                   </div>

//                 </div>


//                 <div className="solo-card-content">

//                   <span className="city">
//                     {place.city}
//                   </span>

//                   <h3>
//                     {place.name}
//                   </h3>

//                   <p>
//                     {place.whyRecommended}
//                   </p>


//                   <div className="solo-info">

//                     <span>
//                       🚗 {place.soloWomen.transport}
//                     </span>

//                     <span>
//                       📶 {place.soloWomen.connectivity}
//                     </span>

//                     <span>
//                       👥 {place.soloWomen.suitability}
//                     </span>

//                   </div>


//                   <button
//                     type="button"
//                     className="view-place-btn"
//                     onClick={() =>
//                       navigate(
//                         `/place/${place.id}`
//                       )
//                     }
//                   >
//                     Explore Destination →
//                   </button>

//                 </div>

//               </article>

//             ))}

//           </div>

//         </section>

//       )}

//     </div>
//   );
// }






























// import React from "react";
// import { Link } from "react-router-dom";
// import places from "../data/places";
// import "./SoloWomen.css";

// export default function SoloWomen() {
//   const womenFriendlyPlaces = places.filter(
//     (place) => place.womenSafety
//   );

//   return (
//     <div className="solo-women-page">

//       {/* Hero Section */}
//       <section className="solo-women-hero">
//         <div className="hero-overlay">
//           <span className="hero-badge">BHARATVERSE SAFETY</span>

//           <h1>Solo Women Traveller</h1>

//           <p>
//             Discover India's hidden heritage with practical safety
//             and support information designed for solo women travellers.
//           </p>

//           <div className="hero-features">
//             <span>🛡️ Safety Insights</span>
//             <span>🚺 Women Facilities</span>
//             <span>🏥 Medical Support</span>
//             <span>🚨 Emergency Support</span>
//           </div>
//         </div>
//       </section>


//       {/* Introduction */}
//       <section className="women-intro">
//         <h2>Women Safety & Support</h2>

//         <p>
//           BharatVerse helps solo women travellers make more informed
//           travel decisions by showing destination-level safety and
//           support information.
//         </p>
//       </section>


//       {/* Destination Cards */}
//       <section className="women-destinations">

//         {womenFriendlyPlaces.map((place) => {
//           const safety = place.womenSafety;

//           return (
//             <article
//               className="women-place-card"
//               key={place.id}
//             >

//               {/* Image */}
//               <div className="women-place-image">

//                 <img
//                   src={place.image}
//                   alt={place.name}
//                 />

//                 <div className="safety-score">
//                   <span>🛡️</span>
//                   <strong>
//                     {safety.safetyScore}/100
//                   </strong>
//                   <small>Safety Score</small>
//                 </div>

//               </div>


//               {/* Content */}
//               <div className="women-place-content">

//                 <div className="place-heading">

//                   <div>
//                     <h2>{place.name}</h2>
//                     <p className="place-city">
//                       📍 {place.city}
//                     </p>
//                   </div>

//                   <span className="hidden-score">
//                     ⭐ {place.hiddenGemScore}
//                   </span>

//                 </div>


//                 <p className="place-description">
//                   {place.description}
//                 </p>


//                 {/* Safety & Support */}
//                 <div className="safety-section">

//                   <div className="section-title">
//                     <span>🛡️</span>
//                     <h3>Women Safety & Support</h3>
//                   </div>


//                   <div className="safety-grid">

//                     {/* Pink Toilets */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🚺</span>

//                       <div>
//                         <small>Pink Toilets</small>

//                         <strong
//                           className={
//                             safety.pinkToilets.available
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.pinkToilets.available
//                             ? `✓ Available${
//                                 safety.pinkToilets.count
//                                   ? ` (${safety.pinkToilets.count})`
//                                   : ""
//                               }`
//                             : "✕ Not Available"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Police */}
//                     <div className="safety-item">
//                       <span className="safety-icon">👮</span>

//                       <div>
//                         <small>Police Support</small>

//                         <strong
//                           className={
//                             safety.policeSupport.available
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.policeSupport.available
//                             ? `✓ ${safety.policeSupport.distance}`
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Medical */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🏥</span>

//                       <div>
//                         <small>Medical Support</small>

//                         <strong
//                           className={
//                             safety.medicalSupport.available
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.medicalSupport.available
//                             ? `✓ ${safety.medicalSupport.distance}`
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Transport */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🚕</span>

//                       <div>
//                         <small>Transport</small>

//                         <strong
//                           className={
//                             safety.transport.available
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.transport.available
//                             ? `✓ ${safety.transport.type}`
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Network */}
//                     <div className="safety-item">
//                       <span className="safety-icon">📱</span>

//                       <div>
//                         <small>Network</small>
//                         <strong>{safety.network}</strong>
//                       </div>
//                     </div>


//                     {/* Lighting */}
//                     <div className="safety-item">
//                       <span className="safety-icon">💡</span>

//                       <div>
//                         <small>Lighting</small>
//                         <strong>{safety.lighting}</strong>
//                       </div>
//                     </div>


//                     {/* Safe Stay */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🏨</span>

//                       <div>
//                         <small>Safe Stay</small>

//                         <strong
//                           className={
//                             safety.safeStay
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.safeStay
//                             ? "✓ Available"
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Sanitary Facilities */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🩸</span>

//                       <div>
//                         <small>Sanitary Facilities</small>

//                         <strong
//                           className={
//                             safety.sanitaryFacilities
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.sanitaryFacilities
//                             ? "✓ Available"
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>


//                     {/* Emergency Support */}
//                     <div className="safety-item">
//                       <span className="safety-icon">🚨</span>

//                       <div>
//                         <small>Emergency Support</small>

//                         <strong
//                           className={
//                             safety.emergencySupport
//                               ? "available"
//                               : "unavailable"
//                           }
//                         >
//                           {safety.emergencySupport
//                             ? "✓ Available"
//                             : "✕ Limited"}
//                         </strong>
//                       </div>
//                     </div>

//                   </div>

//                 </div>


//                 {/* Safety Tips */}
//                 <div className="safety-tips">

//                   <div className="tips-heading">
//                     <span>⚠️</span>
//                     <h3>Safety Tips</h3>
//                   </div>

//                   <ul>
//                     {safety.safetyTips.map(
//                       (tip, index) => (
//                         <li key={index}>
//                           {tip}
//                         </li>
//                       )
//                     )}
//                   </ul>

//                 </div>


//                 {/* Destination Information */}
//                 <div className="travel-info">

//                   <div>
//                     <small>Best Time</small>
//                     <strong>{place.bestTime}</strong>
//                   </div>

//                   <div>
//                     <small>Budget</small>
//                     <strong>
//                       {place.planning.estimatedBudget}
//                     </strong>
//                   </div>

//                   <div>
//                     <small>Crowd</small>
//                     <strong>
//                       {place.planning.crowdLevel}
//                     </strong>
//                   </div>

//                   <div>
//                     <small>Visit</small>
//                     <strong>
//                       {place.planning.visitDuration}
//                     </strong>
//                   </div>

//                 </div>


//                 {/* Actions */}
//                 <div className="women-actions">

//                   <Link
//                     to={`/place/${place.id}`}
//                     className="explore-button"
//                   >
//                     Explore Destination →
//                   </Link>

//                   <button
//                     className="emergency-button"
//                     type="button"
//                   >
//                     🚨 Emergency Info
//                   </button>

//                 </div>

//               </div>

//             </article>
//           );
//         })}

//       </section>


//       {/* Disclaimer */}
//       <section className="safety-disclaimer">

//         <div className="disclaimer-icon">
//           ⚠️
//         </div>

//         <div>
//           <h3>Safety Information</h3>

//           <p>
//             Safety information shown in this MVP is intended to
//             support travel planning. Facility availability and
//             local conditions should be verified before travel.
//             BharatVerse aims to integrate verified local and
//             official data in future versions.
//           </p>
//         </div>

//       </section>

//     </div>
//   );
// }














import React, { useState } from "react";
import { Link } from "react-router-dom";
import places from "../data/places";
import "./SoloWomen.css";

export default function SoloWomen() {
  const [selectedEmergency, setSelectedEmergency] = useState(null);

  const womenFriendlyPlaces = places.filter(
    (place) => place.womenSafety
  );

  const openEmergencyInfo = (place) => {
    setSelectedEmergency(place);
  };

  const closeEmergencyInfo = () => {
    setSelectedEmergency(null);
  };

  return (
    <div className="solo-women-page">

      {/* ================= HERO ================= */}
      <section className="solo-women-hero">
        <div className="hero-overlay">

          <span className="hero-badge">
            BHARATVERSE SAFETY
          </span>

          <h1>Solo Women Traveller</h1>

          <p>
            Discover India's hidden heritage with practical safety
            and support information designed for solo women travellers.
          </p>

          <div className="hero-features">
            <span>🛡️ Safety Insights</span>
            <span>🚺 Women Facilities</span>
            <span>🏥 Medical Support</span>
            <span>🚨 Emergency Support</span>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="women-intro">

        <h2>Women Safety & Support</h2>

        <p>
          BharatVerse helps solo women travellers make more informed
          travel decisions by showing destination-level safety and
          support information.
        </p>

      </section>


      {/* ================= DESTINATIONS ================= */}
      <section className="women-destinations">

        {womenFriendlyPlaces.map((place) => {

          const safety = place.womenSafety;

          return (
            <article
              className="women-place-card"
              key={place.id}
            >

              {/* ================= IMAGE ================= */}
              <div className="women-place-image">

                <img
                  src={place.image}
                  alt={place.name}
                />

                <div className="safety-score">

                  <span>🛡️</span>

                  <strong>
                    {safety.safetyScore}/100
                  </strong>

                  <small>
                    Safety Score
                  </small>

                </div>

              </div>


              {/* ================= CONTENT ================= */}
              <div className="women-place-content">

                {/* PLACE HEADING */}
                <div className="place-heading">

                  <div>

                    <h2>
                      {place.name}
                    </h2>

                    <p className="place-city">
                      📍 {place.city}
                    </p>

                  </div>

                  <span className="hidden-score">
                    ⭐ {place.hiddenGemScore}
                  </span>

                </div>


                {/* DESCRIPTION */}
                <p className="place-description">
                  {place.description}
                </p>


                {/* ================= SAFETY ================= */}
                <div className="safety-section">

                  <div className="section-title">

                    <span>🛡️</span>

                    <h3>
                      Women Safety & Support
                    </h3>

                  </div>


                  <div className="safety-grid">

                    {/* PINK TOILETS */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🚺
                      </span>

                      <div>

                        <small>
                          Pink Toilets
                        </small>

                        <strong
                          className={
                            safety.pinkToilets.available
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.pinkToilets.available
                            ? `✓ Available${
                                safety.pinkToilets.count
                                  ? ` (${safety.pinkToilets.count})`
                                  : ""
                              }`
                            : "✕ Not Available"}
                        </strong>

                      </div>

                    </div>


                    {/* POLICE */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        👮
                      </span>

                      <div>

                        <small>
                          Police Support
                        </small>

                        <strong
                          className={
                            safety.policeSupport.available
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.policeSupport.available
                            ? `✓ ${safety.policeSupport.distance}`
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>


                    {/* MEDICAL */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🏥
                      </span>

                      <div>

                        <small>
                          Medical Support
                        </small>

                        <strong
                          className={
                            safety.medicalSupport.available
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.medicalSupport.available
                            ? `✓ ${safety.medicalSupport.distance}`
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>


                    {/* TRANSPORT */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🚕
                      </span>

                      <div>

                        <small>
                          Transport
                        </small>

                        <strong
                          className={
                            safety.transport.available
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.transport.available
                            ? `✓ ${safety.transport.type}`
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>


                    {/* NETWORK */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        📱
                      </span>

                      <div>

                        <small>
                          Network
                        </small>

                        <strong>
                          {safety.network}
                        </strong>

                      </div>

                    </div>


                    {/* LIGHTING */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        💡
                      </span>

                      <div>

                        <small>
                          Lighting
                        </small>

                        <strong>
                          {safety.lighting}
                        </strong>

                      </div>

                    </div>


                    {/* SAFE STAY */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🏨
                      </span>

                      <div>

                        <small>
                          Safe Stay
                        </small>

                        <strong
                          className={
                            safety.safeStay
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.safeStay
                            ? "✓ Available"
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>


                    {/* SANITARY FACILITIES */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🩸
                      </span>

                      <div>

                        <small>
                          Sanitary Facilities
                        </small>

                        <strong
                          className={
                            safety.sanitaryFacilities
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.sanitaryFacilities
                            ? "✓ Available"
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>


                    {/* EMERGENCY SUPPORT */}
                    <div className="safety-item">

                      <span className="safety-icon">
                        🚨
                      </span>

                      <div>

                        <small>
                          Emergency Support
                        </small>

                        <strong
                          className={
                            safety.emergencySupport
                              ? "available"
                              : "unavailable"
                          }
                        >
                          {safety.emergencySupport
                            ? "✓ Available"
                            : "✕ Limited"}
                        </strong>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ================= SAFETY TIPS ================= */}
                <div className="safety-tips">

                  <div className="tips-heading">

                    <span>⚠️</span>

                    <h3>
                      Safety Tips
                    </h3>

                  </div>

                  <ul>

                    {safety.safetyTips.map(
                      (tip, index) => (

                        <li key={index}>
                          {tip}
                        </li>

                      )
                    )}

                  </ul>

                </div>


                {/* ================= TRAVEL INFO ================= */}
                <div className="travel-info">

                  <div>

                    <small>
                      Best Time
                    </small>

                    <strong>
                      {place.bestTime}
                    </strong>

                  </div>


                  <div>

                    <small>
                      Budget
                    </small>

                    <strong>
                      {place.planning.estimatedBudget}
                    </strong>

                  </div>


                  <div>

                    <small>
                      Crowd
                    </small>

                    <strong>
                      {place.planning.crowdLevel}
                    </strong>

                  </div>


                  <div>

                    <small>
                      Visit
                    </small>

                    <strong>
                      {place.planning.visitDuration}
                    </strong>

                  </div>

                </div>


                {/* ================= ACTIONS ================= */}
                <div className="women-actions">

                  <Link
                    to={`/place/${place.id}`}
                    className="explore-button"
                  >
                    Explore Destination →
                  </Link>


                  <button
                    className="emergency-button"
                    type="button"
                    onClick={() =>
                      openEmergencyInfo(place)
                    }
                  >
                    🚨 Emergency Info
                  </button>

                </div>

              </div>

            </article>
          );
        })}

      </section>


      {/* ================= DISCLAIMER ================= */}
      <section className="safety-disclaimer">

        <div className="disclaimer-icon">
          ⚠️
        </div>

        <div>

          <h3>
            Safety Information
          </h3>

          <p>
            Safety information shown in this MVP is intended to
            support travel planning. Facility availability and
            local conditions should be verified before travel.
            BharatVerse aims to integrate verified local and
            official data in future versions.
          </p>

        </div>

      </section>


      {/* =====================================================
          EMERGENCY MODAL
      ===================================================== */}

      {selectedEmergency && (

        <div
          className="emergency-modal-overlay"
          onClick={closeEmergencyInfo}
        >

          <div
            className="emergency-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* HEADER */}
            <div className="emergency-modal-header">

              <div>

                <span className="emergency-badge">
                  🚨 EMERGENCY SUPPORT
                </span>

                <h2>
                  Need Help?
                </h2>

                <p>
                  {selectedEmergency.name},{" "}
                  {selectedEmergency.city}
                </p>

              </div>

              <button
                className="emergency-close"
                onClick={closeEmergencyInfo}
                type="button"
              >
                ✕
              </button>

            </div>


            {/* WARNING */}
            <div className="emergency-warning">

              <strong>
                ⚠️ Emergency situation?
              </strong>

              <p>
                Use the appropriate emergency service
                below. For immediate danger, contact
                emergency services first.
              </p>

            </div>


            {/* EMERGENCY OPTIONS */}
            <div className="emergency-options">

              {/* INDIA EMERGENCY */}
              <a
                href="tel:112"
                className="emergency-option emergency-primary"
              >

                <span className="option-icon">
                  🚨
                </span>

                <div>

                  <strong>
                    Emergency Services
                  </strong>

                  <small>
                    Call 112
                  </small>

                </div>

              </a>


              {/* POLICE */}
              <a
                href="tel:100"
                className="emergency-option"
              >

                <span className="option-icon">
                  👮
                </span>

                <div>

                  <strong>
                    Police
                  </strong>

                  <small>
                    Call 100
                  </small>

                </div>

              </a>


              {/* AMBULANCE */}
              <a
                href="tel:108"
                className="emergency-option"
              >

                <span className="option-icon">
                  🚑
                </span>

                <div>

                  <strong>
                    Ambulance
                  </strong>

                  <small>
                    Call 108
                  </small>

                </div>

              </a>


              {/* WOMEN SUPPORT */}
              <a
                href="tel:181"
                className="emergency-option"
              >

                <span className="option-icon">
                  👩
                </span>

                <div>

                  <strong>
                    Women Support
                  </strong>

                  <small>
                    Call 181
                  </small>

                </div>

              </a>

            </div>


            {/* LOCAL SUPPORT */}
            <div className="local-emergency-info">

              <h3>
                📍 Destination Support
              </h3>

              <div className="local-support-grid">

                <div>
                  <span>👮</span>
                  <strong>Police</strong>
                  <small>
                    {selectedEmergency.womenSafety
                      .policeSupport.distance}
                  </small>
                </div>

                <div>
                  <span>🏥</span>
                  <strong>Medical</strong>
                  <small>
                    {selectedEmergency.womenSafety
                      .medicalSupport.distance}
                  </small>
                </div>

                <div>
                  <span>🚕</span>
                  <strong>Transport</strong>
                  <small>
                    {selectedEmergency.womenSafety
                      .transport.type}
                  </small>
                </div>

                <div>
                  <span>📱</span>
                  <strong>Network</strong>
                  <small>
                    {selectedEmergency.womenSafety.network}
                  </small>
                </div>

              </div>

            </div>


            {/* DISCLAIMER */}
            <div className="emergency-modal-disclaimer">

              <span>
                ℹ️
              </span>

              <p>
                Emergency numbers are provided as quick
                access information for the MVP. Always
                verify local emergency information and
                follow official guidance.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}