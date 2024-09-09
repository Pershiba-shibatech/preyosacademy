import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import styles from "./student.module.scss";

// This function would simulate API data fetching
const fetchData = async (pageIndex, pageSize) => {
  // Simulate API call
//   const response = await fetch(
//     `https://api.example.com/data?page=${pageIndex}&size=${pageSize}`
//   );
//   const result = await response.json();
//   return result.data;
};

const StudentTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: "Serial Number", accessor: "serialNumber" },
      { Header: "Slots", accessor: "slots" },
      { Header: "Tutor", accessor: "tutor" },
      { Header: "Payment Status", accessor: "paymentStatus" },
      { Header: "Attend Status", accessor: "attendStatus" },
      { Header: "Link", accessor: "link" },
    ],
    []
  );

  const [data, setData] = useState([
    {
      serialNumber: 1,
      slots: "11/10/2024 - 10:00 AM - 11:00 AM",
      tutor: "Jane Smith hane hane",
      paymentStatus: "Paid",
      attendStatus: "Attended",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
    {
      serialNumber: 2,
      slots: "11:00 AM - 12:00 PM",
      tutor: "John Doe",
      paymentStatus: "Pending",
      attendStatus: "Absent",
      link: "View",
    },
  ]);
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10; // Always set to 10

  useEffect(() => {
    // Fetch data when pageIndex changes
    // const loadData = async () => {
    //   const newData = await fetchData(pageIndex, pageSize);
    //   setData(newData);
    // };
    // loadData();
  }, [pageIndex]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data, initialState: { pageIndex, pageSize } },
      usePagination
    );

  return (
    <div className={styles.StudentTableWrapper}>
   
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.paginationControls}>
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
        >
          Prev
        </button>
        <span className={styles.pageCount}>{pageIndex + 1}</span>
        <button
          onClick={() => setPageIndex((prev) => prev + 1)}
          disabled={rows.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentTable;



// const columns = React.useMemo(
//   () => [
//     { Header: "Serial Number", accessor: "serialNumber" },
//     { Header: "Slots", accessor: "slots" },
//     { Header: "Tutor", accessor: "tutor" },
//     { Header: "Payment Status", accessor: "paymentStatus" },
//     {
//       Header: "Attend Status",
//       accessor: "attendStatus",
//       Cell: ({ row }) => {
//         const [attendStatus, setAttendStatus] = useState(
//           row.original.attendStatus
//         );

//         const handleStatusChange = (e) => {
//           const newStatus = e.target.value;
//           setAttendStatus(newStatus);
//           // Optionally, you can update the server or state here if required.
//         };

//         return (
//           <select value={attendStatus} onChange={handleStatusChange}>
//             <option value="Attended">Attended</option>
//             <option value="Absent">Absent</option>
//             <option value="Pending">Pending</option>
//           </select>
//         );
//       },
//     },
//     { Header: "Link", accessor: "link" },
//   ],
//   []
// );
