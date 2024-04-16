// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
	Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
	Expect<Equal<TupleToUnion<[123]>, 123>>,
];

// ============= Your Code Here =============
type Prims = string | number | true;
type TupleToUnion<T extends Array<Prims>> = T extends Array<infer S>
	? S
	: never;

type New = TupleToUnion<[12, "hello", true]>;
//   ^?
