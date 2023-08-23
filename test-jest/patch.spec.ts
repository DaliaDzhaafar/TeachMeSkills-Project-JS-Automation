import superagent from "superagent";

describe("Test suite", () => {
    const expectObject: { userId: number, id: number, title: string, body: string } =
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    it("Test 1 - Patch status code", async () => {
        const response = await superagent
            .patch('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ title: "post100" })
        expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Patch title", async () => {
        const response = await superagent
            .patch('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ title: "post100" })
        expect(response.body.title).toEqual("post100");
    })
    it("Test 3 - Patch body", async () => {
        const response = await superagent
            .patch('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ body: "post1001" })
        expect(response.body.body).toEqual("post1001");
    })
    it("Test 4 - Patch with empty body", async () => {
        const response = await superagent
            .patch('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ body: "" })
        expect(response.body.body).toBeFalsy
    })
    it("Test 5 - Patch with wrong body type", async () => {
        const response = await superagent
            .patch('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ body: 6 })
        expect(response.body.body).toBeFalsy
    })
})