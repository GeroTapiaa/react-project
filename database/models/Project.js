const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim : true,
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    dataExpire : {
        type : Date,
        default : Date.now(),
    },
    client : {
        type : String,
        required : true,
        trim : true
    },
    createBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        
    },
    collaborators : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ]
    
},{
    timestamps : true,
});

projectSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await hash(this.password , 10)
});

projectSchema.methods.checkedPassword = async function(password){
    return await compare(password, this.password);
};

module.exports = mongoose.model('Project', projectSchema)
