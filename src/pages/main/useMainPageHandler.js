import {useEffect, useState} from "react";

export default function useMainPageHandler(lang) {
    const [data, setData] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        fetch(`http://healthycanadians.gc.ca/recall-alert-rappel-avis/api/recent/${lang}`)
            .then((response) => response.json())
            .then((data) => setData(data.results)).catch(e => alert(`Fetch data error, ${e}`));
    }, [lang])

    return {
        data,
        selectedItem,
        setSelectedItem
    }
}