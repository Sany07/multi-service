
window.onload = () => {
	upDateColor();
};

let generateColorButton =document.getElementById('ge-button')
let colorPalate = document.getElementById('rgb-Color')
let rgbColorCode = document.getElementById('rgb-color-code')
let haxColorCode = document.getElementById('hax-color-code')
let rgbCopyButton = document.getElementById('rgb-copy-button')



generateColorButton.addEventListener('click', function () {
        upDateColor();
        if(rgbCopyButton.innerText !='Copy'){
            rgbCopyButton.innerText ='Copy';
        }


    });

    function copyToClipboard(button,colorCode){
        navigator.clipboard.writeText(colorCode.value);
        if(button.innerText==="Copied"){
            button.innerText ='Copy';
            
        }
        button.innerText ='Copied';

    }
    
rgbCopyButton.addEventListener('click', function () {
   copyToClipboard(rgbCopyButton,rgbColorCode)

});


function upDateColor(){
    let rgbCode = generateColor()[0];
    let haxCode = generateColor()[1];
    console.log(rgbCode);
    console.log(haxCode);
    document.querySelector('#root').style.backgroundColor  = rgbCode;
    rgbColorCode.value=rgbCode;
    }
function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgbCode = `rgb(${red},${green},${blue})`;
    

    return [rgbCode];
}

