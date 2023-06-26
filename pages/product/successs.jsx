import React from 'react'
import { useRouter } from 'next/router'
import Root from '../../components/product/service/Root'

function success() {
    var router = useRouter()
    setTimeout(() => {
        router.push('/product/service')
    }, 500)
    return (
        <Root />
    )
}

export default success