
function replace(){

var input = $('#input').val();

input = input.replace(/</g, "&lt;");
input = input.replace(/>/g, "&gt;");

input = input.replace(/ /g, "&nbsp;");

input = input.replace(/class/g, '<span class="keyword">class</span>');

input = input.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");


//Comments 
var comments = input.match("//.*\n", "g");

	if(comments != null){
		for(var i = 0; i < comments.length; i++){

			var pattern = new RegExp(comments[i], 'g');

			input = input.replace(pattern, '<span class="comment">' + comments[i] + '</span>');

	}
}

//strings
//var strings = input.match('[^"].*["$]', 'g');
var strings = input.match("\".*?\"", 'g');
var text = "";

if(strings != null){
	for(var x = 0; x < strings.length; x++){
	
	text = strings[x];
	text = text.substr(1, text.length-2);

	input = input.replace(text, '<span class="blue">' + text + '</span>');
	
	}
}


//break

input = input.replace(/\n/g, "<br>");



//keywords
var keywords = [
"abstact",
"assert",
"boolean",
"break",
"byte",
"case",
"catch",
"char",
"const",
"continue",
"default",
"do",
"double",
"else",
"enum",
"extends",
"final",
"finally",
"float",
"for",
"goto",
"if",
"implements",
"import",
"instanceof",
"int",
"interface",
"long",
"native",
"new",
"package",
"private",
"protected",
"public",
"return",
"short",
"static",
"strictfp",
"super",
"switch",
"synchronized",
"this",
"throw",
"throws",
"transient",
"try",
"void",
"volatile",
"while"
];

for(var i = 0; i < keywords.length; i++){

	var pattern = new RegExp(keywords[i], 'g');

	input = input.replace(pattern, '<span class="keyword">' + keywords[i] + '</span>');

}


$('#preview').append(input);



//line numbers
var rownumbers = input.match("<br>", "g");
console.log('rownumbers: ' + rownumbers);

var result = "";


if(rownumbers != null){
	for(var a = 1; a < rownumbers.length+2; a++){

			result = result + a + "<br>";

	}
}else{
		result = "1<br>";
}
	
	console.log('result: ' + result);

$('.rownumbers').append(result);



var code = '<div><div class="mycodehighlight"><div class="rownumbers">' + result + '</div>'+ input + '</div><div class="clear"></div></div>';

$('#output').text(code);


}