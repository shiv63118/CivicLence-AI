import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Login from "./pages/Login";
import CitizenDashboard from "./pages/CitizenDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="menu-container">
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {menuOpen && (
                    <div className="dropdown-menu">
                        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Citizen Dashboard</Link>
                        <Link to="/submit-complaint" onClick={() => setMenuOpen(false)}>Submit Complaint</Link>
                        <Link to="/complaints/12345" onClick={() => setMenuOpen(false)}>Complaint Details</Link>
                        <Link to="/staff/dashboard" onClick={() => setMenuOpen(false)}>Staff Dashboard</Link>
                        <Link to="/admin/dashboard" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
                    </div>
                )}
            </div>

            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<CitizenDashboard />} />
                <Route path="/submit-complaint" element={<SubmitComplaint />} />
                <Route path="/complaints/:id" element={<ComplaintDetails />} />
                <Route path="/staff/dashboard" element={<StaffDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;