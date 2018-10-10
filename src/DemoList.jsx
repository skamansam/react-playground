import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const iconNames = ["cake", "person", "mood", "star", "check_box"];
class DemoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || [],
      icon: iconNames[0]
    };
  }
  componentWillReceiveProps = newProps => {
    console.log("newprops", newProps);
    this.setState({ items: newProps.items });
  };
  setValue = e => {
    this.setState({ curValue: e.target.value });
  };
  setIcon = e => {
    this.setState({ icon: e.target.value });
  };
  createItem = e => {
    this.props.onCreate(this.state.curValue);
  };
  addHere = e => {
    let newItems = this.state.items;
    newItems.push({ id: newItems.keys.count, item: this.state.curValue });
    this.setState({ items: newItems });
  };
  render = () => {
    console.log("render state:", this.state);
    const listItems = this.state.items.map(item => (
      <ListItem key={item.id} button>
        <ListItemIcon>
          <Icon>{item.icon || "check_box_outline_blank"}</Icon>
        </ListItemIcon>
        <ListItemText primary={item.item} />
      </ListItem>
    ));
    console.log("render component:");
    return (
      <List component="nav">
        {listItems}
        <FormGroup row={true}>
          <TextField
            id="standard-name"
            label="New Item"
            value={this.state.name}
            onChange={this.setValue}
            margin="normal"
            helpertext="Enter the item you want here"
          />
          <Select
            IconComponent={props => (
              <Icon {...props} className={`material-icons ${props.className}`}>
                more_vert
              </Icon>
            )}
            label="Choose Icon"
            value={this.state.icon}
            onChange={this.setIcon}
            helpertext="Enter the item you want here"
          >
            {iconNames.map(option => (
              <MenuItem key={option} value={option}>
                <Icon>{option}</Icon>
              </MenuItem>
            ))}
          </Select>

          <Button variant="fab" color="primary" onClick={this.addHere}>
            {" "}
            <Icon>add</Icon>
          </Button>
          <Button variant="fab" color="secondary" onClick={this.createItem}>
            <Icon>redo</Icon>
          </Button>
        </FormGroup>
      </List>
    );
  };
}
export default DemoList;
