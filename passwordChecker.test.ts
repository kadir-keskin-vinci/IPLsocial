import { PasswordChecker } from "./passwordChecker";

describe("PasswordCheck", () =>{
    
    describe("verif method", () =>{
        const passwordChecker = new PasswordChecker();
        it("should return false when given < 8", () =>{
            
            const actual = passwordChecker.verif("lol");
            expect(actual).toBe(false);
        })

        it("should return false when given  don't contains special char", () =>{
            
            const actual = passwordChecker.verif("loloooooooo");
            expect(actual).toBe(false);
        })
      
    })
})