package demo

import kotlin.browser.document
import kotlin.js.Date


fun say() {
    println("Hello,World")
}

fun getDate(n: Int): Date {
    var d = Date()
    var ntime = d.getTime() + n * 24 * 3600 * 1000 // ms
    return Date(ntime)
}

fun renderTable() {
    val e = document.getElementById("title")
    e?.innerHTML = """
        <h1>Kotlin VS. JavaScript</h1>
    """.trimIndent()
}


fun main(args: Array<String>) {
    say()
    getDate(2)
    renderTable()
}