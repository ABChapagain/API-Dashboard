import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Root from '../../components/product/physical/Root'
import Rootservice from '../../components/product/service/Root'

function product() {
  var router = useRouter()
  var [loading, setLoading] = useState(true)
  var [type, setType] = useState('')
  var [isAdmin, setIsAdmin] = React.useState(false)
  useEffect(() => {
    checkData()
  }, [])

  function checkData() {
    fetch("/api/user/checkAdmin")
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        if (data.isadmin === true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
      )
      .catch(err => console.log(err))

  }

  useEffect(() => {
    var type = router.query.type
    if (!!type) {
      setType(type)
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
      {(!loading && type === 'service' && isAdmin) && <Rootservice />}
      {(!loading && type === 'physical' && isAdmin) && <Root />}
      {(!loading && !isAdmin) && <h1>
        You do not have permission to access this page. Ask Admins for more information.
      </h1>}
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