import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';


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
                <Text>Role</Text>
              </View>
            
              <View  style={styles.cell}>
                <Text>{props.role}</Text>
              </View>
          </View>
        
      </View>
    );
  };

export const EventDetails=(props)=>{
    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>{props.heading}</Text>
            <Table 
            date="03 Jan  - 10 Jan, 2024"
            time="12:00 am to 03:00 am"
            venue="Near Akshardham Mandir Metro"
            role="Carpenter"
             />

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
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