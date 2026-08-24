// import { useState } from "react";
// import "./AIGuide.css";

// const suggestions = [
//   "Hidden places near Varanasi",
//   "Tell me about Parasnath",
//   "Best heritage places in Jharkhand",
//   "Suggest an underrated destination",
// ];

// const responses = {
//   "Hidden places near Varanasi":
//     "If you want to go beyond the usual tourist spots, explore Ramnagar Fort, Man Mandir Observatory and the lesser-known heritage areas around the Ganges.",

//   "Tell me about Parasnath":
//     "Parasnath Hills in Jharkhand are known for their spiritual significance, forests and scenic landscapes. The region offers a very different experience from India's usual tourist destinations.",

//   "Best heritage places in Jharkhand":
//     "You can explore Parasnath, Maluti temples, Netarhat and other lesser-known cultural and natural destinations across Jharkhand.",

//   "Suggest an underrated destination":
//     "Try Parasnath in Jharkhand. It combines heritage, spirituality and natural landscapes while remaining less explored than India's mainstream tourist destinations.",
// };

// export default function AIGuide() {

//   /* =====================================================
//      AI CHAT STATE
//   ===================================================== */

//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);


//   /* =====================================================
//      PERSONALIZATION STATE
//   ===================================================== */

//   const [interests, setInterests] = useState([]);

//   const [budget, setBudget] = useState("Any budget");

//   const [availableTime, setAvailableTime] =
//     useState("Any duration");

//   const [crowdPreference, setCrowdPreference] =
//     useState("Doesn't matter");

//   const [seniorFriendly, setSeniorFriendly] =
//     useState(false);

//   const [wheelchairAccess, setWheelchairAccess] =
//     useState(false);


//   /* =====================================================
//      INTEREST HANDLER
//   ===================================================== */

//   const handleInterestChange = (interest) => {

//     setInterests((prev) => {

//       if (prev.includes(interest)) {

//         return prev.filter(
//           (item) => item !== interest
//         );

//       }

//       return [...prev, interest];

//     });

//   };


//   /* =====================================================
//      AI QUESTION HANDLER
//   ===================================================== */

//   const askQuestion = (question) => {

//     if (!question.trim()) return;

//     const lowerQuestion =
//       question.toLowerCase().trim();

//     let answer;


//     /* EXACT PREDEFINED QUESTIONS */

//     if (responses[question]) {

//       answer = responses[question];

//     }


//     /* VARANASI */

//     else if (
//       lowerQuestion.includes("varanasi") ||
//       lowerQuestion.includes("banaras") ||
//       lowerQuestion.includes("kashi")
//     ) {

//       answer =
//         "Beyond the famous ghats, Varanasi has many hidden experiences worth exploring. You can visit Ramnagar Fort, Man Mandir Observatory and explore the city's traditional weaving communities. If you want a quieter experience, explore the lesser-known heritage areas around the Ganges.";

//     }


//     /* PARASNATH / JHARKHAND */

//     else if (
//       lowerQuestion.includes("parasnath") ||
//       lowerQuestion.includes("jharkhand")
//     ) {

//       answer =
//         "Parasnath Hills are one of Jharkhand's most significant destinations. The region combines spiritual heritage, forests and scenic landscapes. It is a great choice if you want to experience a side of India that receives far less attention than mainstream tourist destinations.";

//     }


//     /* LUCKNOW */

//     else if (
//       lowerQuestion.includes("lucknow")
//     ) {

//       answer =
//         "Lucknow offers much more than its famous monuments. Explore its Nawabi architecture, Chikankari embroidery and traditional food culture. Bara Imambara, Rumi Darwaza and the city's artisan communities are excellent starting points.";

//     }


//     /* JAIPUR */

//     else if (
//       lowerQuestion.includes("jaipur")
//     ) {

//       answer =
//         "Beyond the popular landmarks, Jaipur has a strong craft culture. Traditional blue pottery, block printing and local artisan workshops offer a different way to experience Rajasthan's heritage.";

//     }


//     /* ARTISANS / CRAFTS */

//     else if (
//       lowerQuestion.includes("artisan") ||
//       lowerQuestion.includes("craft") ||
//       lowerQuestion.includes("handicraft") ||
//       lowerQuestion.includes("weaving")
//     ) {

//       answer =
//         "India's cultural heritage lives strongly through its artisans. BharatVerse currently highlights crafts such as Banarasi silk weaving, Chikankari embroidery, Madhubani painting, wood carving, blue pottery and brass craft.";

//     }


//     /* FORTS */

//     else if (
//       lowerQuestion.includes("fort")
//     ) {

//       answer =
//         "If you want forts beyond the usual tourist circuit, start with Ramnagar Fort in Varanasi. It offers a different experience from India's more famous royal forts and is closely connected with the history of the Kashi region.";

//     }


//     /* TEMPLES */

//     else if (
//       lowerQuestion.includes("temple") ||
//       lowerQuestion.includes("temples")
//     ) {

//       answer =
//         "India has thousands of remarkable temples beyond the most famous pilgrimage sites. For a less conventional heritage experience, explore the temples around Madhya Pradesh, Jharkhand and Odisha, where architecture and local traditions often remain closely connected.";

//     }


//     /* HIDDEN / UNDERRATED */

//     else if (
//       lowerQuestion.includes("hidden") ||
//       lowerQuestion.includes("underrated") ||
//       lowerQuestion.includes("less known") ||
//       lowerQuestion.includes("offbeat")
//     ) {

//       answer =
//         "For an underrated experience, consider Parasnath in Jharkhand, Ramnagar Fort in Varanasi or lesser-known heritage sites around Odisha and Madhya Pradesh. These destinations offer history and culture without the crowds of India's most famous tourist spots.";

//     }


//     /* GENERAL FALLBACK */

//     else {

//       answer =
//         "I can help you discover hidden places, heritage sites, traditional crafts and local cultural experiences across India. Try asking me about a city, fort, temple, artisan, craft or an underrated destination.";

//     }


//     /* ADD CHAT MESSAGES */

//     setMessages((prev) => [

//       ...prev,

//       {
//         type: "user",
//         text: question,
//       },

//       {
//         type: "ai",
//         text: answer,
//       },

//     ]);

//     setInput("");

//   };


//   /* =====================================================
//      FORM SUBMIT
//   ===================================================== */

//   const handleSubmit = (event) => {

//     event.preventDefault();

//     askQuestion(input);

//   };


//   /* =====================================================
//      PERSONALIZED RECOMMENDATION
//   ===================================================== */

//   const recommendPlace = () => {

