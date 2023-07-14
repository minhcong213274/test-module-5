import {Link, useNavigate, useParams} from "react-router-dom";
import {Field, Formik, Form} from "formik";
import axios from "axios";
import React, {useEffect, useState} from "react";

export default function EditTour() {
    const navigate = useNavigate()
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
            <h1>Edit tour</h1>
            <Formik initialValues={
                { id:tour.id,
                    title : tour.title,
                    price : tour.price,
                    description : tour.description,
                }
            }
                    onSubmit={(values) => {
                        axios.put(`http://localhost:3000/tuors/${id}`,values).then((res) => {
                            navigate("/")
                        })
                    }
                    }
                    enableReinitialize={true}>
                <Form>
                    title<Field name={"title"}></Field><br/>
                    price<Field name={"price"}></Field><br/>
                    description<Field name={"description"}></Field><br/>
                    <button >Edit</button>
                </Form>
            </Formik>
        </>
    )
}