import React, { useEffect, useState } from 'react';
import MeetUpList from '../components/meetups/MeetUpList';
import ReactLoading from 'react-loading';
import LoadingImage from './Loading_icon.gif';
import { Card } from '../components/ui/Card';

const  AllMeetUp = () => {

  const propsLoading = {
    prop: "spinningBubbles",
    name: "SpinningBubbles"
  }

  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

  let [isLoading,setIsLoading] = useState(true);
  let [loadMeeUps,setLoadMeetUps] = useState([]);


  useEffect(() => {
    fetch('https://react-meet-up-project-b0bf7-default-rtdb.firebaseio.com/meetups.json').then((res) => {
      return res.json();
    }).then(data => {
       const meetups = [];

      //  console.log("data: ",data);

      //  for(const key in data) {
      //    console.log(data[key]);
      //  }

       for(const key in data) {
         const meetup = {
           id: key,
           ...data[key]
         };
        //  console.log("meetup: ",meetup);

         meetups.push(meetup);
       }
       console.log(meetups);
       setIsLoading(false); 
       setLoadMeetUps(meetups);
    })
  },[])

   if(isLoading) {
     return (
       <Card>
        <section  style={{"display":'flex' , "alignItems":"center" , "justifyContent":"center"}}>
          <img src={LoadingImage} />
        </section>
       </Card>
     )
   }

    return (
    <section>
        <h1>All Meetups</h1>
        <MeetUpList meetups={loadMeeUps} />
    </section>
  )
}

export default AllMeetUp