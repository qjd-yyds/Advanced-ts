// 映射类型
type stringfy<T> = {
	[K in keyof T]: T[K];
};

interface Hoo {
	prop1: string;
	prop2: number;
	prop3: boolean;
	prop4: string;
	prop5: () => {};
}
type HooStringfy = stringfy<Hoo>;
const obj = <HooStringfy>{
	prop1: '1',
	prop5: () => {}
};
