
const mysql = require("mysql")

const Promise = require("bluebird")
Promise.promisifyAll(require("mysql/lib/Connection").prototype)

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "web"
}

const addMsg = async (chat) => {
    const connection = mysql.createConnection(dbinfo)
    await connection.connectAsync()

    let sql = ` INSERT INTO MESSAGE (MSG) VALUES (?)`

    await connection.queryAsync(sql, [chat])


    await connection.endAsync()
}

const selectAllMessage = async () => {

    const connection = mysql.createConnection(dbinfo)
    await connection.connectAsync()

    let sql = `SELECT * FROM MESSAGE`

    const list = await connection.queryAsync(sql)
    await connection.endAsync()

    console.log(list)


    return list

}

module.exports = { addMsg, selectAllMessage }



