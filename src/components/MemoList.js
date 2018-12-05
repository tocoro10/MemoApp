import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class MemoList extends React.Component{
    render(){
        return(
             <View style={styles.memoList}>
                <View style={styles.memoListItems}>
                <Text style={styles.memoTittle}>口座内容</Text>
                <Text style={styles.memoDate}>2018/11/29</Text>
                </View>

                <View style={styles.memoListItems}>
                <Text style={styles.memoTittle}>手順確認</Text>
                <Text style={styles.memoDate}>2018/11/29</Text>
                </View>

                <View style={styles.memoListItems}>
                <Text style={styles.memoTittle}>内容精査</Text>
                <Text style={styles.memoDate}>2018/11/29</Text>
                </View>

                <View style={styles.memoListItems}>
                <Text style={styles.memoTittle}>買い物</Text>
                <Text style={styles.memoDate}>2018/11/29</Text>
                </View>
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
