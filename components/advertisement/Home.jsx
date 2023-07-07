import React, { useEffect } from 'react'
import { useState } from 'react'
import Addadvertisement from './Addadvertisement'
import SkelLoad from '../Category/SkelLoad'

function Advertisement() {
    var [ads, setAds] = useState([])
    var [loading, setLoading] = useState(true)
    var [error, setError] = useState(false)
    function getallads() {
        fetch("/api/advertisement/getadvertisement")
            .then(res => res.json())
            .then(data => {
                setAds(data)
                setLoading(false)
                console.log(data)
            }).catch(err => {
                setError(true)
                setLoading(false)
                console.log(err)
            })
    }
    useEffect(() => {
        getallads()
    }, [])

    function search(e) {
        var { value } = e
        if (!!value) {
            // search from ads
            var filtered = ads.filter(item => {
                return item.title.toLowerCase().includes(value.toLowerCase())
            }
            )
            setAds(filtered)
        } else {
            setLoading(true)
            getallads()
        }

    }

    if (loading) {
        return (
            <SkelLoad />
        )
    }
    return (
        <div className='flex flex-col w-full gap-5 justify-start items-start'>
            <h2 className='text sm:text-3xl text-xl font-bold'>Advertisement Management</h2>
            <p className='tet sm:text-2xl text-xl'>Add, Remove, Edit and manage Advertisements from here</p>
            <Addadvertisement />
            {(!loading) && <div className="productList " >
                <div className="proinfo flex justify-between items-center">
                    <h2 className='text sm:text-2xl text-xl py-5 '>Your posted Advertisements</h2>
                    <input type="text" className='input p-2 text-white' id='search' onChange={(e) => search(e.target)} placeholder='Search' />
                </div>
                <div className="overflow-x-auto">
                    <table className="table" id='table'>
                        <thead>
                            <tr className='text text-black'>
                                <th>
                                    SN
                                </th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description </th>
                                <th>Targetted Link</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ads.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text font-bold'>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td className='text text-blue-800'>{item.url}</td>
                                        <td>
                                            <div className="flex items-center space-x-4">
                                                <button className="btn btn-warning">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>}
            {(loading) && <div>Loading...</div>}
            {(error) && <div>Something went wrong</div>}
        </div>
    )
}

export default Advertisement