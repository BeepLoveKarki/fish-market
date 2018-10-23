import React from 'react';
import {connect} from 'react-redux';

class BookDetails extends React.Component{
    render(){
        if(!this.props.book){
          return(
              <div className="text-center" style={{marginTop:'20px'}}>Select a Book to get started!!!</div>
          )       
        }
        return(
            <div className="text-center" style={{marginTop:'20px'}}>
                <h3>Details</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);