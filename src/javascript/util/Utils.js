let head = $("head")
let body = $("body")

/**
 * 对一段文本通过换行符做双空格缩进（很蠢的方法了hh
 * @param code 文本
 * @returns {string} 缩进后文本
 */
function addSpace(code) {
    let s = ""
    code.split('\n').forEach((e) => {
        s += "  " + e
    })
    return s
}

function addExternalStyle(link) {
    let elem = $("<style\>")
    elem.attr("href", link)
    elem.attr("rel", "stylesheet")
    elem.appendTo(body)
    return elem
}

function setThemeColor(color) {
    let elem = $("meta[name='theme-color']")
    if (elem.length === 0)
        elem = $("<meta\>")
    elem.attr("name", "theme-color")
    elem.attr("content", color.toString())
    elem.appendTo(head)
    return elem
}