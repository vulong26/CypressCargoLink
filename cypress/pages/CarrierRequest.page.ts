import '../support/commands'
const date = new Date()
const startTime = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));
const endTime = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));
export class carrierRequest{
    general = {
        saveDraftBtn : () => cy.xpath("//span[contains(text(),'Lưu bản thảo')]"),
        closeBtn : () => cy.xpath("//span[contains(text(),'Đóng')]"),
        sendBtn : () => cy.xpath("//span[contains(text(),'Gửi')]"),
        backBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        sendRequestBtn : () => cy.xpath("//span[contains(text(),'Gửi yêu cầu')]"),
        okBtn : () => cy.xpath("//span[contains(text(),'OK')]"),
        cancelBtn : () => cy.xpath("//span[contains(text(),'Cancel')]"),
        createOffer: () => cy.get('.btn-create-transport-request'),
    }
    carrier = {
        carNumber: () => cy.xpath('//div[contains(text(),"Biển số xe")]/preceding-sibling::div'),
        carNumberOpts: () => cy.get('.q-virtual-scroll__content'),        
        weightCar: () => cy.xpath('//input[@tabindex="2"]'),
        deliverFee: () => cy.xpath('//input[@tabindex="4"]'),
        lessTruckLoad: () => cy.xpath('//div[contains(text(),"Ghép hàng")]'),
        startPoint: () => cy.xpath('//input[@id="origin"]'),
        suggestOpts: () => cy.get('.wrapper-suggestion-address').children().first(),
        startTime: () => cy.xpath('//input[@aria-label="Thời gian khởi hành"]'),
        endPoint: () => cy.get('#destination'),
        endTime: () => cy.xpath('//input[@aria-label="Thời gian kết thúc"]'),
        expireTime: () => cy.xpath('//input[@aria-label="Có giá trị đến"]'),
        OKBtn : () => cy.xpath("//span[contains(text(),'OK')]"),   
        cancelBtn : () => cy.xpath("//span[contains(text(),'Cancel')]"),
    } 
    warning = {
        carNumberWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Biển số xe')]"),
        weightCarWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập trọng lượng')]"),
        deliverFeeWarning : () => cy.xpath("//div[contains(text(),'Nhập cước phí không đúng')]"),
        truckLoadWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Tình trạng xếp hàng')]"),
        startpointWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Điểm khởi hành')]"),
        startTimeWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Thời gian khởi hành')]"),
        endPointWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Điểm kết thúc')]"),
        expireTimeWarning : () => cy.xpath("//div[contains(text(),'Đề nghị nhập Có hiệu lực đến')]"),
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
        this.carrier.weightCar().type('50')
        this.carrier.deliverFee().type('1000000')
        this.carrier.lessTruckLoad().click()
        this.carrier.startPoint().type('10, Phố Phạm Văn Bạch, Cầu Giấy, Hà Nội')
        this.carrier.suggestOpts().click()
        this.carrier.startTime().type(startTime.toLocaleDateString('en-GB') + '08:30')
        this.carrier.endPoint().type('421 Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội')
        this.carrier.suggestOpts().click()
        this.carrier.endTime().type(endTime.toLocaleDateString('en-GB') + '08:30')
        this.carrier.expireTime().type(expireTime.toLocaleDateString('en-GB') + '08:30')
    }
}