import React from 'react' ;
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'; 
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerScreen1 from '../App';
import DrawerScreen2 from '../screen/Signup';
import { createDrawerNavigator } from 'react-navigation-drawer';
const { width, height } = Dimensions.get('window');

    const CustomDrawerComponent = (props)=>(   
    <View>

    <SafeAreaView>
          <View style={{
            height:150, backgroundColor:'#35aeff', alignItems:'center', justifyContent:'center',}}>
              <Image source={{uri:'https://i.ibb.co/HNFbNQr/Capture.png'}} style={{
                height:150,
                 width:247,
                  }} />
          </View>
          <ScrollView>
              <DrawerItems {...props} />
          </ScrollView>  
    </SafeAreaView>
    </View>
     )


    export default createDrawerNavigator( {    
      DrawerScreen1: {
        screen: DrawerScreen1,
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      DrawerScreen2: {
        screen: DrawerScreen2,
        navigationOptions: {
          drawerLabel: 'DrawerScreen2',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      // DrawerScreen3: {
      //   screen: DrawerScreen3,
      //   navigationOptions: {
      //     drawerLabel: 'DrawerScreen3',
      //     drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
      //   }   }, 
      }, 
        {   drawerPosition :"left",   
            contentComponent:CustomDrawerComponent,
            drawerWidth:width * .6,

    });
