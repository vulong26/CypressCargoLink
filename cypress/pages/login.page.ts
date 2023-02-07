import { find } from "cypress/types/lodash";

export class Login{
    elements = {
        loginBtn : () => cy.get('[datatest]'),
        senderOpts : () => cy.get('.type-user').contains('Người gửi hàng'),
        continueBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        phoneTextBox : () => cy.get('[placeholder="Số điện thoại"]'),
        passwordTextBox : () => cy.get('[placeholder="Mật khẩu"]'),
        signInBtn : () => cy.get('button').find('span').contains('Đăng nhập')     
    }
    clickLogin(){
        this.elements.loginBtn().click();   }
    clickSenderOpts(){
        this.elements.senderOpts().click();    }
    clickContinue(){
        this.elements.continueBtn().first().click();    }
    typePhoneNumber(){
        cy.fixture('data').then((user) => {
            this.elements.phoneTextBox().type(user.phoneNumber)
        })}
    typePassWord(){
        cy.fixture('data').then((user) => {
            this.elements.passwordTextBox().type(user.password)
        })}
    clickSignIn(){
        this.elements.signInBtn().click();    }
}