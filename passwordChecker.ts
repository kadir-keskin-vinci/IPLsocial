export class PasswordChecker{
    verif(input:string): boolean{
        if(input.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(input) || !/[0-9]/.test(input) || input.toLowerCase().includes('ipl')) return false;
       
    

        return true;
       
    }
}