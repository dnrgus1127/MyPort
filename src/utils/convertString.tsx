export function convertCamelToSpace(inputString : string) :string {
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];

        if (currentChar === currentChar.toUpperCase()) {
            result += " ";
            result += currentChar.toLowerCase();
        }
        else {
            result += currentChar;
        }
    }

    return result;
}