import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    FlatList,
} from 'react-native';

const dateString=(date)=>{
  const str = date.toDate().toISOString();
  return str.split('T')[0];
}

class MemoList extends React.Component{
  renderMemo({item}){
    return(
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItems}>
          <Text style={styles.memoTittle}>{item.body.substring(0,10)}</Text>
          <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
    render(){
      const list = [];
      return(
        <View style={styles.memoList}>
            <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)}/>
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
