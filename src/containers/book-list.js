import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions1/index';
import {bindActionCreators} from 'redux';

class BookList extends React.Component{
    renderList(){
        return this.props.books.map((book)=>{
             return(
               <li
               onClick={()=>{this.props.selectBook(book)}} 
               key={book.title} 
               className="list-group-item">
                 {book.title}
               </li>
             )
        })
    }
    
    render(){
      return (
          <ul className="text-center list-group">
            {this.renderList()}
          </ul>
      )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (BookList);