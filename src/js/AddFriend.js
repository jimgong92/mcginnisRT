var React = require('react');

var AddFriend = React.createClass({
  getInitialState: function(){
    return {
      newFriend: ''
    };
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewFriend: function(e){
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function(e){
    //Limits to non-keypress triggers and only Enter/Return
    if(e.charCode !== 13 && e.charCode) return;
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} onKeyPress={this.handleAddNew}/>
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    );
  }
});

module.exports = AddFriend;