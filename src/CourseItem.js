import React, { Component } from 'react'

export class CourseItem extends Component {
    render() {
        let { id, title, body } = this.props.course;
        return (
            <div>
                 <div className="card mt-3">
                            <img className="card-img-top" src={`https://picsum.photos/id/${id + 10}/300/200`} alt="" />
                            <div className="card-body">
        <h4 className="card-title">{ title }</h4>
                                <p className="card-text">
                                    {body}
                                </p>
                            </div>
                        </div>
            </div>
        )
    }
}

export default CourseItem
