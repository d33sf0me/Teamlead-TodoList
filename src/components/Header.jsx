import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import List from './List.jsx'
import Filter from './Filter.jsx'
import LoadingButton from '@atlaskit/button/loading-button';
import TextField from '@atlaskit/textfield';
import Form, { Field, FormFooter } from '@atlaskit/form';


export default function Header() {
  const dispatch = useDispatch();
  const stateList = useSelector((state) => state.TodoList);
  const [SavedStateList, setSavedStateList] = useState([])
  const [checkFilter, setCheckFilter] = useState(false)

  function addTask(TaskName) {
    const indexSavedStateList = SavedStateList.findIndex(task => task.name === TaskName);
    const indexStateList = stateList.findIndex(task => task.name === TaskName);

    if (indexSavedStateList === -1 && checkFilter === true) {
      setCheckFilter(false)
      dispatch({
          type: "UNFILTER_TASKS",
          payload: SavedStateList,
      }) 
      dispatch({
        type: "ADD_TASK",
        payload: TaskName,
      });
    } else if (indexSavedStateList === -1 && indexStateList === -1){
      dispatch({
        type: "ADD_TASK",
        payload: TaskName,
      });
    } else return alert("This task is already on the list");
    setSavedStateList(stateList)
  }

  const TaskName = () => (
    <Field
      aria-required={true}
      name="TaskName"
      defaultValue=""
      label="Name of new task"
      isRequired
    >
      {({ fieldProps }) => <TextField {...fieldProps} />}
    </Field>
  );
  
    return (
        (
          <div
            style={{
              display: 'flex',
              width: '400px',
              maxWidth: '100%',
              margin: '0 auto',
              flexDirection: 'column',
            }}
          >
            <Form
              onSubmit={(data) => {
                addTask(data.TaskName);
              }}
            >
              {({ formProps, submitting }) => (
                <form {...formProps}>
                  <TaskName />
                  
                  <FormFooter>
                      <Filter SavedStateList={SavedStateList} setSavedStateList={setSavedStateList} 
                      checkFilter={checkFilter} setCheckFilter={setCheckFilter}/>
                      <LoadingButton
                        type="submit"
                        appearance="primary"
                        isLoading={submitting}
                      >
                        Add task
                      </LoadingButton>
                  </FormFooter>
                </form>
              )}
            </Form>
            <List setSavedStateList={setSavedStateList}
            setCheckFilter={setCheckFilter}/>
          </div>
        )
    );
}



