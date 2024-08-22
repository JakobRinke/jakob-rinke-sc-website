
const params = new URLSearchParams(window.location.search);

const projectName = params.get('project');


const project = projects[projectName];


document.getElementById('project-name').innerText = project.name;

document.getElementById('project-description').innerText = project.description
    .replace(/\n/g, "")
    .replace(/\t/g, '')


document.getElementById('project-image').src = "assets/img/portfolio/thumbnails/" + projectName+ ".jpg";