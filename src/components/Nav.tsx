import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/post/1">Post1</Link>
      <br />
      <Link to="/post/2">Post 2</Link>
      <br />
      <Link to="/add/1/2">Add</Link>
      <br />
      <Link to="/add?a=1&b=9">Add 2</Link>
      <br />
      <Link to="/photos">Photos</Link>
    </div>
  );
};
