import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme";

export default function FlightCard({ flight }) {
  const airline = String(flight.airline || "Desconhecido");
  const price = String(flight.price || "0");

  const from = String(flight.from || "???");
  const to = String(flight.to || "???");

  const departureTime = String(flight.departureTime || "—");
  const duration = String(flight.duration || "—");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {airline} — R$ {price}
      </Text>

      <Text style={styles.route}>
        {from} → {to}
      </Text>

      <Text style={styles.time}>
        {departureTime} | {duration}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    marginBottom: 10
  },
  title: {
    color: COLORS.text,
    fontWeight: "bold"
  },
  route: {
    color: COLORS.textMuted
  },
  time: {
    color: COLORS.textMuted,
    fontSize: 12
  }
});
