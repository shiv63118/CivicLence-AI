import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-page">
            <div className="login-left">
                <div className="brand">
                    <span className="brand-icon">C</span>
                    <span>CivicLens AI</span>
                </div>

                <div className="login-content">
                    <span className="welcome-tag">SMARTER GOVERNANCE</span>

                    <h1>
                        Your Voice.
                        <br />
                        Our Responsibility.
                    </h1>

                    <p>
                        A smarter way to report public issues, track
                        complaints and build better communities.
                    </p>

                    <div className="login-features">
                        <div>✓ Easy complaint submission</div>
                        <div>✓ Transparent complaint tracking</div>
                        <div>✓ AI-powered complaint analysis</div>
                    </div>
                </div>

                <p className="login-footer">
                    CivicLens AI · Public Grievance Intelligence Platform
                </p>
            </div>

            <div className="login-right">
                <div className="login-card">
                    <h2>Welcome back!</h2>
                    <p className="login-description">
                        Sign in to access your CivicLens account.
                    </p>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn login-btn">
                            Sign In →
                        </button>
                    </form>

                    <p className="login-note">
                        Secure access to your grievance management portal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;