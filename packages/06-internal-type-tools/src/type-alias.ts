// ! 类型别名
// 联合类型 ｜
type Factory<T> = T | string | number;

const foo: Factory<boolean> = true;
type MayBeNull<T> = T | null;
function process1(input: MayBeNull<{ handler: () => {} }>) {
	input?.handler();
}
// 交叉类型 &
interface NameStruct {
	name: string;
}

interface AgeStruct {
	age: number;
}

type ProfileStruct = NameStruct & AgeStruct;

type Struct1 = {
	primitiveProp: string;
	objectProp: {
		name: string;
	};
};

type Struct2 = {
	primitiveProp: number;
	objectProp: {
		age: number;
	};
};
type composed = Struct1 & Struct2;
type PrimitivePropType = composed['primitiveProp']; // never
type objPropType = composed['objectProp']; // {name:string;age:number}
