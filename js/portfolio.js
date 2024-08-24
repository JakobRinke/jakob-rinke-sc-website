
const params = new URLSearchParams(window.location.search);

const projectName = params.get('project');


const project = projects[projectName];


document.getElementById('project-name').innerText = project.name;

document.getElementById('project-description').innerText = project.description
    .replace(/\n/g, "")
    .replace(/\t/g, '')

if (project.link) {
    document.getElementById('project-link').href = project.link;
    document.getElementById('project-link').classList.remove('invisible');
}

document.getElementById('project-image').src = "assets/img/portfolio/thumbnails/" + projectName+ ".jpg";