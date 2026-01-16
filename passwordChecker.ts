export class PasswordChecker{
    verif(input:string): boolean{
        if(input.length < 8) return false;
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(input)) return false;
    

        return true;
       
    }
}