//     let recommendation =
//       "Based on your preferences, explore Parasnath Hills in Jharkhand. It offers heritage, spirituality and natural landscapes.";

//     if (
//       interests.includes("Nature")
//     ) {

//       recommendation =
//         "Based on your interest in Nature, consider Parasnath Hills in Jharkhand for its forests, hills and scenic surroundings.";

//     }

//     else if (
//       interests.includes("Architecture")
//     ) {

//       recommendation =
//         "Based on your interest in Architecture, explore Ramnagar Fort in Varanasi for its historic architecture and connection with the Kashi region.";

//     }

//     else if (
//       interests.includes("Art & Crafts")
//     ) {

//       recommendation =
//         "Based on your interest in Art & Crafts, explore Varanasi's traditional weaving communities and Banarasi silk craftsmanship.";

//     }

//     else if (
//       interests.includes("Spirituality")
//     ) {

//       recommendation =
//         "Based on your interest in Spirituality, Parasnath Hills in Jharkhand offer a strong combination of spiritual heritage and natural surroundings.";

//     }

//     else if (
//       interests.includes("History")
//     ) {

//       recommendation =
//         "Based on your interest in History, Ramnagar Fort in Varanasi is a great place to explore regional history and heritage.";

//     }


//     setMessages((prev) => [

//       ...prev,

//       {
//         type: "user",
//         text: "Recommend a place for me",
//       },

//       {
//         type: "ai",
//         text: recommendation,
//       },

//     ]);

//   };


//   return (

//     <main className="ai-guide-page">


//       {/* =================================================
//           HERO
//       ================================================= */}

//       <section className="ai-guide-hero">

//         <div className="ai-guide-badge">
//           BHARATVERSE AI
//         </div>

//         <h1>
//           Your Guide to
//           <span> Hidden India.</span>
//         </h1>

//         <p>
//           Ask anything about India's hidden heritage,
//           forgotten stories, local crafts and underrated
//           destinations.
//         </p>

//       </section>


//       {/* =================================================
//           PERSONALIZATION
//       ================================================= */}

//       <section className="personalization">

//         <div className="personalization-label">
//           PERSONALIZE YOUR EXPERIENCE
//         </div>


//         {/* INTERESTS */}

//         <div className="interests-section">

//           <h2>
//             What are you interested in?
//           </h2>

//           <div className="interests-list">


//             <label className="interest-item">

//               <input
//                 type="checkbox"
//                 checked={interests.includes("History")}
//                 onChange={() =>
//                   handleInterestChange("History")
//                 }
//               />

//               <span>History</span>

//             </label>


//             <label className="interest-item">

//               <input
//                 type="checkbox"
//                 checked={interests.includes("Architecture")}
//                 onChange={() =>
//                   handleInterestChange("Architecture")
//                 }
//               />

//               <span>Architecture</span>

//             </label>


//             <label className="interest-item">

//               <input
//                 type="checkbox"
//                 checked={interests.includes("Spirituality")}
//                 onChange={() =>
//                   handleInterestChange("Spirituality")
//                 }
//               />

//               <span>Spirituality</span>

//             </label>


//             <label className="interest-item">

//               <input
//                 type="checkbox"
//                 checked={interests.includes("Nature")}
//                 onChange={() =>
//                   handleInterestChange("Nature")
//                 }
//               />

//               <span>Nature</span>

//             </label>


//             <label className="interest-item">

//               <input
//                 type="checkbox"
//                 checked={interests.includes("Art & Crafts")}
//                 onChange={() =>
//                   handleInterestChange("Art & Crafts")
//                 }
//               />

//               <span>Art & Crafts</span>

//             </label>

//           </div>

//         </div>


//         {/* =================================================
//             BUDGET + TIME + CROWD
//         ================================================= */}

//         <div className="preference-row">


//           {/* BUDGET */}

//           <div className="preference-item">

//             <h3>
//               Budget
//             </h3>

//             <select
//               value={budget}
//               onChange={(event) =>
//                 setBudget(event.target.value)
//               }
//             >

//               <option>
//                 Any budget
//               </option>

//               <option>
//                 Budget
//               </option>

//               <option>
//                 Moderate
//               </option>

//               <option>
//                 Premium
//               </option>

//             </select>

//           </div>


//           {/* AVAILABLE TIME */}

//           <div className="preference-item">

//             <h3>
//               Available time
//             </h3>

//             <select
//               value={availableTime}
//               onChange={(event) =>
//                 setAvailableTime(event.target.value)
//               }
//             >

//               <option>
//                 Any duration
//               </option>

//               <option>
//                 Half day
//               </option>

//               <option>
//                 1 day
//               </option>

//               <option>
//                 2–3 days
//               </option>

//               <option>
//                 4+ days
//               </option>

//             </select>

//           </div>


//           {/* CROWD PREFERENCE */}

//           <div className="preference-item">

//             <h3>
//               Crowd preference
//             </h3>

//             <select
//               value={crowdPreference}
//               onChange={(event) =>
//                 setCrowdPreference(event.target.value)
//               }
//             >

//               <option>
//                 Doesn't matter
//               </option>

//               <option>
//                 Low crowd
//               </option>

//               <option>
//                 Moderate crowd
//               </option>

//               <option>
//                 Popular places
//               </option>

//             </select>

//           </div>

//         </div>


//         {/* =================================================
//             ACCESSIBILITY
//         ================================================= */}

//         <div className="accessibility-section">

//           <h2>
//             Accessibility
//           </h2>

//           <div className="accessibility-list">


//             <label className="accessibility-item">

//               <input
//                 type="checkbox"
//                 checked={seniorFriendly}
//                 onChange={(event) =>
//                   setSeniorFriendly(event.target.checked)
//                 }
//               />

//               <span>
//                 Senior-citizen friendly
//               </span>

//             </label>


//             <label className="accessibility-item">

//               <input
//                 type="checkbox"
//                 checked={wheelchairAccess}
//                 onChange={(event) =>
//                   setWheelchairAccess(event.target.checked)
//                 }
//               />

//               <span>
//                 Wheelchair accessibility
//               </span>

//             </label>

//           </div>

//         </div>


//         {/* RECOMMEND */}

//         <button
//           className="recommend-button"
//           type="button"
//           onClick={recommendPlace}
//         >
//           ✦ Recommend a Place
//         </button>

//       </section>


//       {/* =================================================
//           MAIN CONTAINER
//       ================================================= */}

//       <section className="ai-guide-container">


//         {/* SUGGESTIONS */}

//         <div className="suggestions">

//           <p>
//             Try asking
//           </p>

//           <div className="suggestion-list">

//             {suggestions.map((suggestion) => (

