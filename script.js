document.addEventListener("DOMContentLoaded", function () {
  const addProjectButton = document.getElementById("add-project");
  const projectsList = document.querySelector(".projects-list");

  // Bestaande functionaliteit om op 'Add Project' te klikken en een nieuw project toe te voegen
  addProjectButton.addEventListener("click", function () {
    const newProject = document.createElement("div");
    newProject.classList.add("project");

    newProject.innerHTML = `
      <h3><a href="#">New Project</a></h3>
      <p>Description of the new project...</p>
    `;

    projectsList.appendChild(newProject);
  });

  // Voeg hieronder de bestaande JavaScript-functionaliteit toe voor andere delen van de website
  // ...

});
