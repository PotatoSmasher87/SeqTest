const Sequelize = require('sequelize');
const {DataTypes} = Sequelize

const sequelize = new Sequelize('sequelizev', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    // define:{
    //     freezeTableName: true
    // }
  });

//   sequelize.authenticate().then(()=>{
//     console.log("Conexion exitosa!")
//   }).catch((err)=> {
//     console.log("Error estableciendo conexion con la base de datos!")
//   });


const User = sequelize.define('user', {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21
    }
},
{
    freezeTableName: true,
    timestamps: false
});

// Sequelize.drop({ match: /_test$/});
// User.drop();

// User.sync({ alter: true }).then((data)=> {
//     const user = User.build({username:'juan', password:'123',age: '25'});
//     console.log(user.username);
//     return user.save();
// }).then((data)=>{
//     console.log('Usuario agregado a la base');
// }).catch((err)=>{
//     console.log(err)
// });

User.sync({ alter: true }).then((data)=> {

    return User.create({
        username:'juanito', 
        password:'123',
        age: '25'
    });
}).then((data)=>{
    console.log(data.toJSON())
    console.log('Usuario agregado a la base');
}).catch((err)=>{
    console.log(err)
});