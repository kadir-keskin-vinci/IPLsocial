import { PasswordChecker } from "./passwordChecker";


describe("PasswordCheck", () =>{
    let passwordChecker = new PasswordChecker();
    describe("verif method", () =>{

        it("shoul return false when given nothing", () => {
          

        let actual = passwordChecker.verif("");

        expect(actual).toBe(false);
        })

        it("should return false when given 3 char", ()=>{
        

        let actual = passwordChecker.verif("lol");

        expect(actual).toBe(false);
        })
        
        it("should return true when given >= 8 chars", () =>{
            

        let actual = passwordChecker.verif("lolololololo");

        expect(actual).toBe(true);
        })
    })
})