//se opto por el enfoque front-end
const contenedor = document.getElementById("personas");

fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => {
    const personas = data.results;

    personas.forEach(persona => {
      contenedor.innerHTML += `
        <div>
            <div class="content"><p class="name">Nombre: ${persona.name.title}. ${persona.name.first} ${persona.name.last}</p></div>
            <div class="content"><p class="gender">Genero: ${persona.gender}</p></div>
            <div class="content"> <p  class="location">Ubicación: ${persona.location.street.number} - ${persona.location.street.name} / ${persona.location.city} - ${persona.location.country}</p></div>
            <div class="content"><p  class="email">Email: ${persona.email}</p></div>
            <div class="content"><p  class="date">Fecha nacimiento: ${persona.dob.date} <span> (Edad: ${persona.dob.age})</span></p></div>
            <img class="img" src="${persona.picture.medium}" alt="Foto">
             
        </div>
        <hr>
      `;
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
//nombre, genero, ubicacion, email, fecha nacimiento, fotografia 
