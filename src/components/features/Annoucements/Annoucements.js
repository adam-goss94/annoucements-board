import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import styles from './Annoucements.module.scss';

const Component = ({id, title, text, author}) => (
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
          <div className={styles.footer}>
            <Typography>{author}</Typography>
          </div>
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
};

export {
  Component as Annoucements,
  // Container as Annoucement,
  Component as AnnoucementsComponent,
};
