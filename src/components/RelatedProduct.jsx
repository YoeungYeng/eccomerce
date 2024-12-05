import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RelatedProduct = () => {
    
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() =>{
        // fetch api
        axios({
            method: "GET",
            url: ""
        })
    },[])


  return (
    <div>RelatedProduct</div>
  )
}

export default RelatedProduct