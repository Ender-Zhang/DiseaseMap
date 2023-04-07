/*
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-04-03 20:57:55
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-04-03 22:40:18
 * @FilePath: \DiseaseMap\diseasemap\src\components\map_detail.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
            <Box style={{width:"70%"}}>
            <MapChart onMessage={handleMessage} name={diseasedata} t={timer}/>
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
    </div>
  );
}