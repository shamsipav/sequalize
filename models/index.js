import {DataTypes} from "sequelize";

// 1 128 Бюджетных мест по программам..., 20 июня Начало приема документов...
const Feature = sequelize.define("Feature", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Кто такой и чем занимается инженер-конструктор?
const Specialist = sequelize.define("Specialist", {
    title: {
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
    functions: {
        type: DataTypes.STRING,
    },
});

// Отзывы выпускников
const Feedback = sequelize.define("Feedback", {
    graduate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Партнеры института
const Partners = sequelize.define("Partners", {
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Часто задаваемые вопросы
const Question = sequelize.define("Question", {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
