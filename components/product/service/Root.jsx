import React, { useEffect } from 'react'
import { useState } from 'react'
import Addproduct from './Addservice'

function Root() {
    var [service, setservice] = useState([])
    var [loading, setLoading] = useState(true)
    var [error, setError] = useState(false)
    function getallproduct() {
        fetch("/api/product/getservice")
            .then(res => res.json())
            .then(data => {
                setservice(data)
                setLoading(false)
                console.log(data)
            }).catch(err => {
                setError(true)
                setLoading(false)
            })
    }
    useEffect(() => {
        getallproduct()
    }, [])

    function search(e) {
        var { value } = e
        if (!!value) {
            // search from product
            var filtered = service.filter(item => {
                return item.title.toLowerCase().includes(value.toLowerCase())
            }
            )
            setservice(filtered)
        } else {
            setLoading(true)
            getallproduct()
        }

    }
    return (
        <div className='flex flex-col w-full gap-5 justify-start items-start'>
            <h2 className='text sm:text-3xl text-xl font-bold'>Services</h2>
            <p className='tet sm:text-2xl text-xl'>Add, Remove or Edit Services from here</p>
            {(!loading && !error) && <Addproduct />}
            {(!loading && !error) && <div className="productList " >
                <div className="proinfo flex justify-between items-center">
                    <h2 className='text sm:text-2xl text-xl py-5 '>Your Services</h2>
                    <input type="text" className='input p-2' id='search' onChange={(e) => search(e.target)} placeholder='Search' />
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
                                <th>Description (Keywords) </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {service.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.thumbImage} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.description} <br />
                                            <span className="badge badge-ghost badge-sm">
                                                {(item.meta.keywords).map((item, index) => {
                                                    return (
                                                        <span key={index} className="badge badge-ghost badge-sm">{item}</span>
                                                    )
                                                })}
                                            </span>
                                        </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">Edit</button>
                                        </th>
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

export default Root