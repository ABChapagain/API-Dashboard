import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import CategoryHome from '../../components/Category/CategoryHome'

function success() {
    var router = useRouter()
    useEffect(() => {
        router.push("/category")
    }, [])

    return (
        <div>
            <CategoryHome />
        </div>
    )
}

export default success