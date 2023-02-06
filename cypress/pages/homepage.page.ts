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