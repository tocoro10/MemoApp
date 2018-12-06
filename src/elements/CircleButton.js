import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class CircleButton extends React.Component{
    render(){
        const {style, color} = this.props;

        let bgColor ='#e31671';
        let textColor='#fff';
        
        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#e31671';
        }

        return(
            <View style={[styles.circleButton, style, {backgroundColor:bgColor}]}>
                <Text style ={[styles.circleButtonTittle, {color:textColor}]}>
                    {this.props.children}
                </Text>
            </View> 
        );
    }
}

const styles=StyleSheet.create({
    circleButton:{
        position:'absolute',
        bottom:32,
        right:32,
        width:48,
        height:48,
        backgroundColor:'#e31671',
        borderRadius:24,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        shadowRadius:3,
      },
      circleButtonTittle:{
        fontSize:32,
        lineHeight:32,
        color:'#fff',
      },
})

export default CircleButton;
