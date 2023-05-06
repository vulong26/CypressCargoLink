export class consignorLogin{
    elements = {
        loginBtn : () => cy.get('[datatest]'),
        consignorOpts : () => cy.get('.type-user').contains('Người gửi hàng'),
        carrierOpts : () => cy.get('.type-user').contains('Người vận tải'),
        continueBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        phoneTextBox : () => cy.get('[placeholder="Số điện thoại"]'),
        passwordTextBox : () => cy.get('[placeholder="Mật khẩu"]'),
        errorLogin: () => cy.get('.error-login'),
        signInBtn : () => cy.get('button').find('span').contains('Đăng nhập')     
    }
    clickLogin(){
        this.elements.loginBtn().click();   }
    clickConsignorOpts(){
        this.elements.consignorOpts().click();    }
    clickContinue(){
        this.elements.continueBtn().first().click();    }
    typePhoneNumber(){
        cy.fixture('account').then((user) => {
            this.elements.phoneTextBox().type(user.phoneNumber)
        })}
    typePassWord(){
        cy.fixture('account').then((user) => {
            this.elements.passwordTextBox().type(user.password)
        })}
    clickSignIn(){
        this.elements.signInBtn().click();    }
}
