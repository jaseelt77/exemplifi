let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});

$(document).ready(function(){
  // Toggle dropdown when clicking on .nav_list_menu in mobile view
  $('.nav_list_menu').click(function(){
    if ($(window).width() <= 730) {
      $(this).find('.dropdown').toggle();
    }
  });

  // Close dropdown when clicking outside in mobile view
  $(document).click(function(event) {
    if (!$(event.target).closest('.nav_list_menu').length && $(window).width() <= 730) {
      $('.dropdown').hide();
    }
  });
});
