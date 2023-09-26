
import { connect, ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const MongoConnect = async () => {
    try {
        console.log("conectando ao mongoDB... ")
        await connect(process.env.MONGO_URL! as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions)
        console.log('MongoDb conectado com sucesso!')
    }
    catch(error) {
        console.log("erro conexão mongoDB: ", error)
    }
}

   