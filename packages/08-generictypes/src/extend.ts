// 类型收缩
type Test<T> = T extends true ? 1 : 2;
// 默认值
type Factory<T = boolean> = T | number | string;
const test: Test<string> = 2;

type ResStatus<T extends number> = T extends 10000 | 10001 | 10002 ? 'success' : 'failure';
const res: ResStatus<10000> = "success"
