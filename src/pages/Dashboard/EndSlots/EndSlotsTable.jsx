
import React from 'react'
import styles from "../../Home/dashboardhome.module.scss";
import StudentTable from '../../Home/Student/StudentTable';

import EndSlotsHeader from './EndSlotsHeader';
const EndSlotsTable = () => {
   return (
     <div className={styles.DashBoardHomeWrapper}>
       {/* <SlotsHeader /> */}
       <EndSlotsHeader />
       <div className={styles.tableArea}>{<StudentTable />}</div>
     </div>
   );
}

export default EndSlotsTable