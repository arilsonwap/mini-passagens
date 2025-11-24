import axios from "axios";

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGU5YmI4NjhiYzcyNTNkNjZjZDdjOTg3MjIwZGI4MTE1NzE5MDU2NzAzNmQ5NTk4ZWRmOWZiM2FjMjc1ZWM1NDFmZjdjZTY4MjU5NDdmYWUiLCJpYXQiOjE3NjM5NDI1NzIsIm5iZiI6MTc2Mzk0MjU3MiwiZXhwIjoxNzk1NDc4NTcyLCJzdWIiOiIyNjU1MSIsInNjb3BlcyI6W119.P4Vwy4XvHXrCfgt8x4_XbNjW3sedMnQdmvu_11f-UTN2F30FK-l3GT9B3Bv_EFK7v10J2o9e_JtvbPoAZ8x1Mw";
const BASE_URL = "https://www.goflightlabs.com/flights";

// 🔵 Filtrar somente Azul e ordenar pelo preço
function filtrarAzul(lista: any[]) {
  const azul = lista.filter(item =>
    item?.airline?.name?.toLowerCase().includes("azul")
  );

  return azul.sort(
    (a, b) => (a.live?.price || 999999) - (b.live?.price || 999999)
  );
}

async function buscarAzul(origem: string, destino: string, data: string) {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,   // ✔ CORRETO
      },
      params: {
        dep_iata: origem,
        arr_iata: destino,
        flight_date: data,
      },
    });

    const filtrado = filtrarAzul(response.data?.data || []);

    return filtrado.map((item, index) => ({
      id: String(index),
      airline: String(item.airline?.name || "Azul"),
      price: Number(item.live?.price || 0),
      from: String(item.departure?.iata || origem),
      to: String(item.arrival?.iata || destino),
      departureTime: String(item.departure?.scheduled || ""),
      arrivalTime: String(item.arrival?.scheduled || ""),
      duration: String(item.flight?.duration || "N/D"),
    }));

  } catch (err: any) {
    console.log("Erro buscar Azul:", err?.response?.data || err.message);
    return [];
  }
}

// 🔵 Buscar IDA + VOLTA + TOTAL
export async function buscarAzulIdaVolta() {
  const ida = await buscarAzul("SJL", "BEL", "2025-12-27");
  const volta = await buscarAzul("BEL", "SJL", "2026-01-10");

  return {
    ida,
    volta,
    total: (ida[0]?.price || 0) + (volta[0]?.price || 0),
  };
}