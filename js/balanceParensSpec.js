let bp = require("./balanceParens");

// Add more test cases!...
console.log(balanceParens("abc(d)e(fgh))(i)j)k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("abc((d)e(fgh)(i)j(k") === "abc(d)e(fgh)(i)jk")

// Challenge: nested parentheses...
console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p") === "abc(d)(ef(g(h))ij)klm()op")

console.log(balanceParens("()") === "()") // should return "()"
console.log(balanceParens("a(b)c)") === "a(b)c") // should return "a(b)c"
console.log(balanceParens("(a)(bdd)c)") === "(a)(bdd)c") // should return "(a)(bdd)c"
console.log(balanceParens("a(dbvb)c)") === "a(dbvb)c") // should return "a(dbvb)c"
console.log(balanceParens("a(b)(c)())")=== "a(b)(c)()") // should return "a(b)(c)()"
console.log(balanceParens(")(") === "") // should return ""
console.log(balanceParens("(((((") === "") // should return ""
console.log(balanceParens(")(())(") === "(())") // should return "(())"
console.log(balanceParens("(()()(") === "()()") // should return "()()"
console.log(balanceParens(")())(()()(") === "()()()") // should return "()()()"