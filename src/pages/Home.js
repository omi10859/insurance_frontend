import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Policy soled by Month',
        },
    },
};
  
const Home = () => {
    const [chartdata, setChartdata] = useState({});
    const navigate = useNavigate();

    function get_data(request_url=false){
        // todo: use base urls
        axios.get('http://127.0.0.1:8000/policy/chart/')
        .then(res => {
            setChartdata(res['data'])
        }).catch(error => {
            // navigate("/");                
        })
    }

    useEffect(() => { 
        get_data()
    }, [])

    return ( 
        <>
            <Row>
            <Col className='p-3' lg='10' sm='12' xs='12' style={{minHeight: '80vh', backgroundColor: 'white', margin: 'auto', borderRadius: '5px', background: 'white', boxShadow: 'rgba(149, 140, 141, 0.1) 0px 4px 16px, rgba(149, 140, 141,0.1) 0px 8px 24px, rgba(149, 140, 141, 0.1) 0px 16px 56px'}}>
                {chartdata['datasets']? <Bar
                    options={options}
                    data={chartdata}
                    />
                    : 
                    ""
                }
            </Col>
        </Row>
            <Button className='m-3' variant="outline-secondary" size="lg" onClick={()=> navigate("/list-policy")}>List Policy</Button>
        </>
    )
}
export default Home;