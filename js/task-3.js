function getElementWidth(content, padding, border){
    const contentToNum = Number.parseInt(content);
    const paddingToNum = Number.parseInt(padding);
    const borderToNum = Number.parseInt(border);
    return contentToNum + 2*paddingToNum + 2*borderToNum
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

