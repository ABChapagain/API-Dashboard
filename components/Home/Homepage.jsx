import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

function Homepage() {
    var { data: session } = useSession()
    var [isAdmin, setIsAdmin] = React.useState(false)
    var [loading, setLoading] = React.useState(true)

    function fetchUser() {
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
        fetchUser()
    }, [])

    return (
        <section class="  flex font-medium items-center justify-center h-screen">

            <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                <div class="mt-6 w-fit mx-auto">
                    <img src={session.user.image} class="rounded-full w-28 " alt="profile picture" srcset="" />
                </div>

                <div class="mt-8 ">
                    <h2 class="text-white font-bold text-2xl tracking-wide">Hello, {session.user.name}</h2>
                </div>
                <p class="text-emerald-400 font-semibold mt-2.5" >
                    {(!loading && isAdmin) ? "Admin" : "User"}
                    {(loading) && "Loading..."}
                </p>



            </section>


        </section>
    )
}

export default Homepage