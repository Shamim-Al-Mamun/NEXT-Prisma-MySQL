import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router';

function NavBar(){

    const router = useRouter();
    function isActive(r) {
    if (r === router.pathname) {
      //use #router.query.page# if dynamic [page].tsx get pagename
      return " active";
    }
    else {
      return "";
    }
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link href="/">
        <a className="navbar-brand" >DATAHOSTBD - ACCOUNTS</a>
        </Link>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
          <Link href="/profile">
                <a className={"nav-link" + isActive('/profile')} href="#">
                    <i className="fa fa-users" aria-hidden="true"></i> Profile
                </a>
          </Link>
      </li>

      <li className="nav-item ">
          <Link href="/signin">
                <a className={"nav-link" + isActive('/signin')} href="#">
                    <i className="fas fa-user" aria-hidden="true"></i> Sign in
                </a>
          </Link>
      </li>

       {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>  */}
    </ul>
  </div>
</nav>
    )
}

export default NavBar;