import { css } from '@emotion/css';
import { Copyright } from '@mui/icons-material';
import { Button, Container, Box, Grid, Card, CardContent, Typography, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import userdata from "../assets/data/userdata.json"
// import Avatar from 'avataaars';


  const User_info = () => {

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
    // 如果没有找到用户，返回404
    if (!user) {
        return <h1>404</h1>;
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    {/* <Avatar sx={{ width: 80, height: 80 }} />
                     */}
                     {/* <Avatar
                        avatarStyle='Circle'
                        topType='WinterHat2'
                        accessoriesType='Sunglasses'
                        hatColor='Black'
                        facialHairType='Blank'
                        clotheType='BlazerShirt'
                        eyeType='Dizzy'
                        eyebrowType='UpDownNatural'
                        mouthType='Vomit'
                        skinColor='Light'
                        /> */}
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                            {user?.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user?.email}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2">
                  Personal Information
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Address:</strong> 
                  <div>
                    {user?.address && (
                        <div>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}, {user.address.state} {user.address.zip}</p>
                        <p>{user.address.country}</p>
                        </div>
                    )}
                </div>
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Phone:</strong> 12312312
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Birthday:</strong> January 1, 2000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

export default User_info;