//               <button
//                 key={suggestion}
//                 type="button"
//                 onClick={() =>
//                   askQuestion(suggestion)
//                 }
//               >
//                 {suggestion}
//               </button>

//             ))}

//           </div>

//         </div>


//         {/* =================================================
//             CHAT
//         ================================================= */}

//         <div className="ai-chat">


//           {messages.length === 0 ? (

//             <div className="empty-chat">

//               <div className="ai-icon">
//                 ✦
//               </div>

//               <h2>
//                 Where should we explore?
//               </h2>

//               <p>
//                 Ask BharatVerse about a place,
//                 culture, craft or hidden story.
//               </p>

//             </div>

//           ) : (

//             <div className="messages">

//               {messages.map((message, index) => (

//                 <div
//                   key={index}
//                   className={`message ${message.type}`}
//                 >

//                   {message.type === "ai" && (

//                     <span className="message-label">
//                       BHARATVERSE AI
//                     </span>

//                   )}

//                   <p>
//                     {message.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           )}


//           {/* =================================================
//               INPUT
//           ================================================= */}

//           <form
//             className="ai-input-area"
//             onSubmit={handleSubmit}
//           >

//             <input
//               type="text"
//               value={input}
//               onChange={(event) =>
//                 setInput(event.target.value)
//               }
//               placeholder="Ask about a hidden place, culture or craft..."
//             />

//             <button type="submit">
//               Ask →
//             </button>

//           </form>

//         </div>

//       </section>

//     </main>

//   );

// }





// import { useState } from "react";
// import "./AIGuide.css";
// import places from "../data/places";

// const suggestions = [
//   "Hidden places near Varanasi",
//   "Tell me about Parasnath",
//   "Best heritage places in Jharkhand",
//   "Suggest an underrated destination",
// ];

// const responses = {
//   "Hidden places near Varanasi":
//     "If you want to go beyond the usual tourist spots, explore Ramnagar Fort, Man Mandir Observatory and the lesser-known heritage areas around the Ganges.",

//   "Tell me about Parasnath":
//     "Parasnath Hills in Jharkhand are known for their spiritual significance, forests and scenic landscapes. The region offers a very different experience from India's usual tourist destinations.",

//   "Best heritage places in Jharkhand":
//     "You can explore Parasnath, Maluti temples, Netarhat and other lesser-known cultural and natural destinations across Jharkhand.",

//   "Suggest an underrated destination":
//     "Try Parasnath in Jharkhand. It combines heritage, spirituality and natural landscapes while remaining less explored than India's mainstream tourist destinations.",
// };

// export default function AIGuide() {
//   /* =====================================================
//      AI CHAT STATE
//   ===================================================== */

//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   /* =====================================================
//      PERSONALIZATION STATE
//   ===================================================== */

//   const [interests, setInterests] = useState([]);

//   const [budget, setBudget] = useState("Any budget");

//   const [availableTime, setAvailableTime] =
//     useState("Any duration");

//   const [crowdPreference, setCrowdPreference] =
//     useState("Doesn't matter");

//   const [seniorFriendly, setSeniorFriendly] =
//     useState(false);

//   const [wheelchairAccess, setWheelchairAccess] =
//     useState(false);

//   /* =====================================================
//      INTEREST HANDLER
//   ===================================================== */

//   const handleInterestChange = (interest) => {
//     setInterests((prev) => {
//       if (prev.includes(interest)) {
//         return prev.filter((item) => item !== interest);
//       }

//       return [...prev, interest];
//     });
//   };

//   /* =====================================================
//      AI QUESTION HANDLER
//   ===================================================== */

//   const askQuestion = (question) => {
//     if (!question.trim()) return;

//     const lowerQuestion = question.toLowerCase().trim();

//     let answer;

//     /* EXACT PREDEFINED QUESTIONS */

//     if (responses[question]) {
//       answer = responses[question];
//     }

//     /* VARANASI */

//     else if (
//       lowerQuestion.includes("varanasi") ||
//       lowerQuestion.includes("banaras") ||
//       lowerQuestion.includes("kashi")
//     ) {
//       answer =
//         "Beyond the famous ghats, Varanasi has many hidden experiences worth exploring. You can visit Ramnagar Fort, Man Mandir Observatory and explore the city's traditional weaving communities. If you want a quieter experience, explore the lesser-known heritage areas around the Ganges.";
//     }

//     /* PARASNATH / JHARKHAND */

//     else if (
//       lowerQuestion.includes("parasnath") ||
//       lowerQuestion.includes("jharkhand")
//     ) {
//       answer =
//         "Parasnath Hills are one of Jharkhand's most significant destinations. The region combines spiritual heritage, forests and scenic landscapes. It is a great choice if you want to experience a side of India that receives far less attention than mainstream tourist destinations.";
//     }

//     /* LUCKNOW */

//     else if (lowerQuestion.includes("lucknow")) {
//       answer =
//         "Lucknow offers much more than its famous monuments. Explore its Nawabi architecture, Chikankari embroidery and traditional food culture. Bara Imambara, Rumi Darwaza and the city's artisan communities are excellent starting points.";
//     }

//     /* JAIPUR */

//     else if (lowerQuestion.includes("jaipur")) {
//       answer =
//         "Beyond the popular landmarks, Jaipur has a strong craft culture. Traditional blue pottery, block printing and local artisan workshops offer a different way to experience Rajasthan's heritage.";
//     }

//     /* ARTISANS / CRAFTS */

//     else if (
//       lowerQuestion.includes("artisan") ||
//       lowerQuestion.includes("craft") ||
//       lowerQuestion.includes("handicraft") ||
//       lowerQuestion.includes("weaving")
//     ) {
//       answer =
//         "India's cultural heritage lives strongly through its artisans. BharatVerse currently highlights crafts such as Banarasi silk weaving, Chikankari embroidery, Madhubani painting, wood carving, blue pottery and brass craft.";
//     }

//     /* FORTS */

//     else if (lowerQuestion.includes("fort")) {
//       answer =
//         "If you want forts beyond the usual tourist circuit, start with Ramnagar Fort in Varanasi. It offers a different experience from India's more famous royal forts and is closely connected with the history of the Kashi region.";
//     }

//     /* TEMPLES */

//     else if (
//       lowerQuestion.includes("temple") ||
//       lowerQuestion.includes("temples")
//     ) {
//       answer =
//         "India has thousands of remarkable temples beyond the most famous pilgrimage sites. For a less conventional heritage experience, explore the temples around Madhya Pradesh, Jharkhand and Odisha, where architecture and local traditions often remain closely connected.";
//     }

