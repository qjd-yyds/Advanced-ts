type Result = 'kanke' extends string ? 1 : 2;

const res: Result = 1;

type Result2 = 'kanke' extends 'kanke' | 'ceshi1' | 'hjaha' ? 1 : 2;

type Result3 = string extends String ? 1 : 2;
type Result4 = String extends {} ? 1 : 2;
type Result5 = {} extends object ? 1 : 2;
type Result6 = object extends Object ? 1 : 2;

type Result7 = string extends {} ? 1 : 2;
type Result8 = string extends object ? 1 : 2;

// top类型
type Result9 = Object extends any ? 1 : 2;
type Result10 = Object extends unknown ? 1 : 2;
type Result11 = any extends Object ? 1 : 2;
type Result12 = unknown extends Object ? 1 : 2;

type TypeChain = never extends 'kanke'
	? 'kanke' extends 'kanke' | '599'
		? 'kanke' | '599' extends string
			? string extends String
				? String extends Object
					? Object extends any
						? any extends unknown
							? unknown extends any
								? 8
								: 7
							: 6
						: 5
					: 4
				: 3
			: 2
		: 1
	: 0;
type VerboseTypeChain = never extends 'kanke'
	? 'kanke' extends 'kanke' | 'kekan'
		? 'kanke' | 'kekan' extends string
			? string extends {}
				? string extends String
					? String extends {}
						? {} extends object
							? object extends {}
								? {} extends Object
									? Object extends {}
										? object extends Object
											? Object extends object
												? Object extends any
													? Object extends unknown
														? any extends unknown
															? unknown extends any
																? 8
																: 7
															: 6
														: 5
													: 4
												: 3
											: 2
										: 1
									: 0
								: -1
							: -2
						: -3
					: -4
				: -5
			: -6
		: -7
	: -8;
