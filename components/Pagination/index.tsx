/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-14 18:40:26
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 15:11:46
 */
import React, { Fragment, useState, useEffect } from "react";
import css from "./style.less";

// type Props = {
//     skip?: number;
//     range: number[];
//     handlePaginationChange: Function;
// }

export type PaginatorProps = {
  skip: number;
  range: number[];
  handlePaginationChange: (page: number) => void;
};
const PaginatorComponent = ({
  skip = 1,
  range = [1, 2, 3, 4, 5],
  handlePaginationChange = (page: number) => {},
}) => {
  skip = !!skip ? skip : 0;

  const [page, setPageNumber] = useState(1);

  useEffect(() => {
    return setPageNumber(skip);
  }, [skip]);

  const moveToNextPage = () => {
    if (page > 1) {
      handlePaginationChange(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (page < range[range.length - 1]) {
      handlePaginationChange(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  const moveToPage = (pageNumber) => {
    handlePaginationChange(pageNumber);
    return setPageNumber(pageNumber);
  };

  const renderPageIndicators = (num, index) => (
    <span
      className={`${css.pageNumber} ${num === page ? css.selected : ""}`}
      key={index}
      onClick={() => moveToPage(num)}
    >
      {num}
    </span>
  );

  return (
    <Fragment>
      <div className={css.paginator}>
        {range.length > 1 ? (
          <button className={css.paginatorButton} onClick={moveToNextPage}>
            <span className={css.indicator}>{"<"}</span>{" "}
            {/* <span className={css.paginatorLabel}> Previous </span> */}
          </button>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <button className={css.paginatorButton} onClick={moveToPreviousPage}>
            {/* <span className={css.paginatorLabel}> Next</span>{" "} */}
            <span className={css.indicator}>{">"}</span>
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default PaginatorComponent;
