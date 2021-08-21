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
    width: 500,
    // height:200
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: "navy",
    color: "white"
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  card: {
    display: "flex",
    marginLeft: "10px"
  }
}));

export default function ViewCard(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // console.log(props.data.getPackages.result.packages,"ddd")
  return (
    <>
      {props.data.getPackages.result.packages.map(item => {
        return (<div>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={item.thumbnail}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <h4>
                  {item.title}
                </h4>
                <p>
                  {item.description}
                </p>
              </CardContent>
            </div>
          </Card>
          <div className={classes.controls}>
            <Typography component="h5" variant="h5">
              ৳{item.startingPrice}
            </Typography>
          </div>
        </div>
        )
      })}
    </>
  );
}