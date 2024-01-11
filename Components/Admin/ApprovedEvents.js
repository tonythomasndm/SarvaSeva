import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
const ApprovedEvents=()=>{
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
    return (
        <View>
            {/* {events.map((event)=>{
                return(
                    <div>
                        <Text>hi</Text>
                    </div>
                )
            })} */}
            {events.map((event)=>{
                    return(
                        <EventCard 
                    startDate={event.eventDate}
                    endDate={event.eventTime}
                    title={event.eventName}
                    ></EventCard>
                    )
            })}
            <EventCard 
            startDate="23"
            endDate="25"
            title="carpentering basics"
            ></EventCard>
            {/* <EventCard></EventCard> */}
        </View>
    )
}
export default ApprovedEvents;
