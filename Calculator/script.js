function display(val){
    console.log("Button Clicked...")
    if(val=='Clear'){
        document.getElementById('output').value='';
    }
    else if(val=='='){
        var result = eval(document.getElementById('output').value)
        console.log(result)
        document.getElementById('output').value=result
    }
    else{
        document.getElementById('output').value+=val;
    }
    console.log(val)
}