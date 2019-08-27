const config = {
    database: 'shop',
    username: 'root',
    password: 'root',
    port: '3306',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        //是否冻结表名,最好设置为true，要不sequelize会自动给表名加上复数s造成查询数据失败。
        freezeTableName: true,
        // 是否为表添加 createdAt 和 updatedAt 字段
        // createdAt 记录表的创建时间
        // updatedAt 记录字段更新时间
        timestamps: false,
        // 是否为表添加 deletedAt 字段
        // deletedAt字段
        paranoid: false,
        //是否开启op
        operatorsAliases: false
    },
    // 时区
    timezone: '+08:00',
    operatorsAliases: false
}

module.exports = config