type IsAny<T> = 0 extends 1 & T ? 'Y' : 'N';
type Res = IsAny<any>
// 利用unknown类型只能是any和unknown的类型才能extend
type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
export {
    IsUnknown
}