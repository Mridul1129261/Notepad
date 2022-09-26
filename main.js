function buCheck(){
    if (document.getElementById("boldme").style.backgroundColor=="gray"){
        document.getElementById("boldme").style.backgroundColor="white"
    }
    if (document.getElementById("underlineme").style.backgroundColor=="gray"){
        document.getElementById("underlineme").style.backgroundColor="white"
    }
}
document.addEventListener("DOMContentLoaded",function(){
document.getElementById("closeNotes").addEventListener("click",function(){
    document.getElementById("notedNotes").style.display="none"
})
document.getElementById("AllNotes").addEventListener("click", function(){
    document.getElementById("notedNotes").style.display="revert"
    document.getElementById("rules").style.position="fixed"
    document.getElementById("rules").style.top="0px"
})
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("rules").style.display="none"
})
document.getElementById("instructions").addEventListener("click", function(){
    document.getElementById("rules").style.display="revert"
    document.getElementById("rules").style.position="revert"
})
function textToClipboard (text) {
var dummy = document.createElement("textarea");
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);}
function normalise(){
let color =document.getElementById("boldme").style.backgroundColor
    if (color==="gray"){
        document.getElementById("boldme").style.backgroundColor="white"
    }
}
document.getElementById("boldme").addEventListener("click", function(){
    let color =document.getElementById("boldme").style.backgroundColor
    if (color==="gray"){
        document.getElementById("boldme").style.backgroundColor="white"
    }
    else{
        document.getElementById("boldme").style.backgroundColor="gray"
    }
    // console.log(color)
})
document.getElementById("underlineme").addEventListener("click", function(){
    let color =document.getElementById("underlineme").style.backgroundColor
    if (color==="gray"){
        document.getElementById("underlineme").style.backgroundColor="white"
    }
    else{
        document.getElementById("underlineme").style.backgroundColor="gray"
    }
    // console.log(color)
})
document.getElementById("select").addEventListener("click",function(){
    alert("Note copied to clipboard")
    // buCheck()
    var myIFrame = document.getElementById("output"); // Creating an object of the iframe
    console.log(myIFrame.contentWindow.document.body.textContent); // Getting it's content into a variable
    textToClipboard(myIFrame.contentWindow.document.body.textContent);
})
const buttons= document.querySelectorAll('button');
textField.document.designMode="On"; 
for( let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let cmd = buttons[i].getAttribute('data-cmd');
        textField.document.execCommand(cmd, false, null);
})
}
let totalnotes=0
document.getElementById("new").addEventListener("click",function(){
    totalnotes+=1
    alert("Note saved in Saved Notes")
    buCheck()
    const newNote=document.createElement('textArea')
    newNote.textContent=document.getElementById("output").contentWindow.document.body.textContent
    newNote.cursor="pointer";
    newNote.rows="5"
    newNote.cols="10"
    newNote.id="newNote"+totalnotes
    newNote.style.marginLeft="2%"
    console.log(newNote)
    document.querySelector("#notedNotes").appendChild(newNote)
    document.getElementById("output").contentWindow.document.body.textContent=""
    save=document.createElement("span")
    save.id="backupSave"+totalnotes;
    save.class="edit"
    save.textContent="Edit"
    document.querySelector("#notedNotes").appendChild(save)
    const style=document.getElementById("backupSave"+totalnotes).style
    style.marginRight="40px"
    style.marginleft="30px"
    style.borderSize="0.1px"
    style.borderColor="palegreen"
    style.borderStyle="solid"
    style.cursor="pointer"
    style.padding="2px"
    style.backgroundColor="palegreen"
    style.borderRadius="10px"
    document.getElementById("backupSave"+totalnotes).addEventListener("click",function(e){
        // console.log(e.target.id)
        let contentid=e.target.id
        let str = contentid.toString()
        n=str.charAt(str.length-1)
        // console.log(n)
    // console.log(document.getElementById("output").contentWindow.document.body.textContent)
    document.getElementById("output").contentWindow.document.body.textContent=document.getElementById("newNote"+n).textContent
    document.getElementById("newNote"+n).style.display="none"
    document.getElementById("backupSave"+n).style.display="none"
})
})
})