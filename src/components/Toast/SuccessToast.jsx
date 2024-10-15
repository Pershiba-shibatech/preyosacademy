import React, { useEffect } from 'react'

import styles from './Toast.module.scss'

import { Toast, Button } from 'react-bootstrap';
import { ToastSliceActions } from '../../store/slice/ToastSlice';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react/dist/iconify.js';

const SuccessToast = ({ Message }) => {
    useEffect(() => {
        setTimeout(() => {
            dispatch(ToastSliceActions.clearToast())
        }, 2000)
    }, [])

    const dispatch = useDispatch();
    return (
        <div className={styles.SuccesstoastWrapper}>
            <Toast
                className={`d-inline-block m-1 ${styles.toastColor}`}

                onClose={() => dispatch(ToastSliceActions.clearToast())}

            >
                <Toast.Body className="d-flex justify-content-between align-items-center">
                    <span>{Message}</span>

                    <Icon icon="ri:close-circle-fill"
                        onClick={() => dispatch(ToastSliceActions.clearToast())}
                        width='24px' height='24px' style={{ color: "rgb(4, 155, 67)" }} />
                </Toast.Body>
            </Toast>
        </div>
    );
};

export default SuccessToast;

