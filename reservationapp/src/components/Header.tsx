import { PropsWithChildren } from 'react';
import { useNavigate, Link } from 'react-router-dom';
export interface IHeader extends PropsWithChildren {
    logedin: boolean;
}

export default function Header(props: IHeader) {

    const ok = props.logedin;
    const navigate = useNavigate();

    return (
        <>
            <header style={styles.header}>
                    <div style={styles.logoContainer}>
                        <h1 style={styles.title}>Reservation Management</h1>
                    </div>

                {ok && (
                    <nav>
                        <ul style={styles.navList}>
                            <li>
                                <Link to="/" style={styles.link}>
                                    Login Page
                                </Link>
                            </li>
                            <li>
                                <Link to="/homePage" style={styles.link}>
                                    See Reservations
                                </Link>
                            </li>
                            <li>
                                <Link to="/addReservation" style={styles.link}>
                                    Add Reservation
                                </Link>
                            </li>
                        </ul>
                    </nav>)}
            </header>
        </> 
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    title: {
        margin: '1rem',
        fontSize: '1.5rem',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    header: {
    backgroundColor: 'rgb(76 169 100)',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    navList: {
        listStyleType: "none",
        display: "flex",
        gap: "20px",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
    }
}