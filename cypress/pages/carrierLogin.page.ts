export class carrierLogin{
    elements = {
        loginBtn : () => cy.xpath("//div[@class='c-register']/a[contains(text(),'Đăng nhập')]"),
        consignorOpts : () => cy.get('.type-user').contains('Người gửi hàng'),
        carrierOpts : () => cy.get('.type-user').contains('Người vận tải'),
        continueBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        phoneTextBox : () => cy.get('[placeholder="Số điện thoại"]'),
        passwordTextBox : () => cy.get('[placeholder="Mật khẩu"]'),
        signInBtn : () => cy.get('button').find('span').contains('Đăng nhập'),
        errorLogin: () => cy.get('.error-login'),
        clearAll: () => cy.get('item .ic_input_clear_all')

    }
    clickLogin(){
        this.elements.loginBtn().click();   }
    chooseCarrierOpts(){
        this.elements.carrierOpts().click();    }
    chooseConsignorOpts(){
            this.elements.consignorOpts().click();    }
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