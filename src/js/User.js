var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: "Jimmy Gong",
      friends: ["Jackie Ho", "Charlie Depman", "Kseniya Belik"]
    };
  },

  /**
   * ComponentWillMount occurs before first render
   * Invoking setState here does not cause a re-render
   */
  componentWillMount: function(){
    console.log("In componentWillMount");
  },
  /**
   * ComponentDidMount occurs after first render
   * Have access to this.getDOMNode()
   */
  componentDidMount: function(){
    console.log("In componentDidMount");
  },
  /**
   * ComponentWillReceiveProps is invoked whenever there is a prop change
   * Called before render, except for the initial render
   * Previous props can be accessed by this.props
   * Calling setState here does not trigger an additional re-render
   */
  componentWillReceiveProps: function(){
    console.log("In componentWillReceiveProps")
  },
  /**
   * ComponentWillUnmount occurs immediately before a component is unmounted
   */
  componentWillUnmount: function(){
    console.log("In componentWillUnmount")
  },
  addFriend: function(friend){
    this.setState({
      friends: this.state.friends.concat([friend])
    })
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
});

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
  handleAddNew: function(){
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    );
  }
});

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