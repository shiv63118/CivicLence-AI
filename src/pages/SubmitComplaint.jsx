import { Link } from "react-router-dom";

function SubmitComplaint() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Backend integration is pending.");
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <span className="brand-icon">C</span>
                    <span>CivicLens AI</span>
                </div>

                <p className="sidebar-label">MAIN MENU</p>

                <nav className="sidebar-nav">
                    <Link to="/dashboard" className="nav-item">
                        ◫ Dashboard
                    </Link>

                    <Link to="/submit-complaint" className="nav-item active">
                        ＋ Submit Complaint
                    </Link>
                </nav>

                <div className="sidebar-bottom">
                    <Link to="/login" className="nav-item">
                        ↪ Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div>
                        <h2>Submit a Complaint</h2>
                        <p>Tell us about the public issue you are facing.</p>
                    </div>
                </header>

                <section className="card complaint-form-card">
                    <div className="section-heading">
                        <h2>Complaint Information</h2>
                        <p>Provide accurate details so your issue can be understood.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Complaint Title *</label>
                            <input
                                type="text"
                                placeholder="Example: Damaged road near my locality"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Complaint Description *</label>
                            <textarea
                                rows="5"
                                placeholder="Describe the issue in detail..."
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Location *</label>
                            <input
                                type="text"
                                placeholder="Enter the location of the issue"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Upload Supporting Image (Optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                            />
                            <small className="form-help">
                                You can attach an image to help explain the issue.
                            </small>
                        </div>

                        <div className="form-actions">
                            <Link to="/dashboard" className="cancel-btn">
                                Cancel
                            </Link>

                            <button type="submit" className="btn">
                                Submit Complaint →
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default SubmitComplaint;