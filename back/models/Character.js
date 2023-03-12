const {DataTypes} = require('sequelize');

module.exports = (db)=>{
    db.define('Character', {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoincrement: true,

        },

        name:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        
        specie:{
            type: DataTypes.STRING,
            allowNull:false,   
           },

        gender:{
         type: DataTypes.STRING,
         allowNull:false,

        },

        origin:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false,
        }

    })
}