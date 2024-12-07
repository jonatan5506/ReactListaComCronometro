export const horaParaSegundos = (tempo: string) => {
  // Usando o split para separar os componentes
  const [hora = "0", min = "0", seg = "0"] = tempo.split(":");

  const horasEmSegundos = Number(hora) * 3600;
  const minutosEmSegundos = Number(min) * 60;
  return horasEmSegundos + minutosEmSegundos + Number(seg);
};
