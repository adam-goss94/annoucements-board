import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import styles from './Annoucement.module.scss';

const Component = ({id, title, text, author, created, updated, status}) => (
  <div className={styles.root}>
    <Link to={`/post/${id}`} className={styles.link}>
      <Card  className={styles.item}>
        <CardContent>
          <Typography
            variant="h4"
            color="primary"
            paragraph = {true}
          >
            {title}
          </Typography>
          <Typography
            paragraph = {true}>
            {text}
          </Typography>
          <div className={styles.footer}>
            <Typography>{author}</Typography>
          </div>
          <Typography className={styles.info}>published: {created}</Typography>
          <Typography className={styles.info}>edit: {updated}</Typography>
          <Typography className={styles.info}>status: {status}</Typography>

        </CardContent>
      </Card>
    </Link>
  </div>
);

Component.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  status: PropTypes.string,
  userLogged: PropTypes.bool,
};

export {
  Component as Annoucement,
  // Container as Annoucement,
  Component as AnnoucementComponent,
};
