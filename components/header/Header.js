import React, {} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import Link from 'next/link';
import useAuth from "../../auth/context";

const Header = (props) => {
  const router = useRouter();
  const {isAuthenticated, logout, user} = useAuth();
  return (
    <header className="header mt-3">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link href="/"><a className="navbar-brand nav-link ps-0">Nextjs-Auth</a></Link>
            </li>
            <li className={`nav-item`}>
              <Link href="/profile"><a className={`nav-link ${router.pathname === '/profile' ? 'active' : ''}`}>Profile</a></Link>
            </li>
            {isAuthenticated && user.role === 'admin' && (
              <li className={`nav-item`}>
                <Link href="/dashboard"><a className={`nav-link ${router.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</a></Link>
              </li>
            )}
          </ul>

          {isAuthenticated ? (
            <div>
              <span>{user.username}</span>
              <button className="mx-2 btn btn-outline-primary btn-sm" onClick={logout}>logout</button>
            </div>
          ) : (
            <div>
              <span><Link href="/login"><a className="btn btn-primary btn-sm">Login</a></Link></span>
            </div>
          )}
      </nav>
    </header>
  )
}

export default Header