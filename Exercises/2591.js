var lines = ['4', 'hamekame', 'haamekaame', 'haaamekaame', 'haaaamekaaame'];

function count(string){
    return string.split('a').length - 1
    
} 


for (i = 1; i <= parseInt(lines[0]); i++){
    
    var first = lines[i].split('k')[0],
        second = lines[i].split('k')[1];
    
    var n = count(first) * count(second); 
	
    var string = "k";
    
    for (j = 0; j < n; j ++){
        string += "a"
    }
    
    console.log(string);

}
