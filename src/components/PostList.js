import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((e) => (
      <div className="item" key={e.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{e.title}</h2>
            <p>{e.body}</p>
          </div>
          <UserHeader userId={e.userId} />
        </div>
      </div>
    ));
  }

  render() {
    const renderedPosts = this.renderList();
    return <div className="ui relaxed divided list"> {renderedPosts}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
