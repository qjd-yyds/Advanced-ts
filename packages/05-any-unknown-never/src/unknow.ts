let unknownVar: unknown = 123;
// 严格模式下 必须显式指明any
function foo(name: any, age: any) {}
// 可以被赋值为任意类型
unknownVar = false;
unknownVar = '123';
// ! 但是只赋值给any或者unknown的类型
let a: any = unknownVar;
let b: unknown = unknownVar;
let c: string = unknownVar;
let d: unknown;
(d as { foo: () => {} }).foo();
