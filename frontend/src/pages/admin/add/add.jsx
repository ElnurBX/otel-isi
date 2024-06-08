    import './add.css'
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
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
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
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
                        <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="text"
                            name="surname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                        />
                        {errors.surname && touched.surname && errors.surname}
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        {errors.phone && touched.phone && errors.phone}
                        <input
                            type="date"
                            name="time"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.time}
                        />
                        {errors.time && touched.time && errors.time}
                        <input
                            type="number"
                            name="person"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.person}
                        />
                        {errors.person && touched.person && errors.person}
                        <input
                            type="number"
                            name="teenager"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.teenager}
                        />
                        {errors.teenager && touched.teenager && errors.teenager}
                        <input
                            type="number"
                            name="child"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.child}
                        />
                        {errors.child && touched.child && errors.child}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </form>
                    )}
                </Formik>
                </div>
                </div>
        </>
        )
    }
    
    export default Add
        