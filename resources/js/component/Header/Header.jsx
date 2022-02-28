import React from "react";
import "./header.scss";
import * as actions from "../../actions";
import { useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";
import { NAV_LINK_LIST } from "../../constants/navLink.constant";

const Header = () => {
  const dispatch = useDispatch();
  const handleShowModal = () => {
    dispatch(actions.showModal());
  };

  const navListItem = ({ label, to, activeOnlyWhen, icon }) => {
    const match = useMatch({
      path: to,
      exact: activeOnlyWhen,
    });

    return (
      <li className="nav-item">
        <Link
          to={to}
          className={classNames("nav-link", { active: match })}
          aria-current="page"
        >
          {icon}{label}
        </Link>
      </li>
    );
  };

  const renderNavListItem = (navLinks) => {
    let xhtml = [];
    xhtml = navLinks.map((link) => {
      const { label, path, exact, icon } = link;

      return navListItem({ label: label, to: path, activeOnlyWhen: exact , icon:icon});
    });

    return xhtml;
  };

  return (
    <div className="bwm-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/home" className="navbar-brand logo" href="#">
              <div className="image-wrapper">
                <img
                  src={"/bookcover/bookworm_icon.svg"}
                  alt=""
                  className="d-inline-block align-text-top"
                />
              </div>
            </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {renderNavListItem(NAV_LINK_LIST)}
            </ul>
            <div id="sign-in" onClick={handleShowModal}>
              Sign In
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
