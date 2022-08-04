import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize("sequalize_edu_db", "root", "mysqlpassword", {
    host: "localhost",
    dialect: "mysql",
});

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export async function newUser() {
    await sequelize.sync();
    const user = await User.create({
        name: 'Paul',
        lastname: 'Shamsimukhametov',
        age: 21,
        email: 'shamsipav@gmail.com',
        password: 'uniqpasswd',
    });
    console.log(user instanceof User);
    console.log(user.id);
    console.log("User was saved to the database!");
    return user.toJSON();
}

export async function getUsers() {
    await sequelize.sync();
    const users = await User.findAll({ raw: true });
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
    return users;
}