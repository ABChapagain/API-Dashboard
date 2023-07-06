import React from 'react'
import { useSession } from 'next-auth/react'
import LoggedNavbar from './LoggedNavbar'

function Navbar() {
    var { data: session } = useSession()
    if (session) {
        return (
            <LoggedNavbar />
        )
    } else {
        return (
            null
        )
    }

}

export default Navbar