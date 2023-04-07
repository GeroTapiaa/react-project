const createError = require('http-errors');
const errorResponse = require('../helpers/errorResponse');
const User = require('../database/models/User');
const generateToken = require('../helpers/generateToken')
const generateJWT = require('../helpers/generateJWT');
const nodemailer = require('nodemailer')
module.exports = {
    register : async (req, res) => {
        try {

            const {name, password, email} = req.body
            //verificar que los campos requeridos no vengan vacios o nulos.
            if([name,email,password].includes('' || null)){
                throw  createError(400, 'todos los campos son obligatorio');
                    
            }
            let user = await User.findOne({email});
            if(user){
                throw  createError(400, 'el email ya esta registrado');
            };
            
            user = new User(req.body)
            user.token = generateToken();

            const userStore = await user.save()

            //TODO: enviar el email de confirmacion

            return res.status(201).json({
                ok : true,
                msg : 'usuario registrado',
                data : userStore
            })
        } catch (error) {
            
            return errorResponse(res, error , 'register')
        }
        
    },
    login : async (req, res) => {
        const {email, password} = req.body

        
        try {

            if ([email, password].includes('' || null)) {
                throw createError(400, 'Todos los campos son obligatorios');
            };
            let user = await User.findOne({email});

            if(!user){
                throw createError(403, 'Credenciales invalidas');
            };
            if(!user.checked){
                throw createError(403, 'tu cuenta no ha sido confirmada');
            };

            if(!await user.checkedPassword(password)){
                throw createError(403, 'credenciales invalidas');
            }

            return res.status(200).json({
                ok : true,
                msg : 'usuario lougeado',
                user : {
                    nombre : user.email,
                    email : user.email,
                    token : generateJWT({
                        id : user._id
                    })
                }
            })
        } catch (error) {
            return errorResponse(res, error , 'login')
        }
        
    },
    checked : async (req, res) => {

        const {token} = req.query
        try {
            //si no existe el token
            if(!token){
                throw createError(400, 'Token Requerido');
            };

            //si el token existe, se busca un usuario en la BD
            const user = await User.findOne({
                token
            })
            //si el token no coincide con el del usuario
            if(!user){
                throw createError(400, 'token invalido');
            };

            //si el token coincide con el del usuario la propiedad checked pasa a ser true
            user.checked = true;
            user.token = "";
            await user.save()
            return res.status(201).json({
                ok : true,
                msg : 'Registro completado exitosamente'
            })
        } catch (error) {
            return errorResponse(res, error , 'checked')
        }
        
    },
    sendToken : async (req, res) => {

        const {email} = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if(!user){
                throw createError(400, 'El email no se encuentra registrado');
            };
            user.token = generateToken()
            await user.save();

            //TODO: enviar email para restablecer la contraseña.


            const transporter = nodemailer
            

            return res.status(201).json({
                ok : true,
                msg : 'Token enviado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
        
    },
    verifyToken : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'usuario checkeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
        
    },
    changePassword : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'usuario checkeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
        
    }
     
}