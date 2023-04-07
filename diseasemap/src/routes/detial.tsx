import { css } from '@emotion/css';
import { Form, useLoaderData } from "react-router-dom";
import Brief_info from '../components/brief_info';
import { useParams } from 'react-router-dom';
import diseaseData from '../assets/data/diseasedata.json';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



// Create the styles
const containerStyle = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const headerStyle = css`
  color: #1e90ff;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const descriptionStyle = css`
  color: #555;
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 20px;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 4px #ccc;
`;

const imageStyle = css`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const linkStyle = css`
  color: #1e90ff;
  text-decoration: none;
  border-bottom: 2px solid #1e90ff;
  transition: border-bottom 0.3s ease;
  
  &:hover {
    border-bottom: 2px solid transparent;
  }
`;

const buttonStyle = css`
  color: #fff;
  background-color: #1e90ff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0070c0;
  }
`;
const chartsContainerStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const chartStyle = css`
  flex: 1;
  margin: 0 10px;
  height: 300px;
`;

const buttonContainerStyle = css`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;



const fakePopulationData = [
  {year: '2010', population: 1000000},
  {year: '2011', population: 1020000},
  {year: '2012', population: 1040000},
  {year: '2013', population: 1060000},
  {year: '2014', population: 1080000},
  {year: '2015', population: 1100000},
  {year: '2016', population: 1120000},
  {year: '2017', population: 1140000},
  {year: '2018', population: 1160000},
  {year: '2019', population: 1180000},
  {year: '2020', population: 1200000},
  {year: '2021', population: 1220000},
];

const fakeDiseaseData = [
  {month: 'Jan', cases: 200},
  {month: 'Feb', cases: 250},
  {month: 'Mar', cases: 300},
  {month: 'Apr', cases: 400},
  {month: 'May', cases: 350},
  {month: 'Jun', cases: 500},
  {month: 'Jul', cases: 550},
  {month: 'Aug', cases: 600},
  {month: 'Sep', cases: 700},
  {month: 'Oct', cases: 800},
  {month: 'Nov', cases: 900},
  {month: 'Dec', cases: 1000},
];


export default function Detail({ props } : any) {

    function User() {
        const { id } = useParams();
        console.log("State: "+id);
        return id;
    }
    const id = User();
    const navigate = useNavigate();


    // Check if id exists, otherwise use a default value (e.g., "0")
    const parsedId = parseInt(id || "0");
    
    const stateData = Object.values(diseaseData).find(state => state.id === parsedId);
    const description = stateData?.description || "State not found.";

    const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedMonthIndex = parseInt(event.target.value, 10);
      const selectedPopulation = fakePopulationData[selectedMonthIndex].population;
      const selectedCases = fakeDiseaseData[selectedMonthIndex].cases;
    
      setPopulation(selectedPopulation);
      setCases(selectedCases);
    };
    
    
    
    const [population, setPopulation] = useState(fakePopulationData[0].population);
    const [cases, setCases] = useState(fakeDiseaseData[0].cases);
    

    return (
        <div className={containerStyle}>
            <h1 className={headerStyle}>This Detail Page</h1>
            <h2 className={headerStyle}>This page is belong to State ID: {id}</h2>
            <Brief_info id = {id}/>
            <h3 className={descriptionStyle}>Description: {description}</h3>
            <div className={chartsContainerStyle}>
                <div className={chartStyle}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={fakeDiseaseData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className={chartStyle}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={fakePopulationData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="population" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Year"
                      defaultValue="2023"
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Month"
                      select
                      fullWidth
                      SelectProps={{
                        native: true,
                      }}
                      defaultValue="0"
                      onChange={handleMonthChange}
                    >
                      {fakeDiseaseData.map((option, index) => (
                        <option key={index} value={index}>
                          {option.month}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Region"
                      select
                      fullWidth
                      SelectProps={{
                        native: true,
                      }}
                      defaultValue={stateData?.name || ""}
                      disabled
                    >
                      {Object.values(diseaseData).map((option) => (
                        <option key={option.id} value={option.name}>
                          {option.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Population"
                      value={population}
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Cases"
                      value={cases}
                      fullWidth
                      disabled
                    />
                  </Grid>
                </Grid>
              </form>
              <div className={buttonContainerStyle}>
              <Button variant="contained" color="primary" onClick={() => navigate('/new')}>
                  Go to New Page
              </Button>
        </div>      
        </div>
    );
}
