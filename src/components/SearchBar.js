import React from "react";

class SearchBar extends React.Component {
state = {term: ''};

  // I wont need this if i use the event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Dont use () when rendering, this is a call back function  */}
            {/* <input type="text" onChange={this.onInputChange} />  */}
            <input
              type="text"
              // This is an example of a controlled elements
              value={this.state.term}
              onChange={event => this.setState({term: event.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
