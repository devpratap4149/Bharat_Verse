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
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const askQuestion = (question) => {
//     if (!question.trim()) return;

//     const lowerQuestion = question.toLowerCase().trim();

//     let answer;

//     // Exact predefined questions
//     if (responses[question]) {
//       answer = responses[question];
//     }

//     // Varanasi
//     else if (
//       lowerQuestion.includes("varanasi") ||
//       lowerQuestion.includes("banaras") ||
//       lowerQuestion.includes("kashi")
//     ) {
//       answer =
//         "Beyond the famous ghats, Varanasi has many hidden experiences worth exploring. You can visit Ramnagar Fort, Man Mandir Observatory and explore the city's traditional weaving communities. If you want a quieter experience, explore the lesser-known heritage areas around the Ganges.";
//     }

//     // Parasnath / Jharkhand
//     else if (
//       lowerQuestion.includes("parasnath") ||
//       lowerQuestion.includes("jharkhand")
//     ) {
//       answer =
//         "Parasnath Hills are one of Jharkhand's most significant destinations. The region combines spiritual heritage, forests and scenic landscapes. It is a great choice if you want to experience a side of India that receives far less attention than mainstream tourist destinations.";
//     }

//     // Lucknow
//     else if (lowerQuestion.includes("lucknow")) {
//       answer =
//         "Lucknow offers much more than its famous monuments. Explore its Nawabi architecture, Chikankari embroidery and traditional food culture. Bara Imambara, Rumi Darwaza and the city's artisan communities are excellent starting points.";
//     }

//     // Jaipur
//     else if (lowerQuestion.includes("jaipur")) {
//       answer =
//         "Beyond the popular landmarks, Jaipur has a strong craft culture. Traditional blue pottery, block printing and local artisan workshops offer a different way to experience Rajasthan's heritage.";
//     }

//     // Artisans / crafts
//     else if (
//       lowerQuestion.includes("artisan") ||
//       lowerQuestion.includes("craft") ||
//       lowerQuestion.includes("handicraft") ||
//       lowerQuestion.includes("weaving")
//     ) {
//       answer =
//         "India's cultural heritage lives strongly through its artisans. BharatVerse currently highlights crafts such as Banarasi silk weaving, Chikankari embroidery, Madhubani painting, wood carving, blue pottery and brass craft.";
//     }

//     // Forts
//     else if (lowerQuestion.includes("fort")) {
//       answer =
//         "If you want forts beyond the usual tourist circuit, start with Ramnagar Fort in Varanasi. It offers a different experience from India's more famous royal forts and is closely connected with the history of the Kashi region.";
//     }

//     // Temples
//     else if (
//       lowerQuestion.includes("temple") ||
//       lowerQuestion.includes("temples")
//     ) {
//       answer =
//         "India has thousands of remarkable temples beyond the most famous pilgrimage sites. For a less conventional heritage experience, explore the temples around Madhya Pradesh, Jharkhand and Odisha, where architecture and local traditions often remain closely connected.";
//     }

//     // Hidden / underrated
//     else if (
//       lowerQuestion.includes("hidden") ||
//       lowerQuestion.includes("underrated") ||
//       lowerQuestion.includes("less known") ||
//       lowerQuestion.includes("offbeat")
//     ) {
//       answer =
//         "For an underrated experience, consider Parasnath in Jharkhand, Ramnagar Fort in Varanasi or lesser-known heritage sites around Odisha and Madhya Pradesh. These destinations offer history and culture without the crowds of India's most famous tourist spots.";
//     }

//     // General fallback
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

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     askQuestion(input);
//   };

//   return (
//     <main className="ai-guide-page">

//       {/* HERO */}
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


//       {/* MAIN CONTAINER */}
//       <section className="ai-guide-container">

//         {/* SUGGESTIONS */}
//         <div className="suggestions">

//           <p>Try asking</p>

//           <div className="suggestion-list">

//             {suggestions.map((suggestion) => (
//               <button
//                 key={suggestion}
//                 type="button"
//                 onClick={() => askQuestion(suggestion)}
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

//   const [input, setInput] = useState("");

//   const [messages, setMessages] = useState([]);

//   /* =================================
//      TRAVEL PREFERENCES
//   ================================= */

//   const [selectedInterests, setSelectedInterests] = useState([]);

//   const [budget, setBudget] = useState("any");

//   const [timeAvailable, setTimeAvailable] = useState("any");

//   const [crowdPreference, setCrowdPreference] = useState("any");

//   const [seniorFriendly, setSeniorFriendly] =
//     useState(false);

//   const [wheelchairRequired, setWheelchairRequired] =
//     useState(false);


//   /* =================================
//      INTEREST OPTIONS
//   ================================= */

//   const interests = [
//     "History",
//     "Architecture",
//     "Spirituality",
//     "Nature",
//     "Art & Crafts",
//   ];


//   /* =================================
//      TOGGLE INTEREST
//   ================================= */

//   const toggleInterest = (interest) => {

//     setSelectedInterests((previous) => {

//       if (previous.includes(interest)) {

//         return previous.filter(
//           (item) => item !== interest
//         );

//       }

//       return [
//         ...previous,
//         interest,
//       ];

//     });

//   };


//   /* =================================
//      GET PLACE INTERESTS
//   ================================= */

//   const getPlaceInterests = (place) => {

//     const interests = [];

//     const text = `
//       ${place.name}
//       ${place.description}
//       ${place.history}
//       ${place.significance}
//     `.toLowerCase();


//     if (
//       text.includes("history") ||
//       text.includes("historic") ||
//       text.includes("heritage")
//     ) {
//       interests.push("History");
//     }


//     if (
//       text.includes("architecture") ||
//       text.includes("architectural") ||
//       text.includes("temple") ||
//       text.includes("fort") ||
//       text.includes("monument")
//     ) {
//       interests.push("Architecture");
//     }


//     if (
//       text.includes("spiritual") ||
//       text.includes("religious") ||
//       text.includes("pilgrimage") ||
//       text.includes("sacred")
//     ) {
//       interests.push("Spirituality");
//     }


//     if (
//       text.includes("forest") ||
//       text.includes("landscape") ||
//       text.includes("hill") ||
//       text.includes("nature")
//     ) {
//       interests.push("Nature");
//     }


//     if (
//       text.includes("craft") ||
//       text.includes("artisan") ||
//       text.includes("painting") ||
//       text.includes("weaving")
//     ) {
//       interests.push("Art & Crafts");
//     }


//     return interests;
//   };


//   /* =================================
//      RECOMMEND PLACES
//   ================================= */

//   const getRecommendations = () => {

//     const scoredPlaces = places.map((place) => {

//       let score = 0;

//       const reasons = [];

//       const placeInterests =
//         getPlaceInterests(place);


//       /* INTEREST MATCH */

//       if (selectedInterests.length > 0) {

//         const matchedInterests =
//           selectedInterests.filter(
//             (interest) =>
//               placeInterests.includes(interest)
//           );


//         if (matchedInterests.length > 0) {

//           score +=
//             matchedInterests.length * 20;

//           reasons.push(
//             `Matches your interest in ${matchedInterests.join(
//               ", "
//             )}.`
//           );

//         }

//       }


//       /* BUDGET */

//       if (
//         budget !== "any" &&
//         place.budget?.category === budget
//       ) {

//         score += 20;

//         reasons.push(
//           `Fits your ${budget}-budget preference.`
//         );

//       }


//       /* TIME */

//       if (
//         timeAvailable !== "any" &&
//         place.visitDuration === timeAvailable
//       ) {

//         score += 15;

//         reasons.push(
//           `Suitable for a ${timeAvailable} visit.`
//         );

//       }


//       /* CROWD */

//       if (
//         crowdPreference !== "any" &&
//         place.crowdLevel === crowdPreference
//       ) {

//         score += 15;

//         reasons.push(
//           `Matches your preference for ${crowdPreference} crowds.`
//         );

//       }


//       /* SENIOR CITIZEN */

//       if (seniorFriendly) {

//         if (
//           place.accessibility?.seniorFriendly
//         ) {

//           score += 15;

//           reasons.push(
//             "Marked as senior-citizen friendly."
//           );

//         }

//       }


//       /* WHEELCHAIR */

//       if (wheelchairRequired) {

//         if (
//           place.accessibility?.wheelchairAccessible
//         ) {

//           score += 20;

//           reasons.push(
//             "Provides wheelchair accessibility."
//           );

//         }

//       }


//       return {
//         place,
//         score,
//         reasons,
//       };

//     });


//     return scoredPlaces
//       .sort((a, b) => b.score - a.score)
//       .slice(0, 3);

//   };


//   /* =================================
//      ASK QUESTION
//   ================================= */

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


//     setMessages((previous) => [

//       ...previous,

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


//   /* =================================
//      GENERATE PERSONALIZED RECOMMENDATION
//   ================================= */

//   const generateRecommendation = () => {

//     const recommendations =
//       getRecommendations();


//     if (recommendations.length === 0) {

//       return;

//     }


//     const best =
//       recommendations[0];


//     let message =
//       `Based on your preferences, I recommend ${best.place.name} in ${best.place.city}. `;


//     if (best.reasons.length > 0) {

//       message +=
//         `Why I recommend it: ${best.reasons.join(" ")}`;

//     } else {

//       message +=
//         "This destination is a good starting point for exploring India's lesser-known heritage.";

//     }


//     setMessages((previous) => [

//       ...previous,

//       {
//         type: "user",
//         text: "Recommend a place for me",
//       },

//       {
//         type: "ai",
//         text: message,
//       },

//     ]);

//   };


//   /* =================================
//      FORM SUBMIT
//   ================================= */

//   const handleSubmit = (event) => {

//     event.preventDefault();

//     askQuestion(input);

//   };


//   return (

//     <main className="ai-guide-page">


//       {/* =================================
//           HERO
//       ================================= */}

//       <section className="ai-guide-hero">

//         <div className="ai-guide-badge">
//           BHARATVERSE AI
//         </div>


//         <h1>

//           Your Guide to

//           <span>
//             {" "}Hidden India.
//           </span>

//         </h1>


//         <p>

//           Ask anything about India's hidden heritage,
//           forgotten stories, local crafts and underrated
//           destinations.

//         </p>

//       </section>



//       {/* =================================
//           MAIN CONTAINER
//       ================================= */}

//       <section className="ai-guide-container">


//         {/* =================================
//             TRAVEL PREFERENCES
//         ================================= */}

//         <div className="travel-preferences">

//           <p>
//             PERSONALIZE YOUR EXPERIENCE
//           </p>


//           {/* INTERESTS */}

//           <div className="preference-group">

//             <h3>
//               What are you interested in?
//             </h3>


//             <div className="checkbox-group">

//               {interests.map((interest) => (

//                 <label
//                   key={interest}
//                   className="preference-checkbox"
//                 >

//                   <input
//                     type="checkbox"
//                     checked={selectedInterests.includes(
//                       interest
//                     )}
//                     onChange={() =>
//                       toggleInterest(interest)
//                     }
//                   />

//                   <span>
//                     {interest}
//                   </span>

//                 </label>

//               ))}

//             </div>

//           </div>



//           {/* BUDGET */}

//           <div className="preference-group">

//             <h3>
//               Budget
//             </h3>


//             <select
//               value={budget}
//               onChange={(event) =>
//                 setBudget(event.target.value)
//               }
//             >

//               <option value="any">
//                 Any budget
//               </option>

//               <option value="low">
//                 Low budget
//               </option>

//               <option value="medium">
//                 Medium budget
//               </option>

//               <option value="high">
//                 Higher budget
//               </option>

//             </select>

//           </div>



//           {/* TIME */}

//           <div className="preference-group">

//             <h3>
//               Available time
//             </h3>


//             <select
//               value={timeAvailable}
//               onChange={(event) =>
//                 setTimeAvailable(event.target.value)
//               }
//             >

//               <option value="any">
//                 Any duration
//               </option>

//               <option value="half-day">
//                 Half day
//               </option>

//               <option value="1-day">
//                 1 day
//               </option>

//               <option value="2+ days">
//                 2+ days
//               </option>

//             </select>

//           </div>



//           {/* CROWD */}

//           <div className="preference-group">

//             <h3>
//               Crowd preference
//             </h3>


//             <select
//               value={crowdPreference}
//               onChange={(event) =>
//                 setCrowdPreference(
//                   event.target.value
//                 )
//               }
//             >

//               <option value="any">
//                 Doesn't matter
//               </option>

//               <option value="low">
//                 Low crowds
//               </option>

//               <option value="medium">
//                 Moderate crowds
//               </option>

//               <option value="high">
//                 High crowds are okay
//               </option>

//             </select>

//           </div>



//           {/* ACCESSIBILITY */}

//           <div className="preference-group">

//             <h3>
//               Accessibility
//             </h3>


//             <label className="preference-checkbox">

//               <input
//                 type="checkbox"
//                 checked={seniorFriendly}
//                 onChange={(event) =>
//                   setSeniorFriendly(
//                     event.target.checked
//                   )
//                 }
//               />

//               <span>
//                 Senior-citizen friendly
//               </span>

//             </label>


//             <label className="preference-checkbox">

//               <input
//                 type="checkbox"
//                 checked={wheelchairRequired}
//                 onChange={(event) =>
//                   setWheelchairRequired(
//                     event.target.checked
//                   )
//                 }
//               />

//               <span>
//                 Wheelchair accessibility
//               </span>

//             </label>

//           </div>



//           {/* RECOMMEND BUTTON */}

//           <button
//             type="button"
//             onClick={generateRecommendation}
//             className="recommend-button"
//           >
//             ✦ Recommend a Place
//           </button>

//         </div>



//         {/* =================================
//             SUGGESTIONS
//         ================================= */}

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



//         {/* =================================
//             CHAT
//         ================================= */}

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

//               {messages.map(
//                 (message, index) => (

//                   <div
//                     key={index}
//                     className={`message ${message.type}`}
//                   >

//                     {message.type === "ai" && (

//                       <span className="message-label">
//                         BHARATVERSE AI
//                       </span>

//                     )}

//                     <p>
//                       {message.text}
//                     </p>

//                   </div>

//                 )
//               )}

//             </div>

//           )}



//           {/* =================================
//               INPUT
//           ================================= */}

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
















import { useState } from "react";
import "./AIGuide.css";

const suggestions = [
  "Hidden places near Varanasi",
  "Tell me about Parasnath",
  "Best heritage places in Jharkhand",
  "Suggest an underrated destination",
];

const responses = {
  "Hidden places near Varanasi":
    "If you want to go beyond the usual tourist spots, explore Ramnagar Fort, Man Mandir Observatory and the lesser-known heritage areas around the Ganges.",

  "Tell me about Parasnath":
    "Parasnath Hills in Jharkhand are known for their spiritual significance, forests and scenic landscapes. The region offers a very different experience from India's usual tourist destinations.",

  "Best heritage places in Jharkhand":
    "You can explore Parasnath, Maluti temples, Netarhat and other lesser-known cultural and natural destinations across Jharkhand.",

  "Suggest an underrated destination":
    "Try Parasnath in Jharkhand. It combines heritage, spirituality and natural landscapes while remaining less explored than India's mainstream tourist destinations.",
};

export default function AIGuide() {

  /* =====================================================
     AI CHAT STATE
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
     INTEREST HANDLER
  ===================================================== */

  const handleInterestChange = (interest) => {

    setInterests((prev) => {

      if (prev.includes(interest)) {

        return prev.filter(
          (item) => item !== interest
        );

      }

      return [...prev, interest];

    });

  };


  /* =====================================================
     AI QUESTION HANDLER
  ===================================================== */

  const askQuestion = (question) => {

    if (!question.trim()) return;

    const lowerQuestion =
      question.toLowerCase().trim();

    let answer;


    /* EXACT PREDEFINED QUESTIONS */

    if (responses[question]) {

      answer = responses[question];

    }


    /* VARANASI */

    else if (
      lowerQuestion.includes("varanasi") ||
      lowerQuestion.includes("banaras") ||
      lowerQuestion.includes("kashi")
    ) {

      answer =
        "Beyond the famous ghats, Varanasi has many hidden experiences worth exploring. You can visit Ramnagar Fort, Man Mandir Observatory and explore the city's traditional weaving communities. If you want a quieter experience, explore the lesser-known heritage areas around the Ganges.";

    }


    /* PARASNATH / JHARKHAND */

    else if (
      lowerQuestion.includes("parasnath") ||
      lowerQuestion.includes("jharkhand")
    ) {

      answer =
        "Parasnath Hills are one of Jharkhand's most significant destinations. The region combines spiritual heritage, forests and scenic landscapes. It is a great choice if you want to experience a side of India that receives far less attention than mainstream tourist destinations.";

    }


    /* LUCKNOW */

    else if (
      lowerQuestion.includes("lucknow")
    ) {

      answer =
        "Lucknow offers much more than its famous monuments. Explore its Nawabi architecture, Chikankari embroidery and traditional food culture. Bara Imambara, Rumi Darwaza and the city's artisan communities are excellent starting points.";

    }


    /* JAIPUR */

    else if (
      lowerQuestion.includes("jaipur")
    ) {

      answer =
        "Beyond the popular landmarks, Jaipur has a strong craft culture. Traditional blue pottery, block printing and local artisan workshops offer a different way to experience Rajasthan's heritage.";

    }


    /* ARTISANS / CRAFTS */

    else if (
      lowerQuestion.includes("artisan") ||
      lowerQuestion.includes("craft") ||
      lowerQuestion.includes("handicraft") ||
      lowerQuestion.includes("weaving")
    ) {

      answer =
        "India's cultural heritage lives strongly through its artisans. BharatVerse currently highlights crafts such as Banarasi silk weaving, Chikankari embroidery, Madhubani painting, wood carving, blue pottery and brass craft.";

    }


    /* FORTS */

    else if (
      lowerQuestion.includes("fort")
    ) {

      answer =
        "If you want forts beyond the usual tourist circuit, start with Ramnagar Fort in Varanasi. It offers a different experience from India's more famous royal forts and is closely connected with the history of the Kashi region.";

    }


    /* TEMPLES */

    else if (
      lowerQuestion.includes("temple") ||
      lowerQuestion.includes("temples")
    ) {

      answer =
        "India has thousands of remarkable temples beyond the most famous pilgrimage sites. For a less conventional heritage experience, explore the temples around Madhya Pradesh, Jharkhand and Odisha, where architecture and local traditions often remain closely connected.";

    }


    /* HIDDEN / UNDERRATED */

    else if (
      lowerQuestion.includes("hidden") ||
      lowerQuestion.includes("underrated") ||
      lowerQuestion.includes("less known") ||
      lowerQuestion.includes("offbeat")
    ) {

      answer =
        "For an underrated experience, consider Parasnath in Jharkhand, Ramnagar Fort in Varanasi or lesser-known heritage sites around Odisha and Madhya Pradesh. These destinations offer history and culture without the crowds of India's most famous tourist spots.";

    }


    /* GENERAL FALLBACK */

    else {

      answer =
        "I can help you discover hidden places, heritage sites, traditional crafts and local cultural experiences across India. Try asking me about a city, fort, temple, artisan, craft or an underrated destination.";

    }


    /* ADD CHAT MESSAGES */

    setMessages((prev) => [

      ...prev,

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


  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = (event) => {

    event.preventDefault();

    askQuestion(input);

  };


  /* =====================================================
     PERSONALIZED RECOMMENDATION
  ===================================================== */

  const recommendPlace = () => {

    let recommendation =
      "Based on your preferences, explore Parasnath Hills in Jharkhand. It offers heritage, spirituality and natural landscapes.";

    if (
      interests.includes("Nature")
    ) {

      recommendation =
        "Based on your interest in Nature, consider Parasnath Hills in Jharkhand for its forests, hills and scenic surroundings.";

    }

    else if (
      interests.includes("Architecture")
    ) {

      recommendation =
        "Based on your interest in Architecture, explore Ramnagar Fort in Varanasi for its historic architecture and connection with the Kashi region.";

    }

    else if (
      interests.includes("Art & Crafts")
    ) {

      recommendation =
        "Based on your interest in Art & Crafts, explore Varanasi's traditional weaving communities and Banarasi silk craftsmanship.";

    }

    else if (
      interests.includes("Spirituality")
    ) {

      recommendation =
        "Based on your interest in Spirituality, Parasnath Hills in Jharkhand offer a strong combination of spiritual heritage and natural surroundings.";

    }

    else if (
      interests.includes("History")
    ) {

      recommendation =
        "Based on your interest in History, Ramnagar Fort in Varanasi is a great place to explore regional history and heritage.";

    }


    setMessages((prev) => [

      ...prev,

      {
        type: "user",
        text: "Recommend a place for me",
      },

      {
        type: "ai",
        text: recommendation,
      },

    ]);

  };


  return (

    <main className="ai-guide-page">


      {/* =================================================
          HERO
      ================================================= */}

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


      {/* =================================================
          PERSONALIZATION
      ================================================= */}

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


            <label className="interest-item">

              <input
                type="checkbox"
                checked={interests.includes("History")}
                onChange={() =>
                  handleInterestChange("History")
                }
              />

              <span>History</span>

            </label>


            <label className="interest-item">

              <input
                type="checkbox"
                checked={interests.includes("Architecture")}
                onChange={() =>
                  handleInterestChange("Architecture")
                }
              />

              <span>Architecture</span>

            </label>


            <label className="interest-item">

              <input
                type="checkbox"
                checked={interests.includes("Spirituality")}
                onChange={() =>
                  handleInterestChange("Spirituality")
                }
              />

              <span>Spirituality</span>

            </label>


            <label className="interest-item">

              <input
                type="checkbox"
                checked={interests.includes("Nature")}
                onChange={() =>
                  handleInterestChange("Nature")
                }
              />

              <span>Nature</span>

            </label>


            <label className="interest-item">

              <input
                type="checkbox"
                checked={interests.includes("Art & Crafts")}
                onChange={() =>
                  handleInterestChange("Art & Crafts")
                }
              />

              <span>Art & Crafts</span>

            </label>

          </div>

        </div>


        {/* =================================================
            BUDGET + TIME + CROWD
        ================================================= */}

        <div className="preference-row">


          {/* BUDGET */}

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

              <option>
                Any budget
              </option>

              <option>
                Budget
              </option>

              <option>
                Moderate
              </option>

              <option>
                Premium
              </option>

            </select>

          </div>


          {/* AVAILABLE TIME */}

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

              <option>
                Any duration
              </option>

              <option>
                Half day
              </option>

              <option>
                1 day
              </option>

              <option>
                2–3 days
              </option>

              <option>
                4+ days
              </option>

            </select>

          </div>


          {/* CROWD PREFERENCE */}

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

              <option>
                Doesn't matter
              </option>

              <option>
                Low crowd
              </option>

              <option>
                Moderate crowd
              </option>

              <option>
                Popular places
              </option>

            </select>

          </div>

        </div>


        {/* =================================================
            ACCESSIBILITY
        ================================================= */}

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
                  setSeniorFriendly(event.target.checked)
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
                  setWheelchairAccess(event.target.checked)
                }
              />

              <span>
                Wheelchair accessibility
              </span>

            </label>

          </div>

        </div>


        {/* RECOMMEND */}

        <button
          className="recommend-button"
          type="button"
          onClick={recommendPlace}
        >
          ✦ Recommend a Place
        </button>

      </section>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <section className="ai-guide-container">


        {/* SUGGESTIONS */}

        <div className="suggestions">

          <p>
            Try asking
          </p>

          <div className="suggestion-list">

            {suggestions.map((suggestion) => (

              <button
                key={suggestion}
                type="button"
                onClick={() =>
                  askQuestion(suggestion)
                }
              >
                {suggestion}
              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            CHAT
        ================================================= */}

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

              {messages.map((message, index) => (

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

              ))}

            </div>

          )}


          {/* =================================================
              INPUT
          ================================================= */}

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