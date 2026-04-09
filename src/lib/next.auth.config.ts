import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"
export const nextAuthConfig:NextAuthOptions={
    providers:[
        Credentials({

            name:"fresh-Cart",
            credentials:{
                email:{},
                password:{}
            },
            
            async authorize(credentials) {


      
          const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
            "Content-Type": "application/json  "
                }
        })
        const finalResp=  await res.json()

        if(finalResp.message =="success"){
            return{
                name:finalResp.user.name,
                email:finalResp.user.email,
                realTokenFromBackEnd:finalResp.token
            }
        }




                return null
                
            },


        })
    ],
    pages:{
        signIn:"/login"
    },
    

}