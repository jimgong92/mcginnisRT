var React = require('react');

//TODO: Add remove friend capability next to each name
var ShowList = React.createClass({
  getDefaultProps: function(){
    return {
      names: []
    };
  },
  render: function(){
    var listItems = this.props.names.map(function(item){
      return <li>{item}</li>;
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

module.exports = ShowList;