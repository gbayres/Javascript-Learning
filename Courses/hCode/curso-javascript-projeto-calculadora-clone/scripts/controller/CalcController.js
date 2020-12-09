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

    addOperation(value){
        this._operation.push(value);
    }

    getLastOperation(){
        return this._operation[_operation.length - 1];
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
        
        // switch(value){
        //     case 'ac':
        //         this.clearAll();
        //     break;
            
        //     case 'ce':
        //         this.clearEntry();
        //     break;
            
        //     case 'soma':

        //     break;

            
        //     case 'subtracao':

        //     break;

            
        //     case 'divisao':

        //     break;

            
        //     case 'multiplicacao':

        //     break;

        //     case 'porcento':

        //     break;

        //     case 'igual':

        //     break;

        //     case 

        //     default:
        //         this.setError();
        //         break;

        // }
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