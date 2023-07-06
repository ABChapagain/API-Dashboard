import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Loginpage from '../components/Login/Loginpage'
import { useRouter } from 'next/router'

function Login() {
    const { data: session, status } = useSession()
    var router = useRouter()
    if (session) {
        router.push('/')
    }
    return (
        <>
            <Loginpage />
        </>
    )
}

export default Login