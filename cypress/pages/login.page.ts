class Login{
    elements = {
        loginBtn : () => cy.get('[datatest]')
    }
    clickLogin(){
        this.elements.loginBtn().click();
    }
}