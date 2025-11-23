import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme";
export default function FlightCard({ flight }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{flight.airline} — R$ {flight.price}</Text>
      <Text style={styles.route}>{flight.from} → {flight.to}</Text>
      <Text style={styles.time}>{flight.departureTime} | {flight.duration}</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  card:{padding:12,backgroundColor:COLORS.surface,borderRadius:12,marginBottom:10},
  title:{color:COLORS.text,fontWeight:"bold"},
  route:{color:COLORS.textMuted},
  time:{color:COLORS.textMuted,fontSize:12}
});
