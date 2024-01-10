import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";

const EventPage=({navigation})=>{
    const [events,setEvents]=useState([]);
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
                console.log(events);
            }
        })
    },[])
    console.log(navigation);
    return (
        <View>
           
            {events.map((event)=>{
                    return(
                        <EventCard 
                    startDate={event.eventDate}
                    endDate={event.eventTime}
                    title={event.eventName}
                    navigation={navigation}
                    ></EventCard>
                    )
            })}
            
        </View>
    )
}
export default EventPage;
