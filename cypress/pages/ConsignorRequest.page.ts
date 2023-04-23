
import '../support/commands'
const date = new Date()
const loadingDate = new Date(date.getTime() + 2*(1000 * 60 * 60 * 24));
const deliveryDate = new Date(date.getTime() + 3*(1000 * 60 * 60 * 24));
const expireTime = new Date(date.getTime() + (1000 * 60 * 60 * 24));

export class consignorRequest{
    general = {
        continueBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        backBtn : () => cy.xpath("//span[contains(text(),'Tiếp theo')]"),
        sendRequestBtn : () => cy.xpath("//span[contains(text(),'Gửi yêu cầu')]"),
        okBtn : () => cy.xpath("//span[contains(text(),'OK')]"),
        validTimeTB: () => cy.xpath('//input[@aria-label="Có giá trị đến"]'),
        validDayTB: () =>  cy.get('input[placeholder="DD-MM-YYYY"]'),
        expectValueTB: () => cy.xpath('//input[@aria-label="Giá mong muốn (bao gồm VAT)"]'),
        managePage : () => cy.xpath("//span[contains(text(),'Về trang quản lý đơn hàng')]"),

    }
    delivery = {
        deliveryAddressTB: () => cy.get('[id="destination-0"]'),
        deliveryDetailTB: () => cy.xpath('//input[@placeholder="Chi tiết địa điểm"]'),
        deliveryTimeTB: () => cy.xpath('//input[@aria-label="Thời gian giao hàng"]'),
        deliveryDayTB: () => cy.xpath('//input[@placeholder="DD/MM/YYYY"]'),
        contactDeliveryTB: () => cy.xpath('//input[@aria-label="Tên người liên hệ giao hàng"]'),
        contactDeliveryNumberTB: () => cy.xpath('//input[@aria-label="Số di động người liên hệ"]'),
    } 
    contact = {
        createRequestBtn : () =>cy.get('#btn-create-transport-request'),
        nameCargoTB: () => cy.get('input[aria-label="Tên hàng"]'),
        typeCargoSB: () => cy.xpath('//div[contains(text(),"Loại hàng")]//preceding-sibling::div'),
        typeOpts: () => cy.xpath('//div[contains(text(),"Vật liệu xây dựng")]'),
        unitSB: () => cy.xpath('//div[contains(text(),"Đơn vị tính")]//preceding-sibling::div'),
        unitOpts: () => cy.xpath('//div[contains(text(),"Bao")]'),
        quantityTB: () => cy.get('input[aria-label="Số lượng"]'),
        weightTB: () => cy.get('input[aria-label="Trọng lượng"]'),
        atLoadingCB: () => cy.xpath('//span[contains(text(),"Nơi bốc hàng")]/preceding-sibling::div'),
        atDischargingCB: () => cy.xpath('//span[contains(text(),"Nơi dỡ hàng")]/preceding-sibling::div'),
        deliverByPackagesCB: () => cy.xpath('//span[contains(text(),"Giao nguyên kiện")]/preceding-sibling::div'),
        deliverByWeightCB: () => cy.xpath(' //span[contains(text(),"Giao theo trọng lượng")]/preceding-sibling::div'),
        lenghtTB: () => cy.get('input[aria-label="Chiều dài (m)"]'),
        heinghtTB: () => cy.get('input[aria-label="Chiều cao (m)"]'),
        widthTB: () => cy.get('input[aria-label="Chiều rộng (m)"]'),
        truckTypeSB: () => cy.xpath('//div[contains(text(),"Loại xe")]//preceding-sibling::div'),
        lessTruckLoadBtn: () => cy.xpath('//div[contains(text(),"Ghép chuyến")]/parent::div/parent::div'),
        fullTruckLoadBtn: () => cy.xpath('//div[contains(text(),"Nguyên chuyến")]/parent::div/parent::div'),
    } 
    loading = {
        loadingAddressTB: () => cy.get('[id="origin"]'),
        suggestionAddress: () => cy.xpath('//div[@class="wrapper-suggestion-address"]').children().eq(0),
        locationDetailTB: () => cy.xpath('//input[@placeholder="Chi tiết địa điểm"]'),
        loadingTimeTB: () => cy.xpath('//input[@aria-label="Thời gian bốc hàng"]'),
        loadingDayTB: () => cy.xpath('//input[@placeholder="DD/MM/YYYY"]'),
        contactNameTB: () => cy.xpath('//input[@aria-label="Tên người liên hệ"]'),
        contactNumberTB: () => cy.xpath('//input[@aria-label="Số di động người liên hệ"]'),
        noteField: () => cy.xpath('//div[contains(text(),"Ghép chuyến")]/parent::div/parent::div'),
    } 

    clickToCreateRequest(){
        this.contact.createRequestBtn().click()
    } 
    clickToContinue(){
        this.general.continueBtn().click()
    }
    fillContactInformation(){
        this.contact.nameCargoTB().type('Xi măng')
        this.contact.typeCargoSB().click()
        this.contact.typeOpts().click()
        this.contact.unitSB().click()
        this.contact.unitOpts().click()
        this.contact.quantityTB().type('10')
        this.contact.weightTB().type('2')
        this.clickToContinue()
    }
    fillLoadingInformation(){
        this.loading.loadingAddressTB().type('10, Phố Phạm Văn Bạch, Cầu Giấy, Hà Nội')
        this.loading.suggestionAddress().click()
        this.loading.locationDetailTB().type('Hướng sân bóng tòa nhà FPT Tower')
        this.loading.loadingTimeTB().type(loadingDate.toLocaleTimeString('en-GB'))
        this.loading.loadingDayTB().type(loadingDate.toLocaleDateString('en-GB'))
        this.loading.contactNameTB().type('anh Phương')
        this.loading.contactNumberTB().type('0913451863')
        this.clickToContinue()
    }
    fillDeliveryInformation(){
        this.delivery.deliveryAddressTB().type('421 Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội')
        this.loading.suggestionAddress().click()
        this.delivery.deliveryDetailTB().type('Nhà số 6')
        cy.wait(2000)
        this.delivery.deliveryTimeTB().type(deliveryDate.toLocaleTimeString('en-GB'))
        this.delivery.deliveryDayTB().type(deliveryDate.toLocaleDateString('en-GB'))
        this.delivery.contactDeliveryTB().type('anh Long')
        this.delivery.contactDeliveryNumberTB().type('0866744860')
        this.clickToContinue()
    }
    confirmRequestData(){
        this.general.validTimeTB().type('10:30')
        this.general.validDayTB().type(expireTime.toLocaleDateString('en-GB'))
        this.general.expectValueTB().type('200000')
        this.general.sendRequestBtn().click()
        this.general.okBtn().click()
    }
}