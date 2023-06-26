import React from 'react'
import { useRouter } from 'next/router'
import Advertisement from '../../components/advertisement/Home'

function success() {
    var router = useRouter()
    setTimeout(() => {
        router.push('/advertisement')
    }, 500)
    return (
        <Advertisement />
    )
}

export default success