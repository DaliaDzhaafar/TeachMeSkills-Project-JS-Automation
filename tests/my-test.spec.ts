// #### Task 3 💻
// - Реализовать тестовый фреймвор для UI тестирования для web приложения https://www.onliner.by/:
// 	- тестовый фреймворк брать на свое усмотрение: WDIO + cucumber, cypress или playwright
// 	- использовать изученные паттерны: Page Object, Page Factory
// 	- Добавить allure репортер
// 	- Использовать различные локаторы и селекторы
// 	- Организовывать тесты в группы


import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/mainpage";
import { PagesFactory } from "../pages/pagefactory";
import { NewsPage1 } from "../pages/newspage";
import { ContactPage } from "../pages/contactpage";
import { logger } from "../utils/log.conf";

test.describe("Check news website", async () => {

    test(" Test 1 - Check sections title", async ({ page }) => {
        logger.debug("First log message")
        const mainPage1 = PagesFactory.getPage(page, "main") as MainPage
        await mainPage1.openWebsite(page);
        expect(await page.title()).toBe("Onlíner")
        await mainPage1.Catalogclick()
        expect(await page.title()).toBe("Каталог Onlíner")
        await mainPage1.openWebsite(page);
        await mainPage1.NewsButtonclick()
        expect(await page.title()).toBe("Onlíner")
        await mainPage1.openWebsite(page)
    })
    test(" Test 2 - Check news page sections", async ({ page }) => {
        const NewsPage = PagesFactory.getPage(page, "news") as NewsPage1
        await NewsPage.openWebsite(page);
        await NewsPage.NewsButtonclick()
        expect(await page.title()).toBe("Onlíner")
        expect(await NewsPage.Wallet).toBeTruthy
        expect(await NewsPage.Auto).toBeTruthy
        expect(await NewsPage.Tech).toBeTruthy
        expect(await NewsPage.Estate).toBeTruthy
    })
    test(" Test 3 - Check contact Page", async ({ page }) => {
        const mainPage1 = PagesFactory.getPage(page, "contact") as ContactPage
        await mainPage1.openWebsite(page);
        await mainPage1.openContactPageClick();
        expect(await page.textContent).toBeTruthy
        expect(await mainPage1.Connect).toBeDefined
    })
    test(" Test 4 - Check log in account with empty fields", async ({ page }) => {
        const mainPage1 = PagesFactory.getPage(page, "main") as MainPage
        await mainPage1.openWebsite(page)
        await mainPage1.LoginButtonClick()
        await mainPage1.NicknameClick()
        await mainPage1.PasswordClick()
        expect(await mainPage1.EmailError).toBeEnabled
        expect(await mainPage1.PasswordError).toBeEnabled
    })

    test(" Test 5 - Home and flat page", async ({ page }) => {
        const mainPage1 = PagesFactory.getPage(page, "main") as MainPage
        await mainPage1.openWebsite(page);
        await mainPage1.HomeAndFlatclick()
        await mainPage1.BuyFlatclick()
        expect(await page.title()).toBe('Купить квартиру в Минске')
    })

})