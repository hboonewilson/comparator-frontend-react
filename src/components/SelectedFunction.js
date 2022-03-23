import React, {useState, useRef} from 'react'
import { Card, Button } from 'react-bootstrap'
export default function SelectedFunction({func}) {
  const inputRef = useRef();
  const [input, setInput] = useState([]);

  const determineText = () => {
    let name;
    switch (func.name) {
      case "sort":
        name = "Array"
        break;
      case "create":
        name = "Number"
        break;
      default:
        name = "Comparator Network"
        break;
    }
    return `Enter ${name} here:\t\t`
  }
  const handleSubmit  = () => {
    const newInput = inputRef.current.value
    if(newInput == ''){return}
    setInput(newInput);
    console.log(newInput)
    inputRef.current.value = null
  }
  return (
    <Card style={{ width: '40rem' }}> 
      <Card.Body>
        <Card.Title variant="primary">
          {func.name.toUpperCase()}
        </Card.Title>
        <Card.Text>
        {`Input: ${func.input}`}
        <br/>
        {`Output: ${func.output}`}
        <br/>
        {`Description: ${func.description}`}
        <br/>
        {determineText()}
        <input ref={inputRef} type={"text"}/>
      </Card.Text>
      <Button onClick={handleSubmit}>Submit</Button>
      </Card.Body>
    </Card>
  )
}
/**
 * Card style={{ width: '30rem' }}>
      <Card.Body>
      <Card.Title>{func.name.toUpperCase()}</Card.Title>
      <Card.Text>
        {`Input: ${func.input}`}
        <br/>
        {`Output: ${func.output}`}
      </Card.Text>
        {activeButton()}
      </Card.Body>
    </Card>
 */