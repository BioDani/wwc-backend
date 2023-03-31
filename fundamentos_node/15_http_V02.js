// creación de servidor usando asyncawait

const http = require(`http`);

http.createServer(router).listen(3000);

async function router(req,res) {
    await console.log(`Nueva petición`);
    await console.log(req.url);
    await res.write(`Ya  tengo un nuevo servidor corrriendo V2.`);
    await res.end();//
};

