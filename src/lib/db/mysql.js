import mysql from 'mysql2/promise';
import { listarProductosDB, crearProductoDB } from './db-manager';
import { hostDB, portDB, nameDB, passwordDB, userDB } from '$lib/contants';

let connection = null;
const getMysqlConnection = async () => {
  try {
    if (connection == null) {
      connection = await createNewMysqlConnection()
    }
  } catch (err) {
    console.log('error al conectar a la base de datos', err)
    connection = null;
  }
}


const createNewMysqlConnection = async () => {
  const connectToDB = await mysql.createConnection({
    host: hostDB,
    port: portDB,
    user: userDB,
    password: passwordDB,
    database: nameDB
  });

  return connectToDB
}

await getMysqlConnection()

export const listarProductos = async () => await listarProductosDB(connection)
  .catch(async (err)=> {
    console.log('error al listar productos', err)
    connection = null
    await getMysqlConnection()
  })
export const crearProducto = async (producto, cantidad) => await crearProductoDB(producto, cantidad, connection)
  .catch(async (err)=> {
    console.log('error al crear producto', err)
    connection = null
    await getMysqlConnection()
  })
