import {expect} from "chai"
import chai from "chai";
import Mocha from "mocha";
import RegistrationForm from "../Regform";
import { names } from "../names";
//23 отрицательных тестов 
describe("Test Registration Form Tests", function registerUser() {
    it ("Test1 - Check if name is empty value", function(){
    let RegistrationForm1 = new RegistrationForm(' ','Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result, "Expected result - user is not registered if name is empty value").to.be.false
}) 
    it ("Test2 - Check if name is a number", function(){
    let RegistrationForm1 = new RegistrationForm(5,'Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result, "Expected result - user is not registered if name is а number").to.be.false
}) 
    it ("Test3 - Check if name is not in the List of names", function(){
    let RegistrationForm1 = new RegistrationForm("Oksana",'Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result,"Expected result - user is not registered if name is not in the List of names").to.be.false
})
    it ("Test4 - Check if name is undefind", function(){
    let RegistrationForm1 = new RegistrationForm(undefined,'Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result,"Expected result - user is not registered if name is undefined").to.be.false
})
    it ("Test5 - Check if surname is empty value", function(){
    let RegistrationForm1 = new RegistrationForm('Tom','', 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname is empty value").to.be.false
}) 
    it ("Test6 - Check if surname is a number", function(){
    let RegistrationForm1 = new RegistrationForm('Tom', 6 , 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname is a number").to.be.false
}) 
    it ("Test7 - Check if surname is not in the List of surnames", function(){
    let RegistrationForm1 = new RegistrationForm("Tom",'Black', 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result,"Expected result - user is not registered if surname not in the list of surnames").to.be.false
})
    it ("Test8 - Check if surname is undefind", function(){
    let RegistrationForm1 = new RegistrationForm('Tom',undefined, 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname is undefined").to.be.false
})
    it ("Test9 - Check if password is empty value", function(){
    let RegistrationForm1 = new RegistrationForm('Tom','Brown','')
    let result = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if password is empty value").to.be.false
}) 
    it ("Test10 - Check if password is a string", function(){
    let RegistrationForm1 = new RegistrationForm('Tom','Brown','123')
    let result = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if password is a string").to.be.false
}) 
    it ("Test11 - Check if password is not in the List of passwords", function(){
    let RegistrationForm1 = new RegistrationForm("Tom",'Brown', 1000)
    let result = RegistrationForm1.registerUserpassword()
    chai.expect(result,"Expected result - user is not registered if password is not from the List of passwords").to.be.false
})
    it ("Test12 - Check if password is undefind", function(){
    let RegistrationForm1 = new RegistrationForm('Tom','Brown', undefined)
    let result = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if pawssword is undefined").to.be.false
})
    it ("Test13 - Check if name and surname are not in the List", function(){
    let RegistrationForm1 = new RegistrationForm("Oksana",'Prohorenko','123')
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if name and surname are not in the List").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name and surname are not in the List").to.be.false
})
    it ("Test14 - Check if name, surname and password are not in the List", function(){
    let RegistrationForm1 = new RegistrationForm("Oksana",'Prohorenko','123777')
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password are not in the List").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name, surname and password are not in the List").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name, surname and password are not in the List").to.be.false
})
    it ("Test15 - Check if name, surname and password are empty values", function(){
    let RegistrationForm1 = new RegistrationForm('','','')
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password are empty values").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name, surname and password are empty values").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name, surname and password are empty values").to.be.false
})
    it ("Test16 - Check if name > 10 symbols", function(){
    let RegistrationForm1 = new RegistrationForm('KonstantinKorobchuk','Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result, "Expected result - user is not registered if name is > 10 symbols").to.be.false
})
    it ("Test17 - Check if surname > 10 symbols", function(){
    let RegistrationForm1 = new RegistrationForm('Tom',"LisayiDaniil", 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname is > 10 symbols").to.be.false
}) 
    it ("Test18 - Check if surname > 10 symbols and name > 10 symbols", function(){
    let RegistrationForm1 = new RegistrationForm('KonstantinKorobchuk',"LisayiDaniil", 123)
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if name and surname are > 10 symbols").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name and surname are > 10 symbols").to.be.false
})
it ("Test19 - Check if name, surname and password are undefined", function(){
    let RegistrationForm1 = new RegistrationForm(undefined,undefined,undefined)
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password are undefined").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name, surname and password are undefined").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name, surname and password are undefined").to.be.false
})
it ("Test20 - Check if name is from list, surname and password are undefined", function(){
    let RegistrationForm1 = new RegistrationForm("Tom",undefined,undefined)
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name is from the list and surname and password are undefined").to.be.true
    chai.expect(result2, "Expected result - user is not registered if name is from the list and surname and password are undefined").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name is from the list and surname and password are undefined").to.be.false
})
it ("Test21 - Check if name is from list, surname and password are empty", function(){
    let RegistrationForm1 = new RegistrationForm("Tom",'','')
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name is from the list and surname and password are empty values").to.be.true
    chai.expect(result2, "Expected result - user is not registered if name is from the list and surname and password are empty values").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name is from the list and surname and password are empty values").to.be.false
})
it ("Test22 - Check if all data is not from the list", function(){
    let RegistrationForm1 = new RegistrationForm('Hello','Mister' ,"Tom")
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password are not from the list").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name, surname and password are not from the list").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name, surname and password are not from the list").to.be.false
})
it ("Test23 - Check if all data is numbers", function(){
    let RegistrationForm1 = new RegistrationForm(6,8,10)
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password are numbers").to.be.false
    chai.expect(result2, "Expected result - user is not registered if name, surname and password are numbers").to.be.false
    chai.expect(result3, "Expected result - user is not registered if name, surname and password are numbers").to.be.false
})
//7 положительных тестов
    it ("Test1 - Check if name, surname and password are from list", function(){
    let RegistrationForm1 = new RegistrationForm('Tom','Brown', 123)
    let result = RegistrationForm1.registerUsername()
    let result2 = RegistrationForm1.registerUsersurename()
    let result3 = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if name, surname and password not from the list").to.be.true
    chai.expect(result2, "Expected result - user is not registered if name, surname and password not from the list").to.be.true
    chai.expect(result3, "Expected result - user is not registered if name, surname and password not from the list").to.be.true
}) 
    it ("Test2 - Check if name < 10 symbols, field accept the value", function(){
    let RegistrationForm1 = new RegistrationForm('Maria','Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result, "Expected result - user is not registered if name > 10 symbols").to.be.true
}) 
    it ("Test3 - Check if name is string", function(){
    let RegistrationForm1 = new RegistrationForm('Polina','Brown', 123)
    let result = RegistrationForm1.registerUsername()
    chai.expect(result, "Expected result - user is not registered if name is not string").to.be.true
}) 
    it ("Test4 - Check if surname is string", function(){
    let RegistrationForm1 = new RegistrationForm('Polina','White', 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname is not string").to.be.true
}) 
    it ("Test5 - Check if password is number", function(){
    let RegistrationForm1 = new RegistrationForm('Polina','Brown', 123456)
    let result = RegistrationForm1.registerUserpassword()
    chai.expect(result, "Expected result - user is not registered if password is not a number").to.be.true
}) 
    it ("Test6 - Check if password is from the list", function(){
    let RegistrationForm1 = new RegistrationForm('Polina','White', 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if password is not from the list").to.be.true
}) 
    it ("Test7 - Check if surname < 10 symbols, field accept the value", function(){
    let RegistrationForm1 = new RegistrationForm('Polina','White', 123)
    let result = RegistrationForm1.registerUsersurename()
    chai.expect(result, "Expected result - user is not registered if surname > 10 symbols").to.be.true
}) 
})
