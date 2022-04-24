import React from 'react'
import { View,Text,ImageBackground } from 'react-native';
import styles  from './style';
import ButtonStyle from "../buttons/Button";
export default function CarItem(props) {
  return (
     <View style={styles.carContainer}>
       <ImageBackground source={require("../../assets/images/ModelX.jpeg")} style={styles.image}/>
       <View style={styles.titles}>
           <Text style={styles.title}>Model s</Text>
           <Text style={styles.subTitle}>Starting at $69,000</Text>

       </View>
       <ButtonStyle/>
    </View>
  )
}
