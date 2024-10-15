
import React from 'react'
import styles from "../../Home/dashboardhome.module.scss";
import StudentTable from '../../Home/Student/StudentTable';
import SlotsHeader from './SlotsHeader';
const AllSlotsTable = () => {
   return (
     <div className={styles.DashBoardHomeWrapper}>
       <SlotsHeader />
       <div className={styles.tableArea}>{<StudentTable />}</div>
     </div>
   );
}

export default AllSlotsTable