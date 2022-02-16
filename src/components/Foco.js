import React, {useState} from 'react'
import {Image, View, TouchableOpacity} from 'react-native';
const Foco = () => {
    const [estatus, setEstatus] = useState(false)

  return (
      <View>

          <TouchableOpacity onPress = {()=>{setEstatus(!estatus)}}>
          
          <Image source={ estatus ? require('../../img/focoOn.png')   : require('../../img/focoOff.png')} 
          style={{width: 125, height: 200}}/>
        
          </TouchableOpacity>

      </View>  
  )
}

export default Foco