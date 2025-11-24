import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { COLORS } from "../theme";
import { buscarAzulIdaVolta } from "../services/flights";

export default function IdaVoltaScreen() {
  const [carregando, setCarregando] = useState(false);
  const [ida, setIda] = useState<any[]>([]);
  const [volta, setVolta] = useState<any[]>([]);
  const [total, setTotal] = useState<number | null>(null);

  async function buscar() {
    setCarregando(true);
    const resultado = await buscarAzulIdaVolta();
    setIda(resultado.ida);
    setVolta(resultado.volta);
    setTotal(resultado.total);
    setCarregando(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Voos Azul – Ida e Volta</Text>

      <TouchableOpacity style={styles.btn} onPress={buscar}>
        <Text style={styles.btnTxt}>Buscar Preços</Text>
      </TouchableOpacity>

      {carregando && <ActivityIndicator color="#fff" size="large" style={{ marginTop: 20 }} />}

      {/* IDA */}
      {ida.length > 0 && (
        <View style={styles.box}>
          <Text style={styles.section}>IDA – 27/12/2025 (SJL → BEL)</Text>
          <Text style={styles.price}>R$ {ida[0].price}</Text>
          <Text style={styles.sub}>Saída: {String(ida[0].departureTime)}</Text>
<Text style={styles.sub}>Chegada: {String(ida[0].arrivalTime)}</Text>

        </View>
      )}

      {/* VOLTA */}
      {volta.length > 0 && (
        <View style={styles.box}>
          <Text style={styles.section}>VOLTA – 10/01/2026 (BEL → SJL)</Text>
          <Text style={styles.price}>R$ {volta[0].price}</Text>
          <Text style={styles.sub}>Saída: {String(volta[0].departureTime)}</Text>
<Text style={styles.sub}>Chegada: {String(volta[0].arrivalTime)}</Text>

        </View>
      )}

      {/* TOTAL */}
      {total !== null && (
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>TOTAL:</Text>
          <Text style={styles.totalPrice}>R$ {total}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnTxt: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  box: {
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  section: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: COLORS.primary,
    fontSize: 26,
    fontWeight: "900",
    marginTop: 10,
  },
  sub: {
    color: COLORS.textMuted,
    marginTop: 4,
  },
  totalBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#0A0",
    borderRadius: 12,
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: "900",
    color: "#fff",
    marginTop: 10,
  },
});
