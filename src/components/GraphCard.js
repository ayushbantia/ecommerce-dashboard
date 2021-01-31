import React from "react";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Typography } from "@material-ui/core";
import TestGraph from "../TestGraph";
function GraphCard({ color }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 450,
      maxHeight: 300,
      margin: 10,
      backgroundColor: color,
    },

    title: {
      fontSize: 14,
      textTransform: "uppercase",
    },
  });
  const classes = useStyles();
  return (
    <div className="graphcard">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            Sales graph
          </Typography>
          <TestGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default GraphCard;
