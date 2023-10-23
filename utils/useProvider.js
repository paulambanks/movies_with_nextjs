import {useEffect, useState} from "react";
import {getProviders} from "next-auth/react";

const useProviders = () => {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProvidersFunction = async () => {
            const response = await getProviders()
            setProviders(response);
        }

        setProvidersFunction();

    }, []);

    return providers;
};

export default useProviders;

