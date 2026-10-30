import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {
    const { id } = useParams();

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

                    <Link to="/submit-complaint" className="nav-item">
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
                        <h2>Complaint Details</h2>
                        <p>View your grievance information and progress.</p>
                    </div>

                    <Link to="/dashboard" className="cancel-btn">
                        ← Back to Dashboard
                    </Link>
                </header>

                {/* Complaint Information */}
                <section className="card details-card">
                    <div className="details-top">
                        <div>
                            <p className="details-label">COMPLAINT REFERENCE</p>
                            <h2>{id}</h2>
                        </div>

                        <span className="status-badge">
                            Status unavailable
                        </span>
                    </div>

                    <hr />

                    <div className="details-grid">
                        <div>
                            <p className="details-label">COMPLAINT TITLE</p>
                            <h3>Awaiting complaint data</h3>
                        </div>

                        <div>
                            <p className="details-label">LOCATION</p>
                            <p>Not available</p>
                        </div>

                        <div>
                            <p className="details-label">ASSIGNED DEPARTMENT</p>
                            <p>Not available</p>
                        </div>

                        <div>
                            <p className="details-label">SUBMISSION DATE</p>
                            <p>Not available</p>
                        </div>
                    </div>

                    <div className="details-description">
                        <h3>Complaint Description</h3>
                        <p>
                            Complaint information will appear here after
                            connecting the backend API.
                        </p>
                    </div>
                </section>

                {/* AI Analysis */}
                <section className="card details-section">
                    <h2>AI Complaint Analysis</h2>
                    <p className="section-muted">
                        AI-generated insights will be displayed here
                        when the backend provides them.
                    </p>
                </section>

                {/* Complaint Timeline */}
                <section className="card details-section">
                    <h2>Complaint Timeline</h2>
                    <p className="section-muted">
                        Complaint status history will appear here
                        after backend integration.
                    </p>
                </section>

            </main>
        </div>
    );
}

export default ComplaintDetails;