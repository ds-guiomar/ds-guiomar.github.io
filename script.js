/*
 * GALERIA DE PROJETOS
 * Para adicionar um projeto, copie um dos exemplos abaixo para a lista.
 * Coloque as imagens na pasta assets/ e informe o caminho em "image".
 */
const projects = [
  // {
  //   title: "Nome do projeto",
  //   category: "Robótica",
  //   description: "Uma frase contando o que os estudantes criaram.",
  //   image: "assets/foto-do-projeto.jpg"
  // }
];

const projectsList = document.querySelector("#projects-list");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderProjects() {
  if (!projectsList) return;

  if (projects.length === 0) {
    projectsList.innerHTML = `
      <div class="empty-projects">
        <span class="empty-mark" aria-hidden="true">&lt;/&gt;</span>
        <strong>Tem projeto novo chegando!</strong>
        <p>Em breve, você vai encontrar aqui as criações dos nossos estudantes.</p>
      </div>`;
    return;
  }

  projectsList.innerHTML = projects.map((project) => {
    const image = project.image
      ? `<div class="project-image"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title || "Projeto dos estudantes")}" loading="lazy"></div>`
      : `<div class="project-image"><span class="project-placeholder" aria-hidden="true">&lt;/&gt;</span></div>`;

    return `
      <article class="project-card">
        ${image}
        <div class="project-copy">
          <span class="project-category">${escapeHTML(project.category || "Projeto")}</span>
          <h3>${escapeHTML(project.title || "Projeto dos estudantes")}</h3>
          <p>${escapeHTML(project.description || "")}</p>
        </div>
      </article>`;
  }).join("");
}

renderProjects();
