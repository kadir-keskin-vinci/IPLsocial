export class PasswordChecker{
    verif(input:string): boolean{
        if(input.length < 8) return false;
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(input)) return false;
        if(!/[0-9]/.test(input)) return false;
        if(input.toLowerCase().includes('ipl')) return false;
    

        return true;
       
    }
}