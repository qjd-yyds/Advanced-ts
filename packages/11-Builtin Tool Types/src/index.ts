let a : number = 1
type Test1 = {
    name: string;
    age: number;
}
type MyPartial<T> = {
    [K in keyof T]?: T[K]
}
const obj: MyPartial<Test1> = {
    name: "kanke",
    age:12
}
type MyRequired<T> = {
    [k in keyof T]-?: T[k]
}
type Test2 = {
    name: string;
    age?: number
}
const obj2:MyRequired<Test2> = {
    name:"123",
    age:123
}

interface Foo {
    optional: never;
    required: string
}

const obj3:Record<string, string> = {
    name:"age"
}
// in表示可以接受一个联合类型
type MyRecord<T extends keyof any,U> = {
    [K in T] : U
}
const obj4: MyRecord<string, any> = {
    name: "age",
    age: 123
}
type MyPick<T,U extends keyof T> = {
    [P in U] : T[P]
}
type Pick1 = {
    name: string;
    age: number;
    isMarry: boolean
}
const obj5:MyPick<Pick1, "name" | "isMarry"> = {
    name:"age",
    isMarry:false
}
type MyOmit<T,U extends keyof T> = Pick<T, Exclude<keyof T, U >>
const obj6:MyOmit<Pick1, "name" | "isMarry"> = {
    age: 123
}

type MyPick1<T,U extends keyof T> = {
    [K in U] : T[K]
}
type MyOmit1<T,U extends  keyof  T> = Pick<T, Exclude<keyof T, U>>