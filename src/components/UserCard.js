import React from "react";
import "../index.css";

const UserCard = ({ user }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={user.avatar} className="card-img-top" alt={user.first_name} />
        <div className="card-body">
          <h4 className="card-title">
            {user.first_name} {user.last_name}
          </h4>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
