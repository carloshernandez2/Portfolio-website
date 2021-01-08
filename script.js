// lorem ipsum
const sobremi = "Aenean egestas tincidunt libero, eget blandit est consectetur eget. Duis sodales sed lectus sed iaculis. Aenean posuere turpis ac enim congue luctus. Mauris id auctor arcu, a viverra risus. Sed quis libero turpis. Vivamus fermentum consequat turpis, ac vulputate lacus mattis quis. Duis aliquam vel quam sit amet auctor. Integer tincidunt dui ac massa gravida tempus. Aliquam dictum magna quis lobortis viverra.";
const proyecto1 = "Pellentesque egestas odio et ultrices volutpat. Mauris efficitur, lacus id vulputate placerat, magna urna venenatis elit, et feugiat leo quam non orci. Etiam ut urna at magna vestibulum pulvinar nec in nulla. Suspendisse malesuada gravida consequat. Aenean eu fringilla quam. Vestibulum mauris enim, semper non gravida non, egestas at nisi. Morbi ut ultrices nibh, sed faucibus risus. Proin at tellus et erat blandit egestas a ac orci. Aliquam et volutpat justo. Vestibulum porttitor ex quis leo commodo dignissim. Pellentesque ac nunc at tortor sodales condimentum. Nulla nisi nisl, sollicitudin in varius quis, auctor id enim. Integer iaculis quam leo, eget vehicula nibh efficitur quis.";
const proyecto2 = "In massa arcu, facilisis a euismod dictum, commodo eu nulla. Fusce placerat porttitor justo, id accumsan ex placerat vel. Phasellus auctor hendrerit felis. Maecenas ultrices pulvinar ligula in vulputate. Pellentesque nec tellus eget felis auctor dictum quis nec nunc. Integer dignissim purus ex, ut porttitor risus semper non.";
const contactanos = "Quisque eleifend gravida vehicula. Morbi vehicula luctus dui. Maecenas laoreet cursus eros. Sed sagittis, risus feugiat mattis egestas, nisl odio ultricies risus, hendrerit venenatis massa augue nec tortor. Vestibulum eget enim sed risus malesuada vehicula. Aliquam vulputate pellentesque lorem pulvinar ullamcorper. Pellentesque ante sapien, fermentum et vulputate a, porttitor dictum metus. Cras quis efficitur arcu. Pellentesque in vulputate arcu, eu sagittis est. Integer faucibus velit eget velit ultrices consectetur.";
// handler function
const change = (evt) =>{
    let image = document.getElementById("image"); 
    let alt = document.getElementById("image"); 
    let paragraph = document.getElementById("paragraph");
    let header = document.getElementById("header");
    switch (evt.target.innerHTML) {
        case "Sobre mí":
            image.src = "./Images/anonymous.jpg";
            paragraph.innerHTML = sobremi;
            header.innerHTML = "Sobre mí";
            alt.alt = "mi imagen";
            return false;
        case "Proyecto 1":
            image.src = "./Images/AI.jpg";
            paragraph.innerHTML = proyecto1;
            header.innerHTML = "Proyecto 1";
            alt.alt = "mi primer proyecto";
            return false;
        case "Proyecto 2":
            image.src = "./Images/contactUsNow.jpg";
            paragraph.innerHTML = proyecto2;
            header.innerHTML = "Proyecto 2";
            alt.alt = "mi segundo proyecto";
            return false;
        case "Contáctame":
            image.src = "./Images/pryecto2.jpg";
            paragraph.innerHTML = contactanos;
            header.innerHTML = "contáctame";
            alt.alt = "datos de contacto";
            return false;
        default:
            return false;
    }
}
// adding event listeners
document.getElementById("links").onclick = change;
