import {getTester} from './utils/test.mjs';

const {test} = getTester(import.meta);

test.snapshot({
	valid: [
		'const foo = Array.prototype.push.apply(bar, elements);',
		'const foo = Array.prototype.slice.call(bar);',
		'const foo = Object.prototype.toString.call(bar);',
		'const foo = Object.prototype.hasOwnProperty.call(bar, "property");',
		'const foo = Object.prototype.propertyIsEnumerable.call(bar, "property");',
		'const foo = "".charCodeAt.call(bar, 0);',
		'const foo = [notEmpty].push.apply(bar, elements);',
		'const foo = {notEmpty}.toString.call(bar);',
		'Array.prototype.forEach.call(foo, () => {})',
		'const push = Array.prototype.push.bind(foo)',
		'const push = [].push',
		'const {push} = []',
		'Math.max.apply(null, numbers)',
		'foo.apply(null, args)',
		'Reflect.apply(...[].slice)',
		'Reflect.apply(foo, [].slice)',
		'Reflect.apply(Math.max, Math, numbers)',
		'Reflect.apply()',
		'Reflect["apply"]([].slice, foo, [])',
		'NotReflect.apply([].slice, foo, [])',
		'Reflect.notApply([].slice, foo, [])',
		'Reflect.apply([]?.slice, foo, [])',
		'Reflect.apply(foo, [].bar, [].bar)',
		'class Foo {bar() { this.baz.bind(this) }}',
		'const a = {bar() { this.baz.bind(this) }}',
		'foo.bar.bind(foo)',
		'foo.bar.bind(bar)',
		'foo[{}].call(bar)',
		'Object.hasOwn(bar)',
		'const foo = [].push.notApply(bar, elements);',
		'const push = [].push.notBind(foo)',
		'[].forEach.notCall(foo, () => {})',
	],
	invalid: [
		'const foo = [].push.apply(bar, elements);',
		'const foo = [].slice.call(bar);',
		'const foo = {}.toString.call(bar);',
		'const foo = {}.hasOwnProperty.call(bar, "property");',
		'const foo = {}.propertyIsEnumerable.call(bar, "property");',
		'[].forEach.call(foo, () => {})',
		'const push = [].push.bind(foo)',
		'const foo = [][method].call(foo)',
		'const method = "realMethodName";const foo = [][method].call(foo)',
		'const array = Reflect.apply([].slice, foo, [])',
		'Reflect.apply([].bar, baz, [])',
		'const foo = ({}).toString.call(bar);',
		'const foo = ({}.toString).call(bar);',
		'const foo = ({}.toString.call)(bar);',
		'function foo(){return[].slice.call(bar);}',
		'function foo(){return{}.toString.call(bar)}',
		'Reflect.apply({}[Symbol()], baz, [])',
		'Reflect.apply({}[Symbol("symbol description")], baz, [])',
		'Reflect.apply([][Symbol()], baz, [])',
		'Reflect.apply({}[Symbol("symbol description")], baz, [])',
		'[][Symbol.iterator].call(foo)',
		'const foo = [].at.call(bar)',
		'const foo = [].findLast.call(bar)',
	],
});
