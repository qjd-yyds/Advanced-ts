interface IDescription {
	readonly name: string;
	age: number;
}
const obj1: IDescription = {
	name: '测试',
	age: 123
};

obj1.name = '好的哈是的'; // 因为它是只读属性
const temp4: Object = '23';

const str1: String = '123';
const str2: String = undefined;
const str3: String = '123';

const obj2: object = {};
const obj3: object = [];
const obj4: object = () => {};

const obj5: {} = 123;
const obj6: {} = "123";
const obj7: {} = {};
const obj8: {} = () => {};
obj8.name = 123; // 无法被赋值