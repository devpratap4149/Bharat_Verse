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