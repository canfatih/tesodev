import React from "react";
const User = ({ sortItems, users, }) => {
  return (
    <div className="List-Component">
      <select className="dropdown" onChange={(e) => sortItems(e.target.value)} >
        <option>OrderBY</option>
        <option value="abc">Name ascending</option>
        <option value="cba">Name descending</option>
        <option value="yeni">Year ascending</option>
        <option value="eski">Year descending</option>
      </select>
      <div>
        <p className="alt-2">
          {users.Country}-{users.City}
        </p>
        <p className="alt-3"> {users.Email}</p>
        <p className="alt-1">
          {users.Name_Surname} {users.Date}
        </p>
        <hr />
      </div>
    </div>
  );
};

export default User;
