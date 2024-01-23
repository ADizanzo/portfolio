let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}



// //Función para descargar CV
// function PDF() {
//     // Crea un nuevo objeto jsPDF
//     const doc = new jsPDF();

//     // Añade el contenido que deseas al PDF
//     doc.text("Curriculum Vitae", 20, 10);

//     // Guarda el PDF con un nombre específico, por ejemplo, "CV.pdf"
//     doc.save("CV.pdf");
// }

// // Agrega un event listener al botón para llamar a la función PDF() cuando se haga clic
// document.getElementById("descargarCV").addEventListener("click", PDF);




function PDF(){
    const e = document.querySelector(".container");

    e.style.maxWidth = "700px";
    
    const opt = {
        filename: 'resume.pdf',
        image: {
            type: "jpg",
            quality: 0.99
        },
        margin: 0,
        jsPDF: {
            unit: "pt",
            format: "letter",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ["avoid-all", "css", "legacy"]
        }
    }; 

    setTimeout(() => {e.style.maxWidth = "1400px";}, 2000);
}





//Función que aplica las animaciones de las hablididades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html-css");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


