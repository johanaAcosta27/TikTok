//odm seguridad de bd
import mongoose from 'mongoose';

const TiktokSchema = new mongoose.Schema({ // siempre en singular
    author: {
        type: Object, //odm no permite otro tipo de dato
        required: [true, 'Por favor ingrese autor'],
       avatar: {
           type: String,
           required: [false]
        },
        name:{
            type: String,
            required: [false]
        },
        username:{
            type: String,
            required: [false]
        },
    },
    description: {
        type: String, //odm no permite otro tipo de dato
        required: [false]
    },
    tags: {
        type: Array, //odm no permite otro tipo de dato
        required: [false], 
    },
    songName: {
        type: String,
        required: [false], 
    },
    videoUrl:{
        type: String,
        required: [false],    
    },
    likes:{
        type: Number,
        required: [false], 
    },
    comments: {
        type: Number, 
        required: [false], 
    },
    replies: {
        type: Number,
        required: [false], 
    }
})
//si ya existe el modelo en mongosse, si no existe lo crea
export default mongoose.models.Tiktok || mongoose.model('Tiktok', TiktokSchema) //M en singular siempre