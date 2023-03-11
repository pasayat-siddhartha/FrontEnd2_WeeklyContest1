function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;

    if (isNaN(n1) || isNaN(n2)) 
    {
        alert("Please enter valid numbers!");
    }
    if (oper === "") 
    {
        alert("Please select an operator!");
    }
    else if(oper === '+')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    else if(oper === '-')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    else if(oper === '/' && n2 != 0)
    {
        document.getElementById('result').value = n1/n2;
    }
    
    else if(oper === '*')
    {
        document.getElementById('result').value = n1*n2;
    }
}