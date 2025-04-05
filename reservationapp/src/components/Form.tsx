import { CSSProperties, ChangeEventHandler, PropsWithChildren } from 'react';

export interface IFormField extends PropsWithChildren {
    id?: string;
    value?: string;
    required?: boolean;
    type: string;
    style?: CSSProperties | undefined;
    className?: string | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Form(props: IFormField) {
    return (
        <input style={styles.input}
            onChange={props.onChange}
            value={props.value}
            required={props.required}
            type={props.type}>
        </input>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
 input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  }
};
