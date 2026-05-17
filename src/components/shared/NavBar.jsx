"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { PersonFill } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import LogOut from "../auth/LogOut";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/destinations"}>Destinations</Link>
            </li>
            <li>
              <Link href={"/bookings"}>My Bookings</Link>
            </li>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link href={"/add-destination"}>Add Destination</Link>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li>
            <Link href={"/bookings"}>My Bookings</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>
        <Link href={"/"} className="lg:hidden flex">
          <Image
            src="/assets/Wanderlast.png"
            height={50}
            width={150}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-center ">
        <Link href={"/"} className="hidden lg:flex">
          <Image
            src="/assets/Wanderlast.png"
            height={50}
            width={150}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <Link href={"/my-profile"}>
              {" "}
              <PersonFill /> Profile
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    className="rounded-full"
                  />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <LogOut/>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
