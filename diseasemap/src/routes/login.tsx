import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { css } from '@emotion/css';
import LoginComponent from '../components/login'

const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export default function Login(): JSX.Element {
    return (
            <div>
                <div className={centerStyle}>
                    <div>
                        <p>This is login Page</p>
                        <LoginComponent />
                    </div>
                </div>
            </div>
    );
}