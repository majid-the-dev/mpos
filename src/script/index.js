const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarMenu = document.querySelector('.sidebar-menu');
const main = document.querySelector('.main')


sidebarToggle.addEventListener('click', function (e) {
    e.preventDefault()
    main.classList.toggle('active')
    sidebarMenu.classList.toggle('-translate-x-full')
    console.log('hello');
})