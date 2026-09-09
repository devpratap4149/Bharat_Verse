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

//         <div className="home-login-panel">

//           <div className="home-login-header">
//             <span className="login-badge">BHARATVERSE</span>

//             <h2>Welcome Back</h2>

//             <p>Login to continue your journey through hidden India.</p>

//           </div>

//            <form className="home-login-form">

//               <div className="login-input-group">
//                 <label>Email</label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div className="login-input-group">
//                 <label>Password</label>

//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>

//               <div className="login-options">
//                 <label>
//                   <input type="checkbox" />
//                   Remember me
//                 </label>

//                 <button type="button">
//                   Forgot Password?
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="home-login-btn"
//               >
//                 Login
//               </button>

//             </form>

//             <div className="home-login-divider">
//               <span>OR</span>
//             </div>

//             <button
//               type="button"
//               className="guest-login-btn"
//               onClick={() => navigate("/explore")}
//             >
//               Continue as Guest
//             </button>

//             <p className="home-signup">
//               Don't have an account?
//               <button
//                 type="button"
//                 onClick={() => navigate("/signup")}
//               >
//                 Sign Up
//               </button>
//             </p>


//         </div>

//         <p className="hero-tag">
//           DISCOVER THE INDIA YOU HAVEN'T SEEN
//         </p>

//         <h1>BharatVerse</h1>

//         <p className="hero-tagline">
//           Trend Se Pehle Discover Karo.
//         </p>

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

      {/* =========================================
          LEFT SIDE — BHARATVERSE CONTENT
      ========================================= */}

      <div className="hero-content">

        <p className="hero-tag">
          DISCOVER THE INDIA YOU HAVEN'T SEEN
        </p>

        <h1>
          BharatVerse
        </h1>

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


      {/* =========================================
          RIGHT SIDE — LIQUID GLASS LOGIN
      ========================================= */}

      <div className="home-login-panel">

        {/* LOGIN HEADER */}

        <div className="home-login-header">

          <span className="login-badge">
            BHARATVERSE
          </span>

          <h2>
            Welcome Back
          </h2>

          <p>
            Login to continue your journey through hidden India.
          </p>

        </div>


        {/* LOGIN FORM */}

        <form className="home-login-form">

          {/* EMAIL */}

          <div className="login-input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="login-input-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />

          </div>


          {/* OPTIONS */}

          <div className="login-options">

            <label>

              <input
                type="checkbox"
              />

              Remember me

            </label>


            <button
              type="button"
            >
              Forgot Password?
            </button>

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="home-login-btn"
          >
            Login
          </button>

        </form>


        {/* DIVIDER */}

        <div className="home-login-divider">

          <span>
            OR
          </span>

        </div>


        {/* GUEST LOGIN */}

        <button
          type="button"
          className="guest-login-btn"
          onClick={() => navigate("/explore")}
        >
          Continue as Guest
        </button>


        {/* SIGN UP */}

        <p className="home-signup">

          Don't have an account?

          <button
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </p>

      </div>

    </section>
  );
}