// models/cardio.js

module.exports = (sequelize, DataTypes) => {
    const Cardio = sequelize.define('Cardio', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    Cardio.associate = (models) => {
      // Define associations here (if any)
    };
  
    return Cardio;
  };
  