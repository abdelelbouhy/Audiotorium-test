import { createUserCodeSubmission, Value } from "./debug";

describe("Validate submitted object", () => {
  const value: Value = {
    sourceCode: [
      {
        body: "this value is coming from user",
        visible: true,
        editable: true,
        splitted: false,
        name: "main.py",
      },
    ],
  };

  const response =
    '[{"name":"main.py","code":"this is header\\nthis value is coming from user\\nthis is footer"}]';

  it("should check if the user submitted test value", async () => {
    expect(await createUserCodeSubmission(value)).toEqual(response);
  });
  it("should check if the user submitted test value is undefined", async () => {
    expect(await createUserCodeSubmission(undefined)).toEqual(
      "we should have error message here!!!"
    );
  });
});
