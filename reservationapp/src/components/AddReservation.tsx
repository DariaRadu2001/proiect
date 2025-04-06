import Form from './Form.tsx';
import Button from './Button.tsx';
import Header from './Header.tsx';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function AddReservationPage() {

    const username = localStorage.getItem("username");
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const addReservation = async (e: React.FormEvent) => {

        e.preventDefault();
        console.log(username, date, time, location, description)
        try {
            const res = await axios.post('https://p601ghon31.execute-api.eu-central-1.amazonaws.com/prod/reservation', {
                username: username,
                date: date,
                time: time,
                location: location,
                description: description
            });
            toast.success("Reservation added successfuly!");
        } catch (err) {
            toast.error("The process failed. Please try again.");
        }
    }

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
                        Add Reservation
                    </Button>
                </form>
            </div>

            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
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