import { EventCard } from '../Admin/eventCard';
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { EventCardHelper } from './EventCardHelper';
const ApprovedEventsHelper=(props)=>{
    const [events,setEvents]=useState([]);
    const id=props.route.params.id;
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
                        <EventCardHelper
                    startDate={event.eventDate}
                    startTime={event.eventTime}
                    endTime={event.eventEndTime}
                    title={event.eventName}
                    venue={event.eventVenue}
                    id={event.id}
                    type={event.eventType}
                    navigation={props.navigation}
                    eventVolunteers={event.eventVolunteers}
                    volunteerId={id.id}
                    ></EventCardHelper>
                    )
            })}
        </View>
    )
}
export default ApprovedEventsHelper;
