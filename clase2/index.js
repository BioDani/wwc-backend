const http = require("http");
const { url } = require("inspector");

//variable donde se alberga la app
const HOST = "localhost";
const PORT  = 8000;

const writeHTMLResponse = (res, htmlCode) =>{
    res.setHeader("Content-type","text/html");
    res.writeHead(200);
    res.end(htmlCode);
};

const server = http.createServer(
    (req, res) => {
        const url = req.url;
        console.log(`URL es ${url}`);

    if (url === "/other"){
        writeHTMLResponse(res,"<p>Ruta asociada a other</p>");
    }else{
        writeHTMLResponse(res,"<p>Ruta por defecto</p>");
    };
});

server.listen(PORT,HOST,() =>{
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
})