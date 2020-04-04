// react imports
import React, { useState } from 'react';
// material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '30vh',
    },
  })
);

function FormRow() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

export default function Main() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
