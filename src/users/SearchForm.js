
import React, { Component } from 'react'

class SearchForm extends Component {

    state = {
        search: ''
    }

    
    submitSearch = (e) => {
        e.preventDefault();
       this.props.onSubmitSearch({value: this.state.search})
    }


    render() {
        return (
            
               <form onSubmit={this.submitSearch}>
                        <div className="form-group">
                            <label htmlFor=""></label>
                            <input onChange={ (e) => this.setState({ search: e.target.value }) } placeholder="Search a user ..." type="text" className="form-control"/>
                        </div>
                       <button onSubmit={this.submitSearch} className="btn btn-success btn-block">
                           <i className="fa fa-search"></i> Search
                        </button>
                </form> 
            
        )
    }
}

export default SearchForm
