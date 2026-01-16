export class PasswordChecker{
    verif(input:string): boolean{
        if(input.length>= 8 ) return true;
        return false;
    }
}