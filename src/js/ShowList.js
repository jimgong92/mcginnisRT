var React = require('react');

//TODO: Add remove friend capability next to each name
var ShowList = React.createClass({
  getDefaultProps: function(){
    return {
      names: []
    };
  },
  handleRemoveFriend: function(index){
    this.props.removeItem(index);
  },
  render: function(){
    var remove = this.props.removeItem;
    var listItems = this.props.names.map(function(item, index){
      return (
        <li>
          {item}
          <button onClick={function(){remove(index);}}> Remove Friend </button>
        </li>
      );
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});

var LIWrapper = React.createClass({
  render: function(){
    return (
      <li>
        {this.props}
      </li>
    );
  }
});

module.exports = ShowList;