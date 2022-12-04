import { Box,styled,Button} from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

import { useSelector } from 'react-redux';

import Task from "./AddTask";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";

const Wrapper=styled('Box')`
display:flex;
margin:10px;
// justify-content:space-between;
`

const NewTask=styled('Box')`
display:flex;
width:40%;
padding:5px;
flex-flow: column wrap;
border:solid black 1px



`
const List=styled('Box')`
margin:auto;
display:flex;
flex-flow: column wrap;
align-items:center;




`

const App=()=>{
  const [component,setComponent]=useState([]);
  const [taskList,setTaskList]=useState([]);
  // const {addtask}=useSelector(state=>state);
  // const dispatch=useDispatch();

  useEffect(()=>{const getdata=async()=>{
    const res=await axios.get('http://localhost:8000/gettask').catch((err) => console.log(err));
    const data = await res.data;
    setTaskList(data);

  };
  getdata();
    
  },[taskList])

  const addComponent=()=>{
    // dispatch(setTask(addtask));
    setComponent([...component,[]])
};


  
  return(
    <>
    <Wrapper>
    <NewTask>

      <Box style={{display:'flex',alignItems:'center'}} >
    <h1>Click on ADD to enter new task</h1>
    <Button style={{height:'20px',marginLeft:'10px' }} variant='outlined' onClick={addComponent}>ADD</Button>
    </Box>
    
    {
      component.map(item=>(<Task />))
    }
    </NewTask>
    <List>
    <h1>Your Tasks</h1>
      <TaskList taskList={taskList} />
      
    </List>
    </Wrapper>
    </>
    
  )
}

export default App;
