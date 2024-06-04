document.getElementByld('convert-button').addEventListener('click', function() 
{
    const temperatureInput=document.getElementByld('temperature-input').value;
    const unitInput=document.getElementByld('unit-input').value;
    
    if (isNaN(temperatureInput)|| temperatureInput===""){
        document.getElementByld('output').textContent="Please enter valid number.";
        return;
    }
    const temperature=parseFloat(temperatureInput);
    let result="";
    
    if (unitInput === "Celsius"){
        const fahrenheit=(temperature*9/5 )+ 32;
                const kelvin=temperature + 273.15;
                        result=`Fahrenheit:$
                        {fahrenheit.toFixed(2)}F,Kelvin:$
                        {kelvin.toFixed(2)}K`;
                    }
    else if(unitInput === "Fahrenheit"){
        const celsius =(temperature-32)*5/9;
        const kelvin = (temperature-32)*5/9+273.15;
        result= `Celsius:${celsius.toFixed(2)}
        C,Kelvin:${kelvin.toFixed(2)}K`;}
    
    else if(unitInput==="Kelvin"){
        const celsius=temperature-273.15;
        const fahrenheit=(temperature-273.15)*9/5+32;
        result= `Celsius:${celsius.toFixed(2)}
        C,Fahrenheit:${fahrenheit.toFixed(2)}
        F`;
    }  
               
        document.getElementByld('output').textContent=result;                 
    });