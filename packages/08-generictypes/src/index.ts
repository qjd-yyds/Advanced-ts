function foo<T>(input: T) {
	return input;
}
let author = 18;
const author2 = 18;

foo(author);
foo(author2);
// 箭头函数的范型
const foo3: <T>(input: T) => T = input => {
	return input;
};

// class中的泛型
class Quene<T> {
	constructor(private list: T[]) {}
	enqueue<Item extends T>(item: Item) {
		this.list.push(item);
	}
}
