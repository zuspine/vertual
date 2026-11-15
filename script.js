const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  const opened = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = opened ? '✕' : '☰';
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = '☰';
  });
});

// Portfolio category filters.
const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    projects.forEach((project) => {
      const shouldShow = selected === 'all' || project.dataset.category === selected;
      project.classList.toggle('hidden', !shouldShow);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
