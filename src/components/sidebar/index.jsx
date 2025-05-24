import React, { useEffect } from "react";
import CollapsibleNavItem from "./CollapsibleNavItem";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import { loadPageScript } from "../../utils/pagescript";

const Sidebar = () => {
  const { t } = useTranslation();

  useEffect(() => {
    loadPageScript();
  });
  return (
    <ul
      className="navbar-nav bg-white sidebar accordion"
      id="accordionSidebar"
      style={{ color: "#666" }}
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
        style={{ color: "#00bcd4" }}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="sidebar-brand-text mx-3">IoT DashBoard</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <NavItem icon={"fa-home"} link={"/"} text={t("home")} />

      <NavItem icon={"fa-user"} link={"/profile"} text={t("profile")} />
      <CollapsibleNavItem
        id={"collapsePages"}
        icon={"fa-cogs"}
        text={t("settings")}
        subtext={"Screens:"}
        items={[
          ["Login", "login"],
          ["Register", "login"],
          ["Logout", ""],
        ]}
      />
      <NavItem icon={"fa-cogs"} link={"/settings"} text={t("settings")} />
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <CollapsibleNavItem
        id={"collapseTwo"}
        icon={"fa-cog"}
        text={"Support"}
        subtext={"Custom Components:"}
        items={[
          ["Buttons", "buttons.html"],
          ["Cards", "cards.html"],
        ]}
      />

      <CollapsibleNavItem
        id={"collapseUtilities"}
        icon={"fa-wrench"}
        text={"Utilities"}
        subtext={"Custom Utilities:"}
        items={[
          ["Colors", "utilities-color.html"],
          ["Borders", "utilities-border.html"],
          ["Animations", "utilities-animation.html"],
          ["Other", "utilities-other.html"],
        ]}
      />

      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
