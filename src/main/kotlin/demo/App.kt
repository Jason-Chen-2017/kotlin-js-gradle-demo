package demo

import kotlin.browser.document
import kotlin.js.Date

class App

fun say() {
    println("Hello,World")
}

fun getDate(n: Int): Date {
    var d = Date()
    var ntime = d.getTime() + n * 24 * 3600 * 1000 // ms
    return Date(ntime)
}

fun renderTitle() {
    val e = document.getElementById("title")
    e?.innerHTML = """
        <h1>Kotlin VS. JavaScript</h1>
    """.trimIndent()
}

fun main(args: Array<String>) {
    say()
    getDate(2)
    renderTitle()
    UserList().users()
    BookList().books()
}