export class HomePage{
    elements = {
        loginBtn : () => cy.get('button').find('span').contains('Đăng nhập'),
        registerBtn : () => cy.get('button').find('span').contains('Đăng ký')
    }   
    clickLogin(){
        this.elements.loginBtn().click();
    }
    clickRegister(){
        this.elements.registerBtn().click();
    }
}
export class carrierLogin{
    elements = {
        loginBtn : () => cy.get('[datatest]'),
        senderOpts : () => cy.get('.type-user').contains('Người vận tải'),
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
        cy.fixture('account').then((user) => {
            this.elements.phoneTextBox().type(user.carrierNumber)
        })}
    typePassWord(){
        cy.fixture('account').then((user) => {
            this.elements.passwordTextBox().type(user.carrierpw)
        })}
    clickSignIn(){
        this.elements.signInBtn().click();    }
}