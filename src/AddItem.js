import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      listName : '',
      newItem:{}
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading!
      this.setState(
        {listName : this.props.idName,
          newItem : {name : this.refs.id.value}},
        () => this.props.addItem(this.state)
      );
  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
