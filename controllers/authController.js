module.exports = {
    register : async (req, res) => {
        try {

            const {name, password, email} = req.body

            if([name,email,password].includes('' || null)){
                let error = new Error('todos los campos son obligatorio');
                error.status = 400;
                throw error
            }

            return res.status(201).json({
                ok : true,
                msg : 'usuario registrado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
        
    },
    login : async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'usuario lougeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
        
    },
    checked : async (req, res) => {
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
    sendToken : async (req, res) => {
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