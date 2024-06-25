// Створіть змінну,
//     яка може містити або рядок,
//     або число(union type) ?
//     Також,
//     оголосіть змінну,
//     яка може містити
//          лише одне з двох можливих
//           рядкових значень:
// 'enable' або 'disable'(literal type).

let unionType: string | number;

unionType = "Hello";
unionType = 14;

let literalType: "enable" | "disable";

literalType = "enable";
literalType = "disable";

export {};