//     /* HIDDEN / UNDERRATED */

//     else if (
//       lowerQuestion.includes("hidden") ||
//       lowerQuestion.includes("underrated") ||
//       lowerQuestion.includes("less known") ||
//       lowerQuestion.includes("offbeat")
//     ) {
//       answer =
//         "For an underrated experience, consider Parasnath in Jharkhand, Ramnagar Fort in Varanasi or lesser-known heritage sites around Odisha and Madhya Pradesh. These destinations offer history and culture without the crowds of India's most famous tourist spots.";
//     }

//     /* GENERAL FALLBACK */

//     else {
//       answer =
//         "I can help you discover hidden places, heritage sites, traditional crafts and local cultural experiences across India. Try asking me about a city, fort, temple, artisan, craft or an underrated destination.";
//     }

//     setMessages((prev) => [
//       ...prev,

//       {
//         type: "user",
//         text: question,
//       },

//       {
//         type: "ai",
//         text: answer,
//       },
//     ]);

//     setInput("");
//   };

//   /* =====================================================
//      FORM SUBMIT
//   ===================================================== */

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     askQuestion(input);
//   };

//   /* =====================================================
//      HELPER FUNCTIONS FOR RECOMMENDATION
//   ===================================================== */

//   const getBudgetScore = (userBudget, place) => {
//     if (userBudget === "Any budget") {
//       return 1;
//     }

//     const category = place.planning?.budgetCategory;

//     if (!category) {
//       return 0.5;
//     }

//     if (userBudget === "Budget") {
//       return category === "low"
//         ? 1
//         : category === "medium"
//         ? 0.5
//         : 0;
//     }

//     if (userBudget === "Moderate") {
//       return category === "medium"
//         ? 1
//         : category === "low"
//         ? 0.8
//         : 0.4;
//     }

//     if (userBudget === "Premium") {
//       return category === "high"
//         ? 1
//         : category === "medium"
//         ? 0.8
//         : 0.5;
//     }

//     return 0;
//   };

//   const getTimeScore = (userTime, place) => {
//     if (userTime === "Any duration") {
//       return 1;
//     }

//     const duration =
//       place.planning?.visitDuration?.toLowerCase() || "";

//     if (userTime === "Half day") {
//       return duration.includes("half-day") ? 1 : 0.4;
//     }

//     if (userTime === "1 day") {
//       if (duration.includes("half-day")) return 1;
//       if (duration.includes("1-day")) return 1;
//       return 0.4;
//     }

//     if (userTime === "2–3 days") {
//       if (duration.includes("2+ days")) return 1;
//       if (duration.includes("1-day")) return 0.8;
//       if (duration.includes("half-day")) return 0.6;
//       return 0.5;
//     }

//     if (userTime === "4+ days") {
//       return 1;
//     }

//     return 0;
//   };

//   const getCrowdScore = (userCrowd, place) => {
//     if (userCrowd === "Doesn't matter") {
//       return 1;
//     }

//     const crowd =
//       place.planning?.crowdLevel?.toLowerCase();

//     if (!crowd) {
//       return 0.5;
//     }

//     if (userCrowd === "Low crowd") {
//       return crowd === "low"
//         ? 1
//         : crowd === "medium"
//         ? 0.5
//         : 0;
//     }

//     if (userCrowd === "Moderate crowd") {
//       return crowd === "medium"
//         ? 1
//         : crowd === "low"
//         ? 0.8
//         : 0.4;
//     }

//     if (userCrowd === "Popular places") {
//       return crowd === "high"
//         ? 1
//         : crowd === "medium"
//         ? 0.7
//         : 0.4;
//     }

//     return 0;
//   };

//   const getInterestScore = (selectedInterests, place) => {
//     if (selectedInterests.length === 0) {
//       return 1;
//     }

//     const placeInterests =
//       place.planning?.idealFor || [];

//     const matches = selectedInterests.filter((interest) =>
//       placeInterests.some(
//         (placeInterest) =>
//           placeInterest.toLowerCase() ===
//           interest.toLowerCase()
//       )
//     );

//     return matches.length / selectedInterests.length;
//   };

//   const getAccessibilityScore = (place) => {
//     if (
//       !seniorFriendly &&
//       !wheelchairAccess
//     ) {
//       return 1;
//     }

//     const accessibility =
//       place.accessibility || {};

//     let score = 1;

//     if (seniorFriendly) {
//       score *= accessibility.seniorFriendly ? 1 : 0;
//     }

//     if (wheelchairAccess) {
//       score *= accessibility.wheelchairAccessible
//         ? 1
//         : 0;
//     }

//     return score;
//   };

//   /* =====================================================
//      GENERATE EXPLANATION
//   ===================================================== */

//   const getMatchReasons = (place) => {
//     const reasons = [];

//     if (
//       budget !== "Any budget" &&
//       getBudgetScore(budget, place) >= 0.8
//     ) {
//       reasons.push("fits your budget preference");
//     }

//     if (
//       availableTime !== "Any duration" &&
//       getTimeScore(availableTime, place) >= 0.8
//     ) {
//       reasons.push("fits your available time");
//     }

//     if (
//       crowdPreference !== "Doesn't matter" &&
//       getCrowdScore(crowdPreference, place) >= 0.8
//     ) {
//       reasons.push("matches your crowd preference");
//     }

//     if (
//       interests.length > 0 &&
//       getInterestScore(interests, place) > 0
//     ) {
//       reasons.push("matches your interests");
//     }

//     if (seniorFriendly && place.accessibility?.seniorFriendly) {
//       reasons.push("is senior-citizen friendly");
//     }

//     if (
//       wheelchairAccess &&
//       place.accessibility?.wheelchairAccessible
//     ) {
//       reasons.push("supports wheelchair accessibility");
//     }

//     return reasons;
//   };

//   /* =====================================================
//      PERSONALIZED RECOMMENDATION ENGINE
//   ===================================================== */

//   const recommendPlace = () => {
//     let availablePlaces = [...places];

//     /* ACCESSIBILITY FILTER */

//     if (seniorFriendly) {
//       availablePlaces = availablePlaces.filter(
//         (place) =>
//           place.accessibility?.seniorFriendly === true
//       );
//     }

//     if (wheelchairAccess) {
//       availablePlaces = availablePlaces.filter(
//         (place) =>
//           place.accessibility?.wheelchairAccessible === true
//       );
//     }

//     /* SCORE EVERY DESTINATION */

//     const scoredPlaces = availablePlaces.map((place) => {
//       const interestScore =
//         getInterestScore(interests, place);

//       const budgetScore =
//         getBudgetScore(budget, place);

