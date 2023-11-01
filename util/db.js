const Sequelize = require('sequelize')

const sequelize = new Sequelize('expense-tracker' , 'root' ,'Lakshmi@2002',{
    dialect :"mysql",
    host : "localhost"
})

module.exports = sequelize