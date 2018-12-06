import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {Font} from 'expo';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus:'\uf067',
},'FontAwsome');

class CircleButton extends React.Component{
    state = {
        fontLoaded:false,
    }
    async componentDidMount() {
        await Font.loadAsync({
          'FontAwsome': fontAwsome,
        });

        this.setState({fontLoaded:true});
    }
    render(){
        const {name, style, color} = this.props;

        let bgColor ='#e31671';
        let textColor='#fff';
        
        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#e31671';
        }

        return(
            <View style={[styles.circleButton, style, {backgroundColor:bgColor}]}>
            {
                this.state.fontLoaded ?(
                    <CustomIcon name={name} style ={[styles.circleButtonTittle, {color:textColor}]}/>
                ):null
            }
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
        fontFamily:'FontAwsome',
        fontSize:24,
        lineHeight:32,
        color:'#fff',
      },
})

export default CircleButton;