//       const timeScore =
//         getTimeScore(availableTime, place);

//       const crowdScore =
//         getCrowdScore(crowdPreference, place);

//       const accessibilityScore =
//         getAccessibilityScore(place);

//       /*
//         Recommendation weights:

//         Interest       = 40%
//         Budget         = 25%
//         Available Time = 20%
//         Crowd           = 15%
//       */

//       const finalScore =
//         interestScore * 40 +
//         budgetScore * 25 +
//         timeScore * 20 +
//         crowdScore * 15;

//       return {
//         ...place,
//         matchScore: Math.round(finalScore),
//         accessibilityScore,
//       };
//     });

//     /* SORT BEST MATCH FIRST */

//     scoredPlaces.sort(
//       (a, b) => b.matchScore - a.matchScore
//     );

//     const topPlaces = scoredPlaces.slice(0, 3);

//     /* NO RESULTS */

//     if (topPlaces.length === 0) {
//       setMessages((prev) => [
//         ...prev,

//         {
//           type: "user",
//           text: "Recommend a place for me",
//         },

//         {
//           type: "ai",
//           text:
//             "I couldn't find a destination matching all of your accessibility requirements. Try relaxing one preference and I'll search again.",
//         },
//       ]);

//       return;
//     }

//     /* BUILD RESPONSE */

//     let recommendation =
//       "Based on your preferences, here are your best matches:\n\n";

//     topPlaces.forEach((place, index) => {
//       const reasons = getMatchReasons(place);

//       recommendation +=
//         `${index + 1}. ${place.name} — ${place.city}\n`;

//       recommendation +=
//         `Match: ${place.matchScore}%\n`;

//       recommendation +=
//         `Budget: ${place.planning?.estimatedBudget || "Not available"}\n`;

//       recommendation +=
//         `Time: ${place.planning?.visitDuration || "Not available"}\n`;

//       recommendation +=
//         `Crowd: ${place.planning?.crowdLevel || "Not available"}\n`;

//       if (reasons.length > 0) {
//         recommendation +=
//           `Why: ${reasons.join(", ")}.\n`;
//       }

//       recommendation += "\n";
//     });

//     recommendation +=
//       "These recommendations are generated from the structured destination attributes in the current BharatVerse MVP.";

//     setMessages((prev) => [
//       ...prev,

//       {
//         type: "user",
//         text:
//           `Recommend a place for me — ${budget}, ${availableTime}, ${crowdPreference}`,
//       },

//       {
//         type: "ai",
//         text: recommendation,
//       },
//     ]);
//   };

//   return (
//     <main className="ai-guide-page">

//       {/* =================================================
//           HERO
//       ================================================= */}

//       <section className="ai-guide-hero">

//         <div className="ai-guide-badge">
//           BHARATVERSE AI
//         </div>

//         <h1>
//           Your Guide to
//           <span> Hidden India.</span>
//         </h1>

//         <p>
//           Ask anything about India's hidden heritage,
//           forgotten stories, local crafts and underrated
//           destinations.
//         </p>

//       </section>


//       {/* =================================================
//           PERSONALIZATION
//       ================================================= */}

//       <section className="personalization">

//         <div className="personalization-label">
//           PERSONALIZE YOUR EXPERIENCE
//         </div>


//         {/* INTERESTS */}

//         <div className="interests-section">

//           <h2>
//             What are you interested in?
//           </h2>

//           <div className="interests-list">

//             {[
//               "History",
//               "Architecture",
//               "Spirituality",
//               "Nature",
//               "Art & Crafts",
//             ].map((interest) => (

//               <label
//                 className="interest-item"
//                 key={interest}
//               >

//                 <input
//                   type="checkbox"
//                   checked={interests.includes(interest)}
//                   onChange={() =>
//                     handleInterestChange(interest)
//                   }
//                 />

//                 <span>
//                   {interest}
//                 </span>

//               </label>

//             ))}

//           </div>

//         </div>


//         {/* =================================================
//             BUDGET + TIME + CROWD
//         ================================================= */}

//         <div className="preference-row">

//           {/* BUDGET */}

//           <div className="preference-item">

//             <h3>
//               Budget
//             </h3>

//             <select
//               value={budget}
//               onChange={(event) =>
//                 setBudget(event.target.value)
//               }
//             >

//               <option>
//                 Any budget
//               </option>

//               <option>
//                 Budget
//               </option>

//               <option>
//                 Moderate
//               </option>

//               <option>
//                 Premium
//               </option>

//             </select>

//           </div>


//           {/* AVAILABLE TIME */}

//           <div className="preference-item">

//             <h3>
//               Available time
//             </h3>

//             <select
//               value={availableTime}
//               onChange={(event) =>
//                 setAvailableTime(event.target.value)
//               }
//             >

//               <option>
//                 Any duration
//               </option>

//               <option>
//                 Half day
//               </option>

//               <option>
//                 1 day
//               </option>

//               <option>
//                 2–3 days
//               </option>

//               <option>
//                 4+ days
//               </option>

//             </select>

//           </div>


//           {/* CROWD PREFERENCE */}

//           <div className="preference-item">

//             <h3>
//               Crowd preference
//             </h3>

//             <select
//               value={crowdPreference}
//               onChange={(event) =>
//                 setCrowdPreference(event.target.value)
//               }
//             >

//               <option>
//                 Doesn't matter
//               </option>

//               <option>
//                 Low crowd
//               </option>

//               <option>
//                 Moderate crowd
//               </option>

//               <option>
//                 Popular places
//               </option>

//             </select>

//           </div>

//         </div>


//         {/* =================================================
//             ACCESSIBILITY
//         ================================================= */}

//         <div className="accessibility-section">

//           <h2>
//             Accessibility
//           </h2>

//           <div className="accessibility-list">

//             <label className="accessibility-item">

//               <input
//                 type="checkbox"
//                 checked={seniorFriendly}
//                 onChange={(event) =>
//                   setSeniorFriendly(event.target.checked)
//                 }
//               />

//               <span>
//                 Senior-citizen friendly
//               </span>

//             </label>


//             <label className="accessibility-item">

//               <input
//                 type="checkbox"
//                 checked={wheelchairAccess}
//                 onChange={(event) =>
//                   setWheelchairAccess(event.target.checked)
//                 }
//               />

//               <span>
//                 Wheelchair accessibility
//               </span>

//             </label>

//           </div>

//         </div>


//         {/* RECOMMEND */}

//         <button
//           className="recommend-button"
//           type="button"
//           onClick={recommendPlace}
//         >
//           ✦ Recommend a Place
//         </button>

//       </section>


