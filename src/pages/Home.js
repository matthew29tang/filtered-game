import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import styles from './commonStyles.js';
import { ThemeContext } from "./util/config.js";

class Home extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.images = [];
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Home">
        <Paper className={classes.paper}>
          <h2>Filtered!</h2>
          <Divider />
          <h3 style={{ marginBottom: "0px" }}>JamminAI has made its debut, but messages are getting blocked by its safety filters! <br/>Send messages to see which get blocked to deduce the rules for the safety filters.</h3>
          <div> <br/>
          <h3>Rules:</h3>
          {`1) Messages must only contain characters found on a regular keyboard (excluding spaces): a-zA-Z0-9.\/<>?;:"'!@#$%^&*()\[\]{}_+=|\\-~` + "`"}
          </div>
          {`2) Message length must be <=30 characters`}
          <br/>
          {`3) Filter rules are a single phrase rules without any "AND" or "OR" clauses`}
          <br /> <br/>
          <div><NavLink activeClassName="active" className="link" to={"/puzzles"} type="menu">
            <Button variant="contained" color="primary" className={classes.button}>
              Puzzles
            </Button>
          </NavLink><br /> <br /></div>
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(Home);