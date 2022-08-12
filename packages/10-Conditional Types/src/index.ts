function universalAdd<T extends number | bigint | string>(x: T, y: T) {
	return x + (y as any);
}
const a = universalAdd(1, 2);
type Func = (...args: any[]) => any;
type FunctionConditionType<T extends Func> = T extends (...args: any[]) => string ? string : never;
// infer 只能在条件语句中使用,表示代推断的类型
type FunctionConditionInfer<T extends Func> = T extends (...args: any[]) => infer R ? R : never;
type stringS = FunctionConditionType<(...args: any[]) => string>;
type stringN = FunctionConditionType<(...args: any[]) => void>;
type stringSS = FunctionConditionInfer<(...args: any[]) => string>;
type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : never;

type SwapResult1 = Swap<[1, 2]>;
// 调换开头
type SwapFirstEnd<T extends any[]> = T extends [infer A, ...infer C, infer B] ? [B, ...C, A] : T;

type SwapResult2 = SwapFirstEnd<[1, 2, 3, 4]>;

// 提取数组类型
type ArrayItem<T> = T extends Array<infer Item> ? Item : T;

type Array1 = ArrayItem<number[]>;
type Array2 = ArrayItem<[]>;
type Array3 = ArrayItem<{}>;

type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R } ? R : never;
type PropType1 = PropType<{ name: string }, 'name'>;
type PropType2 = PropType<{ name: string; age: number }, 'name' | 'age'>;
type Condition<T> = T extends 1 | 2 | 3 ? T : never;
type Res1 = Condition<1 | 2 | 3 | 4 | 5>;
// never
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;

type Naked<T> = T extends boolean ? 'Y' : 'N';
type wrapped<T> = [T] extends boolean[] ? true : false;

type Res3 = Naked<number | true>;
type Res4 = wrapped<number | true>;

export type NoDistribute<T> = T & {};

type Wrapped<T> = NoDistribute<T> extends [boolean] ? 'Y' : 'N';
type Res5 = Wrapped<[boolean]>;
type IsNever<T> = [T] extends [never] ? 'Y' : 'N';
type Res6 = IsNever<number>;
type Tmp2<T> = T extends string ? 1 : 2;
type Res7 = Tmp2<any>
type Special2<T> = T extends any ? 1 : 2;
type Res8 = Special2<any>
// 直接使用，仍然会进行判断
type Tmp3 = never extends string ? 1 : 2; // 1
type Tmp4<T> = T extends string ? 1 : 2;
type Res9 = Tmp4<never> // 跳过类型检查 直接变成never