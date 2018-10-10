import React, { Component } from "react";
import DemoListBox from "./DemoListBox";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#445963",
      light: "#708690",
      dark: "#1b3039",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#9c27b0",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff"
    }
  }
});

const styles = {
  paper: {
    padding: "10px"
  }
};

class App extends Component {
  render = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <Paper elevation={3} className={this.props.classes.paper}>
          <DemoListBox />
        </Paper>
      </MuiThemeProvider>
    );
  };
}

export default withStyles(styles)(App);
