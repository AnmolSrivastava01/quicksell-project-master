import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Priority_Nav, Status_Nav } from "../../Constants";
import { BsThreeDots } from "react-icons/bs";
import { getTickets, groupAndSortTickets } from "../../Action";
import Card from "../Card/Card";
import Status from "../Status/Status";
import './DashNav.css'


const Heading = ({ item, group, len }) => {
  
  let new_item;
  if (group === "priority") {
    new_item = Priority_Nav.find((ele) => ele.name === item);
  }
  if (group === "status") {
    new_item = Status_Nav.find((ele) => ele.name === item);
  }
  if (group === "user") {
    new_item = <Status name={item}/>
  }

  return (
    <div
      className="heading"
    >
      <div className="userName">
        {group === "user" ? new_item : new_item?.icon ? new_item.icon : <BsThreeDots/>}
        <h1 style={{fontSize:"0.875rem",lineHeight:"1.25rem", fontWeight:"lighter"}}>{item}</h1>
        <span>{len}</span>
      </div>
      <div className="userName">
        <GrAdd />
        <BsThreeDots />
      </div>
    </div>
  );
};

const DashNav = ({ group, order }) => {
  const [tickets] = useState(getTickets());
  const [data, setData] = useState(groupAndSortTickets(tickets, group, order));
  useEffect(() => {
    setData(() => groupAndSortTickets(tickets, group, order));
  }, [group, order, tickets]);
  console.log(data.user);
  return (
  <section style={{background:"#f4f5f8",height:"90vh"}}>
    <div    style={{fontSize:"0.875rem",lineHeight:"1.25rem"}}>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {
          data?.selectedData?.map((item, index) => {
            return (
              <div className="columnHeading" key={index}>
                <Heading
                  item={item[index].title}
                  group={group}
                  len={item[index]?.value?.length}
                  key={index}
                />
                {item[index].value.map((ele, index) => {
                  return <Card item={ele} key={index} us={data?.user}/>;
                })}
              </div>
            );
          })
        }
      </div>
    </div>
    </section>
  );
};

export default DashNav;
