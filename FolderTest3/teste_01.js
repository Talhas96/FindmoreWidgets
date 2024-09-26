const base64String = "ZnVuY3Rpb24gbW9zdHJhck1lbnNhZ2VtKCkgew0KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW5zYWdlJykuaW5uZXJUZXh0ID0gIk9sYSwgZXN0YSB1bWEgbWVuc2FnZW0gZXhoaWJpZGEgdmlhIEphdmFTY3JpcHQhIjsNCn0=";

// Decodificar Base64
const decodedString = atob(base64String);

// Executar o código decodificado
eval(decodedString);
