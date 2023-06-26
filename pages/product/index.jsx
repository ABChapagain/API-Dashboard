import { useRouter } from 'next/router'
import React from 'react'

function index() {
    var router = useRouter()
    return (
        <div className='flex items-center justify-center gap-5 h-screen w-full lg:flex-row flex-col'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.54abc658eb3b61c05f674c9838b3bb79?rik=ErX7vUSc3djaWA&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Physical Products</h2>
                    <p>Add or Edit physical products.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => router.push("/product/physical")}>Navigate</button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://th.bing.com/th/id/R.0b9ab78ccb772eb37183c6bc44cb6251?rik=Zq9akees6akztg&riu=http%3a%2f%2fwww.youthvillage.co.za%2fwp-content%2fuploads%2f2015%2f08%2fcareers.jpg&ehk=d3c6e8DVbiQwjEAb1sgCx4hwRqRPjiBN%2fcl9G0YhAMg%3d&risl=&pid=ImgRaw&r=0" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Services</h2>
                    <p>Add or edit services like Plumber, Carpenter ETC.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => router.push("/product/service")}>Navigate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index