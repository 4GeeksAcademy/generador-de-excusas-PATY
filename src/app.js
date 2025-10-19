
window.onload = function() {
  const lista = document.querySelectorAll("#lista-excusas li");
  const indice = Math.floor(Math.random() * lista.length);
  const excusa = lista[indice].textContent;
  document.getElementById("excusa").textContent = excusa;
};


