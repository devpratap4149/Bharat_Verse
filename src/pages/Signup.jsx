import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype signup
    navigate("/login");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <p className="auth-label">
            JOIN BHARATVERSE
          </p>

          <h1>
            Start your <span>journey.</span>
          </h1>

          <p>
            Create your account and start discovering
            India's hidden stories and places.
          </p>
        </div>


        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              minLength="6"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              minLength="6"
              required
            />
          </div>


          <button
            type="submit"
            className="auth-submit"
          >
            Create Account →
          </button>

        </form>


        <div className="auth-divider">
          <span>OR</span>
        </div>


        <p className="auth-switch">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>


        <Link
          to="/"
          className="auth-back"
        >
          ← Back to BharatVerse
        </Link>

      </div>

    </main>
  );
}