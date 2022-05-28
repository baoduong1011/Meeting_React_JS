import React from 'react'
import NewMeetUpForm from '../components/meetups/NewMeetUpForm'
import {useHistory} from 'react-router-dom';

const NewMeetUp = () => {
  const history = useHistory();
  let addMeetUpHandler = (meetUpDate) => {
    fetch("https://react-meet-up-project-b0bf7-default-rtdb.firebaseio.com/meetups.json",
    {
      method: "POST",
      body: JSON.stringify(meetUpDate),
      headers: {
        "Content-Type":"application/json"
      }
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
        <h1>Add New Meet Up</h1>
        <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  )
}

export default NewMeetUp