import { decode } from 'next-auth/jwt'
import { cookies } from 'next/headers'

export default async function getMyTokens() {

  const myCookies = await cookies()

      const TokenFromCookies =  myCookies.get("next-auth.session-token" )?.value
  
  console.log("TokenFromCookies",TokenFromCookies)

  const decodeToken = await decode({token:TokenFromCookies , secret:process.env.NEXTAUTH_SECRET!})
  
  console.log("decodeToken issss ",decodeToken)


  return decodeToken.realTokenFromBackEnd
}
