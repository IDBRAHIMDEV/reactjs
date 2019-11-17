import React, { Component } from 'react'
import axios from 'axios';

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

    render() {
        console.log('render');
        return (
            <div>

<div className="text-right">
                   <button onClick={this.display} className="btn btn-success btn-sm my-3">+</button>
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
