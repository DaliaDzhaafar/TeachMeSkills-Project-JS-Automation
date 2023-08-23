import superagent from "superagent";

describe("Test suite", () => {
    const expectObject: { userId: number, id: number, title: string, body: string } =
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    it("Test 1 - Delete status", async () => {
        const response = await superagent
            .delete('https://jsonplaceholder.typicode.com/posts/78')
        expect(response.statusCode).toEqual(200);
    })
    it("Test 2 - Delete check that post is deleted", async () => {
        const response = await superagent
            .delete('https://jsonplaceholder.typicode.com/posts/1')
        expect(response).toBeFalsy;
    })
    it("Test 3 - Delete check that post properties are deleted (title)", async () => {
        const response = await superagent
            .delete('https://jsonplaceholder.typicode.com/posts/1')
        expect(response.body.title).toEqual(undefined);
    })
    it("Test 4 - Delete check that post properties are deleted (body)", async () => {
        const response = await superagent
            .delete('https://jsonplaceholder.typicode.com/posts/1')
        expect(response.body.body).toEqual(undefined);
    })
    it("Test 5 - Delete check that method does not delete other posts", async () => {
        let response = await superagent
            .delete('https://jsonplaceholder.typicode.com/posts/1')
        response = await superagent.get('https://jsonplaceholder.typicode.com/posts/2')
        expect(response.body.title).toBeTruthy
    })
})