import React, { useEffect } from 'react'

import styles from './Toast.module.scss'

import { Toast, Button } from 'react-bootstrap';
import { ToastSliceActions } from '../../store/slice/ToastSlice';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react/dist/iconify.js';

const FailureToast = ({Message}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(ToastSliceActions.clearToast())
        }, 2000)
    }, [])
  return (
    <div className={styles.failureToastWrapper}>
       <Toast
        className={`d-inline-block m-1 ${styles.toastColor}`}
   
        onClose={()=>dispatch(ToastSliceActions.clearToast())}
      
      >
        <Toast.Body className="d-flex justify-content-between align-items-center">
          <span>{Message}</span>
         
          <Icon icon="ri:close-circle-fill"
           onClick={()=>dispatch(ToastSliceActions.clearToast())}
            width='24px' height='24px'  style={{color: "red"}} />
        </Toast.Body>
      </Toast>
    </div>
  )
}

export default FailureToast
