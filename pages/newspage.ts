import { Locator, Page } from "@playwright/test"
import { MainPage } from "./mainpage"

export class NewsPage1 extends MainPage {
    public readonly Wallet
    public readonly Auto
    public readonly Tech
    public readonly Estate
    constructor(page:Page) {
        super(page);
        this.Wallet = page.locator ('//ul[@class="b-main-navigation"]//*[contains(text(),"Кошелек")]')
        this.Auto = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Авто")]')
        this.Tech = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Технологии")]')
        this.Estate = page.locator('//ul[@class="b-main-navigation"]//*[contains(text(),"Недвижимость")]')
    }
    async openNewsPage(page: Page) : Promise<void> {
        await page.goto("https://www.onliner.by/")
    }

}