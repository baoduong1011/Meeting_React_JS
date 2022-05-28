import React from 'react'
import MeetUpItem from './MeetUpItem';
import classes from './MeetUpList.module.css';
const MeetUpList = (props) => {
  return (
    <ul className={classes.list} >
        {props.meetups.map((meetup,index) => 
            <MeetUpItem 
                key={meetup.id}
                image={meetup.image}
                id={meetup.id}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                meetup={meetup}
            />)}
    </ul>
  )
}

export default MeetUpList