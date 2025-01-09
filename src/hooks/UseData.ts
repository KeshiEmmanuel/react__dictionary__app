import { FetchReponse } from "@/types/WordTypes";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

function UseData(searchString: string) {
    const [data, setData] = useState<FetchReponse[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    console.log(searchString);

    useEffect(() => {
        const controller = new AbortController();
        if (!searchString) {
            setisLoading(false);
            setData([]);
        } else {
            setisLoading(true);
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
        }

        return () => controller.abort();
    }, [searchString]);

    return { data, isLoading, error };
}
export default UseData;
