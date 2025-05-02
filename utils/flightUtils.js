const vuelos = [
    { origen: 'SCL', destino: 'GRU', fecha: '20-05-2021', vuelo: 'LA123', hora: '10:00', pasajero: 'Juan Pérez', reserva: 'ABC123' },
    { origen: 'SCL', destino: 'MIA', fecha: '21-05-2021', vuelo: 'LA456', hora: '12:00', pasajero: 'Ana Torres', reserva: 'DEF456' },
    { origen: 'MIA', destino: 'JFK', fecha: '22-05-2021', vuelo: 'AA789', hora: '14:00', pasajero: 'Carlos Lima', reserva: 'GHI789' },
    { origen: 'BOG', destino: 'SCL', fecha: '23-05-2021', vuelo: 'AV321', hora: '16:00', pasajero: 'Laura Gómez', reserva: 'JKL321' },
    { origen: 'LIM', destino: 'MIA', fecha: '24-05-2021', vuelo: 'LA654', hora: '08:00', pasajero: 'Pedro Ruiz', reserva: 'MNO654' },
    { origen: 'GRU', destino: 'CNF', fecha: '25-05-2021', vuelo: 'G3890', hora: '13:00', pasajero: 'Beatriz Silva', reserva: 'PQR987' },
    { origen: 'CNF', destino: 'BSB', fecha: '26-05-2021', vuelo: 'AZ234', hora: '11:30', pasajero: 'Ricardo Teixeira', reserva: 'STU432' },
    { origen: 'BSB', destino: 'BOG', fecha: '27-05-2021', vuelo: 'AV768', hora: '15:20', pasajero: 'Diana López', reserva: 'VWX111' },
    { origen: 'MIA', destino: 'SCL', fecha: '28-05-2021', vuelo: 'AA890', hora: '17:00', pasajero: 'Felipe Ramírez', reserva: 'YZA999' },
    { origen: 'LIM', destino: 'GRU', fecha: '29-05-2021', vuelo: 'LA321', hora: '06:45', pasajero: 'Natalia Quispe', reserva: 'BCD222' },
    { origen: 'JFK', destino: 'LIM', fecha: '30-05-2021', vuelo: 'DL777', hora: '19:10', pasajero: 'Marco Rivera', reserva: 'EFG333' },
    { origen: 'GRU', destino: 'BOG', fecha: '31-05-2021', vuelo: 'LA852', hora: '09:30', pasajero: 'Sofía Andrade', reserva: 'HIJ444' },
    { origen: 'BOG', destino: 'JFK', fecha: '01-06-2021', vuelo: 'AV909', hora: '07:50', pasajero: 'Andrés Rojas', reserva: 'KLM555' },
    { origen: 'CNF', destino: 'MIA', fecha: '02-06-2021', vuelo: 'AZ100', hora: '21:15', pasajero: 'Lucía Mendes', reserva: 'NOP666' },
    { origen: 'SCL', destino: 'BSB', fecha: '03-06-2021', vuelo: 'LA675', hora: '18:25', pasajero: 'Tomás Navarro', reserva: 'QRS777' },
  ];
  
const airportMap = {
  'santiago': 'SCL',
  'bogotá': 'BOG',
  'lima': 'LIM',
  'miami': 'MIA',
  'brasília': 'BSB',
  'sao paulo': 'GRU',
  'são paulo': 'GRU',
  'belo horizonte': 'CNF',
  'new york': 'JFK',
  'nyc': 'JFK'
};

function normalizeToIATA(input) {
  const lower = input.trim().toLowerCase();
  return airportMap[lower] || input.toUpperCase();
}

function buscarVuelosDesdeTexto(texto) {
  const origenMatch = texto.match(/de\s+([a-zA-Z\s]+)/i);
  const destinoMatch = texto.match(/a\s+([a-zA-Z\s]+)/i);
  const fechaMatch = texto.match(/(?:el\s+)?(\d{2}-\d{2}-\d{4})/);

  if (!origenMatch || !destinoMatch || !fechaMatch) {
    return "Lo siento, no entendí completamente tu solicitud de vuelo.";
  }

  const origen = normalizeToIATA(origenMatch[1]);
  const destino = normalizeToIATA(destinoMatch[1]);
  const fecha = fechaMatch[1];

  const resultados = vuelos.filter(
    v => v.origen === origen && v.destino === destino && v.fecha === fecha
  );

  if (resultados.length === 0) {
    return `No encontré vuelos de ${origen} a ${destino} el ${fecha}.`;
  }

  return resultados.map(v =>
    `Vuelo ${v.vuelo} de ${v.origen} a ${v.destino} a las ${v.hora}. Código de reserva: ${v.reserva}.`
  ).join('\n');
}

export { buscarVuelosDesdeTexto };