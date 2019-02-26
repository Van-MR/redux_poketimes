import React from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends React.Component {

  state = {
      id:null
    }

  componentDidMount() {
    let id = this.props.match.params.post_id;
    this.setState({
       id:id
    })
  }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render (){
     console.log(this.props);
     const { post } = this.props;

    const Pos = post ? (
      <div className="post card">
         <h4 className="center teal-text">{post.title}</h4>
         <p>{post.body}</p>
           <div className="center">
            <button className="btn red" onClick={this.handleClick}>
              Delete Post
            </button>
          </div>
      </div>
    ) : ( <div><h3>sorry</h3></div>)

     return(
       <div className="container">
          {Pos}
       </div>
     )
  }
}

const mapStateToProps = (state,OwnProps)  => {
    let id = OwnProps.match.params.post_id;
    return {
      post:state.posts.find(item => item.id === id)
    }
}

const mapDispatchProps = (dispatch) => {
    return {
      deletePost: (id) => dispatch(deletePost(id))
    }
}


export default connect(mapStateToProps,mapDispatchProps)(Post);
