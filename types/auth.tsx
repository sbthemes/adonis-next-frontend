export interface IAuthForgotPassword {
    email: string;
}

export interface IAuthResetPassword {
    password: string;
    password_confirmation: string;
}

export interface IAuthLogin {
    email: string;
    password: string;
}

export interface IAuthRegister {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
