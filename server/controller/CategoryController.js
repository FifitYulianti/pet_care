const {User, Booking, Category, Transaction} = require('../models')

class CategoryController{

    static getCategory(req, res, next){
        Category.findAll()
        .then(data =>{
            res.status(200).json({
                categories: data
            })
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }
    static getOneCategory(req, res, next){
        let id = +req.params.id
        Category.findByPk(id)
        .then((data) =>{
            if(data === null){
                res.status(404).json({
                    message : `Data Category dengan id ${id} tidak ditemukan`
                })
            }else{
                res.status(200).json({
                    category: data
                })
            }
        })
        .catch(err =>{
            next(err)
        })
    }
}
module.exports = CategoryController