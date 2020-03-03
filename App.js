/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Geolocation from '@react-native-community/geolocation'
//const GOOGLE_MAPS_APIKEY = 'AIzaSyAGKFNn0Gk9EFj35JTLG5G77RQ3XHD8hH8';
const origin = { latitude: 24.814783, longitude: 67.07097 };
const destination = { latitude: 24.81859, longitude: 67.045441 };

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      cordLatitude: 24.81859,
      cordLongitude: 67.045441,
      showsUserLocation:true
    };
   
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
    
  }

  render(){
    console.log(this.state , "hello")
    return (
      <View style={styles.Container}>
        <View style={styles.map}>
        {this.state.latitude && this.state.longitude &&  <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            showsUserLocation={true}
          >
            {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
              coordinate={{ "latitude": this.state.cordLatitude, "longitude": this.state.cordLongitude }}
              title={"Your Destination"}
            />}

            <MapViewDirections
              origin={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
              destination={{ "latitude": this.state.cordLatitude, "longitude": this.state.cordLongitude }}
              apikey={'AIzaSyAGKFNn0Gk9EFj35JTLG5G77RQ3XHD8hH8'}
              strokeWidth={3}
              strokeColor="blue"
            />
          </MapView>}
        </View>

        <View style={styles.locationpickup}>
          <View style={styles.locationicon}>
          <TouchableOpacity
              onPress={() => {this.state.latitude,this.state.longitude}}
              > 
              <Icon name="my-location" size={30} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.inputcontainer1}
              placeholder="Enter Pickup"
            />
            <TextInput
              style={styles.inputcontainer2}
              placeholder="Enter Dropoff"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  map: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },

  locationpickup: {
    flex: 1,
    justifyContent: 'space-between',
  },

  locationicon: {
    alignItems: 'flex-end',
    marginTop: wp('5%'),
    marginRight: wp('4%'),
  },

  inputcontainer1: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: 'white',
    color: '#7c848b',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    borderColor: '#ddd',
    fontSize: wp('4%'),
    marginBottom: wp('2%'),
    paddingLeft: wp('3%'),
    //marginBottom:hp('4%'),
  },

  inputcontainer2: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: 'white',
    color: '#7c848b',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    borderColor: '#ddd',
    fontSize: wp('4%'),
    marginBottom: wp('2%'),
    paddingLeft: wp('3%'),
    marginBottom: hp('4%'),
  },
});

export default App;
