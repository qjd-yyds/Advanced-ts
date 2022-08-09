interface Res {
	code: 10000 | 10001 | 10002;
	status: 'success' | 'failure';
	data: any;
	mixed: boolean | string | (() => void);
}
interface Tmp {
	obj: {
		name: 'linbudu';
		age: 18;
	};
}
const tem: Tmp = {
	obj: {
		name: 'linbudu',
		age: 18
	}
};
