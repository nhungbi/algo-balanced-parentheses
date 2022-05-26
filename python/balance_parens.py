def balance_parens(string):
    """
    Given a string, return a string with balanced parentheses only.
    """
    #check front and end pieces
    new_string = string[:] #copy

    ommit_index = set()
    open_paren = []
    for i in range(len(new_string)):
        if new_string[i] == '(': 
            open_paren.append(i)
        elif new_string[i] == ')':
            if open_paren: #not empty, have open parenthesis available
                open_paren.pop() #pop the last elt in the last, so it's the closest open paren
            else:
                ommit_index.add(i) #don't matching open, so should omit this index
    
    output = ''
    for i in range(len(new_string)):
        if i not in ommit_index and i not in open_paren:
            output += new_string[i]

    return output
    
    



# print(balance_parens(')ajkjk('))
# print(balance_parens("abc(d)e(fgh))(i)j)k"))