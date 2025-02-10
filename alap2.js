let sz=""
let szamlalo=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
        sz+=` 
        <img 
            id="${szamlalo}"                 onmouseover="szegelyRajzol(this.id)" 
            onmouseleave="szegelyLevesz(this.id)" onclick="nagyit(this.id)" 
            src="a${szamlalo}.jpg" alt="" style="width:100px;margin:5px;border:2px solid white">`
        szamlalo++
    }
    sz+=`<br>`
}
document.getElementById("kepekHelye").innerHTML=sz

let Megoldas=""
let akutalisSorszam=-1
let elozo=-1
let helyess=0
let osszes=0

function nagyit(id){
    // alert(id)
    akutalisSorszam=id
    if (elozo!=-1){
        document.getElementById(elozo).style.filter="invert(0%)"
        document.getElementById(elozo).style.border="3px solid green"
    }
    
    document.getElementById(id).style.filter="invert(100%)"
    elozo=id;
    document.getElementById("nagyKep").innerHTML=`
    <img src="a${id}.jpg" alt="" style="width:640px">`


//Tomböl ki szedni az adatokat 
//Bekeverni 
//Gombra rá tenni
Megoldas=nevekTomb[id].Megoldas
let keveres = []
keveres.push(nevekTomb[id].Megoldas)
keveres.push(nevekTomb[id].Tipp1)
keveres.push(nevekTomb[id].Tipp2)
keveres.push(nevekTomb[id].Tipp3)
console.log(keveres)

for (let i = 0; i < 100; i++) {
    let rSzam1= Math.floor(Math.random() *4)
    let rSzam2= Math.floor(Math.random() *4)
    let csere=keveres[rSzam1]
    keveres[rSzam1]=keveres[rSzam2]
    keveres[rSzam2]=csere
    
    





    }
console.log(keveres)
    document.getElementById("ki").innerHTML=`Ki ez a híres személyiség?<br>
        <button onclick="gombKattint('${keveres[0]}')">${(keveres[0])}</button>
        <button onclick="gombKattint('${keveres[1]}')">${(keveres[1])}</button>
        <button onclick="gombKattint('${keveres[2]}')">${(keveres[2])}</button>
        <button onclick="gombKattint('${keveres[3]}')">${(keveres[3])}</button>
    `
}

function szegelyRajzol(id){
    document.getElementById(id).style.border="2px solid blue"
}

function szegelyLevesz(id){
    document.getElementById(id).style.border="3px solid green"
}
function gombKattint(aktualisFelirat){
    // alert(aktualisFelirat)
    osszes++
    if (Megoldas==aktualisFelirat)
    {
        helyess++;
        alert("Sikeres volt a tipp!")
        if(akutalisSorszam==nevekTomb.length-1){
            akutalisSorszam=0

        }else
        {
            akutalisSorszam++
        }
    nagyit(akutalisSorszam)    
    }else
    {
        alert("Helytelen volt a tipp... Próbálkozz újra!")
    }
    document.getElementById("pontHelye").innerHTML=`Pontok: ${helyess} / ${osszes} |${Math.round(100*helyess/osszes,0)}%`

}