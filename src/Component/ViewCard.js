import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginTop: "10px",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    height: 120,
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: "midnightblue",
    color: "white",
    fontSize: "20px",
    // fontFamily: "Arial, Helvetica, sans-serif",
  },
  control: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: "midnightblue",
    color: "white",
    fontSize: "10px",
  },
  icons: {
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: "midnightblue",
    color: "gold",
    fontSize: "10px",
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  card: {
    display: "flex",
    marginLeft: "10px"
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: "midnightblue",
    padding: "10px",
    height: "30px",
  },
  gridItem: {
    fontSize: "10px",
    color: "gold",
    textAlign: "center"
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "justify",
    color: "midnightblue",
    fontSize: "12px",
    marginTop: "-15px"
  },
  description: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "justify",
    color: "black",
    fontSize: "10px",
    marginTop: "-10px"

  },
  duration: {
    display: "flex",
    color: "midnightblue",
    fontSize: "12px",
    marginTop: "-5px"

  },
  container: {
    width: "100%",
    borderRadius: "15px",
  },
  lowerDIv: {
    marginTop: "-33px",
  }
}));

export default function ViewCard(props) {
  const classes = useStyles();
  console.log(props)
  return (
    // <></>
    <>
      {props ? props.data.getPackages.result.packages.map(item => {
        return (<div className={classes.container} key={item.uid}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={item.thumbnail}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <h4 className={classes.title}>
                  {item.title}
                </h4>
                <p className={classes.description}>
                  {item.description}
                </p>
                <h4 className={classes.duration}>
                  {item.durationText}
                </h4>
                <h4 className={classes.duration}>
                  {item.loyaltyPointText}
                </h4>
              </CardContent>
            </div>
          </Card>

          <div className={classes.lowerDIv}>
            <div className={classes.gridContainer}>
              <div className={classes.icons}>Includes:</div>
              <div className={classes.gridItem}></div>
              <div className={classes.gridItem}>
                <Typography className={classes.control}>Starts From</Typography>
              </div>
              <div className={classes.gridItem}>
              </div>
              <div className={classes.gridItem}></div>
              <div>
                <Typography className={classes.controls} component="h4" variant="h4">
                  ৳{item.startingPrice}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        )
      }) : null}
    </>
  );
}