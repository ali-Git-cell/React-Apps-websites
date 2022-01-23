import React from "react";

function Pagination({ gotoNxtpage, gotoPrevpage }) {
  return (
    <div>
      {gotoPrevpage && <button onClick={gotoPrevpage}>Prev</button>}
      {gotoNxtpage && <button onClick={gotoNxtpage}>Next</button>}
    </div>
  );
}

export default Pagination;
