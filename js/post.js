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

var clicks=0;
function postLiked(){
    document.getElementById("likeButton").innerHTML = "<i class='fa fa-thumbs-up'>" + "</i>" + "Liked!";
    clicks += 1;
    if(clicks!=1)
    {
        document.getElementById("likeText").innerHTML = clicks + " people have liked this!";
    }
    else
    {
        document.getElementById("likeText").innerHTML = clicks + " person likes this!";
    }
}

function addComment(id)
{
    var temp = "<div>"+
    "<p>" + id.value + "</p>"+
    "</div>";
    document.getElementById("commentContainer").innerHTML = temp + document.getElementById("commentContainer").innerHTML;
    document.getElementById("userComments").value = "";
}

var flag=0;
function swapButton(){
	
    if(flag===0)
    {
    	document.getElementById("blogBody").contentEditable = "true";
    	document.getElementById("blogTitle").contentEditable = "true";
    	document.getElementById("editButton").innerHTML = "Save " + "<i class='fa fa-save'></i>";
    	flag = 1;
    }
	else
	{
		document.getElementById("blogBody").contentEditable = "false";
		document.getElementById("blogTitle").contentEditable = "false";
		document.getElementById("editButton").innerHTML = "Edit " + "<i class='fa fa-edit'></i>";
		flag = 0;
	}
}
