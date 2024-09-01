const tasas = {
  uf: {
    nombre: "Unidad de fomento (UF)",
    valor: 37762.97
  },
  ivp: {
    nombre: "Indice de valor promedio (IVP)",
    valor: 39193.31
  },
  dolar: {
    nombre: "Dólar observado",
    valor: 943.78
  },
  dolar_intercambio: {
    nombre: "Dólar acuerdo",
    valor: 758.87
  },
  euro: {
    nombre: "Euro",
    valor: 1020.96
  },
  ipc: {
    nombre: "Indice de Precios al Consumidor (IPC)",
    valor: 0.7 // Nota: IPC es un porcentaje, puede que necesites manejarlo de manera diferente
  },
  utm: {
    nombre: "Unidad Tributaria Mensual (UTM)",
    valor: 66362
  },
  imacec: {
    nombre: "Imacec",
    valor: 0.1 // Nota: Imacec es un porcentaje, puede que necesites manejarlo de manera diferente
  },
  tpm: {
    nombre: "Tasa Política Monetaria (TPM)",
    valor: 5.75 // Nota: TPM es un porcentaje, puede que necesites manejarlo de manera diferente
  },
  libra_cobre: {
    nombre: "Libra de Cobre",
    valor: 4.01
  },
  tasa_desempleo: {
    nombre: "Tasa de desempleo",
    valor: 8.68 // Nota: Tasa de desempleo es un porcentaje, puede que necesites manejarlo de manera diferente
  },
  bitcoin: {
    nombre: "Bitcoin",
    valor: 69701.3
  }
};


function selectMonedas() {
  console.log("Llamando a la función selectMonedas");

  const monedas = Object.keys(tasas);
  console.log("Monedas disponibles:", monedas);

  const select = document.getElementById('monedas');
  select.innerHTML = "";

  monedas.forEach(moneda => {
    const optionMoneda = document.createElement('option');
    optionMoneda.value = moneda;
    optionMoneda.text = tasas[moneda].nombre;
    select.appendChild(optionMoneda);
  });

  console.log("Opciones agregadas al select:", select.innerHTML);
}

function convertir() {
  const CLP = parseFloat(document.getElementById('ingresaNum').value);
  const moneda = document.getElementById('monedas').value;
  const resultado = document.getElementById('resultado');

  if (!CLP || !moneda) {
    resultado.textContent = "Resultado: 0";
    return;
  }

  const valorTotal = tasas[moneda].valor;
  const valorConvertido = CLP * valorTotal;

  resultado.textContent = `Resultado: ${formatearPesos(valorConvertido)} ${tasas[moneda].nombre}`;
}

function formatearPesos(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}


document.addEventListener('DOMContentLoaded', selectMonedas);