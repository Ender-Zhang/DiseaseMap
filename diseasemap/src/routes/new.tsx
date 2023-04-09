import React from 'react';
// import { Box, Typography, Card, CardContent, Grid, Container, Pagination } from '@mui/material';
import { css } from '@emotion/css';
import { useState, useEffect} from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Pagination,
  TextField,
  Button,
} from '@mui/material';




type NewsData = {
  region: string;
  patients: number;
  ageRange: string;
  disease: string;
  description: string;
};

const newsData: NewsData[] = [
  {
    region: 'Region 1',
    patients: 120,
    ageRange: '20-40',
    disease: 'Disease A',
    description:
      '在 Region 1，有120例疾病A患者，年龄范围在20-40岁。该地区的医疗专家正在努力控制疫情，并提醒公众注意预防措施。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  {
    region: 'Region 2',
    patients: 250,
    ageRange: '30-50',
    disease: 'Disease B',
    description:
      '近期，Region 2 发现了250例疾病B患者，年龄范围在30-50岁。地方政府已经启动应急预案，要求居民注意个人卫生。',
  },
  // Add the rest of your fake news data here
];




const ITEMS_PER_PAGE = 5;




const containerStyle = css`
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const mainContentStyle = css`
  flex-grow: 1;
  overflow-y: auto;
`;

const headerStyle = css`
  color: #1e90ff;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 20px;
`;

const paginationStyle = css`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;


const searchBoxStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const searchInputStyle = css`
  margin-right: 10px;
  flex-grow: 1;
`;

const searchButtonStyle = css`
  margin: 8px 0;
`;


const NewsItem = ({ news }: { news: NewsData }) => (
  <Card sx={{ minWidth: 275, marginBottom: '20px' }}>
    <CardContent>
      <Typography variant="h4" component="div">
        {news.region}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        患病人数：{news.patients}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        年龄区间：{news.ageRange}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        疾病：{news.disease}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {news.description}
      </Typography>
    </CardContent>
  </Card>
);




const NewsList = () => {

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const filteredNewsData = newsData.filter((news) => {
    return (
      news.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.disease.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const paginatedNewsData = filteredNewsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
      <Box className={containerStyle}>
        <Container maxWidth="lg">
          <Typography className={headerStyle} variant="h2">
            新闻
          </Typography>
          <Box className={searchBoxStyle}>
            <TextField
              className={searchInputStyle}
              label="搜索地区或疾病"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchTermChange}
              fullWidth
            />
            <Button className={searchButtonStyle} variant="contained" onClick={handleSearch}>
              搜索
            </Button>
          </Box>
          <Box className={mainContentStyle}>
            <Grid container spacing={2}>
              {paginatedNewsData.map((news, index) => (
                <Grid item xs={12} key={index}>
                  <NewsItem news={news} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className={paginationStyle}>
            <Pagination
              count={Math.ceil(filteredNewsData.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChange}
            />
          </Box>
        </Container>
      </Box>
  );
};

export default NewsList;
