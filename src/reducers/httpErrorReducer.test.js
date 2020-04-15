import reducer from "./httpErrorReducer";

describe('http error reducer', () => {

    it('should http_error return error message', () => {
        const payload = "Error message"
        const http_error = {
            type: "http_error",
            payload
        };
        expect(reducer({},http_error)).toEqual({
            "error": "Error message"
        })
    })

})
