import React from "react";

function Pagination({ totalPages, currentPage, onChangePage }) {
  return (
    <div>
      <nav>
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              disabled={currentPage === 1}
              onClick={() => onChangePage(currentPage - 1)}
              className={`${
                currentPage === 1
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } bg-white border border-gray-300 text-gray-500 ml-0 rounded-l-lg leading-tight py-2 px-3 `}
            >
              Previous
            </button>
          </li>
          <li>
            <div className="bg-white border border-gray-300 text-gray-500 leading-tight py-2 px-3 ">
              {currentPage}
            </div>
          </li>
          <li>
            <button
              disabled={totalPages === currentPage}
              onClick={() => onChangePage(currentPage + 1)}
              className={`${
                totalPages === currentPage
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } bg-white border border-gray-300 text-gray-500 rounded-r-lg leading-tight py-2 px-3 `}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
