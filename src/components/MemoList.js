import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

class MemoList extends React.Component{
    render(){
      console.log(this.props.memoList);
        return(
             <View style={styles.memoList}>
             <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
                <View style={styles.memoListItems}>
                  <Text style={styles.memoTittle}>口座内容</Text>
                  <Text style={styles.memoDate}>2018/11/29</Text>
                </View>
             </TouchableHighlight>
             <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
                <View style={styles.memoListItems}>
                  <Text style={styles.memoTittle}>口座内容</Text>
                  <Text style={styles.memoDate}>2018/11/29</Text>
                </View>
             </TouchableHighlight>
             <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
                <View style={styles.memoListItems}>
                  <Text style={styles.memoTittle}>口座内容</Text>
                  <Text style={styles.memoDate}>2018/11/29</Text>
                </View>
             </TouchableHighlight>
             <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
                <View style={styles.memoListItems}>
                  <Text style={styles.memoTittle}>口座内容</Text>
                  <Text style={styles.memoDate}>2018/11/29</Text>
                </View>
             </TouchableHighlight>
          </View>
       );
    }
}

const styles=StyleSheet.create({
    memoList:{
        width:'100%',
        flex:1,
      },
      memoListItems:{
        padding:16,
        borderBottomWidth:3,
        borderBottomColor:'#ddd',
        backgroundColor:'#fff',
      },
      memoTittle:{
        fontSize:18,
        marginBottom:4,
      },
      memoDate:{
        fontSize:12,
        color:'#a2a2a2',
      },
})

export default MemoList;
