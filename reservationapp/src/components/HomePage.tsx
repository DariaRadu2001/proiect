import Header from './Header.tsx';
import React, { useState } from 'react';
import { Reservation }  from "../models/reservation.model.ts";

function HomePage() {
    
    const username = localStorage.getItem("username");
    const reservations: Reservation[] = [];

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
                        {reservations.map((res, index) => (
                            <tr key={index}>
                                <td style={styles.tdStyle}>{res.date}</td>
                                <td style={styles.tdStyle}>{res.time}</td>
                                <td style={styles.tdStyle}>{res.location}</td>
                                <td style={styles.tdStyle}>{res.description}</td>
                            </tr>
                        ))}
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