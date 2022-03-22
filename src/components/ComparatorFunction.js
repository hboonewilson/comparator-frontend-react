import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function ComparatorFunction({func, onFuncClick, funcRef}) {
  const activeButton =  () => {
    if(func.isActive){
      return  <Button variant="primary" onClick={() => {
        funcRef.current = func 
        onFuncClick()
      }}>View</Button>
    } 
    else {
      return  <Button variant="primary" disabled>View</Button>
    }
  }
  return (
    <Card style={{ width: '30rem' }}>
    <Card.Body>
    <Card.Title>{func.name}</Card.Title>
    <Card.Text>
      {`Input: ${func.input}`}
      <br/>
      {`Output: ${func.output}`}
    </Card.Text>
      {activeButton()}
  </Card.Body>
</Card>
  )
}

/**
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {`Number: ${number}\nPosition: ${position}`}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 */
