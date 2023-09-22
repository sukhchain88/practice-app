import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.style.css'
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg"

const Navigation = () => {
    return (
        <Fragment>

            <div className="navigation-container">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        Sign-In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation