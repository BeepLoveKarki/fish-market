import React from 'react';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-details';

class Books extends React.Component{
  render(){
      return(
        <div>
            <BookList/>
            <BookDetails/>
        </div>
      )
  }
}

export default Books;