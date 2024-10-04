import React from "react";
import TablePagination from "@mui/material/TablePagination";

// Define the interface for the component props
interface PaginationElementProps {
  count: number; // Total number of items
  setPage: (newPage: number) => void; // Function to set the current page
  page: number; // Current page
  setRowsPerPage: (rowsPerPage: number) => void; // Function to set rows per page
  rowsPerPage: number; // Number of rows per page
}

const PaginationElement: React.FC<PaginationElementProps> = ({
  count,
  setPage,
  page,
  setRowsPerPage,
  rowsPerPage,
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when changing rows per page
  };

  return (
    <TablePagination
      className="mt-5 mb-5"
      component="div"
      count={count}
      page={page}
      rowsPerPageOptions={[5, 10, 25]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default PaginationElement;
