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
}));


export default function Cards() {
    const classes = useStyles();
    // const [page, setPage] = useState(1);
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
        <InfiniteScroll
            dataLength={4}
            // next={2}
            hasMore={true}
            className={classes.root}>
            <ViewCard data={data} />
            {/* {loading && <Loading>Loading ...</Loading>} */}
        </InfiniteScroll>
    )
}
