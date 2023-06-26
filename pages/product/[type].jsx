import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Root from '../../components/product/physical/Root'
import Rootservice from '../../components/product/service/Root'

function product() {
  var router = useRouter()
  var [loading, setLoading] = useState(true)
  var [type, setType] = useState('')
  useEffect(() => {
    var type = router.query.type
    if (!!type) {
      setType(type)
      setLoading(false)
      if (type !== 'service' && type !== 'physical') {
        router.push('/product')
      }
    } else {
      setLoading(true)
    }
  }, [router.query])
  return (
    <div className='sm:p-4 p-1'>
      {(loading) && <div>Loading...</div>}
      {(!loading && type === 'service') && <Rootservice />}
      {(!loading && type === 'physical') && <Root />}
    </div>
  )
}

export default product


// {
//   "meta": {
//       "keywords": []
//   },
//   "variant": {
//       "productImage": [],
//       "sku": "3WWnaxtov-"
//   },
//   "_id": "648d651f1c392475df996f62",
//   "title": "Music Player Bosemini",
//   "slug": "music-player-bosemini",
//   "description": "Music is most",
//   "mrp": 0,
//   "price": 5000,
//   "costPrice": 0,
//   "productImageGallery": [],
//   "category": [],
//   "subCategory": [],
//   "subSubCategory": [],
//   "createdAt": "2023-06-17T07:47:43.781Z",
//   "updatedAt": "2023-06-17T07:47:43.781Z",
//   "__v": 0
// },