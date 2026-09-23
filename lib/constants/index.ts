export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Next 15 Auth';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION ||'Next Auth 15';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';


export const signInDefaultValues = {
    email: "",
    password: "",
};


  export const signUpDefaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};