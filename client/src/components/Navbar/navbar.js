import React from 'react';
import logo from '../../assets/logos/Logo-instock.svg';
import './navbar.css';


class Navbar extends React.Component {
	render() {
		return (
			<section className='navbar'>
				<div className='navbar__logo'>
					{/* ADD REACT ROUTER 'LINK' HERE */}
					<img src={logo} alt="website logo" />
					{/* ADD REACT ROUTER 'LINK' HERE */}
				</div>
				<div className='navbar__links'>
					<span className='navbar__link'>Inventory</span>
					<span className='navbar__link'>Locations</span>
				</div>
			</section>
		);
	}
}

export default Navbar;