import Header from './Header.tsx';
import React, { useEffect, useState } from 'react';
import { Reservation }  from "../models/reservation.model.ts";
import axios from 'axios';

function HomePage() {
    
    const username = localStorage.getItem("username");
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                console.log(username)

                const res = await axios.get('https://p601ghon31.execute-api.eu-central-1.amazonaws.com/prod/reservation', {
                    params: {
                        username: username
                    }
                });

                if (res.data && typeof res.data.body === "string") {
                    const parsed = JSON.parse(res.data.body);
                    setReservations(parsed.data as Reservation[]);
                    console.log(res);
                }
            } catch (err) {
                console.error('Error fetching reservations:', err);
            }
        };

        if (username) {
            fetchReservations();
        }
    }, [username]);

    return (
        <>
            <Header logedin={true} />
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem' }}>
                <table style={{ borderCollapse: 'collapse', width: '90%' }}>
                    <thead>
                        <tr>
                            <th style={styles.thStyle}>Date</th>
                            <th style={styles.thStyle}>Time</th>
                            <th style={styles.thStyle}>Location</th>
                            <th style={styles.thStyle}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    thStyle : {
        border: '1px solid #ccc',
        padding: '8px',
        background: 'rgb(76 169 100)',
        textAlign: 'left' as const,
        color: '#fff',
    },
    tdStyle : {
        border: '1px solid #ccc',
        padding: '8px',
    }
};

export default HomePage;