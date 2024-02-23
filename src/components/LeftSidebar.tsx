import { Link, NavLink } from 'react-router-dom';
import { sidebarLinks } from "../constants";
import { MyNavLink } from '../types';
import SignOutButton from './ui/SignOutButton';
import logo from '../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { getUsername } from '../context/AuthContext';
import React from "react";
import { getUserTypeByUserName } from '../api/appwrite/api';

const LeftSidebar = () => {

    const [currentUser, setCurrentUser] = useState({} as any);
    const [userType, setUserType] = useState({} as any);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUsername();
            setCurrentUser(user);

            if (!user) return;

            const userType = await getUserTypeByUserName(user);

            if (!userType) setUserType('Individual');

            setUserType(userType);
        }
        fetchUser();
    }, [currentUser])


    return (
        <nav className="flex flex-col justify-between max-w-[80px] min-w-[80px] h-screen bg-purple-1 fixed">
            <div className="pt-5 flex flex-col gap-8 items-center">
                <Link to="/" className="flex gap-3 items-center">
                    <img src={logo} alt="logo" width={50} height={36} />
                </Link>

                <ul className='flex flex-col gap-2'>
                    {currentUser === 'theoed' && sidebarLinks?.map((link: MyNavLink) => {
                        return (
                            <li key={link.label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                                <NavLink to={link.route}
                                    className="flex gap-10
                                    items-center p-4"
                                >
                                    <img src={link.imgURL} alt={link.label} width={20} height={20}
                                        className={`group-hover:invert-white ${'invert-white'}`}
                                    />

                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                {userType === 'RMS' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[0].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[0].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[0].imgURL} alt={sidebarLinks[0].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[1].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[1].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[1].imgURL} alt={sidebarLinks[1].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[2].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[2].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[2].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[3].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[3].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[3].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[4].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[4].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[4].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>

                    </ul>
                )}

                {userType === 'CITS' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[5].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[5].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[5].imgURL} alt={sidebarLinks[5].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[6].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[6].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[6].imgURL} alt={sidebarLinks[4].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>


                    </ul>
                )}

                {currentUser === 'account3' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[8].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[8].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[8].imgURL} alt={sidebarLinks[6].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[7].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[7].route}
                                className="flex gap-10 items-center p-5"
                            >
                                <img src={sidebarLinks[7].imgURL} alt={sidebarLinks[7].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>


                    </ul>
                )}

                {userType === 'Individual' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[0].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[0].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[0].imgURL} alt={sidebarLinks[0].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[1].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[1].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[1].imgURL} alt={sidebarLinks[1].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[2].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[2].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[2].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[3].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[3].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[3].imgURL} alt={sidebarLinks[3].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[4].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[4].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[4].imgURL} alt={sidebarLinks[4].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[6].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[6].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[6].imgURL} alt={sidebarLinks[6].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>


                    </ul>
                )}

                {userType === 'Corporate' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[0].label} className='rounded-full base-medium hover:bg-primary-500 bg-red transition'>
                            <NavLink to={sidebarLinks[0].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[0].imgURL} alt={sidebarLinks[0].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[1].label} className='rounded-full base-medium hover:bg-primary-500 bg-red transition'>
                            <NavLink to={sidebarLinks[1].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[1].imgURL} alt={sidebarLinks[1].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[2].label} className='rounded-full base-medium hover:bg-primary-500 bg-red transition'>
                            <NavLink to={sidebarLinks[2].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[2].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[3].label} className='rounded-full base-medium hover:bg-primary-500 bg-red transition'>
                            <NavLink to={sidebarLinks[3].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[3].imgURL} alt={sidebarLinks[3].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[4].label} className='rounded-full base-medium hover:bg-primary-500 bg-red transition'>
                            <NavLink to={sidebarLinks[4].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[4].imgURL} alt={sidebarLinks[4].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[5].label} className='rounded-full base-medium hover:bg-primary-500 bg-secondary-500 transition'>
                            <NavLink to={sidebarLinks[5].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[5].imgURL} alt={sidebarLinks[5].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[6].label} className='rounded-full base-medium hover:bg-primary-500 bg-secondary-500 transition'>
                            <NavLink to={sidebarLinks[6].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[6].imgURL} alt={sidebarLinks[6].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>

                    </ul>
                )}



            </div>

            <div className='pt-7'>
                <SignOutButton />
            </div>
        </nav>
    )
}

export default LeftSidebar