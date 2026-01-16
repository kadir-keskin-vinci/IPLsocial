import { PasswordChecker } from "./passwordChecker";

describe("PasswordCheck", () =>{
   
    describe("verif method", () =>{
        it("should return false when given < 8", () =>{
            const passwordChecker = new PasswordChecker();
            const actual = passwordChecker.verif("lol");
            expect(actual).toBe(false);
        })
      
    })
})