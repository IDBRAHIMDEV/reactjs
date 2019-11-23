import React, { Component } from 'react'

export class CourseList extends Component {
    render() {
        return (
            <div>
                 <ul className="list-group">
                    { this.props.courses.map(course => (
                        <li key={course.id} className="list-group-item">
                        <h2>{ course.title }</h2>
                        <em>{ course.body }</em>

                        <div className='text-right'>
                            <button  className="btn btn-warning btn-sm mr-1">Edit</button>
                            <button className="btn btn-dark btn-sm">Delete</button>
                        </div>
                    </li>
                    )) }
                </ul>
            </div>
        )
    }
}

export default CourseList
