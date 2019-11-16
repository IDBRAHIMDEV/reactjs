import React, { Component } from 'react'
import './Courses.css';

export default class Courses extends Component {

    state = {
        myCourse: "new course",
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

    bindCourse = e => {
       
        this.setState({
            myCourse: e.target.value
        }, () => console.log('AFTER: ', this.state.myCourse))

        
    }

    render() {
        return (
            <div>
                <input onChange={ this.bindCourse } className="form-control mb-1" type="search" placeholder="Add new course"/>
                <button className="btn btn-success btn-block mb-3">Add</button>
                
                <h1>{ this.state.myCourse }</h1>
                <ul className="list-group">
                    { this.state.courses.map(course => (
                        <li className="list-group-item">
                        <h2>{ course.title }</h2>
                        <em>{ course.body }</em>
                    </li>
                    )) }
                </ul>
            </div>
        )
    }
}
