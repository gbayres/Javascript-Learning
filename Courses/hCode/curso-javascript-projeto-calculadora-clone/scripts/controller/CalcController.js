class CalcController {
    
    constructor(){
        
        this._operation = [""];
        this._locale = "pt-BR";
        this._$displayCalcEl = document.querySelector('#display');
        this._$dateEl = document.querySelector('#data');
        this._$timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();            
        } , 1000)
    }
    
    addEventListenerAll(element, events, fn){
        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop()

    }

    isOperator(value){
        return (value in ["+", "-", "*", "/", "%"])
    }

    addOperation(value){
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)){
            
            
            } else if (isNaN(value)) {
                console.log(value);
            } else {
            let newValue = this.getLastOperation().toString() + value.toString()
            this._operation.push(newValue);
        }

    }

    getLastOperation(){
        return this._operation[this._operation.length - 1];
    }

    execBtn(value){

        let lastItem = this._operation[length.]

        if (isNaN(value)){
            this.addOperation(value);
            this.addOperation("");
        } else{
            this._operation.push(String(this._operation.pop()) + String(value));    
        }

        console.log(this._operation);
        
        let equivalences = {
            "soma": "+",
            "subtracao": "-",
            "divisao": "/",
            "multiplicacao": "*",
            "porcento": "%",
            "igual": "=",
            "ponto": ".",
        }
        
        switch(value){

            
            case 'soma':

            break;
            
            case 'subtracao':

            break;
 
            case 'divisao':

            break;

            case 'multiplicacao':

            break;

            case 'porcento':

            break;

            case 'igual':

            break;

            case 'ponto':

            break;



            case 'ac':
                this.clearAll();
            break;
            
            case 'ce':
                this.clearEntry();
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':



            default:
                this.setError();
                break;

        }
    }

    setError(){
        this.displayCalc = "Error";
    }


    initButtonsEvents(){
        let $buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        $buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (e) => {

                let textBtn = btn.className.baseVal.replace("btn-","");

                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
                btn.style.cursor = "pointer"; 
            })
        })
        

    }
    
    
    
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);        
    }
    
    get displayTime(){
        return this._$timeEl.innerHTML;
    }

    set displayTime(value){
        this._$timeEl.innerHTML = value;
    }

    get displayCalc(){
        return this._$displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._$displayCalcEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._$dateEl.innerHTML;
    }

    set displayDate(value){
        this._$dateEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}