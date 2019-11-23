import React, { Component } from 'react'
import axios from 'axios';
import UserItem from './UserItem';
import SearchForm from './SearchForm';

class UsersList extends Component {

    state = {
        search: '',
        loading: true,
        users: []
    }

    componentDidMount() {

        this.getUsers();
    }

    searchUsers = (value) => {
        
        axios.get(`https://api.github.com/search/users?q=${value}`)
             .then(res => this.setState({users: res.data.items}))
             .catch(err => console.error(err));
    }

    getUsers = () => {
        fetch('https://api.github.com/users')
           .then(res => res.json())
           .then(users => this.setState({
               loading: false,
               users: users
           }))
           .catch(err => console.error(err))
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                       <SearchForm onSubmitSearch={ e => this.searchUsers(e.value) }/>
                    </div>
                </div>

                <div className="row">

                {this.state.loading && (
                 <div className="col-md-12 text-center my-3">
                   <i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
                 </div>
                )} 



                { this.state.users.map(user => (
                    <div key={user.id} className="col-md-4">
                        <UserItem 
                          user={user}
                        />
                    </div>
                )) }
                </div>

            </div>
        )
    }
}

export default UsersList
