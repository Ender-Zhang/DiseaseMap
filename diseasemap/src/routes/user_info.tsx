import { css } from '@emotion/css';
import { Copyright } from '@mui/icons-material';
import { Button, Container, Box } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import userdata from "../assets/data/userdata.json"


export default function User_info() {
    // 从url中获取uerid
    function User() {
        const { id } = useParams();
        // userId is the value of the "userId" route parameter
        // ...
        return id;
      }
    //   User();
    const id = User();
    const user = userdata.users.find(user => user.id === id);
    // 从json中获取用户信息
    const users = userdata.users;
    console.log(users); 
    return (
        <div>
            <p>This is User Page</p>
            <p>{user?.username}</p>
            <p>{user?.password}</p>
        </div>
    );
  }