import React from "react";
import Layout from "../layouts/Main";

export default function Profile() {
  return (
    <Layout>
      <div className="profile">
        <div className="profile-header">
          <img
            className="profile-avatar"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile Avatar"
          />
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-bio">Web Developer</p>
        </div>
        <div className="profile-details">
          <div className="detail">
            <span className="detail-label">Location:</span>
            <span className="detail-value">New York, USA</span>
          </div>
          <div className="detail">
            <span className="detail-label">Email:</span>
            <span className="detail-value">john@example.com</span>
          </div>
          <div className="detail">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">123-456-7890</span>
          </div>
          <div className="detail">
            <span className="detail-label">Shipping Address:</span>
            <span className="detail-value">123 Main St, New York, USA</span>
          </div>
          <div className="detail">
            <span className="detail-label">Orders:</span>
            <span className="detail-value">10 orders placed</span>
          </div>
     
        </div>
      </div>
    </Layout>
  );
}
