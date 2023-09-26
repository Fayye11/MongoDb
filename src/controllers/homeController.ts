import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response)=>{

let users = await User.find({}).sort({age: 1, name: 1})


    res.render('pages/home', {
        users
    });
};
//CRIAR USUARIOS NOVOS
export const AddUserAction = async (req: Request, res: Response) => {
let {firstName, lastName, email, age, interest} = req.body
let UserNew = new User()
UserNew.name = {firstName, lastName}
UserNew.name.lastName = lastName
UserNew.email = email
UserNew.age = age
UserNew.interest = interest.split(',')



await UserNew.save()

res.redirect('/')

}
