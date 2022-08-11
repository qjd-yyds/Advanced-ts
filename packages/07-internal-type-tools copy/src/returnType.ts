// ! 返回函数返回值类型
const func = () => {
	return 'hello';
};
// 通过typeof获取func的类型
type funcReturn = ReturnType<typeof func>;
type funcReturn2 = ReturnType<() => string>;
