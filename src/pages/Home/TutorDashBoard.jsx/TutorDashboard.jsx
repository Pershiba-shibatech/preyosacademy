import React from 'react'
import styles from "../dashboardhome.module.scss";
import StudentDetails from '../StudentDetails';
import StudentTable from '../Student/StudentTable';
const TutorDashboard = () => {
  return (
    <div className={styles.DashBoardHomeWrapper}>
      <StudentDetails />
      <div className={styles.tableArea}>{<StudentTable />}</div>
    </div>
  );
}

export default TutorDashboard