import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prototype login
    navigate("/");
  };

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <p className="auth-label">
            WELCOME BACK
          </p>

          <h1>
            Return to <span>BharatVerse.</span>
          </h1>

          <p>
            Continue discovering India's hidden stories,
            places and artisans.
          </p>
        </div>


        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

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
              placeholder="Enter your password"
              required
            />
          </div>


          <div className="auth-options">

            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot password?
            </button>

          </div>


          <button
            type="submit"
            className="auth-submit"
          >
            Login to BharatVerse →
          </button>

        </form>


        <div className="auth-divider">
          <span>OR</span>
        </div>


        <p className="auth-switch">
          Don't have an account?

          <Link to="/signup">
            Create one
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