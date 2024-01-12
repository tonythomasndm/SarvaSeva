import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { VolunteerEventCard } from "./VolunteerEventCard";
export const VolunteerApplications=()=>{
    const [events,setEvents]=useState([]);
    const [pendingEvents,setPendingEvents]=useState([]);
    var pendingEvent=[];
    useEffect(()=>{
        const eventRef=collection(FIRESTORE_DB,'Event');

        const subscriber=onSnapshot(eventRef,{
            next:(snapshot)=>{
                const events=[];
                snapshot.docs.forEach((doc)=>{
                    events.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                
                setEvents(events);
                for(var i=0;i<events.length;i++){
                    if(events[i].eventPublished==false){
                        console.log('hi');
                        pendingEvent.push(events[i]);
                    }
                }
                console.log('printing sub')
                console.log(pendingEvent)
                setPendingEvents(pendingEvent);
                console.log('printing pending')
                console.log(pendingEvents);
            }
        })
    },[])
    return (
        <View>
            {pendingEvents.map((event,key)=>{
                    return(
                        <VolunteerEventCard 
                    startDate={event.eventDate}
                    endDate={event.eventTime}
                    title={event.eventName}
                    id={event.id}
                    ></VolunteerEventCard>
                    )
            })}
            
        </View>
    )
}
export default VolunteerApplications;
