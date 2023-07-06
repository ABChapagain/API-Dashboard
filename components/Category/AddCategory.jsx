import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function AddCategory({ parentCategory }) {
    var router = useRouter()
    var [data, setData] = useState({
        title: '',
        thumbImage: '',
        bannerImage: '',
        description: '',
        keywords: '',
        description: '',
        parentCategory: ''
    })
    function addData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function addCategory(e) {
        e.preventDefault()
        fetch('/api/category/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                router.push('/category/success')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className='btn btn-primary' onClick={() => window.my_modal_1.showModal()}>Add Category</div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Add a Category</h3>
                    <div className="py-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="keywords">Title</label>
                            <input type="text" onChange={(e) => addData(e)} name='title' className='input' placeholder='Enter A Title' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="keywords">Keywords</label>
                            <input type="text" onChange={(e) => addData(e)} name='keywords' className='input' placeholder='Enter Keywords' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Description</label>
                            <input type="text" onChange={(e) => addData(e)} name='description' className='input' placeholder='Enter Description' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="thumbImage">Thumbnail Image</label>
                            <input type="text" onChange={(e) => addData(e)} name='thumbImage' className='input' placeholder='Enter Thumbnail Image' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bannerImage">Banner Image</label>
                            <input type="text" onChange={(e) => addData(e)} name='bannerImage' className='input' placeholder='Enter Banner Image' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="parentCategory">Parent Category</label>
                            {parentCategory.length > 0 ? <select name="parentCategory" onChange={(e) => addData(e)} className='input'>
                                <option value="">None</option>
                                {parentCategory.map(item => {
                                    return <option value={item._id}>{item.title}</option>
                                })}
                            </select> : <div className="text-red-500">No Parent Category Found</div>}
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                        <button className="btn btn-primary" onClick={(e) => addCategory(e)}>Add Category</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default AddCategory