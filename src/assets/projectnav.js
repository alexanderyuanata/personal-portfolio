const project_articles = document.getElementsByClassName("project-article")
let currentIndex = 0;

function handleLeftProjectNavClick(){
  // Reduce index
  let nextIndex = currentIndex - 1;

  // Clamp index and wraparound
  if (nextIndex < 0) {
    nextIndex = project_articles.length - 1;
  }

  console.log(`Transitioning from article with index ${currentIndex} to ${nextIndex}`);

  // Select correct projects from index
  const currentProject = document.querySelector(`[data-index="${currentIndex}"]`),
  nextProject = document.querySelector(`[data-index="${nextIndex}"]`);

  // Set data so articles are in the correct positions
  currentProject.dataset.status = "off-left";

  nextProject.dataset.status = "becoming-on-left";
  
  // Wait, then transition
  setTimeout(() => {
    nextProject.dataset.status = "on";
    currentIndex = nextIndex;
  })
}

function handleRightProjectNavClick(){
  let nextIndex = currentIndex + 1;

  // Clamp index and wraparound
  if (nextIndex >= project_articles.length) {
    nextIndex = 0;
  }

  console.log(`Transitioning from article with index ${currentIndex} to ${nextIndex}`);

  // Select correct projects from index
  const currentProject = document.querySelector(`[data-index="${currentIndex}"]`),
  nextProject = document.querySelector(`[data-index="${nextIndex}"]`);

  currentProject.dataset.status = "off-right";

  nextProject.dataset.status = "becoming-on-right";
  
  setTimeout(() => {
    nextProject.dataset.status = "on";
    currentIndex = nextIndex;
  })
}