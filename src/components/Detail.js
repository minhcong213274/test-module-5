import {Link, useParams} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";

export default function DetailTour() {
    const {id} = useParams()
    const [tour, setTour] = useState({})
    useEffect(() => {
        axios.get('http://localhost:3000/tuors/' + id).then((res) => {
            setTour({
                id:id,
                title:res.data.title,
                price:res.data.price,
                description:res.data.description,
            })
        })
    }, [])
    return (
        <><Link to={"/"}><button>List</button></Link>
            <h1>Detail tour</h1>
            <tr>
                <h2> title : {tour.title}</h2>
                <h3>price : {tour.price}</h3>
                <h3>description : {tour.description}</h3>
            </tr>
        </>
    )
}