import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({icon, name, description, picture}) => {
    return (
        <View style={{backgroundColor: '#E9E9E9'}}>
            <Text style={{fontSize: 20, color: '#006994'}}>
                <Icon name={icon} size={20}/>
                {name}</Text>
            <Text style={{color: '#006994'}}>{description}</Text>
            <Image source={picture} />
        </View>
    );
};
export default Boat;
