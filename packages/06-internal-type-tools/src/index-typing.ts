interface AllstringTypes {
	PropA: number; // 不兼容
	[key: string]: string;
}

type AllStringType = {
	[key: string]: string;
};

interface Foo {
	name: 1;
	599: 2;
}
// 相当于 Object.keys(Foo).join("|")
type FooKey = keyof Foo
let a : FooKey = "name"
let b : FooKey = 599
// 通过keyof来获取类型
type keyType = Foo[FooKey]