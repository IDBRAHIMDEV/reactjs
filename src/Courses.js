import React, { Component } from 'react'
import './Courses.css';

export default class Courses extends Component {

    state = {
        myCourse: "",
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

    addCourse = () => {
        
        let course = {
            id: this.state.courses.length + 1,
            title: this.state.myCourse,
            body: 'Lorem ipsum'
        }

        this.setState({
            courses: [course, ...this.state.courses]
        })
    }

    deleteCourse = (id) => {
       this.setState({
           courses: this.state.courses.filter(course => course.id !== id)
       })

    }

    render() {
        return (
            <div>
                <input onChange={ this.bindCourse } className="form-control mb-1" type="search" placeholder="Add new course"/>
                <button onClick={ this.addCourse } className="btn btn-success btn-block mb-3">Add</button>
                
                <h1>{ this.state.myCourse }</h1>
                <ul className="list-group">
                    { this.state.courses.map(course => (
                        <li key={course.id} className="list-group-item">
                        <h2>{ course.title }</h2>
                        <em>{ course.body }</em>

                        <div className='text-right'>
                            <button className="btn btn-warning btn-sm mr-1">Edit</button>
                            <button onClick={ () => this.deleteCourse(course.id)} className="btn btn-dark btn-sm">Delete</button>
                        </div>
                    </li>
                    )) }
                </ul>
            </div>
        )
    }
}
