import React from 'react';
import {styled,TextField,Button} from '@mui/material'
import { useState } from 'react';
import axios from 'axios';

const Input=styled(TextField)`
    display:flex;
    flex-direction:row;
    color: white;
    fontSize: 15px;
    fontFamily: Arial, Helvetica, sans-serif;
    textAlign: center;
    borderRadius: 15px;
    padding: 10px;
    margin: 10px;
`

const Wrapper=styled('box')`
display:flex;
align-items:center;
margin-top:10px;

`


const Task = () => {
const [task,setTask]=useState('');
const handlechange=(e)=>{
    setTask({...task,[e.target.name]:e.target.value});
    // localStorage.setItem('task', JSON.stringify(task))
}
const handlesubmit=async()=>{
    await axios.post('http://localhost:8000/add',task);
    
}



  return (
    <>
    <Wrapper>
    <Input type='text'  variant="outlined" name='task' onChange={(e)=>handlechange(e)} />
    <Button style={{height:'20px'}} type="submit" onClick={()=>handlesubmit()} variant='outlined'>SUBMIT</Button>
    </Wrapper>
    </>
  )
}

export default Task