import React, { useState } from "react";
import "./Nav.css";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";


const Nav = ({ group, setGroup, order, setOrder }) => {
  const [display, setDisplay] = useState(false);

  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroup(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      localStorage.setItem("order", e.target.value);
    }
    setDisplay(!display);
  };


  return (
    <div className="top" style={{background:"white"}}>
      <div className="displayBtn">
        <button className="btn" onClick={() => setDisplay(!display)}>
          {" "}
          <HiMiniAdjustmentsHorizontal />
          <span>Display</span>
          <MdKeyboardArrowDown />
        </button>
        {display && (
          <>
            <div className="dropMenu" style={{zIndex : "10"}}>
              <div className="selectDiv">
                <span style={{ color: "#8c8d8e" }}>Grouping</span>
                <select
                  value={group}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectDiv">
                <span style={{ color: "#8c8d8e" }}>Ordering</span>
                <select
                  value={order}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
