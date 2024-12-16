import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

export const CREATE_USER = {
type: UserType,
args:{
    name:{type: GraphQLString},
            userName:{type: GraphQLString},
            password:{type: GraphQLString},
            
},
async resolve(parent:any, args: any){
    
    await Users.insert(args)
    return args
}
}

export const UPDATE_USER = {
    type: UserType,
    args:{
        id:{type: GraphQLID},
        name:{type: GraphQLString},
            userName:{type: GraphQLString},
            password:{type: GraphQLString},
    },
    async resolve(parent:any, args:any){
        const user = await Users.findOne({where:{id:args.id}})
        if(user){
            await Users.update({id:args?.id},{name:args?.name})
        }else{
            throw new Error("No user found with this id")
        }
        
    }
}

export const DELETE_USER = {type: UserType,
    args:{
        id:{type: GraphQLID},
        
    },
    async resolve(parent:any, args:any){
        const user = await Users.findOne({where:{id:args.id}})
        if(user){
            await Users.delete(args?.id)
        }else{
            throw new Error("No user found with this id")
        }
        
    }}