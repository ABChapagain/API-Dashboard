import React, { useState } from 'react'
import { useRouter } from 'next/router'

function Addproduct() {
    var router = useRouter()
    var [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: "",
        category: '',
        subCategory: '',
        keywords: '',
    })
    function addProduct(e) {
        e.preventDefault()
        fetch('/api/product/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.error) {
                alert(data.error)
            } else {
                alert("Saved Successfully")
                var input = document.querySelectorAll('input')
                input.forEach(item => {
                    item.value = ''
                }
                )
                router.push("/product/success")
            }
        })
    }

    function addData(e) {
        var { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    return (
        <div>
            <div className="actionButtons">
                <button className='btn btn-primary' onClick={() => window.my_modal_5.showModal()}>Add Product</button>
            </div>
            {/* Add PRoduct Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Add A Product</h3>
                    <hr className="mb-4 mt-4" />
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title">Title</label>
                            <input type="text" onChange={(e) => addData(e)} name='title' className='input' placeholder='Enter Title' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Description</label>
                            <input type="text" onChange={(e) => addData(e)} name='description' className='input' placeholder='Enter Description' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="keywords">Keywords</label>
                            <input type="text" onChange={(e) => addData(e)} name='keywords' className='input' placeholder='Enter Keywords' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="category">Category</label>
                            <input type="text" onChange={(e) => addData(e)} name='category' className='input' placeholder='Enter Category' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="subcategory">Subcategory</label>
                            <input type="text" onChange={(e) => addData(e)} name='subcategory' className='input' placeholder='Enter Category' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="price">Price</label>
                            <input type="text" onChange={(e) => addData(e)} name='price' className='input' placeholder='Enter Price' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="image">Image</label>
                            <input type="text" onChange={(e) => addData(e)} name="image" className='input' placeholder='Enter Image' />
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn" onClick={(e) => addProduct(e)}>Save</button>
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default Addproduct