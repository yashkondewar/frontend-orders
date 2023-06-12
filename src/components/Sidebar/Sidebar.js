import React from "react";
import "./Sidebar.css";
import Profile from "../Profile/Profile";

import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-menu">
          <div>
            <Profile />
          </div>
          <li className="sidebar-menu-item">
            <a href="/orders">
              <AcUnitOutlinedIcon className="sidebar-menu-icon" />
              <span>Orders</span>
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="/inventory">
              <Inventory2OutlinedIcon className="sidebar-menu-icon" />{" "}
              <span>Inventory</span>
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="/transactions">
              <ReceiptOutlinedIcon className="sidebar-menu-icon" />{" "}
              <span>Transactions</span>
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="/Offers&Discounts">
              <DiscountIcon className="sidebar-menu-icon" />{" "}
              <span>Offers & Discounts</span>
              <br />
              <span>
                <small>
                  <i>only for premium users</i>
                </small>
              </span>
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="/premium">
              <WorkspacePremiumIcon className="sidebar-menu-icon" />{" "}
              <span>Premium</span>
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="/support">
              <ContactSupportOutlinedIcon className="sidebar-menu-icon" />{" "}
              <span>Support</span>
            </a>
          </li>
          <div className="create_button">
            <button>
              <AppRegistrationOutlinedIcon className="sidebar-menu-icon" />
              &nbsp;&nbsp; Create new order
            </button>
          </div>
          <div className="lout">
            <LogoutIcon className="sidebar-menu-icon"/> &nbsp;&nbsp;&nbsp;Logout
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
