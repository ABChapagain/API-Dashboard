import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import CategoryCard from './CategoryCard'

function CategoryHome() {
    var [category, setCategory] = useState([])
    var [error, setError] = useState(false)

    function fetchCategory() {
        fetch('/api/category/getAll')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategory(data)
            }
            ).catch(err => {
                console.log(err)
                setError(true)
            }
            )
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    function search(e) {
        // 
        console.log(e.value)
    }
    return (
        <div className='flex flex-col w-full gap-5 justify-start items-start'>
            <h2 className='text sm:text-3xl text-xl font-bold'>Product Categories</h2>
            <p className='text sm:text-2xl text-xl'>Add, Remove or Edit Product Categories from Here</p>
            {(!error) && <AddCategory parentCategory={category} />}
            {(!error) && <div className="productList" >
                <div className="proinfo flex justify-between items-center">
                    <h2 className='text sm:text-2xl text-xl py-5 '>Added Categories</h2>
                    <input type="text" className='input p-2 text-white' id='search' onChange={(e) => search(e.target)} placeholder='Search' />
                </div>
                <div className="overflow-x-auto flex md:flex-row flex-col gap-5 flex-wrap">
                    {category.map((item, index) => {
                        return (
                            <CategoryCard item={item} key={index} />
                        )
                    })
                    }
                </div>
            </div>}

            {error && <div className="error">
                <p className='text sm:text-2xl text-xl'>There was an error while fetching data</p>
                <button className='btn' onClick={() => fetchCategory()}>Retry</button>
            </div>}


        </div>
    )
}

export default CategoryHome