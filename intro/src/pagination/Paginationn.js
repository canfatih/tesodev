import React from "react";
import { Button } from "react-bootstrap";

const Paginationn = ({ totalPage, handleClick }) => {
  const pages = [...Array(totalPage).keys()].map((num) => num + 1);
  console.log(pages);
  return (
    <div className="Pagination-Component">
      {pages.map((num) => (
        <Button
          className="button-paginations"
          key={num}
          onClick={() => handleClick(num)}
        >
          {num}
        </Button>
      ))}
    </div>
  );
};

export default Paginationn;
