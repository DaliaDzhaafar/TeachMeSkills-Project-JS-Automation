import { Locator, Page } from "@playwright/test"

export class MainPage {
    private readonly HomeAndFlatbutton: Locator;
    private readonly BuyFlat
    private readonly Catalog
    private readonly NewsButton
    private readonly LoginButton
    private readonly Nickname
    private readonly Password
    public readonly EmailError
    public readonly PasswordError
    constructor(page: Page) {
    this.HomeAndFlatbutton = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Дома и квартиры")]')
    this.BuyFlat = page.locator('//*[@id="search-filter"]/div/div[2]/label[1]/span')
    this.Catalog = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Каталог")]')
    this.NewsButton = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Новости")]')
    this.LoginButton = page.locator('//*[@id="userbar"]//*[contains(text(),"Вход")]')
    this.Nickname = page.locator('//*[@placeholder ="Ник или e-mail"]')
    this.Password = page.locator('//*[@placeholder ="Пароль"]')
    this.EmailError = page.locator('//*[@id="auth-container"]//*[contains(text(), "Укажите ник или e-mail")]')
    this.PasswordError = page.locator('//*[@id="auth-container"]//*[contains(text(), "Укажите пароль")]')
    }

async openWebsite(page: Page) : Promise<void> {
    await page.goto("https://www.onliner.by/")
    }
async Catalogclick() {
    await this.Catalog.click()
}
async HomeAndFlatclick(){
    await this.HomeAndFlatbutton.click()
    }   
async BuyFlatclick(){
    await this.BuyFlat.click()
    }  
async NewsButtonclick(){
        await this.NewsButton.click()
    }
async LoginButtonClick(){
    await this.LoginButton.click()
    } 
async NicknameClick(){
    await this.Nickname.click()
    }
async PasswordClick(){
    await this.Password.click()
    }
}