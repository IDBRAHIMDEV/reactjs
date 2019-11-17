import React, { Component } from 'react'
import axios from 'axios';

class Posts extends Component {

    componentDidMount() {
         this.getPosts();
    }
     

    state = {
        posts: []
    }

    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((res) => {
                 this.setState({
                     posts: res.data
                 })
                 
             })
             .catch((err) => console.error(err))
    }

    render() {
        console.log('render');
        return (
            <div>
               
               <div className="text-right">
                   <button className="btn btn-success btn-sm my-3">+</button>
                </div>

               <table className="table table-striped">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>TITLE</th>
                           <th>BODY</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                      { this.state.posts.map(post => 
                           (
                            <tr key={post.id}>
                                <td scope="row">{post.id}</td>
                                <td><h5>{ post.title }</h5></td>
                                <td><em>{ post.body }</em></td>
                                <td></td>
                            </tr>
                           )
                        ) }
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Posts
