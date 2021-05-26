import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setTasks(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchResource()
    }, [url])

    return {tasks}
}
export default useFetch
