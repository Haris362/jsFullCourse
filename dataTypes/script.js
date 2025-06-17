const a = null
const b = 3489
const c = "String here"
const d = Symbol("Hello")
const e = true
const f = BigInt(2320420480)
const g = undefined;

console.table([a,b,c,d.description,e,f,g])
console.table([typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g])