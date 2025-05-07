// components/Breadcrumbs.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="absolute p-5 font-[choco] z-50">
      <Link to="/" className="hover:underline">Home</Link>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            {" / "}
            {isLast ? (
              <span>{value.replace(/-/g, " ")}</span>
            ) : (
              <Link to={to} className="hover:underline">
                {value.replace(/-/g, " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
