function sayhello(){
	var name=document.getElementById("name").value;
	var message="<h2>Hello "+name+"!</h2>";
	if(name==="Saumya"){
		message="<h2>Sorry but i still love u "+name+"!</h2>"
	}
	document.getElementById("content").innerHTML=message;

}
