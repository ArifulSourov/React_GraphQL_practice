import React, { useState, useEffect } from 'react'
import ViewCard from './ViewCard'
import * as Constants from "../constants"
import axios from 'axios'

export default function Cards() {
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

    //console.log(data.getPackages.result.packages,"ddd")
    // const items = data.getPackages.result.packages.map((item) => {
    //     <li key={item.uid}>
    //         <p>{item.title}</p>
    //     </li>
    // })
    return (
        <div>
            <ViewCard data={data}/>
            {/* <h1>ttttttttttt</h1>
            <ul>
                {data.getPackages.result.packages.map(item => {
                    return (<li key={item.uid}>
                        {item.title}
                    </li>)
                })}
            </ul> */}
        </div>
    )
}
