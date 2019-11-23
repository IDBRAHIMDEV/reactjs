import React, { Component } from 'react'
import CourseItem from './CourseItem'


export class CourseGrid extends Component {
    render() {
        return (

          <div className="row"> 
          { this.props.courses.map(course => (
            <div key={course.id} className="col-md-4">
              <CourseItem course={course} />
            </div>
          )) }
          </div>  
        )
    }
}

export default CourseGrid
