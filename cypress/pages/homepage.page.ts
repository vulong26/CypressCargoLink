export class HomePage{
    general = {
        transRequest : () => cy.xpath('//a[contains(text(),"Hàng tìm xe")]'),
        registerBtn : () => cy.get('button').find('span').contains('Đăng ký')
    }   
}
