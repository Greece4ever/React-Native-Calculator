import React, { useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity , StyleSheet } from 'react-native';

//Simple Hello World Project 

const App = () => {
  const [count,setCount] = useState(0);
  const [calcs,setCalcs] = useState(" ");
  var state = false;
  const onSymbol = (symbol) => {
    if (state) {
      setCalcs("0");
    }

    
    if (symbol == "plus") {
      if (calcs == "0") {
        setCalcs(String(count) + " + ")
      }
      else {
        setCalcs(calcs + String(count) + " + ")
      }
    }
    else if (symbol == "minus") {
      if (calcs == "0") {
        setCalcs(String(count) + " - ")
      }
      else {
        setCalcs(calcs + String(count) + " - ")
      }

    }
    else if (symbol == "mutliply") {
      if (calcs == "0") {
        setCalcs(String(count) + " * ")
      }
      else {
        setCalcs(calcs + String(count) + " * ")
      }

    }
    else if (symbol == "divide") {
      if (calcs == "0") {
        setCalcs(String(count) + " / ")
      }
      else {
        setCalcs(calcs + String(count) + " / ")
      }
    }
    else if (symbol == "modulo") {
      if (calcs == "0") {
        setCalcs(String(count) + " % ")

      }
      else {
        setCalcs(calcs + String(count) + " % ")
      }
    }
    setCount(0)
  }
  const reset = () => {
    setCalcs("0");
    setCount(0);
  }
  const equals = () => {
    //YEEEEREEEEEEEEEEEEEEEES REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    let x = calcs + String(count);
    setCalcs("0")
    try {
      setCount(eval(x))

    }
    catch (e) {
      setCount(0)
    }
  }
  
  return (
    <View>
      <Text style={styles.first}>Calculator</Text>
      <ScrollView horizontal={true}>
        <Text style={styles.calc}>{calcs}</Text>
      </ScrollView>
      <ScrollView horizontal={true}>
        <Text style={styles.last}>{count}</Text>
      </ScrollView>
      <View style={styles.second}>
      <View style={styles.button1}>
          <TouchableOpacity onPress={() => onSymbol("modulo")} style={{backgroundColor : "#acb8c4",margin:1,borderWidth: 1,width : 90,height:90,borderColor:"#2783ad",}}><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>%</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => reset()} style={{backgroundColor : "#acb8c4",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}} >⟲</Text></TouchableOpacity >
          <TouchableOpacity  onPress={() => setCount(Number(String(count).slice(0,-1)))} style={{backgroundColor : "#acb8c4",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:50,textAlign : "center"}}>⤆</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => onSymbol("plus")} style={{backgroundColor : "#acb8c4",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>+</Text></TouchableOpacity >

          </View>
        <View style={styles.button1}>
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "1"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>1</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "2"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}} >2</Text></TouchableOpacity >
          <TouchableOpacity  onPress={() => setCount(Number(String(count) + "3"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>3</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => onSymbol("minus")} style={{backgroundColor : "#acb8c4",borderWidth: 1,width : 90,height:90,margin:1,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>-</Text></TouchableOpacity >

          </View>
          <View style={styles.button2}>
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "4"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>4</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "5"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>5</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "6"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>6</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => onSymbol("mutliply")} style={{backgroundColor : "#acb8c4",borderWidth: 1,width : 90,margin:1,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:70,textAlign : "center"}}>*</Text></TouchableOpacity >

          </View>
          <View style={styles.button3}>
          <TouchableOpacity onPress={() => setCount(Number(String(count) + "7"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>7</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "8"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>8</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "9"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>9</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => onSymbol("divide")} style={{backgroundColor : "#acb8c4",borderWidth: 1,width : 90,height:90,margin:1,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>÷</Text></TouchableOpacity >

          </View>

          <View style={styles.button4}>
          <TouchableOpacity onPress={() =>  setCount(Number((-1)*count))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>±</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(Number(String(count) + "0"))} style={{backgroundColor : "#babfb9",borderWidth: 1,margin:1,width : 90,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>0</Text></TouchableOpacity >
          <TouchableOpacity onPress={() =>  setCount(String(count) + ".")} style={{backgroundColor : "#babfb9",borderWidth: 1,width : 90,margin:1,height:90,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>.</Text></TouchableOpacity >
          <TouchableOpacity onPress={() => equals()} style={{backgroundColor : "#0465ce",borderWidth: 1,width : 90,height:90,margin:1,borderColor:"#2783ad",}}  ><Text style={{color:"#fff",fontSize:60,textAlign : "center"}}>=</Text></TouchableOpacity >

          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button1 : {
    flexDirection : "row",
    padding: 1

  },
  button2 : {
    flexDirection : "row",
    padding: 1



  },
  button3 : {
    flexDirection : "row",
    padding: 1



  },
  first :{
    backgroundColor: "#024666",
    height: 40,
    textAlign : "center",
    color : "#fff",
    fontSize: 20,

  },
  button4 : {
    flexDirection : "row",
    padding: 1,



  },
  second : {
    alignItems: "center",
    marginTop : 10

  },
  last : {
    marginLeft : 50,
    fontSize: 90,
    color : "#2783ad",
    borderBottomWidth : 1,
    borderBottomColor : "#2783ad"
  },
  calc : {
    marginLeft : 50,
    fontSize : 20,
    textAlign : "right",
    opacity : 50,
  }
})

export default App;