const Sequelize = require('sequelize')
const data = require('./startData')

const conn = new Sequelize('postgres://localhost:5432/book_marks', {logging: false})

const Book_mark = conn.define("book_mark", {
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    category: Sequelize.STRING
})

const syncAndSeed = async () => {
    await conn.sync({force: true})
    const test = await Book_mark.bulkCreate(data);
    console.log(test)
    console.log('Data inserted')
}


module.exports = {conn, syncAndSeed, models: { Book_mark }}