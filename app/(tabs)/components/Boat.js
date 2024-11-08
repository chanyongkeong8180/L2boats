import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({icon, name, description, picture}) => {
    return (
        <View style={styles.exterior}>
            <Text style={[styles.text, {textAlign: 'center'}]}>
                <Icon name={icon} size={20}/>
                {name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};
export default Boat;

const styles = StyleSheet.create({
    exterior: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E9E9E9',
        borderWidth: 2,
        borderColor: '#006994',
        margin: 10
    },
    text: {
        color: '#006994',
        margin: 10
    },
    image: {
        maxWidth: '100%',
        marginBottom: 10
    }
});
