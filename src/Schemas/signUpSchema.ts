import {z} from 'zod';

export const usernameValidation = z
.string()
.min(2,"username must be atleat 2 characters long")
.max(20,"username must be atmost 20 characters long")
.regex(/^[a-zA-Z0-9_]+$/,"username can only contain letters, numbers and underscores")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email("Invalid email address"),
    password:z.string().min(8,"Password must be atleat 8 characters long").max(32,"Password must be atmost 32 characters long")
})