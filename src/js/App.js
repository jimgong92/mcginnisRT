var HelloWorld = React.createClass({
  getInitialState: function(){
    return {

      username: "Jimmy Gong"
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username}! <br/>
        Change name: 
        <input 
          type="text"
          value={this.state.username}
          onChange={this.handleChange} />
      </div>
    );
  }
});

/**
 * <HelloWorld />
 * <FriendsContainer />
 * <Parent />
 */
React.render(<Parent />, document.getElementById('app'));