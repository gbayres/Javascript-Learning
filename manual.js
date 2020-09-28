parseInt(string, base) // == int(string) 
array.shift() // == array.pop(0)
material => material.length // == lambda material: len(material)
num.toFixed(4) // == round(num, 4)
list.push('item') // == list.append('item')
Math.abs(valor) // == abs(valor)
list.sort( (a, b) => {return a < b ? -1 : a > b ? 1 : 0} // == sorted(list)
list.sort( (a, b) => a[0] - b[0]) //Organiza arrays pelo primeiro valor
typeof x // Returns class of x
"Z".charCodeAt(0) // == ord("Z")
String.fromCharCode(45) // == chr(45)
list.reverse() // == list.reverse()
list.reduce( (a, b) => a + b, 5 ) // == (list + [5]).sum()
	//or functools.reduce(labmda a,b: a + b, lista)
array.find( element => element == "Whatever" ) // array.index(element)
str.search("gabriel") //str.find("gabriel")

//--------Terminal-------
cp -b file1 file2 //Copy file
