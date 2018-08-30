package demo

import kotlinx.html.*
import kotlinx.html.dom.create
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.js.JSON.parse

class BookList {

    /*
    * 当创建XMLHttpRequest对象后，要先设置onreadystatechange的回调函数。
    * 在回调函数中，通常我们只需通过readyState === 4判断请求是否完成，
    * 如果已完成，再根据status === 200判断是否是一个成功的响应。
    *
    *
    *
    * readyState有五种状态：
        0 － （未初始化）
        (XMLHttpRequest)对象已经创建，但还没有调用open()方法。值为0表示对象已经存在，否则浏览器会报错：对象不存在。
        1 － （载入/正在发送请求）
        对XMLHttpRequest对象进行初始化，即调用open()方法，根据参数(method,url,true)，完成对象状态的设置。并调用send()方法开始向服务端发送请求。值为1表示正在向服务端发送请求。
        2 － （载入完成/数据接收）
        此阶段接收服务器端的响应数据。但获得的还只是服务端响应的原始数据，并不能直接在客户端使用。值为2表示send()方法执行完成，已经接收完全部响应数据。并为下一阶段对数据解析作好准备。
        3 － （交互/解析数据）正在解析响应内容
        此阶段解析接收到的服务器端响应数据。即根据服务器端响应头部返回的MIME类型把数据转换成能通过responseBody、responseText或responseXML属性存取的格式，为在客户端调用作好准备。值为3表示正在解析数据。
        4 － （后台处理完成）响应内容解析完成，可以在客户端调用了
        此阶段确认全部数据都已经解析为客户端可用的格式，解析已经完成。值为4表示数据解析完毕，可以通过XMLHttpRequest对象的相应属性取得数据。

        总之，整个XMLHttpRequest对象的生命周期应该包含如下阶段：
        创建－0初始化请求－1发送请求－2接收数据－3解析数据－4完成 。

    * */
    fun books() {
        val data = arrayOf("Kotlin 极简教程", "Spring Boot 开发实战", "Kotlin 从入门到进阶实战")
        renderBooks(data)

        val request = XMLHttpRequest()
        request.onreadystatechange = {
            println(it.currentTarget.toString())
            val readyState = request.readyState.toInt()
            println("readyState=$readyState")
            if (readyState == 4) {  // 成功完成
                if (request.status.toInt() == 200) {// 判断响应结果
                    // 成功，通过responseText拿到响应的文本:
                    val responseText = request.responseText
                    val data = parse<Array<String>>(responseText)
                    println(data)

                } else {
                    // 失败，根据响应码判断失败原因:
                    println(request.status)
                }

            } else {
                println("HTTP请求还在继续...")
            }

        }

        request.open(method = "GET", url = "/book/list.json", async = true)
        request.send()
    }

    private fun renderBooks(data: Array<String>) {
        val books = document.create.div("books") {
            table("table table-hover") {
                thead {
                    tr {
                        th {
                            +"ID"
                        }
                        th {
                            +"Name"
                        }
                    }
                }

                tbody {
                    data.forEachIndexed { index, s ->
                        tr {
                            td {
                                +"$index"
                            }
                            td {
                                +s
                            }
                        }
                    }
                }
            }
        }

        document.getElementById("books")?.appendChild(books)
    }

}