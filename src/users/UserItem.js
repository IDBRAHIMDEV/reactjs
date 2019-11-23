import React, { Component } from 'react'

class UserItem extends Component {
    render() {
        let { login, avatar_url, html_url } = this.props.user;
        return (
            
                <div className="card mt-3">
                            <img className="card-img-top" src={avatar_url} alt="" />
                            <div className="card-body">
        <h4 className="card-title">{ login }</h4>
                                <p className="card-text">
                                    <a target="_blank" href={html_url} className="btn btn-success btn-block">
                                       Read More ...
                                    </a>
                                </p>
                            </div>
                        </div>
            
        )
    }
}

export default UserItem
