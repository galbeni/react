import styles from './Button.module.css';
import styled from 'styled-components';
import { useState } from 'react';

const StyledButton = styled.button`
    width: 400px;
    height: 50px;
    font-size: 30px;
    background-color: yellow;
    color: ${(props) => {
        if(props.small) {
            return 'purple';
        }
        return props.fontColor;
    }}
`; // A styled egy factory metódus: pl.: styled.button, styled.h1, minden ami HTML által elfogadott element típus


const Button = (props) => {
    const [fontColor, setFontColor] = useState('blue');

    const changeColor = () => {
        console.log('valami')
        setFontColor('red');
    }

    return (
        <StyledButton small fontColor={fontColor} onClick={changeColor} className={styles.MyStyledButton}>
            {props.title} {fontColor}
        </StyledButton>
    )
}

export default Button;