//       {/* =================================================
//           MAIN CONTAINER
//       ================================================= */}

//       <section className="ai-guide-container">

//         {/* SUGGESTIONS */}

//         <div className="suggestions">

//           <p>
//             Try asking
//           </p>

//           <div className="suggestion-list">

//             {suggestions.map((suggestion) => (

//               <button
//                 key={suggestion}
//                 type="button"
//                 onClick={() =>
//                   askQuestion(suggestion)
//                 }
//               >
//                 {suggestion}
//               </button>

//             ))}

//           </div>

//         </div>


//         {/* CHAT */}

//         <div className="ai-chat">

//           {messages.length === 0 ? (

//             <div className="empty-chat">

//               <div className="ai-icon">
//                 ✦
//               </div>

//               <h2>
//                 Where should we explore?
//               </h2>

//               <p>
//                 Ask BharatVerse about a place,
//                 culture, craft or hidden story.
//               </p>

//             </div>

//           ) : (

//             <div className="messages">

//               {messages.map((message, index) => (

//                 <div
//                   key={index}
//                   className={`message ${message.type}`}
//                 >

//                   {message.type === "ai" && (

//                     <span className="message-label">
//                       BHARATVERSE AI
//                     </span>

//                   )}

//                   <p>
//                     {message.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           )}


//           {/* INPUT */}

//           <form
//             className="ai-input-area"
//             onSubmit={handleSubmit}
//           >

//             <input
//               type="text"
//               value={input}
//               onChange={(event) =>
//                 setInput(event.target.value)
//               }
//               placeholder="Ask about a hidden place, culture or craft..."
//             />

//             <button type="submit">
//               Ask →
//             </button>

//           </form>

//         </div>

//       </section>

//     </main>
//   );
// }























// # AIGuide.jsx


import { useState } from "react";
import "./AIGuide.css";
import places from "../data/places";

const suggestions = [
  "Hidden places near Varanasi",
  "Tell me about Parasnath",
  "Best heritage places in Jharkhand",
  "Suggest an underrated destination",
];

const responses = {
  "Hidden places near Varanasi":
    "If you want to go beyond the usual tourist spots, explore Ramnagar Fort, Man Mandir Observatory and lesser-known heritage areas around the Ganges.",

  "Tell me about Parasnath":
    "Parasnath Hills in Jharkhand are known for their spiritual significance, forests and scenic landscapes. The region offers a very different experience from India's usual tourist destinations.",

  "Best heritage places in Jharkhand":
    "You can explore Shikharji, Maluti temples, Netarhat and other lesser-known cultural and natural destinations across Jharkhand.",

  "Suggest an underrated destination":
    "Try Shikharji in Jharkhand. It combines spiritual heritage, nature and scenic landscapes while remaining less explored than India's mainstream tourist destinations.",
};

