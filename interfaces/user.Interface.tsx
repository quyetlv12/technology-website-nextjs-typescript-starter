export interface UserLoginInterface {
    email : string ;
    password : string;
}
export interface UserSignUpInterface extends UserLoginInterface {
    username : string ;
    repassword : string;
}
export interface userInterface extends UserLoginInterface {
    image : string ; 
    role :  string ; 
}