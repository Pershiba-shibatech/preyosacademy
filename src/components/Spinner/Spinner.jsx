import React from 'react'
import { Spinner } from 'react-bootstrap';
import styles from './spinner.module.scss'

const SpinnerComp = () => {
    return (
        <div className={styles.SpinnerWrapper}>
            <Spinner animation="border" role="status" className={styles.spinnnerClass} variant='danger'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
      
    );
}

export default SpinnerComp
