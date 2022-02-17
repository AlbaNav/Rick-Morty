import React,{ useState } from "react";

export default function Pagination({ getData }) {
  const [actualPage, setActualpage] = useState(1);

  const changePage = (newPage) => {
    getData(newPage);
    setActualpage(newPage);
  };

  return (
    <div styles="align-center">
      <button onClick={() => { changePage(actualPage - 1)}}>{"<"}</button>
      {actualPage}
      <button onClick={() => {changePage(actualPage + 1)}}>{">"}</button>
    </div>
  );
}
