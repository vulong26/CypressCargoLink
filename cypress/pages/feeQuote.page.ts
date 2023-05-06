export class FeeQuote {
    FeeQuote = {
        transRequest : () => cy.xpath('//a[contains(text(),"Hàng tìm xe")]'),
        selectCargo : () => cy.xpath('//div[@class="truck-type"]/p[contains(text(),"Tên hàng: Xi măng test")]'),
        quotationBtn : () => cy.xpath('//div[contains(text(),"Có hiệu lực đến")]/following-sibling::button'),
        transFee : () => cy.xpath('//input[@aria-label="Phí vận chuyển"]'),
        truckType : () => cy.xpath('//div[contains(text(),"Loại xe")]/preceding-sibling::div'),
        truckOpts : () => cy.xpath('//span[contains(text(),"Xe bán tải")]'),

        validTime : () =>  cy.xpath('//input[@aria-label="Có giá trị đến"]'),
        sendBtn : () => cy.xpath('//span[contains(text(),"Gửi")]'),
        quotedBtn : () => cy.xpath('//span[contains(text(),"Đã báo giá")]/parent::td//following-sibling::td/button'),   
        acceptBtn : () => cy.xpath('//span[contains(text(),"Chấp nhận")]'),
        okBtn : () => cy.xpath('//span[contains(text(),"OK")]'),   
        manageShipment : () => cy.xpath('//div[contains(text(),"Quản lý đơn hàng")]'), 
        cargoLinkOrder : () => cy.xpath('//a[contains(text(),"Đơn hàng CargoLink")]'),   
    }
}