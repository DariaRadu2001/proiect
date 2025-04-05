import API_CONSTANTS from "../api/api.constants";
import useFetchData from "../api/useFetchData";
import Form from './Form.tsx';
import RegisterDialog from './Dialog.tsx';
import Button from './Button.tsx';
import Header from './Header.tsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('username', username);
        navigate('/homepage');
    }

    return (
        <>
            <Header logedin={false} />

            <div style={styles.box}>
                <form onSubmit={login} style={styles.form}>
                    <h2>Login</h2>
                    <label style={styles.label}>Username:</label>
                    <Form type='text' value={username} required={true} 
                        onChange={e => setUsername(e.target.value)}/>
                    <label style={styles.label}>Password:</label>
                    <Form value={password} required={true} type="password"
                        onChange={e => setPassword(e.target.value)}/>
                    <Button className={"login"}>
                        Login
                    </Button>
                </form>

                <RegisterDialog />
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

export default LoginPage;