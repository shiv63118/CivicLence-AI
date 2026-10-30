function AdminDashboard() {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <span className="brand-icon">C</span>
                    <h2>CivicLens AI</h2>
                </div>

                <p className="sidebar-label">ADMIN PANEL</p>

                <nav className="sidebar-nav">
                    <a href="/admin/dashboard" className="nav-item active">
                        📊 Overview
                    </a>
                    <a href="/admin/dashboard" className="nav-item">
                        📋 All Complaints
                    </a>
                    <a href="/admin/dashboard" className="nav-item">
                        👥 Users & Staff
                    </a>
                    <a href="/admin/dashboard" className="nav-item">
                        🏢 Departments
                    </a>
                </nav>

                <div className="sidebar-bottom">
                    <a href="/login" className="nav-item">🚪 Logout</a>
                </div>
            </aside>

            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div>
                        <h2>Admin Dashboard</h2>
                        <p>Manage the grievance resolution platform.</p>
                    </div>
                    <div className="user-profile">
                        <div className="user-avatar">A</div>
                        <span>Administrator</span>
                    </div>
                </header>

                <section className="dashboard-welcome">
                    <div>
                        <h1>Platform Overview 👋</h1>
                        <p>Monitor complaints, departments and platform activity.</p>
                    </div>
                </section>

                <section className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon blue">📋</div>
                        <h3>—</h3>
                        <p>Total Complaints</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">⏳</div>
                        <h3>—</h3>
                        <p>Pending Complaints</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">✓</div>
                        <h3>—</h3>
                        <p>Resolved Complaints</p>
                    </div>
                </section>

                <section className="card recent-section">
                    <div className="section-heading">
                        <h2>Complaint Management</h2>
                    </div>

                    <div className="empty-state">
                        <div className="empty-icon">📊</div>
                        <h3>Platform Analytics</h3>
                        <p>
                            Complaint records and analytics will appear here
                            after backend integration.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AdminDashboard;