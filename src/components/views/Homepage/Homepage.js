import React from 'react';
import PropTypes from 'prop-types';
import {Posts} from '../../features/Posts/Posts';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.head}>
      <h1 className={styles.title}>Our annoucements!</h1>
    </div>
    <Posts/>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
};
