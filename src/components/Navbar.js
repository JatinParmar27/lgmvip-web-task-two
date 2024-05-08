import React from "react";

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar container navbar-dark rounded bg-primary mt-5">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Jatin Parmar</span>
        <button className="btn btn-light" onClick={getUsers}>
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
