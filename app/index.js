var React = require('react');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");
var BoardContainer = require('./containers/BoardContainer');

ReactDOM.render(
  <BoardContainer/>,
  document.getElementById("app")
);
