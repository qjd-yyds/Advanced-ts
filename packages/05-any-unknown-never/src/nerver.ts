type unionWithNever = 'kanke' | 'never' | never; // naver表示没有类型 所以在类型别名上never被忽略
let n1: never;
let n2: never;
let v: void;
n1 = v; // void 不能赋值给never
declare let strOrNumOrBool: string | number | boolean;
function func() {
	if (typeof strOrNumOrBool === 'string') {
		console.log('str!');
    strOrNumOrBool.charAt(1)
	} else if (typeof strOrNumOrBool === 'number') {
    strOrNumOrBool.toFixed()
		console.log('num!');
	} else if (typeof strOrNumOrBool === 'boolean') {
		console.log('bool!');
    strOrNumOrBool = false
	} else {
		throw new Error(`Unknown input type: ${strOrNumOrBool}`);
	}
}

const arr = []
