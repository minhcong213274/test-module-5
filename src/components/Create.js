import {Link, useNavigate} from "react-router-dom";
import {Field, Formik, Form} from "formik";
import axios from "axios";
import React from "react";

export default function CreateTour() {
    const navigate = useNavigate()
    return (
        <><Link to={"/"}><button>List</button></Link>
            <h1>Create Tour</h1>
            <Formik initialValues={{
                title: "",
                price: "",
                description: "",
            }
            }
                    onSubmit={(values) => {
                        axios.post("http://localhost:3000/tuors", values).then((res) => {
                            navigate("/")
                        })
                    }
                    }
                    enableReinitialize={true}>
                <Form>
                    title<br/>
                    <Field name={"title"}></Field><br/>
                    price<br/>
                    <Field name={"price"}></Field><br/>
                    description<br/>
                    <Field as={"textarea"} name={"description"}></Field><br/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}