const Mysql = require('../db/mysql')
const userSchema = require('../schema/shop_user')

const User = Mysql.import('../schema/shop_user')

const userModel = {
    getUserById: async function (id) {
        return await User.findOne({
            where: {
                id
            }
        })
    },
    getUserByName: async function (username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }
}

module.exports = userModel