import React from 'react'
import Task from './Task.jsx'
import Form from '@atlaskit/form';

export default function List(props) {

  return (
      <div>
        <Form onSubmit={(data) => console.log(data)}>
          {({ formProps }) => (
            <form {...formProps}>
                <Task SavedStateList={props.SavedStateList} setSavedStateList={props.setSavedStateList} setCheckFilter={props.setCheckFilter}/>
            </form>
          )}
        </Form>
      </div>
  );
}

