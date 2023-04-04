import { css } from '@emotion/css';
import { Copyright } from '@mui/icons-material';
import { Button, Container, Box } from '@mui/material';
import { useState } from 'react';
import Brief_info from '../components/brief_info';
import MapChart from '../components/mapComponent';
// import Header from '../components/header';

export default function Map_detail() {
  // 处理子组件信息
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(1);

  const handleMessage = (msg: React.SetStateAction<string>) => {
    setMessage(msg);
  };

  const [diseasedata, setDiseasedata] = useState("");
  return (
    <div>
      {/* <Header /> */}
      <p>This is test Page</p>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <h1>This is Map Page</h1>
            <p>Message from child component: {message}</p>
            <Brief_info id={message}/>
            <Button onClick={() => {
              setDiseasedata("123");
              setTimer(timer+1);
            }}>d1</Button>
            <Button onClick={() => {
              setDiseasedata("456");
              setTimer(timer+1);
            }}>d2</Button>
            <Box style={{width:"50%"}}>
            <MapChart onMessage={handleMessage} name={diseasedata} t={timer}/>
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    </div>
  );
}