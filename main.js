// console.log("Hola Mundo! desde la cosola");
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('María Itzel Chávez Herrera')
    .pauseFor(2500)
    .deleteAll()
    /*.typeString('Strings can be removed')
    .pauseFor(2500)*/
    .deleteChars(7)
    /*.typeString('<strong>altered!</strong>')
    .pauseFor(2500)*/
    .start();
