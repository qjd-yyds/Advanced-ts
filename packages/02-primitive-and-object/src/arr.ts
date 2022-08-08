const arr3: string[] = ['1', '2'];
console.log(arr3[1234]); // 超出的长度限制
const arr4: [string, number, string] = ['1', 1, '3'];
console.log(arr4[3]); // 超出的长度限制
const arr5: [string, string?, number?] = ['1'];
type TupleLength = typeof arr5.length; // 长度变成一个联合类型
// 具名元组
const arr6: [name: string, age?: number, isMarried?: boolean] = ['1', 1, false];

const [ele1, ele2, ele3, ele4] = arr6;
