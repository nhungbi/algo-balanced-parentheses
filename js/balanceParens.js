balanceParens = (str) =>
{
    const omitIndex = new Set()
    const openParent = []
    for (let i = 0; i< str.length; i++) {
        if (str[i] === '(') {
            openParent.push(i)} 
        else if (str[i] === ')') {
            if (openParent.length != 0) {
                openParent.pop()
            } else {
                omitIndex.add(i)}}
        } 
    
    
    let output = ''
    for (let i = 0; i< str.length; i++) {
        if (!omitIndex.has(i) && !openParent.includes(i)) {
            output += str[i]
        }}
    return output


}

module.exports = { balanceParens }

console.log(balanceParens("abc(d)e(fgh))(i)j)k"))