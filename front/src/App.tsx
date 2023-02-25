import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Profile from './pages/Profile'

/**
@function
@returns {JSX.Element} - A JSX element containing the Navbar, Menu and Profile components.
*/

export default () => {
	return (
		<>
			<Navbar />
			<Menu />
			<Profile />
		</>
	)
}

