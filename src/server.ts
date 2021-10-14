import { app } from "./app";

const PORT = 4000;

const server = 
    app.listen(PORT, () => console.log(`Listen port ${PORT}`));

    process.on('SIGINT', () => {
        server.close();
        console.log("App finished")
    })