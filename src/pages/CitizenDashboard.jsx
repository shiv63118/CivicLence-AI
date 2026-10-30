import { Link } from "react-router-dom";

function CitizenDashboard() {
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
                    <Link to="/dashboard" className="nav-item active">
                        ◫ Dashboard
                    </Link>

                    <Link to="/submit-complaint" className="nav-item">
                        ＋ Submit Complaint
                    </Link>

                    <Link to="/dashboard" className="nav-item">
                        ▤ My Complaints
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
                        <h2>Citizen Dashboard</h2>
                        <p>Manage and track your public grievances.</p>
                    </div>

                    <div className="user-profile">
                        <div className="user-avatar">U</div>
                        <span>Citizen</span>
                    </div>
                </header>

                <section className="dashboard-welcome">
                    <div>
                        <span>YOUR CIVIC CONNECTION</span>
                        <h1>Welcome Back!</h1>
                        <p>
                            Raise your concerns and help make your
                            community better.
                        </p>
                    </div>

                    <Link to="/submit-complaint" className="btn">
                        + New Complaint
                    </Link>
                </section>

                {/* Statistics */}
                <section className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon blue">▤</div>
                        <p>Total Complaints</p>
                        <h2>—</h2>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">◷</div>
                        <p>Pending Complaints</p>
                        <h2>—</h2>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">✓</div>
                        <p>Resolved Complaints</p>
                        <h2>—</h2>
                    </div>
                </section>

                {/* Recent Complaints */}
                <section className="recent-section card">
                    <div className="section-heading">
                        <div>
                            <h2>Recent Complaints</h2>
                            <p>Your submitted grievances will appear here.</p>
                        </div>
                    </div>

                    <div className="empty-state">
                        <div className="empty-icon">▤</div>
                        <h3>No complaints to display</h3>
                        <p>
                            Your complaint history will appear here
                            once the backend is connected.
                        </p>

                        <Link to="/submit-complaint" className="btn">
                            Submit Your First Complaint
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default CitizenDashboard;