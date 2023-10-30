import React from "react";
import "./Card.css";
import { alphabeticColorCode } from "../../Color";
import { getUsers } from "../../Action";
import { Priority_Nav, Status_Nav } from "../../Constants";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const users = getUsers();
const Card = ({ item , us}) => {
  let icon1 = Status_Nav.find((ele) => item.status === ele.name);
  let icon2 = Priority_Nav.find((ele) => item.priority === ele.rank);
  
  let user = users.find((ele) => ele.id === item.userId)
  let available = user?.available ? "#00ff00" : "silver"

  return (
    <div className="cardContainer" style={{marginTop:"0.75rem"}}>
      <div className="cardHeading">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {item.id}
        </span>
        {
          !us ?
          (<div
            className="imageContainer relative"
            style={{ width: "25px", height: "25px" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: alphabeticColorCode[user.name.toLowerCase()[0]],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "medium",
                padding: "5px",
                fontWeight: "600",
              }}
            >
              <span style={{background:"none"}}>{user.name[0]}</span>
            </div>
            <div className="showStatus" style={{background : available}}></div>
          </div>) :
          <BsThreeDotsVertical/>
        }
      </div>
      <div
        className="cardTitle"
        style={{ fontWeight: 200 }}
      >
        <span>{icon1?.icon}</span>
        <p>{item.title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">{icon2 ? icon2.icon : <BsThreeDots/>}</div>
        <div className="tags color-grey">
          {item.tag?.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
