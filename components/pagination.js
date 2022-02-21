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
              } bg-white border border-gray-300 text-gray-500 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Previous
            </button>
          </li>
          <li>
            <div className="bg-white border border-gray-300 text-gray-500 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
              } bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
