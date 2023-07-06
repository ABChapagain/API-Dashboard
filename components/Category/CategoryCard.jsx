import React from 'react'

function CategoryCard({ item }) {
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-image">
                <img className='ci-thumb' src={item.thumbImage} alt="thumb" />
                {(!!item.bannerImage) && <img className='absImage' src={item.bannerImage} alt="banner" />}
                {(!item.bannerImage) && <img className='absImage' src={"https://th.bing.com/th/id/R.d93fc3a50f3ffd10769d06bf5b0d6832?rik=YUdAOPQ09rX5qA&pid=ImgRaw&r=0"} alt="banner" />}
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {item.title}
                    {(!!item.parentCategory) && <div className="badge badge-secondary">{item.parentCategory.title}</div>}
                </h2>
                <p>{item.description}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item.meta.keywords}</div>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>

    )
}

export default CategoryCard