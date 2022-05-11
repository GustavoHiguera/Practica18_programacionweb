let express= require('express');
//Se inyecta la dependencia del express

let app = express();
//app que hace la función del servidor

let personsRoute = require('./routes/person');
//se incluye el router que viene de persons
//Debe ser exactamente la ruta en la que se encuentra person.

app.set('view engine', 'ejs'); //marcamos como view engine a ejs.
app.use(personsRoute); //usamos en el servidor a la ruta de persons.
app.use('/assets', express.static(__dirname + '/public')); //especificamos el directorio.

let PORT = process.env.PORT || 3000;
//se define el puerto de escucha, en el caso de process.env.PORT es si se le define algún puerto por node, si no,
//se le definirá el 3000.

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});

//en esta practica también se uso Postman, el cual es una herramienta que nos permite
//verificar el contenido de backend en la práctica, sin todo el frontend del navegador.

//Es importante mencionar que ahora se debe levantar el server desde la carpeta src, ya que ahí es donde se encuentra
//el servidor.