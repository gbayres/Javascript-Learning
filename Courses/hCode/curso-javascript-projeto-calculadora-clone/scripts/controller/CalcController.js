class CalcController {
    
    constructor(){
       
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
            element.addEventListener(event, fn);
        })
    }

    initButtonsEvents(){
        let $buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        $buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, "click drag", (e) => {
                console.log(btn.className.baseVal.replace("btn-",""));
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