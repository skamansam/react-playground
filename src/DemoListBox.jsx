import React, { Component } from "react";
import DemoList from "./DemoList";
import PropTypes from "prop-types";

class DemoListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        left: [{id: 0, item: "One", icon: "home"}, {id: 1, item: "Two", icon: "all_inbox"}],
        right: [{id: 2, item: "Three", icon: "check_box_outline_blank"}, {id: 3, item: "Empty"}]
      }
    };
  }
  handleCreateRight = (item) => {
    console.log("adding item: ",this.state.items.right, item);
    let newRight = this.state.items.right;
    newRight.push({id: newRight.length, item: item});
    this.setState({
      items: {
        left: this.state.items.left,
        right: newRight
      }
    })
  }
  handleCreateLeft = (item) => {
    console.log("adding item: ", item);
    let newLeft = this.state.items.left;
    newLeft.push({id: newLeft.length, item: item});
    this.setState({
      items: {
        right: this.state.items.right, 
        left: newLeft
      }
    })
  }
  render = () => {
    console.log("render: ", this.state)
    return (
      <div>
        List: <DemoList items={this.state.items.left} onCreate={this.handleCreateRight} />
        <DemoList items={this.state.items.right} onCreate={this.handleCreateLeft}/>
      </div>
    );
  }
}
DemoListBox.propTypes = {
  items: PropTypes.object
};

export default DemoListBox;
