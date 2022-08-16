// 对于函数返回void的类型，不会特意要求返回的类型必须为void 可以是任意的 但是执行的时候返回参数被推导成void
type CustomHander = (name: string, age: number) => boolean

class Foo {
    foo!: number;
}

class Bar extends Foo {
    bar!: number;
}

let f1: { (input: Foo): void } | { (input: Bar): void }
f1 = (input) => {
}; // y :any
type CustomHandler = (name: string, age: number) => void;

const handler1: CustomHandler = (name, age) => true;
const handler2: CustomHandler = (name, age) => 'linbudu';
const handler3: CustomHandler = (name, age) => null;
const handler4: CustomHandler = (name, age) => undefined;

const arr: number[] = []
const list: number[] = [1, 2, 3]

list.forEach(item => arr.push(item))
function handler(arg: string) {
    console.log(arg);
}
function useHandler(callback: (arg1: string, arg2: number) => void) {
    callback('linbudu', 599);
}
useHandler(handler)