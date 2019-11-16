import React, { Component } from 'react'
import './Courses.css';

export default class Courses extends Component {

    state = {
        courses: [
            {
                id: 1,
                title: "Learn Angular",
                body: "this course for learning Angular framework"
            },
            {
                id: 2,
                title: "Learn ReactJS",
                body: "this course for learning ReactJS framework"
            },
            {
                id: 3,
                title: "Learn VueJS",
                body: "this course for learning VueJS framework"
            }
        ]
    }

    render() {
        return (
            <div>
                <input className="form-control mb-1" type="search" placeholder="Add new course"/>
                <button className="btn btn-success btn-block mb-3">Add</button>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h2>item 1</h2>
                        <em>content for this element 1</em>
                    </li>
                   
                </ul>
            </div>
        )
    }
}
