import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div className="dashboard-cards">
                <Link to="/admin/orders" className="dashboard-card">All Orders</Link>
                <Link to="/admin/add-product" className="dashboard-card">Add New Product</Link>
                <Link to="/admin/manage-coupons" className="dashboard-card">Manage Coupons</Link>
                <Link to="/admin/view-complaints" className="dashboard-card">View Complaints</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
