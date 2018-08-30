package demo

import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.li
import kotlinx.html.ul
import kotlin.browser.document

class UserList {
    private val data = listOf("Java", "Kotlin", "JavaScript", "Groovy")

    fun users() {

        val users = document.create.div("users") {
            ul {
                data.forEach {
                    println(it)
                    li("li") {  +it }
                }
            }
        }

        document.getElementById("users")?.appendChild(users)
    }

}