
const { BasketDevice, Device } = require("../models/models")

const ApiError = require("../error/ApiError")

class BasketController{
    async create(req, res, next){
        const {basketId, deviceId}=req.body
        const item=await BasketDevice.create({basketId,deviceId})
        return res.json(item)
    }
    async delete(req, res, next){
        const {id}=req.params
        const row =await BasketDevice.findOne({where: {id}})
        if(row){
            await row.destroy()
        }
        return res.json(row)
        
    }
    async getAll(req, res, next){
        const {userId}=req.body
        const items = await BasketDevice.findAndCountAll({
            where:userId
        })
        return res.json(items)
    }
   
}

module.exports=new BasketController()