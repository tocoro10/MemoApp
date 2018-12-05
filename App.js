import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTittle}>MEMOT</Text>
          </View> 
        </View>

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

        <View style={styles.memoAddButton}>
          <Text style ={styles.memoAddButtonTittle}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffde6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  },
  memoAddButton:{
    position:'absolute',
    bottom:32,
    right:32,
    width:48,
    height:48,
    backgroundColor:'#e31671',
    borderRadius:24,
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius:3,
  },
  memoAddButtonTittle:{
    fontSize:34,
    lineHeight:34,
    color:'#fff',
  },
  memoList:{
    width:'100%',
    flex:1,
  },
  memoListItems:{
    padding:16,
    borderBottomWidth:1,
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

  appbar:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:78,
    paddingTop:30,
    backgroundColor:'#265366',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },

  appbarTittle:{
    color:'#fff',
    fontSize:18,
  },

});
