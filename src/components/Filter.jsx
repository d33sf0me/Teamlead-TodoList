import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from '../css modules/Filter.module.css';

export default function Filter(props) {
  const dispatch = useDispatch();
  const stateList = useSelector((state) => state.TodoList);    
  function onClick(event) {    
    console.log(props.checkFilter);
      if (props.checkFilter === false){
          props.setCheckFilter(true)
          props.setSavedStateList(stateList)
          dispatch({
             type: "FILTER_TASKS",
             payload: true,
          })
      } 
      else if (props.checkFilter === true){
          //props.setCheckFilter(false)
          dispatch({
              type: "UNFILTER_TASKS",
              payload: props.SavedStateList,
          }) 
             
      }
      props.setSavedStateList(stateList)   
  }
  
  return (
    <div>
      <img src='./images/svggobbler.svg' className={styles.filterIcon} alt='filterIcon' onClick={onClick}/>
    </div>
  )
}