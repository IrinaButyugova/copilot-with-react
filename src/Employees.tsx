import { useState } from "react";
import Pagination from "./Pagination";

const employees = [
  { id: 1, firstName: "Alice", lastName: "Johnson" },
  { id: 2, firstName: "Brian", lastName: "Miller" },
  { id: 3, firstName: "Catherine", lastName: "Davis" },
  { id: 4, firstName: "David", lastName: "Wilson" },
  { id: 5, firstName: "Ella", lastName: "Brown" },
  { id: 6, firstName: "Frank", lastName: "Garcia" },
  { id: 7, firstName: "Grace", lastName: "Martinez" },
  { id: 8, firstName: "Henry", lastName: "Lopez" },
  { id: 9, firstName: "Isabella", lastName: "Gonzalez" },
  { id: 10, firstName: "Jack", lastName: "Anderson" },
  { id: 11, firstName: "Katherine", lastName: "Thomas" },
  { id: 12, firstName: "Liam", lastName: "Taylor" },
  { id: 13, firstName: "Mia", lastName: "Hernandez" },
  { id: 14, firstName: "Noah", lastName: "Moore" },
  { id: 15, firstName: "Olivia", lastName: "Martin" },
  { id: 16, firstName: "Paul", lastName: "Jackson" },
  { id: 17, firstName: "Quinn", lastName: "Thompson" },
  { id: 18, firstName: "Ryan", lastName: "White" },
  { id: 19, firstName: "Sophia", lastName: "Lee" },
  { id: 20, firstName: "Thomas", lastName: "Harris" },
  { id: 21, firstName: "Uma", lastName: "Clark" },
  { id: 22, firstName: "Victor", lastName: "Lewis" },
  { id: 23, firstName: "Wendy", lastName: "Robinson" },
  { id: 24, firstName: "Xavier", lastName: "Walker" },
  { id: 25, firstName: "Yvonne", lastName: "Perez" },
  { id: 26, firstName: "Zachary", lastName: "Hall" },
  { id: 27, firstName: "Amber", lastName: "Allen" },
  { id: 28, firstName: "Brandon", lastName: "Young" },
  { id: 29, firstName: "Chloe", lastName: "King" },
  { id: 30, firstName: "Dylan", lastName: "Scott" },
];

export default function Employees() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <div>
        <h1>Employees List</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th> 
                </tr>
            </thead>
            <tbody>
                {employees.slice(
                    (page - 1) * itemsPerPage,
                    page * itemsPerPage
                ).map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                    </tr>
                ))}
            </tbody>
        </table>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}