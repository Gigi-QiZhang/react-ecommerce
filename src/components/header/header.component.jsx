import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is a higher order component
import { createStructuredSelector } from 'reselect';
 
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink to='/shop' onClick={()=>auth.signOut()} >SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
                // <OptionLink as='div'></OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

// import './header.styles.scss';

// const Header = ({ currentUser, hidden }) => (
//     <div className='header'>
//         <Link className='logo-container' to="/">
//             <Logo className='logo'/>
//         </Link>
//         <div className='options'>
//             <Link className='option' to='/shop'>
//                 SHOP
//             </Link>
//             <Link className='option' to='/shop'>
//                 CONTACT
//             </Link>
//             {
//                 currentUser ?
//                 <Link className='option' onClick={()=>auth.signOut()} to='/'>SIGN OUT</Link>
//                 :
//                 <Link className='option' to='/signin'>SIGN IN</Link>
//             }
//             <CartIcon />
//         </div>
//         {/* <CartDropdown /> */}
//         { hidden ? null : <CartDropdown />}
//     </div>
// );

// (state) is from top level root reducer
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// });

// const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
//     currentUser,
//     hidden
// });

// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCurrentUser(state)
// });

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);