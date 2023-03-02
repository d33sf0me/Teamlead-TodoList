import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import cn from 'classnames';
import styles from '../css modules/Task.module.css';

export default function Task(props) {

  const dispatch = useDispatch();
  const stateList = useSelector((state) => state.TodoList);

  function onChange(event) {
    if (event.target.checked === true) {
      let action = { name: event.target.parentElement.textContent, isChecked: true}
      dispatch({
        type: "MOVING_TASK",
        payload: action,
      })
    } else {
      props.setCheckFilter(event.target.checked)
      dispatch({
        type: "DELETE_TASK",
        payload: event.target.parentElement.textContent,
      });
      dispatch({
        type: "ADD_TASK",
        payload: event.target.parentElement.textContent,
      });
    }
    props.setCheckFilter(false)
  };

  function onClick(event) {
    dispatch({
      type: "DELETE_TASK",
      payload: event.target.parentElement.textContent,
    })
    props.setCheckFilter(false)
    props.setSavedStateList(stateList)
  };

    return (
      <ul className="list">
        {stateList.map((task) => 
          (
        <li className={cn(task.name, {[styles.checkedTask]: task.isChecked})} checked={task.isChecked}>
          <label >
          <input type="checkbox" className="checkbox" onChange={onChange} checked={task.isChecked} />
             <p className="task_name" name="task">
             {task.name}
             </p>
          </label>
          <button className="btn_delete" onClick={onClick} type="button"  />
        </li>))}
      </ul>
    )
}

