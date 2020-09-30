var lines = ['0',
            '45',
            '360',
            '90',
            '180'];

lines = lines.map( x => parseInt(x));

for (i=0; i < lines.length; i++){
    x = lines[i] % 360;
        
        if (x < 90) { 
            console.log("Bom Dia!!");
        }   
        
        else if (x < 180) { 
            console.log("Boa Tarde!!");
        }
            
        else if (x < 270) {
            console.log("Boa Noite!!");
        }
        
        else if (x < 360) { 
            console.log("De Madrugada!!");
        }
    }
