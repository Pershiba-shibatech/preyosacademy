import React from 'react';
import styles from './emptystate.module.scss';
import { emptyState } from '../../images/index';

const EmptyState = ({EmptyStateText}) => {
    return (
        <div className={styles.noSessionData}>
            <img src={emptyState} alt='empty state' />
            <div className={styles.emptyStateText}>
                No Slots Available
            </div>
        </div>
    );
};

export default EmptyState;
