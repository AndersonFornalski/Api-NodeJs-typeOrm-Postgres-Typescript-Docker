import { createConnection } from "typeorm";

export const connectServerDb = async () => {
    const connection = await createConnection();
    console.log(`App conected in database ${connection.options.database}`);

    process.on('SIGINT', () => {
        connection.close().then(() => console.log("Connection closed"));
    })
}