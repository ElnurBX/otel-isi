    import './add.css'
    import React, { useContext, useState } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    const Add = () => {
        const [result, setresult] = useState([])
        const[details,setdetails]=useState([])
        const {data,setdata} = useContext(MainContext)
        const Price = (data) => {
            return ((data.person*20)+(data.teenager*15)+(data.child*0))
        }
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <div className='add '>
                    <div className="container">
                <Formik
                    initialValues={{ name: '', surname: '', phone: '', time: '', person: 1, teenager:0, child:0 }}
                    validate={values => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post('https://otel-isi.onrender.com/api/order', values).then((res) => {
                            setdata(res.data)
                        }).catch((err) => {
                            console.log(err)
                        })
                        setresult({price:Price(values),id:data[data.length-1]._id})
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="addform">
                        <label >Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <label > Surname</label>
                        <input
                            type="text"
                            name="surname"
                            placeholder='Surname'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                        />
                        {errors.surname && touched.surname && errors.surname}
                        <label >Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='Phone'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        {errors.phone && touched.phone && errors.phone}
                        <label >Time</label>
                        <input
                            type="date"
                            name="time"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.time}
                        />
                        {errors.time && touched.time && errors.time}
                        <label >Person</label>
                        <input
                            type="number"
                            name="person"
                            placeholder='Person'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.person}
                        />
                        {errors.person && touched.person && errors.person}
                        <label >Teenager</label>
                        <input
                            type="number"
                            name="teenager"
                            placeholder='Teenager'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.teenager}
                        />
                        {errors.teenager && touched.teenager && errors.teenager}
                        <label >Child</label>
                        <input
                            type="number"
                            name="child"
                            placeholder='Child'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.child}
                        />
                        {errors.child && touched.child && errors.child}
                        <button type="submit">
                            Submit
                        </button>
                        </form>
                    )}
                </Formik>
                </div>
                <div className="links">
                    <h3> qiymet: {result.price}</h3>
                    <h3> qrcode: {`https://aquaparkqr.netlify.app//qr/${result.id}`}</h3>
                    <h3>idare seyfesi : {`https://aquaparkqr.netlify.app//details/${result.id}`}</h3>
                </div>
                </div>
        </>
        )
    }
    
    export default Add
        