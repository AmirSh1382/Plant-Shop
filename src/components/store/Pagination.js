import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, changePage } from "../../redux/pagination/paginationActions";

const Pagination = () => {
  const dispatch = useDispatch();

  const paginationState = useSelector(state => state.paginationState);
  const { paginationBtns, currentPage, pagesCount } = paginationState;

  const clickHandler = (action, btn) => {
    dispatch(action);

    // To fix scroll to top bug
    if (btn === "PREV" && currentPage !== 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (btn === "NEXT" && currentPage !== pagesCount) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (btn === "NUMBER") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-x-2 justify-center">
      <button
        onClick={() => clickHandler(prevPage(), "PREV")}
        className={`${currentPage === 1 && "opacity-50 cursor-default"}
            border border-primary rounded flex justify-center items-center w-7 h-7`}
      >
        <i className="bi bi-chevron-compact-right flex"></i>
      </button>

      {
        paginationBtns.map(btn => (
          <button
            key={btn}
            onClick={() => clickHandler(changePage(btn), "NUMBER")}
            className={`${currentPage === btn && "bg-primary text-white"}
                border border-primary rounded flex justify-center items-center rounded w-7 h-7`}
          >
            <span className="pt-1 block">{btn}</span>
          </button>
        ))
      }

      <button
        onClick={() => clickHandler(nextPage(), "NEXT")}
        className={`${currentPage === pagesCount && "opacity-50 cursor-default"}
            border border-primary flex justify-center items-center rounded w-7 h-7`}
      >
        <i className="bi bi-chevron-compact-left flex"></i>
      </button>
    </div>
  );
};

export default Pagination;