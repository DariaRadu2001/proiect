import { CSSProperties, PropsWithChildren } from 'react';
import Form from './Form.tsx';
import Button from './Button.tsx';
import React, { useState } from 'react';

export interface IDialog extends PropsWithChildren {
    id?: string;
    disabled?: boolean;
    style?: CSSProperties | undefined;
    className?: string | undefined;
    onClose?: () => void;
}

const RegisterDialog: React.FC<IDialog> = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [open, setOpen] = useState(false);

    const register = () => {
         console.log({username, email, password });
         setOpen(false);
    }

    return (
        <>
            <Button className={"register"} onClick={() => setOpen(!open)}>
                       Open Register Form
            </Button>
            {open && (
                <div>
                    <form onSubmit={register} style={styles.form}>
                        <h2>Register</h2>
                        <label style={styles.label}>Username:</label>
                        <Form type="text" value={username} required={true} 
                            onChange={e => setUsername(e.target.value)}/>
                        <label style={styles.label}>Email:</label>
                        <Form type="text" value={email} required={true} 
                            onChange={e => setEmail(e.target.value)}/>
                        <label style={styles.label}>Password:</label>
                        <Form value={password} required={true} type="password"
                            onChange={e => setPassword(e.target.value)}/>
                        <label style={styles.label}>Password Again:</label>
                        <Form value={password2} required={true} type="password"
                            onChange={e => setPassword2(e.target.value)}/>
                        <Button>
                            Register
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
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

export default RegisterDialog;
