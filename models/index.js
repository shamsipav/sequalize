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

// Календарь приёма
const Calendar = sequelize.define("Calendar", {
    educationForm: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    acceptDates: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    examDates: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ordersDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    educationBasis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// (?) Станьте ценным специалистом современной компании...
const Education = sequelize.define("Education", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    features: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// (?) Алгоритм поступления
const Algorithm = sequelize.define("Algorithm", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documentsWays: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documentsPacket: {
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
    minSalary: {
        type: DataTypes.DECIMAL(10, 2),
    },
    functions: {
        type: DataTypes.STRING,
    },
});

// Студенческие возможности | Не знаю, нужно ли добавлять свойство для иконки
const Possibility = sequelize.define("Possibility", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
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

// Общежития
const Dormitory = sequelize.define("Dormitory", {
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// (?) Ответственный за поселение
const Responsible = sequelize.define("Responsible", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    auditory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Ответственные лица института
const InstitutePerson = sequelize.define("InstitutePerson", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
});
