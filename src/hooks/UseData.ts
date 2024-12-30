import { FetchReponse } from "@/types/WordTypes";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

function UseData(searchString: string) {
    const [data, setData] = useState<FetchReponse[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get<FetchReponse[]>(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${searchString}`,
                { signal: controller.signal }
            )
            .then((response) => {
                setData(response.data);
                setisLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setisLoading(false);
            });

        return () => controller.abort();
    }, [searchString]);

    return { data, isLoading, error };
}
export default UseData;
