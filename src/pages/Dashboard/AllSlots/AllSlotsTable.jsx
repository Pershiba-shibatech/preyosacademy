
import React from 'react'
import styles from "../../Home/dashboardhome.module.scss";
import StudentTable from '../../Home/Student/StudentTable';
import AdminHeader from '../../Home/Admin/AdminHeader';
const AllSlotsTable = () => {
   return (
     <div className={styles.DashBoardHomeWrapper}>
       {/* <SlotsHeader /> */}
       <AdminHeader/>
       <div className={styles.tableArea}>{<StudentTable />}</div>
     </div>
   );
}

export default AllSlotsTable