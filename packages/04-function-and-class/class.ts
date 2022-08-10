class Foo {
	// 私有属性 如果在constructor 上加入private 则不能在外部示例化
	constructor(private props: string) {
		// 自动注入
	}
	// 只能在内部访问
	protected print(addon: string) {
		console.log(`${this.props} and ${addon}`);
	}
	public get propsA() {
		return this.props;
	}
	public set propsA(value: string) {
		this.props = value;
	}
	// 静态属性
	static staticProp = 'static';
	// 静态方法
	static staticFun = () => {
		return 'staticFun';
	};
}

var foo = new Foo('123');
console.log(Foo.staticProp);
console.log(Foo.staticFun());

// ! 派生类或者基类
class Base {
	happy() {
		console.log('happy');
	}
}
class Derived extends Base {
	// 可以使用 override  保证一定存在 覆盖
	override happy() {
		// 通过super访问父类的方法
		super.happy();
		console.log('happy son');
	}
}
var derived = new Derived();
derived.happy();

// ! 抽象类
abstract class Abstract {
	abstract abstractMethod(): void;
	abstract method(name: string): number;
}
interface IAbstract {
	abstractMethod(): void;
	method(name: string): number;
}
class Mf implements Abstract {
	abstractMethod() {
		console.log('abstractMethod');
	}
	method(name) {
		return name;
	}
}
class Mf1 implements IAbstract {
	abstractMethod() {
		console.log('abstractMethod');
	}
	method(name: string) {
		return 123;
	}
}
