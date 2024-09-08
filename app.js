// Função para renderizar todos os cursos
function mostrarTodosCursos() {
    const section = document.getElementById("cards-cursos");
    let cardsCurso = "";

    for (let curso of cursos) {  
       
        // Cria um novo card
        cardsCurso += `
        <div class="card">
            <img class="card img" src="${curso.imagem}" alt="Imagem do Curso">
            <h3>${curso.titulo}</h3>
            <p>Carga Horária: ${curso.cargaHoraria}</p>
            <p>${curso.descricao}</p>
            <button class="detalhe-curso" onclick='detalheCurso(${JSON.stringify(curso)})'>Mostrar Mais</button>       
        </div>`;
    }

    section.innerHTML = cardsCurso;
}

// Função de pesquisa
function pesquisar() {
    const section = document.getElementById("cards-cursos");
    const campoPesquisa = document.getElementById("busca").value.toLowerCase();
    let cardsCurso = "";

    if (!campoPesquisa) {
        // Se o campo de pesquisa estiver vazio, mostra todos os cursos
        mostrarTodosCursos();
        return;
    }

    for (let curso of cursos) {
        const { titulo, descricao, tags } = curso;
        const tituloLowerCase = titulo.toLowerCase();
        const descricaoLowerCase = descricao.toLowerCase();
        const tagsSet = new Set(tags.map(tag => tag.toLowerCase()));

        if (tituloLowerCase.includes(campoPesquisa) ||
            descricaoLowerCase.includes(campoPesquisa) ||
            tagsSet.has(campoPesquisa)) {
            // Limita a descrição a 100 caracteres e adiciona "..." se for maior que isso
            let descricaoTruncada = curso.descricao.length > 100 ? curso.descricao.substring(0, 100) + "..." : curso.descricao;

            // Cria um novo card
            cardsCurso += `
            <div class="card">
                <img class="card img" src="${curso.imagem}" alt="Imagem do Curso">
                <h3>${curso.titulo}</h3>
                <p>Carga Horária: ${curso.cargaHoraria}</p>
                <p>${descricaoTruncada}</p>
                <button class="detalhe-curso" onclick='detalheCurso(${JSON.stringify(curso)})'>Mostrar Mais</button>
            </div>`;
        }
    }

    section.innerHTML = cardsCurso || `<p class="msg-erro">Não encontramos nenhum resultado. Tente procurar com outras palavras.</p>`;
}

// Função para abrir o modal com detalhes do curso
function detalheCurso(curso) {
    const modal = document.getElementById("curso-modal");
    const img = document.getElementById("curso-img");
    const title = document.getElementById("curso-title");
    const cargaHoraria = document.getElementById("curso-carga-horaria");
    const descricao = document.getElementById("curso-descricao");
    const closeButton = document.querySelector(".close");

    // Preenche os detalhes do curso no modal
    img.src = curso.imagem;
    title.textContent = curso.titulo;
    cargaHoraria.textContent = `Carga Horária: ${curso.cargaHoraria}`;
    descricao.textContent = curso.descricao;

    // Mostra o modal
    modal.style.display = "block";

    // Fecha o modal quando o usuário clicar no "x"
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Fecha o modal quando o usuário clicar fora da área do modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Inicializa a exibição dos cursos ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarTodosCursos);

// Adiciona o event listener ao botão de pesquisa
const butonPesquisa = document.getElementById("pesquisar");
butonPesquisa.addEventListener('click', pesquisar);

// Adiciona o event listener para o campo de entrada
const inputBusca = document.getElementById("busca");
inputBusca.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
        event.preventDefault(); // Impede o comportamento padrão do Enter, como enviar um formulário
    }
});
