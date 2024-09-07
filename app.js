function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi enconrado. O campo pesquisa está em branco!</p>";
      return;
    }
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, incluindo o título, descrição e link
        resultados += `
          <div class="item-resultado">
            <h2><a href="#">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }

    if (!resultados) {
      section.innerHTML = "<p>Nada foi enconrado</p>";
      return;
    }

    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }