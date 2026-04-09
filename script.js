const projetos = [
  { nome: "Projeto 1", descricao: "Descrição do projeto 1" },
  { nome: "Projeto 2", descricao: "Descrição do projeto 2" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${projeto.nome}</h3><p>${projeto.descricao}</p>`;
  lista.appendChild(div);
});