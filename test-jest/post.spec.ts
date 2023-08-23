import superagent from "superagent";

describe("Test suite", () => {
    const expectObject: { userId: number, id: number, title: string, body: string } =
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    it("Test 1 - Post status", async () => {
        const response = await superagent.post('https://jsonplaceholder.typicode.com/posts')
            .set("Content-type", "application/json")
            .send({ body: "Hello", title: "post78" })
        expect(response.statusCode).toEqual(201);
    })
    it("Test 2 - Post - body", async () => {
        const response = await superagent.post('https://jsonplaceholder.typicode.com/posts')
            .set("Content-type", "application/json")
            .send({ body: "Hello", title: "post78" })
        expect(response.body.body).toBeTruthy;
    })
    it("Test 3 - Post user with existing id", async () => {
        const response = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .set("Content-type", "application/json")
            .send({ id: 1, userId: 1, title: "1", body: "1" })
        expect(response.body).toBeTruthy;
    })
    it("Test 4 - Post user with wrong data type", async () => {
        const response = await superagent
            .post('https://jsonplaceholder.typicode.com/posts/')
            .set("Content-type", "application/json")
            .send({ id: "1", userId: "4", title: 6, body: 6 })
        expect(response.body).toBeFalsy;
    })
    it("Test 5 - Post user with only spaces in parameters", async () => {
        const response = await superagent
            .post('https://jsonplaceholder.typicode.com/posts/')
            .set("Content-type", "application/json")
            .send({ id: " ", userId: " ", title: " ", body: " " })
        expect(response.body).toBeFalsy;
    })
})