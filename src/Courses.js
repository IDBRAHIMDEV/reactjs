import React, { Component } from 'react'
import './Courses.css';
import CourseList from './CourseList';
import CourseGrid from './CourseGrid';

export default class Courses extends Component {

    state = {
        display: 'list',
        editable: null,
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

    editCourse = (course) => {
    //    console.log(course)
    this.setState({
        editable: course,
        myCourse: course.title
    })
    }


    updateCourse = () => {
        // this.state.editable.title = this.state.myCourse;
        // this.setState({
        //     myCourse: '',
        //     editable: null
        // })
        this.setState({
            courses: this.state.courses.map(course => {
                if(course.id === this.state.editable.id){
                    course.title = this.state.myCourse;
                }
                return course;
            })
        })
    }
    render() {
        return (
            <div> 
                <input value={this.state.myCourse} onChange={ this.bindCourse } className="form-control mb-1" type="search" placeholder="Add new course"/>
               
               { this.state.editable ? 
                  (<button onClick={ this.updateCourse } className="btn btn-warning btn-block mb-3">Update</button>)
                  :
                  (<button onClick={ this.addCourse } className="btn btn-success btn-block mb-3">Add</button>)
               }
                

             <div className="row">
                 <div className="col-md-12">

                        <button onClick={ () => this.setState({ display: 'list' }) } className="btn btn-sm btn-light">
                            <i className="fa fa-list"></i>
                        </button>
                        <button onClick={ () => this.setState({ display: 'grid' }) } className="btn btn-sm btn-light">
                            <i className="fa fa-th"></i>
                        </button>

                 </div>
             </div>

               { this.state.display === 'list' ?
                 <CourseList courses={this.state.courses} /> 
                 :
                 <CourseGrid courses={this.state.courses} />
                }

               
            </div>
        )
    }
}
