/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_user', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'shop_user'
  });
};
