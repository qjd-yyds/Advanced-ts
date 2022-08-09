// 延迟求值
const returnNum = () => 100 + 499;
// 常量枚举不能使用延迟
enum Items {
	LEFT,
	RIGHT,
	TOP,
	BOTTOM,
	Foo = returnNum(), // 后面的枚举必须增加初始值
	Test = 123
}
const a = Items.LEFT; 