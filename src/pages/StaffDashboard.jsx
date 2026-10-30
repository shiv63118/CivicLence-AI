import { Link } from "react-router-dom";

function StaffDashboard() {
    return (
        <div className="dashboard">

            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <span className="brand-icon">C</span>
                    <span>CivicLens AI</span>
                </div>

                <p className="sidebar-label">STAFF PORTAL</p>

                <nav className="sidebar-nav">
                    <Link to="/staff/dashboard" className="nav-item active">
                        ◫ Overview
                    </Link>

                    <Link to="/staff/dashboard" className="nav-item">
                        ▤ Assigned Complaints
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
                        <h2>Department Staff Dashboard</h2>
                        <p>Review and manage assigned public grievances.</p>
                    </div>

                    <div className="user-profile">
                        <div className="user-avatar">S</div>
                        <span>Department Staff</span>
                    </div>
                </header>

                {/* Welcome Banner */}
                <section className="dashboard-welcome">
                    <div>
                        <span>DEPARTMENT WORKSPACE</span>
                        <h1>Welcome, Staff Member!</h1>
                        <p>
                            Monitor assigned complaints and help resolve
                            public grievances efficiently.
                        </p>
                    </div>
                </section>

                {/* Statistics */}
                <section className="stats-grid">

                    <div className="stat-card">
                        <div className="stat-icon blue">▤</div>
                        <p>Assigned Complaints</p>
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

                {/* Assigned Complaints */}
                <section className="card recent-section">

                    <div className="section-heading">
                        <div>
                            <h2>Assigned Complaints</h2>
                            <p>
                                Complaints assigned to your department
                                will appear here.
                            </p>
                        </div>
                    </div>

                    <div className="empty-state">
                        <div className="empty-icon">▤</div>

                        <h3>No assigned complaints to display</h3>

                        <p>
                            Assigned complaint records will appear
                            here after backend integration.
                        </p>
                    </div>

                </section>

            </main>
        </div>
    );
}

export default StaffDashboard;