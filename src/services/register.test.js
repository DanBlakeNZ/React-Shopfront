import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onPost("/request").reply(200, { data: "registered" });

describe("Register POST", () => {
  it("if valid email and name, return", async () => {
    expect(
      await axios
        .post("/request", { name: "John Smith", email: "john@example.com" })
        .then((response) => response.data)
    ).toEqual({ data: "registered" });
  });
});
