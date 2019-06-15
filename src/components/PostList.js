import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);

    return <div>post list</div>;
  }
}

const mapstateToProps = state => {
  return { posts: state.posts /*posts comes from reducers */ };
};

export default connect(
  mapstateToProps,
  { fetchPosts } /** action creator*/
)(PostList);
