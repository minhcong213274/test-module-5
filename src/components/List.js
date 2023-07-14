import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListTour(){
    const [list,setList]=useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=>{
        axios.get(`http://localhost:3000/tuors`).then(res=>{
            setList(res.data)
        })
    },[])
    const deleteTour = (id) => {
        axios.delete("http://localhost:3000/tuors/" + id).then((res) => {
            if (res.status === 200) {
                setList(list.filter((tour) => tour.id !== id));
            }
            else {
                alert("Delete failed");
            }
        });
    };
    let count = 1;
    const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <> <Link to={"/create"}><button style={{background:"blue"}}>CreateTour</button></Link>
            <h1>List Tour</h1>
            <input onChange={(event) => setSearch(event.target.value)} />
            <table border={1}>
                <tr style={{color:"red"}}>
                    <td>#</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td></td>
                    <td></td>
                </tr>
                {filteredList.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{count++}</td>
                                <td><Link to={"/detail/" +item.id}>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><Link to={"/edit/" + item.id}><button style={{color:"red",background:"yellow"}}>Edit</button></Link></td>
                                <td><button style={{background:"red"}} onClick={() => window.confirm("Are you sure you want to delete this Tour?") && deleteTour(item.id)}>
                                    Delete
                                </button></td>
                            </tr>
                        </>
                    );
                })}</table>
        </>
    )
}