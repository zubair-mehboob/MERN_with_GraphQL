import {DataSource} from 'typeorm'
import { Users } from './Entities/Users'
const initDB = async () => {
    const AppDataSource = new DataSource({
        type: "mysql",
        port: 3306,
        username: "root",
        password: "P@ssw0rd",
        database: "GraphqlCRUD",
        synchronize:false,
        logging:true,
        entities:[Users]
    })
    
    AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err:any) => {
            console.error("Error during Data Source initialization", err)
        })
        return AppDataSource
 }

 export const AppDataSource = initDB();
 