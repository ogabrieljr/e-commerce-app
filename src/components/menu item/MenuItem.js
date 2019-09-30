import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import { withRouter } from "react-router-dom";

export default withRouter(function MenuItem({ title, imageUrl, history, match, link }) {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      minWidth: "25%",
      height: "200px",
      backgroundPosition: "center",
      margin: "10px"
    }
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.root} onClick={() => history.push(`${match.url}${link}`)}>
      <Paper className="content">
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">SHOP NOW</Typography>
      </Paper>
    </Paper>
  );
});
