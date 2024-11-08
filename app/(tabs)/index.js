import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './components/Boat';

class AllBoats extends React.Component {
    render() {
        return (
            <View style={styles.exterior}>
                <ScrollView>
                    <Text style={[styles.text]}>GetABoat - For Sale</Text>
                    <Boat icon="sailboat"
                          name="SEA RAY 500 SUNDANCER"
                          description="Contoured lines and dramatic styling reveal
                          a refined and powerful presence that will
                          take your breath away."
                          picture={require('./img/sea_ray.jpg')}/>
                    <Boat icon="sailboat"
                          name="FOUR WINNS HORIZON"
                          description="A sporty look and refined details truly set
                          the Horizon 180 above all others."
                          picture={require('./img/four_winns.jpg')}/>
                    <Boat icon="sailboat"
                          name="FLIPPER 640 ST"
                          description="A modern take on the classic,
                          traditional hardtop and perfect for a family picnic."
                          picture={require('./img/flipper.jpg')}/>
                    <Boat icon="sailboat"
                          name="PRINCESS V48"
                          description="There is the option for an open design
                          with a full-length cockpit and sunroof,
                          or the enclosed deck saloon model,
                          available with the option of a climate controlled interior."
                          picture={require('./img/princess.jpg')}/>
                    <Boat icon="sailboat"
                          name="BAYLINER 175 BOWRIDER"
                          description="Its outboard power gives you
                          increased cockpit space and quiet,
                          fuel-efficient performance."
                          picture={require('./img/bayliner.jpg')}/>
                    <Boat icon="sailboat"
                          name="FAIRLINE TARGA 47"
                          description="Stretch out on the large sun bed aft
                          while friends lounge in the generously appointed cockpit."
                          picture={require('./img/fairline.jpg')}/>
                </ScrollView>
            </View>
        )
    }
}
export default AllBoats;

const styles = StyleSheet.create({
    exterior: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E9E9E9',
        marginTop: 30
    },
    text: {
        color: '#006994',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        margin: 10
    }
});
