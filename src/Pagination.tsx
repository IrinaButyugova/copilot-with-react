import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages?: number;
  onChange: (newPage: number) => void;
};

/**
 * A pagination component that allows users to navigate through pages.
 * 
 * @component
 * @param props - The component props
 * @param {number} props.currentPage - The current active page number
 * @param {number} [props.totalPages=1] - The total number of pages available (defaults to 1)
 * @param {function} props.onChange - Callback function that is called when the page changes
 * 
 * @example
 * ```tsx
 * <Pagination 
 *   currentPage={1}
 *   totalPages={10}
 *   onChange={(page) => console.log(`Changed to page ${page}`)}
 * />
 * ```
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages = 1, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value));
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1);
    }
  };

  return (
    <div>
      <span>Page </span>
      <select value={currentPage} onChange={handleChange}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
      <span> of {totalPages} </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;