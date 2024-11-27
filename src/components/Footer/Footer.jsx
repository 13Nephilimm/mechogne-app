import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <NavLink to="/" exact>
        <img src={logo} alt="logo" className="footer-logo" />
      </NavLink>

      <ul className="permalinks">
        <li>
          <NavLink to="/" exact>
            {t("home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            {t("about")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact>
            {t("leaderboard")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/players" exact>
            {t("players")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact>
            {t("contact")}
          </NavLink>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/TableTennis.ge">
          <BsFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/mechogne.tt.club">
          <BsInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com/@mechogne.tt.club">
          <BsTiktok size={24} />
        </a>
      </div>

      <div className="footer-copyright">
        <small>2024 &copy; Website by Mechogne. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
