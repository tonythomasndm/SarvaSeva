import { EventCard } from "./eventCard";
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
const Divider = () => {
    return <View style={styles.divider} />;
  };


  const Table = (props) => {
   
    return (
      <View style={styles.table}>
        
          <View style={styles.row}>
            
              <View  style={styles.cell}>
                <Text>Date</Text>
              </View>
              <View  style={styles.cell}>
                <Text>{props.date}</Text>
              </View>
          </View>
          <View style={styles.row}>
            
              <View  style={styles.cell}>
                <Text>Time</Text>
              </View>
              <View  style={styles.cell}>
                <Text>{props.time}</Text>
              </View>
            
          </View>
          <View style={styles.row}>
            
              <View  style={styles.cell}>
                <Text>Venue</Text>
              </View>
              <View  style={styles.cell}>
                <Text>{props.venue}</Text>
              </View>
          </View>
          <View style={styles.row}>
            
              <View  style={styles.cell}>
                <Text>Type</Text>
              </View>
            
              <View  style={styles.cell}>
                <Text>{props.type}</Text>
              </View>
              <View>
              <Text>Volunteer name</Text>
              </View>
              
              <Text>Volunteer skills</Text>

          </View>
        
      </View>
    );
  };

  export const ViewDetailsVolunteer=(props)=>{

    const data=props.route.params;
    const [volunteers,setVolunteers]=useState([]);
    const [volunteer,setVolunteer]=useState([]);
    var v=[];
    useEffect(()=>{
        const eventRef=collection(FIRESTORE_DB,'Volunteer');
        const subscriber=onSnapshot(eventRef,{
            next:(snapshot)=>{
                const events=[];
                snapshot.docs.forEach((doc)=>{
                    events.push({
                        id:doc.id,
                        ...doc.data()
                    })
                })
                setVolunteers(events);
                for(var i=0;i<events.length;i++){
                    console.log(events[i].id, data.volunteerId);
                    if(events[i].id==data.volunteerId){
                        v.push(events[i]);
                    }

                }
                setVolunteer(v)
            }
        })
    },[])
    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>{data.volunteerId}</Text>
            
            {(volunteer.length>0)?<Text style={styles.title}>{volunteer[0].name}</Text>:<Text style={styles.title}></Text>}
            <Table 
            date={data.date}
            time={data.time}
            venue={data.venue}
            type={data.type}
             />
             <View style={styles.description}>
                {/* <Text style={styles.description_heading}>Description</Text> */}
                <Text style={styles.description_content}></Text>
             </View>
             


        </View>
    )
}

const styles=StyleSheet.create({
    btn:{
      backgroundColor:'orange',
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:40,
      paddingRight:40,
      color:'white',
      borderRadius:10,
      fontSize:16,
    },
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#ffffff',
        borderColor: '#fff',
        borderWidth: 1,
        // borderRadius:10,
        // margin: 10,
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 30,
        // paddingRight: 15,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
          })
    },
    title:{
        fontSize:25,
        margin: 10,

    },
    table:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        alignItems:'center',

    },
    row:{
        
        display:'flex',
        flexDirection:'row',
    },
    cell:{
        display:'flex',
        flexDirection:'column',
        borderColor: '#000',
        borderWidth: 1,
        padding:5,
        width:150,
    },
})