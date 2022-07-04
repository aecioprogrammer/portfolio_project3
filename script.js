import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentocarencia.js";

const carencia = document.getElementById("carencia");
const lista = document.querySelector("#listaSuspensaCarencia");
//const corpoTabela = document.getElementsByTagName("tbody")[0];
const corpoTabela = document.querySelector("#corpoTabela");
const botaoCalcular = document.querySelector("#buttonCalcular");
const textValor = document.querySelector("#textValordoBem");
const textEntrada = document.querySelector("#textEntrada");
const textTaxaJuros = document.querySelector("#textTaxadeJuros");
const textPrazo = document.querySelector("#textPrazo");

function limpaCorpoTabela() {
  while (corpoTabela.firstChild) {
    corpoTabela.removeChild(corpoTabela.firstChild);
  }
}

carencia.addEventListener("change", function () {
  if (this.checked) {
    lista.removeAttribute("hidden");
  } else {
    lista.setAttribute("hidden", "hidden");
  }
});

botaoCalcular.addEventListener("click", function () {
  limpaCorpoTabela();

  const valor = parseFloat(textValor.value);
  const entrada = parseFloat(textEntrada.value);
  const taxaJuros = parseFloat(textTaxaJuros.value);
  const prazo = parseFloat(textPrazo.value);

  let simulacao;

  if (carencia.checked) {
    const carencia = parseInt(lista.value);
    simulacao = new FinanciamentoCarencia(
      valor,
      entrada,
      taxaJuros,
      prazo,
      carencia
    );    
  } else {
    simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);    
  }
  simulacao.calcParcelasMensais();
  simulacao.exibeParcelas();
});
