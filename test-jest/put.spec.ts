import superagent from "superagent";

describe("Test suite", () => {
    const expectObject: { userId: number, id: number, title: string, body: string } =
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    it("Test 1 - Put status", async () => {
        const response = await superagent
            .put('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ id: 1, userid: 1, body: "Hello", title: "post1" })
        expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Put body", async () => {
        const response = await superagent
            .put('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" })
        expect(response.body.body).toEqual(expectObject.body);
    })
    it("Test 3 - Put title", async () => {
        const response = await superagent
            .put('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" })
        expect(response.body.title).toEqual(expectObject.title);
    })
    it("Test 4 - Put empty title", async () => {
        const response = await superagent
            .put('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ title: "" })
        expect(response.body.title).toBeFalsy;
    })
    it("Test 5 - Put wrong title type", async () => {
        const response = await superagent
            .put('https://jsonplaceholder.typicode.com/posts/1')
            .set("Content-type", "application/json")
            .send({ title: 6 })
        expect(response.body.title).toBeFalsy;
    })
})