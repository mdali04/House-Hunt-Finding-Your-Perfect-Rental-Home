import { ValidationChain,validationResult,body,param } from "express-validator";
import { Request,Response,NextFunction } from "express";


export const Register = [
    body('name').notEmpty().withMessage('Name is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('profile').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Profile is required');
        }
        return true;
    }),
];




export const Login = [
    body('email').isEmail().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
];



export const Update = [
    // all are optional
    body('name').optional(),
    body('address').optional(),
    body('email').optional(),
    body('phone').optional(),
    body('password').optional(),
    body('profile').optional(),

];


const validate = (validations) =>{
    return async(req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
        }
        const errors = validationResult(req);
        let messages;
        if (errors.isEmpty()) {
            return next();
        }else{
            // loop the message
            for (let i = 0; i < errors.array().length; i++) {
                messages = errors.array()[i].msg;
            }
            return res.status(400).json({message: messages});

        }
    }
};


export default validate;