'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineCustomerService } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { RxCross1 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import { BsNewspaper } from 'react-icons/bs'
import { FaBlog } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

function LoggedNavbar() {
    var [serviceList, setServiceList] = useState(false)
    var [menu, setMenu] = useState(false)
    function toggleService() {
        setServiceList(!serviceList)
    }

    function reduceSidebar() {
        var nav = document.getElementById('nav')
        var menus = document.getElementById('menus')
        var menus2 = document.getElementById('menus2')
        var das = document.getElementById('das')
        menus.style.display = 'none'
        menus2.style.display = 'none'
        das.style.opacity = '0'
        nav.style.width = '8px'
        setMenu(true)
        setServiceList(false)
    }
    function increaseSidebar() {
        var nav = document.getElementById('nav')
        nav.style.width = '250px'
        var menus = document.getElementById('menus')
        var menus2 = document.getElementById('menus2')
        var das = document.getElementById('das')
        setTimeout(() => {
            menus.style.display = 'flex'
            menus2.style.display = 'flex'
            das.style.opacity = '1'
        }, 300);
        setMenu(false)
    }
    var router = useRouter()
    useEffect(() => {
        if (router.pathname == '/product/physical' || router.pathname == '/product/service') {
            setServiceList(true)
        } else {
            setServiceList(false)
        }
        reduceSidebar()
    }, [router])

    function nav(path) {
        router.push(path)
    }

    return (
        <div className='navbar' id='nav'>
            <div className='flex justify-center items-center'>
                <h1 className='text sm:text-2xl text-xl font-bold' id='das'>Dashboard</h1>
                {(!menu) && <div className="menuLogo" onClick={reduceSidebar}>
                    <RxCross1 />
                </div>}
                {(menu) && <div className="menuLogo" onClick={increaseSidebar}>
                    <GiHamburgerMenu />
                </div>}
            </div>
            <div className='flex justify-center gap-5 flex-col w-full' id='menus'>
                <div className="menItem" onClick={() => nav("/")}>
                    <AiOutlineHome />
                    <p>Home</p>
                </div>
                <div className="menItem" onClick={() => nav("/category")}>
                    <BiCategoryAlt />
                    <p  >Category</p>
                </div>
                {(!serviceList) && <div className="menItem" onClick={toggleService}>
                    <AiOutlineCustomerService />
                    <p  >Product</p>
                </div>}
                {(serviceList) && <div className="menItem menActive" onClick={toggleService}>
                    <AiOutlineCustomerService />
                    <p  >Product</p>
                </div>}

                {(serviceList) && <div className="serviceList">
                    <p onClick={() => nav("/product/physical")}>
                        <MdOutlineProductionQuantityLimits />
                        Physical</p>
                    <p onClick={() => nav("/product/service")}>
                        <FiUsers />
                        Service
                    </p>
                </div>}

                <div className="menItem" onClick={() => nav("/")}>
                    <BsNewspaper />
                    <p>News</p>
                </div>

                <div className="menItem" onClick={() => nav("/advertisement")}>
                    <FaBlog />
                    <p>Advertisement</p>
                </div>



            </div>
            <div className="navFooter" id='menus2'>
                <p className='btn btn-primary' onClick={signOut}>Logout</p>
            </div>
        </div>
    )
}

export default LoggedNavbar