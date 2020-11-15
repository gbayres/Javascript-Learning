parseInt(string, base) 
	// == int(string) 
array.map((item, index, array) => return) 
	// == list(map(function, array))
array.shift() 
	// == array.pop(0)
array.pop()
	// == array.pop(-1)
array.unshift(item)
	// == [item] + array
array.splice(position, 2)
	// == pops a list of 2 items from the first
array.fill(0, 2, 4)
	// == replaces with 0 the range(2,4) of an array
material => material.length 
	// == lambda material: len(material)
num.toFixed(4) 
	// == round(num, 4)
list.push('item') 
	// == list.append('item')
	// Retorna a len da array depois da adição
Math.abs(valor) 
	// == abs(valor)
list.sort( (a, b) => {return a < b ? -1 : a > b ? 1 : 0} 
	// == sorted(list)
list.sort( (a, b) => a[0] - b[0]) 
	//Organiza arrays pelo primeiro valor
typeof x 
	// x.__class__.__name__
"Z".charCodeAt(0) 
	// == ord("Z")
String.fromCharCode(45) 
	// == chr(45)
list.reverse() 
	// == list.reverse()
list.reduce( (a, b) => a + b, 5 ) 
	// == (list + [5]).sum()
	//or functools.reduce(labmda a,b: a + b, lista)
list.reduceRight (function)
	// Does the same thing, but starting from the right
list.filter( x => x < 3 )
	// filter (lambda x: x < 3, list)
array.find( element => element == "Whatever" ) 
	// ==  Retorna o primeiro elemento que satisfaz a condição
array.findIndex( x => x == item) 
array.indexOf(x)
	// == array.index(item)
array.lastIndexOf(item)
	// == returns the index of last appearence of an item
str.search("gabriel") 
	// == str.find("gabriel")
list.reduce( (a,b) => Math.max(a,b) ) 
	// == max(list) 
(str.match(/letter/g) || []).length 
	// == str.count('letter')
str.split(letter).length - 1 
	// == str.count('letter')
array.some( x => x) 
	// == any(array)
array.every( x => x) 
	// == all(array)
array.slice(a, b)
	// == array[a:b]
array.includes(a, b)
	// == a in array[b:]
string.includes(a)
	// == a in string
BigInt(x)
	// Avoids sci notation
x.toString() or String(x)
	// == str(x)
for (var elem of list) {} 
	// == for elem in list
var myset = new Set([1,2,3,4]) 
	// == myset = set([1,2,3,4])
myset.has(n)
	// == n in myset
string.trim()
	// == string.strip()
string.trimStart()
	// == string.lstrip()
string.trimEnd()
	// == string.rstrip()
string.repeat(n)
	// == string * n
string.toUpperCase()
	// == string.upper()
string.toLowerCase()
	// == string.lower()
string.startsWith('ga')
	// == string.startwith("ga")
string.endsWith("el")
	// == string.endswith("el")
string.concat(str)
	// == string + str
// -----------------------
var a, b, rest;
[a, b, ...rest] = [1,2,3,4,5];
//>> rest = [3,4,5]

({a, b} = {a:1, b:2})
//>> a = 1 and b = 2

({a, b, ...rest} = {a:1, b:2, c:3, d:4})
//>> a = 1, b =2 and rest = {c:3, d:4})

var metadata = {
    title: "Scratchpad",
    translations: [
       {
        title: "JavaScript-Umgebung"
       }
    ],
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
//---------------------------------------------------
function generic({id}) console.log(id);
var x = {id:2}
generic(x) // >> 2

//--------Terminal-------
cp -b file1 file2 //Copy file

//---------------------------------------------------
var nome = prompt("Qual é seu nome?"); => faz pergunta ao user
alert("Bem vindo, " + nome);

switch(n){
	case 1:
		alert("Boa escolha");
		break
	case 2:
		alert();
		break
	default:
		alert("blablabla")
}

operador !=  => refere-se apenas ao valor
operador !== => refere-se ao valor e ao tipo
Math.random()

do {
	console.log("teste");
} while (i < 0); => executa ao menos uma vez

var x = document.querySelector("#testando").textContent;
x.innerHTML = "texto inserido";
x.textContent => só o texto
<button onclick="function(param1, param2)"></button>
throw new Error("Deu pau") => joga erro no console

var hoje = new Date()
\ é caracter de escape
debugger; => força parada;
(f(){})(); => função auto-invocável (IIFE)

function(){
	'use strict'; => não permite criar variaveis sem var
}

function f(arr){
	console.log(arguments);
}

document.getElementById("only") => pega o elemento
document.getElementsByClassName("clearfix") => pega uma coleção de elementos
document.getElementsByTagName()..
document.querySelectorAll("#item h2") => retorna coleção dos h2 dentro do id "item"
document.querySelector('#txtNome').disabled = true
document.querySelector('#txtNome').readOnly = true
<script src="beluga.js"></script>
calcular.apply(this, [a,b,c,d,e]);

=======
var btn = document.getElementById("btn");

function clicar(){
	alert("clicar");
}
btn.addEventListener("click", () => {alert("clicou")};, true) => esse terceiro parametro significa mudar a ordem de propagação

document.addEventListener("click", function(evento){
	console.log(evento.currentTarget); => o alvo do click
	console.log(this); => objeto ao qual atrelei o evento
	console.log(evento.target); => objeto ao qual atrelei o evento
	evento.stopPropagation();
	evento.target.nodeName => nome da tag
})

element.style.color = "blue";