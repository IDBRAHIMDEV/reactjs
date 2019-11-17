import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

class Posts extends Component {

    componentDidMount() {
         this.getPosts();
    }
     

    state = {
        displayForm: false,
        title: '',
        body: '',
        posts: []
    }

    getPosts = () => {
        axios.get('http://localhost:5000/posts')
             .then((res) => {
                 this.setState({
                     posts: res.data
                 })
                 
             })
             .catch((err) => console.error(err))
    }

    display = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    getValueInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    persistPost = () => {

        let post = {
            title: this.state.title,
            body: this.state.body,
        }
        axios.post('http://localhost:5000/posts', post)
             .then(res => {
                 this.setState({
                     title: '',
                     body: '',
                     displayForm: false
                 })

                 this.getPosts();
             })
             .catch(err => console.error(err))
    }

    deletePost = async (id) => {
   

    Swal.fire({
        title: 'Are you sure to delete this post?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancel'
      }).then(async (result) => {
        if (result.value) {

             await axios.delete(`http://localhost:5000/posts/${id}`);
             this.getPosts();
          Swal.fire({
            title: 'Post deleted !',
            icon: 'success',
            timer: 3000
          })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        }
      })
    } 

    render() {
        console.log('render');
        return (
            <div>

<div className="text-right">
                   <button onClick={this.display} className="btn btn-success btn-sm my-3">
                       <i className="fa fa-plus"></i>
                   </button>
                </div>
                 
                { this.state.displayForm ? (
                    <div className="row my-3">
                    <div className="col-6 mx-auto">

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name='title' onChange={this.getValueInput} id='title' type="text" className="form-control"/>
                            { this.state.title }
                        </div>

                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea name='body' onChange={this.getValueInput} className='form-control' id="body" rows="2"></textarea>
                            { this.state.body }
                        </div>

                        <button onClick={this.persistPost} className="btn btn-success btn-block">Add post</button>

                    </div>
                </div> 
                ) : null }

                

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
                                <td scope="row">
                                    <i className="fa fa-power-off"></i>
                                </td>
                                <td><h5>{ post.title }</h5></td>
                                <td><em>{ post.body }</em></td>
                                <td nowrap>
                                    <button className="btn mr-1 btn-warning btn-sm">
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button onClick={ () => this.deletePost(post.id)} className="btn btn-danger btn-sm"><i className="fa fa-times"></i></button>
                                </td>
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
