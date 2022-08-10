// 函数声明
function foo(name: string): number {
	return name.length;
}
// 自动推导
function app(name: string) {
	return name.length;
}
// ! 函数表达式
const foo1 = function (name: string) {
	return name.length;
};
const foo2: (name: string) => number = function (name) {
	return name.length;
};
// ? 使用类型别名
type Foo = (name: string) => number;
const foo3: Foo = name => {
	return name.length;
};
// ? 使用接口 这个时候叫callable Interface
interface IFoo {
	(name: string): number;
}
const foo4: IFoo = name => {
	return name.length;
};
// ! 函数重载
function func(a: number, b: false): number;
function func(a: number, b: true): string;
function func(a: number, b: boolean) {
	if (b) {
		return String(a);
	} else {
		return a * 30;
	}
}
const b = func(1, true);

export {}