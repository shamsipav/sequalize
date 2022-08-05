import {DataTypes} from "sequelize";

// 1 128 Бюджетных мест по программам..., 20 июня Начало приема документов...
const Feature = sequelize.define("Feature", {
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Кто такой и чем занимается инженер-конструктор?
const Specialist = sequelize.define("Specialist", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    minsalary: {
        type: DataTypes.DECIMAL(10, 2),
    },
});
Specialist.hasMany(SpecialistFunction);

const SpecialistFunction = sequelize.define("SpecialistFunction", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


