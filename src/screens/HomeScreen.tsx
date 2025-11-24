import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../theme";
import FlightCard from "../components/FlightCard";
import { buscarPassagens } from "../services/flights";

export default function HomeScreen() {
  const [origem,setOrigem]=useState("MAO");
  const [destino,setDestino]=useState("GRU");
  const [data,setData]=useState("2025-12-20");
  const [voos,setVoos]=useState([]);

  async function buscar(){
    const lista=await buscarPassagens(origem,destino,data);
    setVoos(lista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Busca de Passagens ✈️</Text>
      <TextInput style={styles.input} value={origem} onChangeText={setOrigem}/>
      <TextInput style={styles.input} value={destino} onChangeText={setDestino}/>
      <TextInput style={styles.input} value={data} onChangeText={setData}/>
      <TouchableOpacity style={styles.btn} onPress={buscar}>
        <Text style={styles.btnTxt}>Buscar</Text>
      </TouchableOpacity>

      <FlatList data={voos} keyExtractor={i=>i.id} renderItem={({item})=><FlightCard flight={item}/>}/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:COLORS.background},
  title:{color:COLORS.text,fontSize:22,fontWeight:"bold",marginBottom:10},
  input:{backgroundColor:COLORS.surface,color:COLORS.text,padding:10,borderRadius:10,marginBottom:10},
  btn:{backgroundColor:COLORS.primary,padding:12,borderRadius:10,alignItems:"center"},
  btnTxt:{color:"#000",fontWeight:"bold"}
});