
import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';

function App() {
  const [bmi,setBmi] = useState('')
  const [age,setAge] = useState('')
  const [weight,setWeight] = useState('')
  const [height,setHeight] = useState('')
  const [msg,setMsg] = useState('');

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!age || !weight || !height){
      alert("Please fill all the fields")
    }else{
      const heightInMeter = height/100
      const bmiFormula = (weight/(heightInMeter * heightInMeter)).toFixed(2);
      setBmi(bmiFormula)  ;
      let message = '';
      if(bmiFormula < 18.5){
        message = 'You Are Underweight!!!'
      }else if (bmiFormula >=18.5 && bmiFormula < 25){
        message = 'You Are Healthy'
      }else{
        message ='You Are Overweight!!!'
      }
       setMsg(message);    
  }
}

  const handleReload = ()=>{
    setBmi('')
    setAge('')
    setWeight('')
    setHeight('')
    setMsg('')
  }

  return (

    <div>
      <div className='bg'>
        <div className='content'>
          <div className='p-3'>
            <h1>BMI CALCULATOR</h1>
          </div>
          <form className='mt-5 h-50' onSubmit={handleCalculate}>
            
              <div className='mb-3 d-flex flex-column ps-5 pe-5'>
              <TextField type='number' id="filled-basic" label="Age" variant="filled" name='age'  value={age} onChange={(e)=>setAge(e.target.value)}/>
              </div>
              <div className='mb-3 d-flex flex-column ps-5 pe-5'>
              <TextField type='number' id="filled-basic" label="Weight in kg" variant="filled" name='weight in kg' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
              </div>
              <div className='mb-3 d-flex flex-column ps-5 pe-5'>
              <TextField type='number' id="filled-basic" label="Height in meter" variant="filled" name='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
              </div>

              <Stack className='justify-content-center p-1' direction="row" spacing={2}>
              <Button type='submit' className='bg-dark' style={{width:'200px',height:'50px'}} variant="outlined">CALCULATE</Button>
              <Button onClick={handleReload} className='bg-dark' style={{width:'200px',height:'50px'}} variant="outlined">RELOAD</Button>
              </Stack>

              <div className='Result'>
                <h5>YOUR AGE IS:{age}</h5>
              <h4>YOUR BMI IS: {''} {bmi}</h4>
              <p>{msg}</p>
              </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
