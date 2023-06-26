import React from 'react'
import { useRouter } from 'next/router'
import Root from '../../components/product/physical/Root'

function success() {
    var router = useRouter()
    setTimeout(() => {
        router.push('/product/physical')
    }, 500)
    return (
        <Root />
    )
}

export default success