import {foo} from "./foo"

describe("jest-mock-namespace", () => {
    it("Should mock foo.bar to return whatever we want", () => {
        const WWW = "WHATEVER_WE_WANT";
        // @ts-ignore
        foo.bar = jest.fn().mockImplementationOnce( () => WWW);

        const result = foo.bar();

        expect(result).toStrictEqual(WWW)
    });

    it("Should mock foo.bar.baz to return whatever we want", () => {
        const WWW = "WHATEVER_WE_WANT";
        // @ts-ignore
        foo.bar.baz = jest.fn().mockImplementationOnce( () => WWW);

        // @ts-ignore
        const result = foo.bar.baz();

        expect(result).toStrictEqual(WWW)
    });
})