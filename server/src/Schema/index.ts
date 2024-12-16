
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
const query = new GraphQLObjectType({
    name:'query',
    fields:{
        getAllUsers: GET_ALL_USERS
    }
})
const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        createUsers: CREATE_USER,
        updateUser: UPDATE_USER,
        deleteUser:DELETE_USER
    }
})
export const schema = new GraphQLSchema({
   query,
   mutation
    
})