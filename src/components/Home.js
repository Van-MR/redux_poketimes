import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Pokeball from '../pokeball.png'

class Home extends React.Component {
  render () {
     console.log(this.props);
     const { posts } = this.props;
     console.log(posts);
     const postList = posts.length ?  (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : ( <div className="center red-text">No posts to show</div> )

     return(
       <div className="container home">
          <h3 className="center">Home</h3>
          {postList}
       </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
