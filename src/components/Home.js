import React, { useState, useEffect, useRef } from 'react';
import testData from '../testData';
import ComparatorFunction from './ComparatorFunction';
import '../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import SelectedFunction from './SelectedFunction';
const axios = require('axios').default;
const URL = "/number";
const SERVER_ON = false

export default function Home() {

    const [functions, setFunctions] = useState([]);
    const [func, setFunc] = useState([]);

    const funcRef = useRef();

    useEffect(() => {
        getRows();
        funcSelected();
    }, []);
    
   const onFuncClick = () => {
       const nameFunc = funcRef.current;
       setFunc(<SelectedFunction func={nameFunc}/>);
   } 


    const funcSelected = () => {
        return (func ? <div>{`${func}`}</div> : <div>No function</div>) 
    }

    const getRows = () => {
        const rows = callToApi(URL);
        rows.then(value => {
            const data = value
            return createComparatorElements(data); 
        }).catch(error => {
            console.log(error)
        })
    }
    async function callToApi(url) {
        if(SERVER_ON) {
            try {
                const response = await axios.get(url);
                console.log(response.data.comparatorData)
                return response.data.comparatorData 
            }
            catch(error){
                console.log(error)
                return;
            }
        }
        else {
            return testData.data;
        }
    }
    const createComparatorElements = (functions) => {
        const arrayOfFunctions = [];
        let i = 0;
        functions.map( func => {
            arrayOfFunctions.push(<ComparatorFunction funcRef={funcRef} key={i} func={func} onFuncClick={onFuncClick} />)
            i+=1;
        })
        setFunctions(arrayOfFunctions);
    }
  return (
    // <div className='rowC'>
    //     <div>
    //         { functions.map(func => {return func}) }
    //     </div>
    //     <div className='selectedFunction'>
    //         { func.name }
    //     </div>
    // </div>
    <Container>
        <Row>
            <Col>{ functions.map(func => {return func}) }</Col>
            <Col>{ func }</Col>
        </Row>
    </Container>
  );
}
