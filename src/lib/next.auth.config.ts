import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const nextAuthConfig:NextAuthOptions={
    providers:[
        Credentials({

            name:"fresh-Cart",
            credentials:{
                email:{placeholder:"Enter email"},
                password:{type:"password"}
            },
            
            async authorize(credentials):Promise<any> {

          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                method: "POST",
                body:JSON.stringify(credentials),
                headers: {
            "Content-Type": "application/json"
                },
        })
        console.log("resssss is sssss",res)
        const finalResp=  await res.json()
        console.log("finalresp from authorizeed",finalResp)

        if(finalResp.message === "success"){
            return{
             
                name:finalResp.user.name,
                email:finalResp.user.email,
                realTokenFromBackEnd:finalResp.token as string
            }
            
        }
    
            },


        })
    ],


    callbacks:{
        jwt(params) {
            if(params.user){
                 params.token.realTokenFromBackEnd=params.user.realTokenFromBackEnd
            }
            console.log("params from jwst",params)
           
            return params.token
        },

        session(params) {
            console.log("session params",params)
            return params.session
        },
    },

    session:{
        maxAge:60*60*24

    },


    pages:{
        signIn:"/login"
    },
  
    

}