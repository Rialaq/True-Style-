var Body = document.body;
var Obj = document.createElement("div");
var header = document.createElement("label");
var Label = document.createElement("label");
var LYes = document.createElement("label");
var Icon = document.createElement("div");

var State = false;
function UseToast(){
    var LabelOn = document.getElementById('MsjBox');

    LYes.innerHTML = "Ok"

    Obj.setAttribute('id', 'TToast');
    Label.setAttribute('id', 'MsjBox');
    LYes.setAttribute('id', 'Yes')
    Icon.setAttribute('id', 'IconToast');
    
    Obj.addEventListener("click", function(){
        this.style.opacity = "0";
        State = false; 
        console.log("TrueToast - Status: " + State);
        setTimeout(() => {
            this.style.width = "0px";
            this.style.padding= "0px";    
        }, 300);    
        
        var IconToast = document.getElementById('IconToast');
        IconToast.style.opacity = 0;        
    })
    
    Body.appendChild(Obj);    
    Obj.appendChild(header);
    Obj.appendChild(Label);
    Obj.appendChild(LYes);
    Obj.appendChild(Icon);
}

function ShowToast(MText, Type){
    Obj.setAttribute('id', 'TToast')
    header.setAttribute('id', 'headerText');
    Obj.setAttribute('class', Type + " " + "TToast");
    Icon.setAttribute('class', 'icon-' + Type)
    console.log(header);

    var IconToast = document.getElementById('IconToast');
    var bYes = document.getElementById('Yes');
    var TToast = document.getElementsByClassName('TToast')[0];
    var headerText = document.getElementById('headerText');

    if(Type == "info"){
        console.log('info');
        headerText.innerHTML = "Informacion";
        IconToast.style.background = "#1976D2";
        TToast.style.borderLeft = "4px solid #1976D2";
        bYes.style.background = "#1976D2";
    }
    else if (Type == "warning"){
        console.log('Warning');
        headerText.innerHTML = "Error";
        IconToast.style.background = "#D32F2F";
        TToast.style.borderLeft = "4px solid #D32F2F";
        bYes.style.background = "#D32F2F";
    }
    else if (Type == "complete"){
        console.log('Complete');
        headerText.innerHTML = "Exito";
        IconToast.style.background = "#388E3C";
        TToast.style.borderLeft = "4px solid #388E3C";
        bYes.style.background = "#388E3C";
    }
    else{
        console.log('Not Type Select');
    }



    var ObjOn = document.getElementById('TToast');
    var LabelOn = document.getElementById('MsjBox');
    
    State = true; 
    setTimeout(() => {
        IconToast.style.opacity = 100;
    }, 400);

    LabelOn.innerHTML = MText;
    

    ObjOn.style.opacity = "100";
    ObjOn.style.width = "350px";
    ObjOn.style.padding= "30px";
    LabelOn.style.opacity = "100";

    console.log(ObjOn);

    // if(State == true){
    //     setTimeout(() => {
    //         Obj.style.opacity = "0";
    //         State = false;
    //         console.log("TrueToast - Status: " + State);
    //         setTimeout(() => {
    //             Obj.style.width = "0px";
    //             Obj.style.padding= "0px";        
    //         }, 300);
    //     }, 5000);
    // }
}
