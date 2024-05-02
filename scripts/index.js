
class Activity{
    constructor({Id, Title, Description, imgUrl}){
        this.Id=Id;
        this.Title=Title;
        this.Description=Description
        this.imgUrl=imgUrl
    }
}
class Repository{
    constructor(){
        this.activities=[]
        this.id=0
    }
    getAllActivities(){
        return this.activities
    }
    createActivity(obj){
        this.id++
        let actividad=new Activity({Id:this.id, ...obj});
        this.activities.push(actividad)
    }
    deleteActivity(id){
        let filtered=activities.filter(act=>act.id != id)
        return filtered
    }

}
let repositorio=new Repository()


//recibe activity
function creaHtml (activitie){
    let {Id,Title,Description,imgUrl}=activitie
    // creo los Elementos
    const cont= document.createElement("div");
    const contTilte= document.createElement("h4");
    contTilte.innerText=Title
    const contDesc= document.createElement("p");
    contDesc.innerText=Description
    const contImg= document.createElement("img");
    contImg.src=imgUrl
   // defino clases
    cont.className="ContHobbies"
    contImg.className="HobbiesImg"
    contTilte.className="HobbiesTitle"
    contDesc.className="HobbiesDesc"
    // inserto todo al div
    cont.appendChild(contTilte);
    cont.appendChild(contDesc);
    cont.appendChild(contImg);
    //retorno div
    return cont
}

function actividadHTML(){
    //selecciono contenedor general
    const arti= document.querySelector("#HobbiesGeneralContainer");
   //listado de todas las actividades
   arti.innerHTML="";
   let lista=repositorio.getAllActivities()
   //mapeo de todos lis elementos
   let resultadoHTML= lista.map( (element)=> creaHtml(element) )
   //append todos los elementos html a un contenedor
   resultadoHTML.forEach((element)=> arti.appendChild(element) )
}




const submit=document.querySelector("#boton")

submit.addEventListener("click",function handler(event){
    event.preventDefault()
    let Title= document.getElementById("titulo").value
    let Description= document.getElementById("hobbieDesc").value
    let imgUrl= document.getElementById("urlImg").value
    let actividad= {Title,
    Description,
    imgUrl
    }
    if (!Title || !Description || !imgUrl) {
    alert("Falta información")
        return}
    console.log(actividad)
    repositorio.createActivity(actividad);
    console.log(repositorio)
    actividadHTML(creaHtml(actividad));
    Title.innerText="";
    Description.innerText="";
    imgUrl.innerText="";

})