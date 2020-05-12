$(() => {console.log(jQuery.browser.mobile)
  var navbar = $('.navbar')[0]
  console.log(navbar)
  var sticky = navbar.offsetTop;
  console.log(sticky)
  window.onscroll = () => {
    if (window.pageYOffset >= sticky)
      navbar.classList.add("sticky")
    else 
      navbar.classList.remove("sticky");
}})