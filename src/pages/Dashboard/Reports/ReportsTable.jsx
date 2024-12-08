
import React from 'react'
import styles from "../../Home/dashboardhome.module.scss";
import StudentTable from '../../Home/Student/StudentTable';
import ReportsHeader from './ReportsHeader';
const ReportsTable = () => {
   return (
     <div className={styles.DashBoardHomeWrapper}>
       {/* <SlotsHeader /> */}
       <ReportsHeader />
       <div className={styles.tableArea}>{<StudentTable />}</div>
     </div>
   );
}

export default ReportsTable