import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { EventCardSeeker } from './EventCardSeeker';
const ApprovedEventsSeeker=()=>{
    const [events,setEvents]=useState([]);
    const [approvedEvents,setApprovedEvents]=useState([]);
    var approvedEvent=[];

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
                    if(events[i].eventPublished){
                        approvedEvent.push(events[i]);
                    }
                }
                setApprovedEvents(approvedEvent);
            }
        })
    },[])
    return (
        <View>
            {approvedEvents.map((event)=>{
                    return(
                        <EventCardSeeker
                    startDate={event.eventDate}
                    endDate={event.eventTime}
                    title={event.eventName}
                    id={event.id}
                    ></EventCardSeeker>
                    )
            })}
            
        </View>
    )
}
export default ApprovedEventsSeeker;
