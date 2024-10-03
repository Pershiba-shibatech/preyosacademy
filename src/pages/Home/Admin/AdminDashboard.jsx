import React from 'react'
import styles from "../dashboardhome.module.scss";
import StudentTable from "../Student/StudentTable";
import AdminHeader from './AdminHeader';
const AdminDashboard = () => {
   return (
     <div className={styles.DashBoardHomeWrapper}>
       <AdminHeader />
       <div className={styles.tableArea}>{<StudentTable />}</div>
     </div>
   );
}

export default AdminDashboard