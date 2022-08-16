import {expectType} from 'tsd';

type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T
type DeepPartial<T extends {}> = {
    [K in keyof T]?: T[K] extends {} ? DeepPartial<T[K]> : T[K]
}
type P = PromiseValue<Promise<number>>
type Obj = {
    name: string;
    age: 12;
    hobby: {
        plays: string;
    }
}
let obk1: DeepPartial<Obj> = {
    name: "haha",
    hobby: {}
}
let a: MyNonNullable<null | undefined | number> = 123
type MyNonNullable<T> = T extends null | undefined ? never : T
type MarkPropsAsOptional<T extends object, K extends keyof T = keyof T> = Partial<Pick<T, K>> & Omit<T, K>
// 该类型会让baz变成可选，foo和bar保留
type MarkPropsAsOptionalStruct = MarkPropsAsOptional<{ foo: string; bar: number; baz: boolean }, "baz">
let obk: MarkPropsAsOptionalStruct = {
    foo: "aa",
    bar: 123
    // baz:true
}

type FuncStruct = (...args: any[]) => any
type FunctionKeys<T extends object> = {
    [K in keyof T]: T[K] extends FuncStruct ? K : never
}[keyof T] // 联合类型依次访问
type T1 = {
    toName: (...args: any[]) => any
}
type FunctionKeys1 = FunctionKeys<T1>
let test2: FunctionKeys1 = "toName" // 取出里面的函数名字

//取出任意符合类型的对象里的key
type ExpectedPropsKeys<T extends object, ValueType> = {
    [K in keyof T]: T[K] extends ValueType ? K : never
}[keyof T]
type FunctionKeys2<T extends object> = ExpectedPropsKeys<T, FuncStruct>

expectType<FunctionKeys2<{
    getName: () => void,
    notFunction: true
}>>("notFunction")

// 并集
type Concurrence<T, K> = T | K
// 交集
type Intersection<T, K> = T extends K ? T : never
// 差集
type Difference<T, K> = T extends K ? never : T
// 补集
type Complement<T, K extends T> = Difference<T, K>