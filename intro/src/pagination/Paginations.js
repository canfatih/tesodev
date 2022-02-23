import { USER_PER_PAGE } from "../utils/constants";
import User from "./User";

const Paginations = ({ users, page, sortItems }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);

  return selectedUsers.map((user) => (
    <User users={user} sortItems={sortItems} ></User>
  ));
};

export default Paginations;
