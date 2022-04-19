import React from 'react';
import {useQuery} from "react-query";

const Users = () => {
    const {isLoading, isFetching, error, data,status} = useQuery("users", () =>
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()))
    return (
        <div>
            <h1>Hi Hi Hi</h1>
            {isFetching && "Background Updating..."}
            {isLoading && "Loading..."}
            {error && error.message}
            {data && data.map((user)=><h1 key={user.id}>{user.name}</h1>)}
        </div>
    );
};

export default Users;