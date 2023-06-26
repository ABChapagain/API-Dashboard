'use client'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineCustomerService } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import { BsNewspaper } from 'react-icons/bs'
import { FaBlog } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import Link from 'next/link'

function Navbar() {
    var [serviceList, setServiceList] = useState(false)
    var [menu, setMenu] = useState(false)
    function toggleService() {
        setServiceList(!serviceList)
    }

    function reduceSidebar() {
        var nav = document.getElementById('nav')
        var menus = document.getElementById('menus')
        var menus2 = document.getElementById('menus2')
        menus.style.display = 'none'
        menus2.style.display = 'none'
        nav.style.width = '8px'
        setMenu(true)
        setServiceList(false)
    }
    function increaseSidebar() {
        var nav = document.getElementById('nav')
        nav.style.width = '250px'
        var menus = document.getElementById('menus')
        var menus2 = document.getElementById('menus2')
        setTimeout(() => {
            menus.style.display = 'flex'
            menus2.style.display = 'flex'
        }, 300);
        setMenu(false)
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
                <div className="menItem">
                    <AiOutlineHome />
                    <Link href="/">Home</Link>
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
                    <Link href="/product/physical">
                        <MdOutlineProductionQuantityLimits />
                        Physical</Link>
                    <Link href="/product/service">
                        <FiUsers />
                        Service
                    </Link>
                </div>}

                <div className="menItem">
                    <BsNewspaper />
                    <Link href="/">News</Link>
                </div>

                <div className="menItem">
                    <FaBlog />
                    <Link href="/advertisement">Advertisement</Link>
                </div>



            </div>
            <div className="navFooter" id='menus2'>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Navbar