import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo classname='logo'/>
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;