export async function buscarPassagensMock(origem, destino, data){
  return [
    {id:"1",airline:"Latam",price:1234,from:origem,to:destino,departureTime:data+" 08:30",arrivalTime:data+" 12:10",duration:"3h40m"},
    {id:"2",airline:"Gol",price:1150,from:origem,to:destino,departureTime:data+" 14:20",arrivalTime:data+" 17:45",duration:"3h25m"}
  ];
}
