# Kotlin 全栈开发之 前端 JavaScript:  Getting Started with Kotlin and JavaScript with Gradle

完整工程源代码：

https://github.com/Jason-Chen-2017/kotlin-js-gradle-demo


![image.png](https://upload-images.jianshu.io/upload_images/1233356-f35b971f57ba790a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

HelloWorld.kt

```
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
```


build.gradle


```
group 'com.easy.kotlin'
version '1.0-SNAPSHOT'

buildscript {
    ext.kotlin_version = '1.2.61'

    repositories {
        mavenCentral()
    }
    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }

}

apply plugin: 'kotlin2js'

repositories {
    mavenCentral()
}

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-js:$kotlin_version"
    testCompile "org.jetbrains.kotlin:kotlin-test-js:$kotlin_version"
}

build.doLast {
    configurations.compile.each { File file ->
        copy {
            includeEmptyDirs = false

            from zipTree(file.absolutePath)
            into "${projectDir}/src/main/resources/static"
            include { fileTreeElement ->
                def path = fileTreeElement.path
                println(path)
                path == "kotlin.js"
            }

        }
    }
}

compileKotlin2Js {
    kotlinOptions.outputFile = "${projectDir}/src/main/resources/static/app.js"
    kotlinOptions.moduleKind = "plain"
    kotlinOptions.sourceMap = true
    kotlinOptions.verbose = true
    kotlinOptions.metaInfo = true
}
```

index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>kotlinjs-demo</title>
</head>
<body>
<div id="title"></div>

<script type="text/javascript" src="../static/kotlin.js"></script>
<script type="text/javascript" src="../static/app.js"></script>
<script type="text/javascript" >
    var K = app
    K.demo.say()
    var d = K.demo.getDate_za3lpa$(3)
    console.log(d)
</script>

</body>
</html>


```

生成的app.js 如下：

```
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  function say() {
    println('Hello,World');
  }
  function getDate(n) {
    var d = new Date();
    var ntime = d.getTime() + (((n * 24 | 0) * 3600 | 0) * 1000 | 0);
    return new Date(ntime);
  }
  function renderTable() {
    var e = document.getElementById('title');
    e != null ? (e.innerHTML = trimIndent('\n        <h1>Kotlin VS. JavaScript<\/h1>\n    ')) : null;
  }
  function main(args) {
    say();
    getDate(2);
    renderTable();
  }
  var package$demo = _.demo || (_.demo = {});
  package$demo.say = say;
  package$demo.getDate_za3lpa$ = getDate;
  package$demo.renderTable = renderTable;
  package$demo.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map

```


页面效果：


![image.png](https://upload-images.jianshu.io/upload_images/1233356-2c3cb989ce4a53da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)











构建执行：gradle build



![image.png](https://upload-images.jianshu.io/upload_images/1233356-f8d0d67b16c52e5a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





参考文档：[Getting Started with Kotlin and JavaScript with Gradle](http://kotlinlang.org/docs/tutorials/javascript/getting-started-gradle/getting-started-with-gradle.html#configuring-compiler-options)





# 新书上架：《Spring Boot 开发实战》

> — 基于 Kotlin + Gradle + Spring Boot 2.0 的企业级服务端开发实战



#### [京东下单链接](https://item.jd.com/31178320122.html)

https://item.jd.com/31178320122.html

#### [天猫下单链接](https://detail.tmall.com/item.htm?id=574928877711)

https://detail.tmall.com/item.htm?id=574928877711

![](https://upload-images.jianshu.io/upload_images/1233356-596a64de8adf2b27.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)









