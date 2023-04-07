/*
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2022-07-20 11:43:26
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-04-06 16:00:49
 * @FilePath: \DiseaseMap\diseasemap\src\routes\login\Login\Login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '../Container';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

const Login = ({ themeMode = 'light' }) => {
  return (
    <Box position={'relative'} minHeight={'100vh'} display={'flex'}>
      <Box
        sx={{ display: { xs: 'none', md: 'block' } }}
        flex={'1 1 30%'}
        maxWidth={'30%'}
        bgcolor={'alternate.main'}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'}>
          <Container>
            <Sidebar themeMode={themeMode} />
          </Container>
        </Box>
      </Box>
      <Box
        flex={{ xs: '1 1 100%', md: '1 1 70%' }}
        maxWidth={{ xs: '100%', md: '70%' }}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'}>
          <Container maxWidth={800}>
            <Form />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

Login.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Login;
