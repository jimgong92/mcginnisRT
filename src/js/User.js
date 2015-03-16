var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: "Jimmy Gong",
      friends: ["Jackie Ho", "Charlie Depman", "Kseniya Belik"]
    };
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    );
  }
});

var ShowList = React.createClass({
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