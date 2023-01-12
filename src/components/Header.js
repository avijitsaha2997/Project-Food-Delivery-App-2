import React from 'react'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../img/avatar.png"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { useState } from 'react';


const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {

        if (!user) {
            const { user: { refreshToken, providerData
            } } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: "SET_USER",
                user: providerData[0],
            });

            localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu)
        }

    }

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: "SET_USER",
            user: null,
        });
    }

    return (
        <header className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary drop-shadow-lg'>

            {/*Desktop & Tablet*/}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={"/"} className='flex items-center gap-2 cursor-pointer'

                >
                    <img

                        className='w-10 object-cover'
                        src='https://www.pngkey.com/png/full/211-2117740_chicken-big-chicken-logo.png' alt='' />
                    <p className='text-headingColor text-xl font-bold'>Yummy</p>
                </Link>

                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: 200
                        }}
                        className='flex items-center gap-8 '>

                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>

                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>

                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>

                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>

                    </motion.ul>

                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xm text-white font-semibold'>2</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <motion.img
                            whileTap={{
                                scale: 0.6
                            }}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl drop-shadow-xl rounded-full cursor-pointer'
                            src={user ? user.photoURL : Avatar} alt='User Profile'
                            onClick={login}
                        />
                        {
                            isMenu &&
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.6
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.6
                                }}
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
                                {user && user.email === "jit.avi.saha2997@gmail.com" &&
                                    <Link to={"/createItem"}>
                                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                            onClick={() => setIsMenu(false)}
                                        >New Item <MdAdd /></p>
                                    </Link>

                                }

                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                    onClick={logout}
                                >Logout <MdLogout /></p>

                            </motion.div>
                        }
                    </div>
                </div>
            </div>

            {/*Mobile*/}
            <div className='flex items-center justify-between md:hidden w-full h-full'>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xm text-white font-semibold'>2</p>
                    </div>
                </div>

                <Link to={"/"} className='flex items-center gap-2 cursor-pointer'>
                    <img

                        className='w-10 object-cover'
                        src='https://www.pngkey.com/png/full/211-2117740_chicken-big-chicken-logo.png' alt='' />
                    <p className='text-headingColor text-xl font-bold'>Yummy</p>
                </Link>

                <div className='relative'>
                    <motion.img
                        whileTap={{
                            scale: 0.6
                        }}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl drop-shadow-xl rounded-full cursor-pointer'
                        src={user ? user.photoURL : Avatar} alt='User Profile'
                        onClick={login}
                    />
                    {
                        isMenu &&
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.6
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.6
                            }}
                            className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 '>
                            {user && user.email === "jit.avi.saha2997@gmail.com" &&
                                <Link to={"/createItem"}>
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                                        onClick={() => setIsMenu(false)}
                                    >New Item <MdAdd /></p>
                                </Link>

                            }
                            <ul

                                className='flex flex-col '>

                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={() => setIsMenu(false)}>Home</li>

                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={() => setIsMenu(false)}>Menu</li>

                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2' onClick={() => setIsMenu(false)}>About Us</li>

                                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100  px-4 py-2' onClick={() => setIsMenu(false)}>Service</li>

                            </ul>

                            <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base'
                                onClick={logout}
                            >Logout <MdLogout /></p>

                        </motion.div>
                    }
                </div>
            </div>
        </header>




    )
}

export default Header;

