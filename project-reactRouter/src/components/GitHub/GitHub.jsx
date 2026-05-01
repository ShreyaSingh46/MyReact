import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    const data = useLoaderData()

    // const[data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ShreyaSingh46')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // })

    

return (
    <div className='text-center m-4 bg-pink-400 text-black p-4 text-3xl'>GitHub Followers : {data.followers}
</div>
)
}

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/ShreyaSingh46')

    return Response.json()
}

export default GitHub

