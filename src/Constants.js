import {
    BsExclamationSquareFill,
    BsStack,
    BsThreeDots,
  } from "react-icons/bs";
  import {AiFillCheckCircle} from 'react-icons/ai'
  import { GrStatusGood } from "react-icons/gr";
  import {FaSignal} from 'react-icons/fa'
  import {
    MdSignalCellularAlt,
    MdSignalCellularAlt2Bar,
  } from "react-icons/md";
  import { WiMoonAltThirdQuarter } from "react-icons/wi";
  import { RxCrossCircled } from "react-icons/rx";
  export const Priority_Nav = [
    {
      name: "No Priority",
      icon: <BsThreeDots/>,
      rank : 0
    },
    {
      name: "Urgent",
      icon: <BsExclamationSquareFill style={{color:"#f17a30"}}/>,
      rank : 4
    },
  
    {
      name: "High",
      icon: <FaSignal/>,
      rank : 4
    },
    {
      name: "Medium",
      icon: <MdSignalCellularAlt />,
      rank : 2
    },
    {
      name: "Low",
      icon: <MdSignalCellularAlt2Bar />,
      rank : 1
    },
  ];
  
  export const Status_Nav = [
    {
      name: "Backlog",
      icon: <BsStack />,
    },
    {
      name: "Todo",
      icon: <GrStatusGood />,
    },
  
    {
      name: "In progress",
      icon: <WiMoonAltThirdQuarter style={{color : "#eec12d"}}/>,
    },
    {
      name: "Done",
      icon: <AiFillCheckCircle style={{color:"#6470d4" }}/>,
    },
    {
      name: "Cancelled",
      icon: <RxCrossCircled />,
    },
  ];

