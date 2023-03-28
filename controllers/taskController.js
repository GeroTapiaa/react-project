module.exports = {
    list : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'lista de tareas'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
    store : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'tarea guardada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
    detail : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'detalle de tarea'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
    update : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'tarea actualizada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
    remove : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'tarea eliminada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
    changeState : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'tarea completada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok :  false,
                msg : error.message || 'ups, hubo un error'
            })
        }
    },
}