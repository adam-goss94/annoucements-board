import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';

const Component = ({userLogged}) => (
  <div className={styles.root}>
    <nav className={styles.component}>
      {userLogged
        ?
        <div>
          <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home</Button>
          <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/post/add'} activeClassName='active'>Add new post</Button>
          <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/myposts'} activeClassName='active'>My posts</Button>
          <Button className={styles.link} component={NavLink} to={process.env.PUBLIC_URL + '/logout'} activeClassName='active'>Logout</Button>
        </div>
        :
        <div>
          <Button className={styles.link} component={NavLink} exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home</Button>
          <Button className={styles.link} a href={'https://google.com'} activeClassName='active'>Login</Button>
        </div>
      }
    </nav>
  </div>
);

Component.propTypes = {
  userLogged: PropTypes.bool,
};

export {
  Component as PageNav,
  Component as PageNavComponent,
};
