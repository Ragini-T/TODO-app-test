import React, { useEffect } from 'react'
import axios from 'axios'

const Axios = () => {

    const getData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response)
        } 
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            Axios API Call
        </div>
    )
}

export default Axios