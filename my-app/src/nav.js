
import logo from './Logo.svg';

const sections = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Menu', link: '#menu' },
    { name: 'Reservations', link: '#reservations' },
    { name: 'Order Online', link: '#order-online' },
    { name: 'Login', link: '#login' }
];

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt='logo' />
            <ul>
                {sections.map((sections, index) =>
                (
                    <li key={index}>
                        <a href={sections.link}>{sections.name}</a>
                    </li>
                )
                )
                }
            </ul>
        </nav>
    );
}

export default Nav;