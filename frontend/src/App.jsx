import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
function App() {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://otel-isi.onrender.com/api/order').then((res) => {
            setdata(res.data)
            setLoading(false)
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    })
    const router = createBrowserRouter(ROUTES);
    return (
        <>
        <MainContext.Provider value={{data, setdata, loading, setLoading, error, setError}}>
            <RouterProvider router={router }/>
        </MainContext.Provider>
        </>
    );
}

export default App;
