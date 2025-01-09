const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Restaurante = sequelize.define('Restaurante', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate:{
            notNull: {msg: "El ID es requerido"}
        }
    },

    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {msg: "El nombre es requerido"}
        }
    },

    tipo:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {msg: "El tipo es requerido"}
        }
    },

    horario:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {msg: "El horario es requerido"}
        }
    },

    imagen:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {msg: "La imagen es requerida"}
        }
    },

    reputacion:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notNull: {msg: "La reputacion es requerida"}
        }
    }
}
);

module.exports = Restaurante;