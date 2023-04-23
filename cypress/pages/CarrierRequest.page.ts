import '../support/commands'
const date = new Date()
const startTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));
const endTime = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));
export class carrierRequest{
    general = {
        sendBtn : () => cy.xpath("//span[contains(text(),'Gửi')]"),
        backBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        sendRequestBtn : () => cy.xpath("//span[contains(text(),'Gửi yêu cầu')]"),
        okBtn : () => cy.xpath("//span[contains(text(),'OK')]"),
        createOffer: () => cy.get('.btn-create-transport-request'),
    }
    carrier = {
        carNumber: () => cy.xpath('//div[contains(text(),"Biển số xe")]/preceding-sibling::div'),
        carNumberOpts: () => cy.get('.q-virtual-scroll__content'),        
        weightCar: () => cy.xpath('//input[@aria-label="Trọng lượng (tấn)"]'),
        deliverFee: () => cy.xpath('//input[@aria-label="Phí vận chuyển, gồm VAT (tấn/km)"]'),
        lessTruckLoad: () => cy.xpath('//div[contains(text(),"Ghép hàng")]'),
        startPoint: () => cy.get('#origin'),
        suggestOpts: () => cy.get('.wrapper-suggestion-address').children().first(),
        startTime: () => cy.xpath('//input[@aria-label="Thời gian khởi hành"]'),
        endPoint: () => cy.get('#destination'),
        endTime: () => cy.xpath('//input[@aria-label="Thời gian kết thúc"]'),
        expireTime: () => cy.xpath('//input[@aria-label="Có giá trị đến"]'),
        OKBtn : () => cy.xpath("//span[contains(text(),'OK')]"),   
    } 
 
    clickToCreateRequest(){
        this.general.createOffer().click()
    } 
    clickToSend(){
        this.general.sendBtn().click()
    }
    fillContactInformation(){
        this.carrier.carNumber().type('90C-01872')
        this.carrier.carNumberOpts().click()
        this.carrier.weightCar().type('20')
        this.carrier.deliverFee().type('1000000')
        this.carrier.lessTruckLoad().click()
        this.carrier.startPoint().type('10, Phố Phạm Văn Bạch, Cầu Giấy, Hà Nội')
        this.carrier.suggestOpts().click()
        this.carrier.startTime().type(startTime.toLocaleString('en-GB'))
        this.carrier.endPoint().type('421 Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội')
        this.carrier.suggestOpts().click()
        this.carrier.endTime().type(endTime.toLocaleString('en-GB'))
        this.carrier.expireTime().type(expireTime.toLocaleString('en-GB'))
        this.clickToSend()
        //this.carrier.OKBtn().click()
    }
}