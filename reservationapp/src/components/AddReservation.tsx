import Form from './Form.tsx';
import Button from './Button.tsx';
import Header from './Header.tsx';
import React, { useState } from 'react';

function AddReservationPage() {

    const username = localStorage.getItem("username");
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const addReservation = () => {  }

    return (
        <>
            <Header logedin={true} />
            <div style={styles.box}>
                <form onSubmit={addReservation} style={styles.form}>
                    <h2>Add Reservation</h2>
                    <label style={styles.label}>Date:</label>
                    <Form type="date" value={date} required={true}
                        onChange={e => setDate(e.target.value)} />
                    <label style={styles.label}>Time:</label>
                    <Form type="time" value={time} required={true}
                        onChange={e => setTime(e.target.value)} />
                    <label style={styles.label}>Location:</label>
                    <Form type="text" value={location} required={true}
                        onChange={e => setLocation(e.target.value)} />
                    <label style={styles.label}>Description:</label>
                    <Form value={description} required={true} type="text"
                        onChange={e => setDescription(e.target.value)} />
                    <Button>
                        Add Resrvation
                    </Button>
                </form>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {

    box: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
    },
    label: {
        fontSize: 'large',
        fontFamily: 'system-ui',
    }
};

export default AddReservationPage;