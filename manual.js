parseInt(string, base) 
	// == int(string) 
array.map(function) 
	// == list(map(function, array))
array.shift() 
	// == array.pop(0)
material => material.length 
	// == lambda material: len(material)
num.toFixed(4) 
	// == round(num, 4)
list.push('item') 
	// == list.append('item')
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
array.find( element => element == "Whatever" ) 
	// ==  Retorna o primeiro elemento que satisfaz a condição
array.findIndex( x => x == item)
	// == array.index(item)
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
BigInt(x)
	// Avoids sci notation
x.toString() or String(x)
	// == str(x)

//--------Terminal-------
cp -b file1 file2 //Copy file
