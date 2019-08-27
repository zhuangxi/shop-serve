const userModel = require('../models/userModel')
const userMethods = {
     getUserById: async function(ctx) {
        let id = ctx.params.id
        let user = await userModel.getUserById(id)
        if (user) {
            ctx.body = {
                success: true,
                retDsc: '查询成功',
                ret: user
            }
        } else {
            ctx.body = {
                success: false,
                retDsc: '用户不存在',
                ret: null
            }
        }
    }
}

module.exports = userMethods