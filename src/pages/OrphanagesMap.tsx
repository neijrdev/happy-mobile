import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import MapMarker from '../images/map-marker.png';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap (){

  const navigation = useNavigation();
  function handleNavigateToOrphanageDetails(){
    navigation.navigate('OrphanageDetails');
  }
  return (
    <View style={styles.container}>
     <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapStyle}
      initialRegion={{ 
        latitude: -17.539985,
        longitude:-39.7446446,
        latitudeDelta:0.011,
        longitudeDelta:0.011,
      }}>
        <Marker
          icon={MapMarker}
          calloutAnchor={{
            x:2.5,
            y:0.73
          }}
          coordinate={{
            latitude: -17.539985,
            longitude:-39.7446446,
          }}
        >
          <Callout
            tooltip={true}
            onPress={handleNavigateToOrphanageDetails}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Nome do Orfanato!</Text>
              </View>
          </Callout>

        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos Encontrados!</Text>
      <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
        <Feather name="plus" size={20} color="#fff"/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
   width: 180,
   height: 46,
   paddingHorizontal: 16,
   backgroundColor: 'rgba(255,255,255,0.9)',
   borderRadius: 16,
   justifyContent: 'center'
  },
  calloutText:{
    color: '#0089A5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer:{
    position: 'absolute',
    left: 24,
    right: 24,
    bottom:32,

    backgroundColor: '#fff',
    borderRadius:20,
    height:56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },
  createOrphanageButton:{
    width: 56,
    height:56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});