import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ViewCard from './ViewCard'
import * as Constants from "../constants"
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Loading } from './App.style';

const useStyles = makeStyles(() => ({
    root: {
        margin: "10px",
    },
    message: {
        display: "flex",
        color: "midnightblue",
        fontSize: "14px",
        marginTop: "-10px",
        marginBottom: "-10px",
        fontWeight: "bold",
    }
}));


export default function Cards() {
    const classes = useStyles();
    // const [page, setPage] = useState(1);
    const [data, setData] = useState([])
    console.log(data.getPackages.result.packages.length)
    
    const fetchData = async () => {
        const queryResult = await axios.post(
            Constants.GRAPQL_API, {
            query: Constants.GET_DATA
        }
        )
        const result = queryResult.data.data
        setData(result)

    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        // <div className={classes.root}>
        <InfiniteScroll
            dataLength={data.getPackages.result.packages.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>You have seen it all !!!!</h4>}
            className={classes.root}>
            <div className={classes.message}>
                <p>62 Available Holidays</p>
            </div>
            <ViewCard data={data} />
        </InfiniteScroll>
        // </div>
    )
}
