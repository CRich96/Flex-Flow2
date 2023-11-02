// models/User.js
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bmi: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Log, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });

    User.hasMany(models.Cardio, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });

    User.hasMany(models.WeightTraining, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });
  };

  User.beforeCreate(async (user) => {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  });

  return User;
};
