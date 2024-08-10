const button=document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

function Calculator(){
    let Input=String(document.getElementById("input").value)
    if(Input.includes("+")==true){
        operator ='Add'
        let ToBeCal=Input.split('+')
        operand1=Number(ToBeCal[0])
        operand2=Number(ToBeCal[1])
    }
    
    else if(Input.includes("-")==true){
        operator='Sub'
        let ToBeCal=Input.split('-')
        operand1=ToBeCal[0]
        operand2=ToBeCal[1]
    }
    else if(Input.includes("*")==true){
        operator='mul'
        let ToBeCal=Input.split('*')
        operand1=ToBeCal[0]
        operand2=ToBeCal[1]
    }
    else if(Input.includes("/")==true){
        operator='div'
        let ToBeCal=Input.split('/')
        operand1=ToBeCal[0]
        operand2=ToBeCal[1]
    }
    else{
        console.log('Sorry You Can Only Add, Sub, Mul & div')
    }
    switch(operator){
        case 'Add':
            calc=operand1+operand2
            break;
        case 'Sub':
            calc=operand1-operand2
            break;
        case 'mul':
            calc=operand1*operand2
            break;
        case 'div':
            calc=operand1/operand2
            break
    }  
        let text= `Answer: ${calc}`
        console.log(text)
        document.getElementById('result').innerHTML=text
}
