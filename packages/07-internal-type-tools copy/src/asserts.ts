import assert from 'assert';
let name: any = 'hello';
assert(typeof name === 'string');
name.toLowerCase(); // 被断言成string类型

interface Struct1 {
	primitiveProp: string;
}

interface Struct1 {
	// 后续属性声明必须属于同一类型。
	// 属性“primitiveProp”的类型必须为“string”，但此处却为类型“number”。
	aaa: number;
}
type Struct2 = {
	primitiveProp: string;
};

type Struct3 = {
	// 后续属性声明必须属于同一类型。
	// 属性“primitiveProp”的类型必须为“string”，但此处却为类型“number”。
	aaa: number;
	primitiveProp: number;
};
type a = Struct1;
let b: a = {
	primitiveProp: 'hello',
	aaa: 123
};

type struct4 = Struct2 & Struct3;
let c: struct4 = {
	aaa: 123,
	primitiveProp: 123 // 会被变成never 因为numver类型和string类型不存在
};
