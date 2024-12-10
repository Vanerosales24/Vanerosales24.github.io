var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Informatica Administrativa')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si crees que puedes, ya estas a mitad del    ')
    .pauseFor(2500)
    //Caracteres que se borraran//
    .deleteChars(3)
    .typeString('<strong>Camino</strong>')
    .pauseFor(2500)
    .start();