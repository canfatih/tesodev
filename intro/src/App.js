import { Container } from "react-bootstrap";
import TodoAdd from "./todoadd/TodoAdd";
import Paginationn from "./pagination/Paginationn";
import Paginations from "./pagination/Paginations";
import { useEffect, useState } from "react";
import axios from "axios";
import { USER_PER_PAGE } from "./utils/constants";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(0);
  const [filteredItems, setFilteredItems] = useState(users);

  useEffect(() => {
    const fetchUsers = async () => {
      const res2 = await axios.get("http://localhost:3000/cols");
      const res = await axios.get("http://localhost:3000/data");
      let allArr = [];

      res.data.map((x) => {
        var a = {};
        a[res2.data[0]] = x[0];
        a[res2.data[1]] = x[1];
        a[res2.data[2]] = x[2];
        a[res2.data[3]] = x[3];
        a[res2.data[4]] = x[4];
        a[res2.data[5]] = x[5];
        allArr.push(a);
      });

      setFilteredItems(allArr);
      setUsers(allArr);
      setTotalPages(Math.ceil(allArr.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  function searchTerm(term) {
    if (term.length >= 3 || term.length === 0) {
      setFilteredItems(
        users.filter((user) => {
          return user.Name_Surname.toLowerCase().includes(term.toLowerCase());
        })
      );
      console.log(searchTerm);
    }
  }
  function sortItems(val) {
    if (val === "abc") {
      setFilteredItems(
        [...users].sort((a, b) => {
          let nameA = a.Name_Surname.toUpperCase();
          let nameB = b.Name_Surname.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (val === "cba") {
      setFilteredItems(
        [...users].sort((a, b) => {
          let nameA = a.Name_Surname.toUpperCase();
          let nameB = b.Name_Surname.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (val === "eski") {
      setFilteredItems(
        [...users].sort((a, b) => {
          let dateA = a.Date.split("/").reverse().join();
          let dateB = b.Date.split("/").reverse().join();
          console.log(dateA);
          return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
        })
      );
    }
    if (val === "yeni") {
      setFilteredItems(
        [...users].sort((a, b) => {
          let dateA = a.Date.split("/").reverse().join();
          let dateB = b.Date.split("/").reverse().join();
          console.log(dateA);
          return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
        })
      );
    }
  }

  return (
    <div>
      <Container>
        <TodoAdd searchTerm={searchTerm}></TodoAdd>
        <Paginations
          sortItems={sortItems}
          users={filteredItems}
          searchTerm={searchTerm}
          page={page}
        ></Paginations>
        <Paginationn
          totalPage={totalPage}
          handleClick={handleClick}
        ></Paginationn>
      </Container>
    </div>
  );
}
export default App;
