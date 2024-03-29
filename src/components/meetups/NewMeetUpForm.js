import React, { useRef } from "react";
import classes from "./NewMeetUpForm.module.css";
import { Card } from "../ui/Card";
const NewMeetUpForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    let handleSubmit = (e) => {
        e.preventDefault();
    

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetUp(meetUpData);
    }

    
  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit} >
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef} >
          
          </textarea>
        </div>

        <div className={classes.actions} >
            <button>Add MeetUp</button>
        </div>  
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
