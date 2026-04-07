import * as zod from "zod";
export const signInSchema = zod.object({
 email: zod.email().nonempty(),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").nonempty(),

})
export  type SignInDataType = zod.infer<typeof signInSchema>
