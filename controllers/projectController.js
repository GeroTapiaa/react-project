module.exports = {
    list : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'lista de proyectos'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
store : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'proyecto guardado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
detail : async (req, res) => {
    try {
        return res.status(200).json({
            ok : true,
            msg : 'detalle del proyecto'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
update : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'proyecto actualizado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
remove : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'proyecto eliminado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
addColaborator : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'colaborador agregado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok :  false,
            msg : error.message || 'ups, hubo un error'
        })
    }
    
},
removeColaborator : async (req, res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg : 'colaborador eliminado'
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
