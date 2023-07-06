import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Homepage from '../components/Home/Homepage'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

function index() {
    var { data: session, status } = useSession()
    var router = useRouter()
    if (!session) return (
        <div className="flex justify-center items-center flex-col h-screen gap-5">
            <h1 className="text-2xl">You are not Logged In</h1>
            <div className="btn btn-primary" onClick={() => router.push("/login")}>Login</div>
        </div>
    )
    return (
        <h2>
            <Homepage />
        </h2>
    )
}

export default index