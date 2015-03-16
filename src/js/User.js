var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    );
  }
});

React.render(<HelloUser name="Jimmy" />, document.getElementById('app'));