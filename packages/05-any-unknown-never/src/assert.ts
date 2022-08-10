interface IStruct {
	foo: string;
	bar: {
		barPropA: string;
		barPropB: number;
		barMethod: () => void;
		baz: {
			handler: () => Promise<void>;
		};
	};
}
// 必须完整实现
const obj: IStruct = {
	foo: 'foo'
};
// 断言以后可省略，这样又有类型提示又可以少些
const obj1 = <IStruct>{
	foo: 'foo'
};
