import { Grid, Paper, Avatar, TextField, Checkbox } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";

function login() {
  return (
    <Grid>
      <Paper
        elevation={8}
        style={{ padding: 20, margin: "22px auto", height: "70vh", width: 260 }}
      >
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#00a6ff" }}>
            <LockIcon />
          </Avatar>
          <h2>Sign In!</h2>
        </Grid>
        <TextField
          style={{ margin: "10px 0" }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          placeholder="Enter your username"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          placeholder="Enter your password"
          type="password"
          fullWidth
          required
        />
        <Checkbox color="primary" inputProps={{ "aria-label": "controlled" }} />
      </Paper>
    </Grid>
  );
}

export default login;
