import * as zod from "zod";
export const signUpSchema = zod.object({
    name: zod.string().min(3, "minimum 3 characters ").max(25, "maximum 25 characters").nonempty("Must be filled"),
    email: zod.email().nonempty(),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").nonempty(),
    rePassword: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character").nonempty(),
    phone: zod.string().nonempty().regex(/^(\+20|0)?1[0-2|5|0-9]{1}[0-9]{8}$/, "Must enter an Egyptian number")

}).refine(function (params) {
    return params.password === params.rePassword

}, { error: "Password and Repassword must match" })

export  type SignUpDataType = zod.infer<typeof signUpSchema>
