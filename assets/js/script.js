$(() => {
  if(jQuery.browser.mobile)
    document.getElementById('mobiTest').innerText = "You are on Mobile!"
  else
    document.getElementById('mobiTest').innerText = "You are not on Mobile!"
  var navbar = $('.navbar')[0]
  var sticky = navbar.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset >= sticky)
      navbar.classList.add("sticky")
    else 
      navbar.classList.remove("sticky");
}})