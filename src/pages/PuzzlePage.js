import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";

import styles from './commonStyles.js';
import EnhancedTableHead from './GuessTable.js';
import { ThemeContext } from "./util/config.js";
import puzzleInfo from './puzzleInfo.js';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const MAX_PER_COOKIE = 40;
const COOKIE_SUFFIX = ['a', 'b', 'c', 'd', 'e']
const MAX_COOKIES = COOKIE_SUFFIX.length;
const MAX_PUZZLES = 12;

class PuzzlePage extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    let puzzleId = parseInt(props.match.params.puzzleId);
    if (puzzleId > MAX_PUZZLES) {
      this.state = {invalid: true};
      return;
    }
    this.filter_fn = (msg) => {
      try {
        return puzzleInfo[puzzleId].filter_fn(msg);
      } catch(e) {
        console.log(e);
        return false
      }
    };

    this.state = {
      puzzleId: puzzleId,
      name: puzzleInfo[puzzleId].name,
      pts: puzzleInfo[puzzleId].points,
      body: puzzleInfo[puzzleId].body ? puzzleInfo[puzzleId].body : "Additional info here.",

      teamGuesses: new Array(),
      textField: "",
      errorText: "",
      hideIncorrect: false,
      textFieldDisabled: false,
    }
    let stored_progress = [];
    for (var i = 0; i < MAX_COOKIES; i++) {
      let cookie_data = cookies.get("puzzle" + puzzleId + COOKIE_SUFFIX[i]);
      if (cookie_data) {
        stored_progress = stored_progress.concat(cookie_data);
      }
    }
    if (stored_progress) {
      this.state.teamGuesses = stored_progress;
    }
  }

  componentDidUpdate() {
    if (parseInt(this.props.match.params.puzzleId) !== this.state.puzzleId) {
      window.location.reload();
    }
  }

  componentDidCatch(error, errorInfo) {
    for (var i = 0; i < MAX_COOKIES; i++) {
      cookies.remove("puzzle" + this.state.puzzleId + COOKIE_SUFFIX[i], { path: '/' });
    }
    console.log(error, errorInfo);
    alert("Malformed save data detected, wiping saved attempts for this puzzle");
    window.location.reload();
  }

  updateState = (req, data) => {
    this.setState({
      [req]: data
    });
  }

  updateTextField = (e) => {
    let newValue = e.target.value;
    if (/[^a-zA-Z0-9.\/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\~\-]/.test(newValue)) {
      this.setState({ errorText: `Messages must only contain characters found on a regular keyboard (excluding spaces): a-zA-Z0-9.\/<>?;:"'!@#$%^&*()\[\]{}_+=|\\-~` + "`"});
    } else if (newValue.length > 30) {
      this.setState({ errorText: "Message length must be <=30 characters" });
    } else {
      this.setState({ errorText: "" });
    }
    this.setState({ textField: e.target.value });
  }

  submitAnswer = () => {
    if (this.state.textField === "") {
      return;
    }
    let guess = this.state.textField;
    let responsePayload = {
      g: this.state.textField,
      id: this.state.teamGuesses.length + 1
    }
    if (this.filter_fn(guess)) {
      responsePayload.r = "A"
    } else {
      responsePayload.r = "B"
    }

    this.setState(prevState => {
      prevState.teamGuesses.push(responsePayload);
      let offset = Math.max(prevState.teamGuesses.length - MAX_COOKIES * MAX_PER_COOKIE, 0)
      for (var i = 0; i < MAX_COOKIES; i++) {
        let start = i * MAX_PER_COOKIE + offset;
        let guessSlice = prevState.teamGuesses.slice(start, start + MAX_PER_COOKIE);
        if (guessSlice.length > 0) {
          cookies.set("puzzle" + prevState.puzzleId + COOKIE_SUFFIX[i], JSON.stringify(guessSlice));
        }
      }
      
      return { teamGuesses: prevState.teamGuesses, textField: "" }
    });
  }

  switchToggle = (e) => {
    this.setState(prevState => {
      return { hideIncorrect: !prevState.hideIncorrect }
    });
  }

  render() {
      const { classes } = this.props;
      if (this.state.invalid) {
        return (<h1>Page not found :(</h1>)
      }
      return (
        <div className="PuzzlePage">
          <Paper className={classes.paper}>
          <Grid container spacing={4} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Grid item xs={1} key={0}>
              <NavLink activeClassName="active" className="link" to={"/puzzles/"}>
                <Button variant="contained" color="primary" className={classes.nextButton} onClick={this.nextPage} type="submit">
                  BACK
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={1} key={0}/>
            <Grid item xs={8} key={0}>
              <h1 style={{ marginBottom: "0px" }}>{"#" + this.state.puzzleId + ": " + this.state.name}</h1>
            </Grid>
            <Grid item xs={1} key={0}>
              <NavLink activeClassName="active" className="link" to={"/puzzles/" + (this.state.puzzleId - 1)}>
                  <Button variant="contained" color="primary" className={classes.nextButton} onClick={this.nextPage} disabled={this.state.puzzleId === 1} type="submit">
                      PREV
                  </Button>
                </NavLink>  
            </Grid>
            <Grid item xs={1} key={0}>
              <NavLink activeClassName="active" className="link" to={"/puzzles/" + (this.state.puzzleId + 1)}>
                <Button variant="contained" color="primary" className={classes.nextButton} onClick={this.nextPage} disabled={this.state.puzzleId >= 12} type="submit">
                    NEXT
                </Button>
              </NavLink>
            </Grid>
            </Grid>
            
            <h2 style={{ marginTop: "5px", marginBottom: "5px" }}>{this.state.pts} {this.state.pts > 1 ? "points" : "point"}</h2>
            <Divider />
            <br />
            <div className={classes.body}>
            <center>
              <i><div>Attempts will be saved in browser cookies. Due to cookie size limitations, only the most recent 200 attempts are saved.</div></i>
              {this.state.body}
              </center>
            </div>
            <br/>
            <form autoComplete="off" onSubmit={this.submitAnswer}>
              <TextField
                autoFocus
                value={this.state.textField}
                onChange={this.updateTextField}
                error={this.state.errorText !== ""}
                id="outlined-error-helper-text"
                label="Message"
                defaultValue=""
                helperText={this.state.errorText}
                variant="outlined"
                disabled={this.state.textFieldDisabled}
                style = {{width: 320}}
              />
            </form>
            <br />
            <Button variant="contained" color="primary" className={classes.submitButton} onClick={this.submitAnswer} disabled={this.state.errorText} type="submit">
              SEND
            </Button>
            <br />
            <h1 style={{ marginBottom: "0px" }}>Attempts</h1>
            <h2 style={{ marginTop: "5px", marginBottom: "5px" }}>{this.state.teamGuesses.length} attempts</h2>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.switchOn}
                  onChange={this.switchToggle}
                  name="switch"
                  color="primary"
                />
              }
              label="Hide blocked attempts"
            />
            <Divider />
            <EnhancedTableHead rows={this.state.teamGuesses} hideIncorrect={this.state.hideIncorrect} />
          </Paper>
        </div>
      );
    } 
}

export default withStyles(styles)(PuzzlePage);