import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';

export interface IBaseButton extends PropsWithChildren {
    id?: string;
    disabled?: boolean;
    style?: CSSProperties | undefined;
    className?: string | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    starticon?: any;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export default function Button(props: IBaseButton) {
    return (
        <button style={styles.button}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.starticon}{props.children}
        </button>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    padding: '0.75rem',
    backgroundColor: 'rgb(76 169 100)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  }
};
