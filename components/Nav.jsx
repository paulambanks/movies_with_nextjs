'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import useProviders from "@utils/useProvider";

const Nav = () => {
    const {data: session} = useSession();
    const providers = useProviders();

    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link key="logo" href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    className="object-contain"
                    alt="logo"
                    width={30}
                    height={30}
                />
                <p className="logo_text">Movies</p>
            </Link>
            {/* Desktop navigation*/}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <button
                            type="button"
                            key="signout"
                            onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile" key="profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                alt="profile"
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    id={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }

                    </>
                )}
            </div>

            {/* Mobile navigation*/}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            alt="profile"
                            className="rounded-full"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="profile"
                                    key="profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My profile
                                </Link>
                                <button
                                    type="button"
                                    key="signout"
                                    onClick={() => {
                                        setToggleDropdown(false)
                                        signOut();
                                    }}
                                    className="wt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key="signin"
                                    id={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }

                    </>
                )}
            </div>
        </nav>

    )
}

export default Nav;