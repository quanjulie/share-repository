function ValidateEmail(inputText){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat)){
		document.form.email.focus();		
		alert("Votre email est correct!");
		return true;
	}
	else{
		alert("Votre email est incorrect!");
		document.form.email.focus();
		return false;
	}
}