import { CiEdit as edit } from "react-icons/ci";
import { MdOutlineForwardToInbox as inbox } from "react-icons/md";
import { CiUser as user } from "react-icons/ci";
import { CiSettings as settings } from "react-icons/ci";
import { IoIosHelpCircleOutline as help } from "react-icons/io";
import { IoIosLogOut as logout } from "react-icons/io";

import React, { useState, useEffect, useRef } from "react";

function App() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            }
            alt="avatar"
          ></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            Sachin Gupta
            <br />
            <span>Web Developer</span>
          </h3>
          <ul>
            <DropdownItem icon={user} text={"My Profile"} />
            <DropdownItem icon={edit} text={"Edit Profile"} />
            <DropdownItem icon={inbox} text={"Inbox"} />
            <DropdownItem icon={settings} text={"Settings"} />
            <DropdownItem icon={help} text={"Helps"} />
            <DropdownItem icon={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

const DropdownItem = (props) => {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      <props.icon />
      <span> {props.text} </span>
    </li>
  );
};

export default App;
