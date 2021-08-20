import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-native';
 
import { Icon } from 'native-base';
 
class MainScreen extends Component{
 
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft:10}}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send-outline' style={{paddingRight:10}}/>,
    }
 
    render(){
        return (
            <View style={style.container}>
                <Text>MainScreen</Text>
            </View>
        );
    }
}
export default MainScreen;
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

