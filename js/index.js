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

var cp_modal = document.getElementById("myCreatePostModal");
var cp_btn = document.getElementById("createPostModal");
var cp_span = document.getElementsByClassName("close")[2];
cp_btn.onclick = function() {
  cp_modal.style.display = "block";
}
cp_span.onclick = function() {
  cp_modal.style.display = "none";
}
window.onclick = function(event) {
  if(event.target == cp_modal) {
    cp_modal.style.display = "none";
  }
}

var switch_modal = document.getElementById("tagSignUp");
switch_modal.onclick = function() {
	si_modal.style.display = "none";
	su_modal.style.display = "block";
}
