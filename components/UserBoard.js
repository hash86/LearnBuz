import React from 'react';
import { Text,Image, View,StyleSheet } from 'react-native';
import CustomButton from "../components/CustomButton";
import Colors from '../constants/Colors';
import Box from './Box';

const UserBoard = ({
    style,
}) => (
    <View style={style}>
      <Box style={ styles.profile}>
        <View style={styles.name}>
          <Image
            style={styles.avator}
            source={require("../assets/images/avator.jpg")}
          />
          <Text style={styles.profileName}> Farid </Text>
        </View>

        <View style={styles.headerSection}>
        <CustomButton image={require('../assets/images/gold.png')} title="1" onPress={() => {}} />
        <CustomButton image={require('../assets/images/diamond.png')} title="2" onPress={() => {}} />
          
        </View>
        <View style={styles.headerSection}>
          <Image
            style={styles.kist}
            source={require("../assets/images/kist.png")}
          />
        </View>
      </Box>
    </View>
);

export default UserBoard;

const styles=StyleSheet.create({
 
    profile:{
        justifyContent:'space-around'
    },
    name:{
        flex:1.7,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
        // backgroundColor:'red'
    },
    profileName:{
        color:Colors.accent,
        fontSize:19
    },
    avator:{
        width:60,
        height:60,
        borderRadius:30,
        
    },
    headerSection:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        // backgroundColor:'blue'
    },
    kist:{
        
        width:40,
        height:40
    },
})