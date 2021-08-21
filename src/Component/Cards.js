import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ViewCard from './ViewCard'
import * as Constants from "../constants"
import axios from 'axios'

const useStyles = makeStyles(() => ({
    root: {
      margin: "10px",
    },
  }));

export default function Cards() {
    const classes = useStyles();
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const queryResult = await axios.post(
                Constants.GRAPQL_API, {
                query: Constants.GET_DATA
            }
            )
            const result = queryResult.data.data
            setData(result)

        }
        fetchData();
    }, [])
    return (
        <div className={classes.root}>
            <ViewCard data={data}/>
        </div>
    )
}
