import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function auth() {
    var router = useRouter()
    function getAuth() {
        fetch("/api/user/auth")
            .then(res => res.json())
            .then(data => {
                router.push('/')
            })
    }
    useEffect(() => {
        getAuth()
    }, [])

    return (
        <div>
        </div>

    )
}

export default auth