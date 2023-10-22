'use client'; // MUST BE CLIENT COMPONENT

import { useEffect } from "react";

const Error = ({error, reset}) => {

    useEffect(() => {
        // log errors to an error reporting system
        console.error(error);
    },[error]);

    return (
        <div>
            <h2>Something went wrong</h2>
            <button
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
};

export default Error;