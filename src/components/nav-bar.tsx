import React from "react";
//import profile from "../assets/images/profile.png";
export const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <h2 className="log">Social</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search for creators, inspirations, and"
          />
        </div>
        <div className="create">
          <label htmlFor="create-post">
            <div className="profile-picture">
              {/* <img src={profile} /> */}
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};
