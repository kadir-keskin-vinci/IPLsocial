export class PasswordChecker{
    verif(input:string): boolean{
        if(this.notValid(input)) return false;
       
    

        return true;
       
    }

    private notValid(input: string) {
        return input.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(input) || !/[0-9]/.test(input) || input.toLowerCase().includes('ipl');
    }
}