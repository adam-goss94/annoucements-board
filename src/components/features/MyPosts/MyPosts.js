import React from 'react';
import PropTypes from 'prop-types';

import {Annoucements} from '../Annoucements/Annoucements';
import { connect } from 'react-redux';
import { getPostsByAuthor, fetchPublished } from '../../../redux/postsRedux';

import styles from './MyPosts.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;

    fetchPublishedPosts();
  }

  render () {
    const { posts } = this.props;
    return (
      <div className={styles.root}>
        {posts.map(post =>(
          <Annoucements
            key={post._id}
            title={post.title}
            text={post.text}
            author={post.author}
            id={post._id}
            created={post.created}
            updated={post.updated}
            status={post.status}
          />
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
};

const mapStateToProps = state => ({
  posts: getPostsByAuthor(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});


const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as MyPosts,
  // Container as MyPosts,
  Component as MyPostsComponent,
};
