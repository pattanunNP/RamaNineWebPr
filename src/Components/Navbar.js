import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <a href="/">
              <img
                src="https://res.cloudinary.com/image-chatbot/image/upload/v1606138098/RAMA_X/%E0%B8%9E%E0%B8%AD%E0%B9%80%E0%B8%9E%E0%B8%B5%E0%B8%A2%E0%B8%87_wneklv.png"
                alt="logo"
              />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
