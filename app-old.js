const http = require("http");

http
  .createServer((req, res) => {
    //con writehead podremos enviar tanto el status de la respuesta como el tipo de contenido en ella, en este caso se especifica que el contenido es application/json

    // res.writeHead(200, { "Content-Type": "application/json" });

    // con el Content-Disposition podremos colocar un attachment y especificamos el nombre del archivo el cual se va a descargar y su tipo

    // res.setHeader("Content-Disposition", " attachment; filename= lista.csv");

    // res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("hola mundo");
    // res.write("id, victor\n");
    // res.write("id, Maria\n");
    // res.write("id, Andres\n");
    // res.write("id, Jorge\n");
    res.end();
  })

  .listen(8080);

console.log("escuchando el puerto", 8080);
