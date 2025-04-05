import API_CONSTANTS from "../api/api.constants.ts";
import useFetchData from "../api/useFetchData.ts";
import Form from './Form.tsx';
import RegisterDialog from './Dialog.tsx';
import Button from './Button.tsx';
import Header from './Header.tsx';
import React, { useState } from 'react';

function HomePage() {
    
    const username = localStorage.getItem("username");

    return (
        <>
            <Header logedin={true} />

            <div style={styles.box}>
                fdgfdsgdf
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

export default HomePage;