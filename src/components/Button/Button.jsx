import React from 'react';
import { useHistory } from 'react-router';


const Button = (props) => {

    let history = useHistory();

    const go = () => {
        history.push(props.path);
    }

    return (
        <div className="button active" aria-current="page" onClick={() => go()}>
            {props.destination}
        </div>
    )
};

export default Button;
