import axios from "axios";
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = response.data;
    localStorage.setItem("tickets", JSON.stringify(data.tickets));
    localStorage.setItem("users", JSON.stringify(data.users));
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export const groupAndSortTickets = (tickets, groupBy, orderBy) => {
  try {
    let users = getUsers();
    let arr = [],
    selectedData = [];
    let user = false;
    if (groupBy === "status") {
      arr = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
      arr.forEach((element, index) => {
        let arr = tickets.filter((item) => {
          return element === item.status;
        });
        selectedData.push({
          [index]: {
            title: element,
            value: arr,
          },
        });
      });
    } else if (groupBy === "user") {
      user = true;
      users?.forEach((element, index) => {
        arr = tickets?.filter((items) => {
          return element.id === items.userId;
        });
        selectedData.push({
          [index]: {
            title: element.name,
            value: arr,
          },
        });
      });
    } else {
      let list = ["No priority", "Low", "Medium", "High", "Urgent"];
      list.forEach((element, index) => {
        arr = tickets.filter((item) => {
          return index === item.priority;
        });
        selectedData.push({
          [index]: {
            title: element,
            value: arr,
          },
        });
      });
    }

    if (orderBy === "title") {
      selectedData.forEach((elem, index) => {
        elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    if (orderBy === "priority") {
      selectedData.forEach((elem, index) => {
        elem[index]?.value?.sort((a, b) => b.priority - a.priority);
      });
    }

    return { selectedData, user};
  } catch (error) {
    console.log("Error in selecting data");
  }
};

export const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

export const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

export const getTickets = () => {
  try {
    let data = localStorage.getItem("tickets");
    data = JSON.parse(data);
    if (!data) {
      return {};
    }
    return data;
  } catch (error) {
    return "Something went wrong in fetching tickets";
  }
};

export const getUsers = () => {
  try {
    let data = localStorage.getItem("users");
    if (!data) {
      return {};
    }
    return JSON.parse(data);
  } catch (error) {
    return "Something went wrong in fetching users";
  }
};
