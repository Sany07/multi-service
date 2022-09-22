
window.onload = () => {
	upDateColor();
};

let generateColorButton =document.getElementById('ge-button')
let colorPalate = document.getElementById('rgb-Color')
let rgbColorCode = document.getElementById('rgb-color-code')
let haxColorCode = document.getElementById('hax-color-code')
let rgbCopyButton = document.getElementById('rgb-copy-button')
// let haxCopyButton = document.getElementById('hax-copy-button')



generateColorButton.addEventListener('click', function () {
        upDateColor();
        if(rgbCopyButton.innerText !='Copy'){
            rgbCopyButton.innerText ='Copy';
        }
        // if(haxCopyButton.innerText !='Copy'){
        //     haxCopyButton.innerText ='Copy';
        // }

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
// haxCopyButton.addEventListener('click', function () {
//    copyToClipboard(haxCopyButton,haxColorCode)

// });

function upDateColor(){
    let rgbCode = generateColor()[0];
    let haxCode = generateColor()[1];
    console.log(rgbCode);
    console.log(haxCode);
    // colorPalate.style.backgroundColor  = rgbCode;
    document.querySelector('#root').style.backgroundColor  = rgbCode;
    rgbColorCode.value=rgbCode;
    // haxColorCode.value=haxCode;
    }
function generateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgbCode = `rgb(${red},${green},${blue})`;
    
    // convet rgb to hax
    const haxCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    return [rgbCode,haxCode];
}

