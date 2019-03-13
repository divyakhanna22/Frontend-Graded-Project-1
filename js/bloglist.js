var si_modal = document.getElementById("mySignInModal");
var si_btn = document.getElementById("signInModal");
var si_span = document.getElementsByClassName("close")[0];
si_btn.onclick = function() {
  si_modal.style.display = "block";
}
si_span.onclick = function() {
  si_modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == si_modal) {
    si_modal.style.display = "none";
  }
}

var su_modal = document.getElementById("mySignUpModal");
var su_btn = document.getElementById("signUpModal");
var su_span = document.getElementsByClassName("close")[1];
su_btn.onclick = function() {
  su_modal.style.display = "block";
}
su_span.onclick = function() {
  su_modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == su_modal) {
    su_modal.style.display = "none";
  }
}

var switch_modal = document.getElementById("tagSignUp");
switch_modal.onclick = function() {
  si_modal.style.display = "none";
  su_modal.style.display = "block";
}

var del_modal = document.getElementById("myDeleteModal");
var d_btn1 = document.getElementsByClassName("trash-btn")[0];
d_btn1.onclick = function()
{
  del_modal.style.display = "block";
}
var d_btn2 = document.getElementsByClassName("trash-btn")[1];
d_btn2.onclick = function()
{
  del_modal.style.display = "block";
}
var d_btn3 = document.getElementsByClassName("trash-btn")[2];
d_btn3.onclick = function()
{
  del_modal.style.display = "block";
}
var d_btn4 = document.getElementsByClassName("trash-btn")[3];
d_btn4.onclick = function()
{
  del_modal.style.display = "block";
}
var d_btn5 = document.getElementsByClassName("trash-btn")[4];
d_btn5.onclick = function()
{
  del_modal.style.display = "block";
}

var close_trash = document.getElementById("noButton");
close_trash.onclick = function() {
  del_modal.style.display = "none";
}




