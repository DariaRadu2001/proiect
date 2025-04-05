import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';

export interface IHeader extends PropsWithChildren {
    logedin: boolean;
}

export default function Header(props: IHeader) {

    const ok  = props.logedin;

    return (
        <>
            <header style={styles.header}>
                    <div style={styles.logoContainer}>
                        <h1 style={styles.title}>Reservation Management</h1>
                    </div>

                    {ok && (<h1>dsfcsd</h1>)}
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
  }
}