export default function AIGuide() {
  /* =====================================================
     CHAT STATE
  ===================================================== */

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  /* =====================================================
     PERSONALIZATION STATE
  ===================================================== */

  const [interests, setInterests] = useState([]);

  const [budget, setBudget] = useState("Any budget");

  const [availableTime, setAvailableTime] =
    useState("Any duration");

  const [crowdPreference, setCrowdPreference] =
    useState("Doesn't matter");

  const [seniorFriendly, setSeniorFriendly] =
    useState(false);

  const [wheelchairAccess, setWheelchairAccess] =
    useState(false);

  /* =====================================================
     RECOMMENDATION STATE
  ===================================================== */

  const [recommendations, setRecommendations] =
    useState([]);

  /* =====================================================
     INTEREST CHECKBOX
  ===================================================== */

  const handleInterestChange = (interest) => {
    setInterests((previous) => {
      if (previous.includes(interest)) {
        return previous.filter(
          (item) => item !== interest
        );
      }

      return [...previous, interest];
    });
  };

  /* =====================================================
     CHAT
  ===================================================== */

  const askQuestion = (question) => {
    if (!question.trim()) return;

    const lowerQuestion =
      question.toLowerCase().trim();

    let answer;

    if (responses[question]) {
      answer = responses[question];
    }

    else if (
      lowerQuestion.includes("varanasi") ||
      lowerQuestion.includes("banaras") ||
      lowerQuestion.includes("kashi")
    ) {
      answer =
        "Beyond the famous ghats, Varanasi has many hidden experiences worth exploring. You can visit Ramnagar Fort, Man Mandir Observatory and explore traditional weaving communities.";
    }

    else if (
      lowerQuestion.includes("parasnath") ||
      lowerQuestion.includes("jharkhand")
    ) {
      answer =
        "Parasnath Hills are one of Jharkhand's significant destinations. The region combines spiritual heritage, forests and scenic landscapes.";
    }

    else if (
      lowerQuestion.includes("lucknow")
    ) {
      answer =
        "Lucknow offers much more than its famous monuments. Explore its Nawabi architecture, Chikankari embroidery and traditional food culture.";
    }

    else if (
      lowerQuestion.includes("jaipur")
    ) {
      answer =
        "Beyond the popular landmarks, Jaipur has a strong craft culture including blue pottery, block printing and local artisan workshops.";
    }

    else if (
      lowerQuestion.includes("artisan") ||
      lowerQuestion.includes("craft") ||
      lowerQuestion.includes("handicraft") ||
      lowerQuestion.includes("weaving")
    ) {
      answer =
        "India's cultural heritage lives strongly through its artisans. BharatVerse highlights traditional crafts such as Banarasi silk weaving, Chikankari, Madhubani painting, wood carving, blue pottery and brass craft.";
    }

    else if (
      lowerQuestion.includes("fort")
    ) {
      answer =
        "If you want forts beyond the usual tourist circuit, start with Ramnagar Fort in Varanasi. It offers a different experience from India's more famous royal forts.";
    }

    else if (
      lowerQuestion.includes("temple") ||
      lowerQuestion.includes("temples")
    ) {
      answer =
        "India has thousands of remarkable temples beyond the most famous pilgrimage sites. Explore lesser-known temples across Madhya Pradesh, Jharkhand and Odisha.";
    }

    else if (
      lowerQuestion.includes("hidden") ||
      lowerQuestion.includes("underrated") ||
      lowerQuestion.includes("less known") ||
      lowerQuestion.includes("offbeat")
    ) {
      answer =
        "For an underrated experience, consider Shikharji in Jharkhand, Ramnagar Fort in Varanasi or lesser-known heritage sites around Odisha and Madhya Pradesh.";
    }

    else {
      answer =
        "I can help you discover hidden places, heritage sites, traditional crafts and local cultural experiences across India. Try asking me about a city, fort, temple, artisan, craft or underrated destination.";
    }

    setMessages((previous) => [
      ...previous,
      {
        type: "user",
        text: question,
      },
      {
        type: "ai",
        text: answer,
      },
    ]);

    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askQuestion(input);
  };

  /* =====================================================
     INTEREST SCORE
     ===================================================== */

  const getInterestScore = (place) => {
    if (interests.length === 0) {
      return 1;
    }

    const placeInterests =
      place.planning?.idealFor || [];

    const matches = interests.filter(
      (interest) =>
        placeInterests.some(
          (placeInterest) =>
            placeInterest.toLowerCase() ===
            interest.toLowerCase()
        )
    );

    return matches.length / interests.length;
  };

  /* =====================================================
     BUDGET SCORE
     ===================================================== */

  const getBudgetScore = (place) => {
    if (budget === "Any budget") {
      return 1;
    }

    const category =
      place.planning?.budgetCategory?.toLowerCase();

    if (!category) {
      return 0.5;
    }

    if (budget === "Budget") {
      if (category === "low") return 1;
      if (category === "medium") return 0.5;
      return 0;
    }

    if (budget === "Moderate") {
      if (category === "medium") return 1;
      if (category === "low") return 0.8;
      if (category === "high") return 0.4;
    }

    if (budget === "Premium") {
      if (category === "high") return 1;
      if (category === "medium") return 0.8;
      if (category === "low") return 0.5;
    }

    return 0;
  };

  /* =====================================================
     TIME SCORE
     ===================================================== */

  const getTimeScore = (place) => {
    if (availableTime === "Any duration") {
      return 1;
    }

    const duration =
      place.planning?.visitDuration?.toLowerCase() || "";

    if (availableTime === "Half day") {
      return duration.includes("half-day") ? 1 : 0.3;
    }

    if (availableTime === "1 day") {
      if (duration.includes("half-day")) return 1;
      if (duration.includes("1-day")) return 1;
      return 0.4;
    }

    if (availableTime === "2–3 days") {
      if (duration.includes("2+ days")) return 1;
      if (duration.includes("1-day")) return 0.8;
      if (duration.includes("half-day")) return 0.5;
      return 0.4;
    }

    if (availableTime === "4+ days") {
      if (duration.includes("2+ days")) return 1;
      if (duration.includes("1-day")) return 0.8;
      return 0.5;
    }

    return 0;
  };

  /* =====================================================
     CROWD SCORE
     ===================================================== */

  const getCrowdScore = (place) => {
    if (crowdPreference === "Doesn't matter") {
      return 1;
    }

    const crowd =
      place.planning?.crowdLevel?.toLowerCase();

    if (!crowd) {
      return 0.5;
    }

    if (crowdPreference === "Low crowd") {
      if (crowd === "low") return 1;
      if (crowd === "medium") return 0.5;
      return 0.2;
    }

    if (crowdPreference === "Moderate crowd") {
      if (crowd === "medium") return 1;
      if (crowd === "low") return 0.8;
      if (crowd === "high") return 0.5;
    }

    if (crowdPreference === "Popular places") {
      if (crowd === "high") return 1;
      if (crowd === "medium") return 0.7;
      return 0.4;
    }

    return 0;
  };

  /* =====================================================
     ACCESSIBILITY SCORE
  ===================================================== */

  const getAccessibilityScore = (place) => {
    const accessibility =
      place.accessibility || {};

    let score = 1;

    if (seniorFriendly) {
      score *= accessibility.seniorFriendly
        ? 1
        : 0;
    }

    if (wheelchairAccess) {
      score *= accessibility.wheelchairAccessible
        ? 1
        : 0;
    }

    return score;
  };

  /* =====================================================
     WHY THIS PLACE?
     ===================================================== */

  const getReasons = (place) => {
    const reasons = [];

    if (
      interests.length > 0 &&
      getInterestScore(place) > 0
    ) {
      reasons.push("matches your interests");
    }

    if (
      budget !== "Any budget" &&
      getBudgetScore(place) >= 0.8
    ) {
      reasons.push("fits your budget");
    }

    if (
      availableTime !== "Any duration" &&
      getTimeScore(place) >= 0.8
    ) {
      reasons.push("fits your available time");
    }

    if (
      crowdPreference !== "Doesn't matter" &&
      getCrowdScore(place) >= 0.8
    ) {
      reasons.push("matches your crowd preference");
    }

    if (
      seniorFriendly &&
      place.accessibility?.seniorFriendly
    ) {
      reasons.push("senior-citizen friendly");
    }

    if (
      wheelchairAccess &&
      place.accessibility?.wheelchairAccessible
    ) {
      reasons.push("wheelchair accessible");
    }

    return reasons;
  };

  /* =====================================================
     MAIN RECOMMENDATION ENGINE
     ===================================================== */

  const recommendPlace = () => {
    let filteredPlaces = [...places];

    /*
      IMPORTANT:

      If the user selected interests,
      a destination MUST match at least
      one selected interest.
    */

    if (interests.length > 0) {
      filteredPlaces = filteredPlaces.filter(
        (place) => getInterestScore(place) > 0
      );
    }

    /* ACCESSIBILITY FILTER */

    if (seniorFriendly) {
      filteredPlaces = filteredPlaces.filter(
        (place) =>
          place.accessibility?.seniorFriendly === true
      );
    }

    if (wheelchairAccess) {
      filteredPlaces = filteredPlaces.filter(
        (place) =>
          place.accessibility?.wheelchairAccessible === true
      );
    }

    /* SCORE DESTINATIONS */

    const scoredPlaces = filteredPlaces.map(
      (place) => {
        const interestScore =
          getInterestScore(place);

        const budgetScore =
          getBudgetScore(place);

        const timeScore =
          getTimeScore(place);

        const crowdScore =
          getCrowdScore(place);

        /*
          WEIGHTS

          Interest       40%
          Budget         25%
          Time           20%
          Crowd          15%
        */

        const score =
          interestScore * 40 +
          budgetScore * 25 +
          timeScore * 20 +
          crowdScore * 15;

        return {
          ...place,
          matchScore: Math.round(score),
          reasons: getReasons(place),
        };
      }
    );

    /* BEST FIRST */

    scoredPlaces.sort(
      (a, b) => b.matchScore - a.matchScore
    );

    /* TOP 3 */

    const topThree =
      scoredPlaces.slice(0, 3);

    setRecommendations(topThree);

    /* ALSO ADD A CHAT MESSAGE */

    const preferenceText =
      `${budget}, ${availableTime}, ${crowdPreference}`;

    setMessages((previous) => [
      ...previous,
      {
        type: "user",
        text:
          `Recommend a place for me — ${preferenceText}`,
      },
      {
        type: "ai",
        text:
          topThree.length > 0
            ? `I found ${topThree.length} destinations that best match your selected preferences.`
            : "I couldn't find a destination matching all your selected interests and accessibility requirements.",
      },
    ]);
  };

  /* =====================================================
     UI
     ===================================================== */

  return (
    <main className="ai-guide-page">

      {/* HERO */}

      <section className="ai-guide-hero">

        <div className="ai-guide-badge">
          BHARATVERSE AI
        </div>

        <h1>
          Your Guide to
          <span> Hidden India.</span>
        </h1>

        <p>
          Ask anything about India's hidden heritage,
          forgotten stories, local crafts and underrated
          destinations.
        </p>

      </section>


      {/* PERSONALIZATION */}

      <section className="personalization">

        <div className="personalization-label">
          PERSONALIZE YOUR EXPERIENCE
        </div>


        {/* INTERESTS */}

        <div className="interests-section">

          <h2>
            What are you interested in?
          </h2>

          <div className="interests-list">

            {[
              "History",
              "Architecture",
              "Spirituality",
              "Nature",
              "Art & Crafts",
            ].map((interest) => (

              <label
                className={`interest-item ${
                  interests.includes(interest)
                    ? "selected"
                    : ""
                }`}
                key={interest}
              >

                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() =>
                    handleInterestChange(interest)
                  }
                />

                <span>
                  {interest}
                </span>

              </label>

            ))}

          </div>

        </div>


        {/* PREFERENCES */}

        <div className="preference-row">

          <div className="preference-item">

            <h3>
              Budget
            </h3>

            <select
              value={budget}
              onChange={(event) =>
                setBudget(event.target.value)
              }
            >
              <option>Any budget</option>
              <option>Budget</option>
              <option>Moderate</option>
              <option>Premium</option>
            </select>

          </div>


          <div className="preference-item">

            <h3>
              Available time
            </h3>

            <select
              value={availableTime}
              onChange={(event) =>
                setAvailableTime(event.target.value)
              }
            >
              <option>Any duration</option>
              <option>Half day</option>
              <option>1 day</option>
              <option>2–3 days</option>
              <option>4+ days</option>
            </select>

          </div>


          <div className="preference-item">

            <h3>
              Crowd preference
            </h3>

            <select
              value={crowdPreference}
              onChange={(event) =>
                setCrowdPreference(event.target.value)
              }
            >
              <option>Doesn't matter</option>
              <option>Low crowd</option>
              <option>Moderate crowd</option>
              <option>Popular places</option>
            </select>

          </div>

        </div>


        {/* ACCESSIBILITY */}

        <div className="accessibility-section">

          <h2>
            Accessibility
          </h2>

          <div className="accessibility-list">

            <label className="accessibility-item">

              <input
                type="checkbox"
                checked={seniorFriendly}
                onChange={(event) =>
                  setSeniorFriendly(
                    event.target.checked
                  )
                }
              />

              <span>
                Senior-citizen friendly
              </span>

            </label>


            <label className="accessibility-item">

              <input
                type="checkbox"
                checked={wheelchairAccess}
                onChange={(event) =>
                  setWheelchairAccess(
                    event.target.checked
                  )
                }
              />

              <span>
                Wheelchair accessibility
              </span>

            </label>

          </div>

        </div>


        {/* BUTTON */}

        <button
          className="recommend-button"
          type="button"
          onClick={recommendPlace}
        >
          ✦ Recommend a Place
        </button>

      </section>


      {/* RECOMMENDATION RESULTS */}

      {recommendations.length > 0 && (

        <section className="recommendation-results">

          <div className="results-heading">

            <span>
              BHARATVERSE AI
            </span>

            <h2>
              Your best matches
            </h2>

            <p>
              Recommendations based on your selected
              interests, budget, time and crowd preference.
            </p>

          </div>


          <div className="recommendation-grid">

            {recommendations.map(
              (place, index) => (

                <article
                  className="recommendation-card"
                  key={place.id || place.name}
                >

                  <div className="recommendation-top">

                    <span className="rank">
                      0{index + 1}
                    </span>

                    <span className="match-score">
                      {place.matchScore}% Match
                    </span>

                  </div>


                  <h3>
                    {place.name}
                  </h3>

                  <p className="recommendation-location">
                    {place.city}
                    {place.state
                      ? `, ${place.state}`
                      : ""}
                  </p>


                  <div className="recommendation-details">

                    <div>
                      <span>Budget</span>
                      <strong>
                        {place.planning?.estimatedBudget ||
                          "Not available"}
                      </strong>
                    </div>

                    <div>
                      <span>Time</span>
                      <strong>
                        {place.planning?.visitDuration ||
                          "Not available"}
                      </strong>
                    </div>

                    <div>
                      <span>Crowd</span>
                      <strong>
                        {place.planning?.crowdLevel ||
                          "Not available"}
                      </strong>
                    </div>

                  </div>


                  {place.reasons?.length > 0 && (

                    <div className="match-reasons">

                      <p>
                        Why this matches
                      </p>

                      {place.reasons.map(
                        (reason) => (

                          <span key={reason}>
                            ✓ {reason}
                          </span>

                        )
                      )}

                    </div>

                  )}

                </article>

              )
            )}

          </div>

        </section>

      )}


      {/* CHAT */}

      <section className="ai-guide-container">

        <div className="suggestions">

          <p>
            Try asking
          </p>

          <div className="suggestion-list">

            {suggestions.map(
              (suggestion) => (

                <button
                  key={suggestion}
                  type="button"
                  onClick={() =>
                    askQuestion(suggestion)
                  }
                >
                  {suggestion}
                </button>

              )
            )}

          </div>

        </div>


        <div className="ai-chat">

          {messages.length === 0 ? (

            <div className="empty-chat">

              <div className="ai-icon">
                ✦
              </div>

              <h2>
                Where should we explore?
              </h2>

              <p>
                Ask BharatVerse about a place,
                culture, craft or hidden story.
              </p>

            </div>

          ) : (

            <div className="messages">

              {messages.map(
                (message, index) => (

                  <div
                    key={index}
                    className={`message ${message.type}`}
                  >

                    {message.type === "ai" && (

                      <span className="message-label">
                        BHARATVERSE AI
                      </span>

                    )}

                    <p>
                      {message.text}
                    </p>

                  </div>

                )
              )}

            </div>

          )}


          <form
            className="ai-input-area"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about a hidden place, culture or craft..."
            />

            <button type="submit">
              Ask →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

