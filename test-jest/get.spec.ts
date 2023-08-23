// #### Task 2 💻
// - Создать тестовый фреймворк для API (интеграционных) тестов для web приложения https://jsonplaceholder.typicode.com/:
// 	- реализовать по 5 тестов на каждый тип метода запроса
// 	- тестовый фреймворк: Jest + superAgent

import superagent from "superagent"
import { HttpClient } from "../httpclient"

describe("Test suite", () => {
    const expectObject: { userId: number, id: number, title: string, body: string } =
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    test("Test 1 - Get all properties", async () => {
        const response = await HttpClient.get('posts/1')
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectObject);
        console.log(response.body)
    })
    test("Test 2 - Get - title", async () => {
        const response = await HttpClient.get('posts/1')
        expect(response.status).toBe(200);
        expect(response.body.title).toEqual(expectObject.title)
    })
    test("Test 3 - Get - userId", async () => {
        const response = await HttpClient.get('posts/1')
        expect(response.status).toBe(200);
        expect(response.body.userId).toEqual(expectObject.userId);
    })
    it("Test 4 - Get status with query", async () => {
        const response = await HttpClient.get('posts', { id: 2 });
        expect(response.status).toBe(200);
    })
    it("Test 5 - Get status", async () => {
        const response = await HttpClient.get('posts/1')
        expect(response.status).toBe(200);
    })

})