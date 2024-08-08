let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    hobbies: ["leer", "correr", "programar"]
};

function imprimirInformacion(persona) {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Profesión: ${persona.profesion}`);
    console.log(`Hobbies: ${persona.hobbies.join(", ")}`);
}

imprimirInformacion(persona);

let personas = [
    { nombre: "Ana", edad: 25, profesion: "Doctora", hobbies: ["cantar", "bailar"] },
    { nombre: "Luis", edad: 22, profesion: "Estudiante", hobbies: ["jugar fútbol", "leer"] },
    { nombre: "Carlos", edad: 35, profesion: "Profesor", hobbies: ["pescar", "ver películas"] }
];


function agregarPersona(persona) {
    personas.push(persona);
}

agregarPersona({ nombre: "Laura", edad: 28, profesion: "Arquitecta", hobbies: ["dibujar", "viajar"] });

function buscarPersonaPorNombre(nombre) {
    return personas.find(persona => persona.nombre === nombre);
}

let personaBuscada = buscarPersonaPorNombre("Ana");
if (personaBuscada) {
    console.log("Persona encontrada:");
    imprimirInformacion(personaBuscada);
} else {
    console.log("Persona no encontrada.");
}

function filtrarPersonasPorEdad(edadMinima) {
    return personas.filter(persona => persona.edad > edadMinima);
}

let personasMayores = filtrarPersonasPorEdad(25);
console.log("Personas mayores de 25 años:");
personasMayores.forEach(imprimirInformacion);

function obtenerProfesiones() {
    return personas.map(persona => persona.profesion);
}

let profesiones = obtenerProfesiones();
console.log("Profesiones:");
console.log(profesiones.join(", "));
