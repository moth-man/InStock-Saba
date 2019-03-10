import React from 'react';
import logo from '../../assets/logos/Logo-instock.svg';
import './navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
	render() {
		return (
			<section className='navbar'>
				<div className='navbar__logo'>
					<img src={logo} alt="website logo" />
				</div>
				<div className='navbar__links'>
					<Link className="link" to='/inventory'>
						<span className='navbar__link'>Inventory</span>
					</Link>
					<Link className="link" to='/'>
						<span className='navbar__link'>Locations</span>
					</Link>
				</div>
			</section>
		);
	}
}

export default Navbar;