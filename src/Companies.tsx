import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

import { fetchData } from "./companiesSlice";
import { RootState } from "./store";


const Companies = () => {

    const {data, isLoading, error} = useSelector((state: RootState) => state.companiesR);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    if(isLoading){
        return <p>data is loading</p>
    }

    if(error){
        return <p>{error.message}</p>;
    }

    return(
        <div>
            <h1>Companies App</h1>
            {data.length > 0 && data.map((company) => {
                return (
                    <div key={company.id}>
                        <p>{company.id}</p>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Companies;