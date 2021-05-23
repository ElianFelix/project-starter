import React from 'react';
import Postcard from '../components/Postcard';
import Helmet from 'react-helmet';
import Loading from '../components/Loading.js';
import './PostListPage.css';

class PostsListPage extends React.Component {
  state = {

    loading: true,
    posts: [],
  }

  componentDidMount() {
    fetch("/api/posts", { mode: 'same-origin' })
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p, ii) => <Postcard {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
       return <div>
                 <Loading />
               </div>
     } 

    return (

      <div>
        <Helmet>
          <body className='postlist-page' />
          <html className='postlist-page' />
        </Helmet>

        <div className="d-flex flex-column text-center justify-content-center">
            { this.state.posts }
        </div>
      </div>
    );
  }
}

export default PostsListPage;