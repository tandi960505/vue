## 建议
阅读下文之前建议简单看一下上一篇文件：[webpack+vue介绍](http://www.tandi.wiki/webpack_vue%E4%BB%8B%E7%BB%8D/)

推荐书籍：《Vue.js实战》

## 什么是MVVM模式
1. MVVM，即`ModelView-View-Model`，由MVC(Model-View-Controller)衍生而来
2. 其中View与ModelView为双向绑定，Model与ModelView亦为双向绑定，如下图：
![图片源自wiki](images/1.png)

简单理解一下什么是ModelView-View-Model

    Model：业务逻辑和数据模型
    View：视图层
    ModelView：数据中转站

拓展：MVC中M，即Model，一些人认为Model只是数据实体本身（Entity/Pojo）；其实并不如此，Service层+Dao层+数据实体等均为Model

## vue对象的生命周期
### 介绍
1. 所谓的生命周期，就是对象从出生到死亡的过程
2. 在vue中对象有着特定的生命周期钩子，钩子指的是函数(方法)，这些函数会在生命周期的某个特定时间被自动触发

哪到底有哪些生命周期钩子呢？以下为官网的一张图片:
![](images/2.png)
beforeCreate：在vue对象被创建之前触发

create：对象创建完成之后触发

beforeMount：在将对象挂载到标签之前触发

mount：对象挂载完成后触发

beforeUpdate：对象状态被更改之前触发

updated：对象状态被更新之后触发

beforeDestroy：对象被销毁(死亡)之前触发

destroyed：对象被销毁（死亡）后触发

### 基本使用
![](images/3.png)

## 表达式表达式
基本使用
![](images/4.png)
表达式过滤器
![](images/5.png)
计算
![](images/6.png)

## vue指令
### v-if/v-else/v-else-if
    分支语句，接受值为boolean

### v-bind
    单向绑定，监听值得变化;v-bind可以省略而直接使用：代替

### v-model
    双向绑定，即监听值得变化，也可以影响值
    v-model的修饰符：
    v-model.lazy,表达式改为失焦或按确定后才同步值
    v-model.number,将输入的值转为Number类型，不指定则默认为String
    v-model.trim,去除输入值得收尾空格

### v-on
    绑定事件，如：v-on:click="函数名称"，绑定点击事件，可以简写为@click="函数名称"

### v-text/v-html
    直接输出值，并不监听值得变化，v-html会识别值中的html标签进行渲染

### v-for
    循环，如：v-for="person in persons"，将产生多个标签值

### v-show
    类似于css中的display，接受值为boolean

### v-pre
    类似于html中的pre标签，在v-pre下，vue表达之将失效，无需接收值，直接在标签中添加v-pre即可

### v-cloak
    用于防止网速慢，而使得vue表达式直接显示出来，无需接收参数

### v-once
    可以让表达式只渲染一次，即使是双向绑定，也不会再生效，无需接收参数

### :class
    标签class属性，可以用于判断是否启用class或变更class；如:class="class1:isActive",当isActive为true则使用class1

### :style
    区别于:class，:style为内联样式；如：:style="{'color':color}"

## vue对象中的方法
### 使用
![](images/7.png)

### 部分修饰符使用
.stop：@click.stop="clickBtn",可以阻止事件冒泡

.prevent：form标签中@submit.prevent="函数名称"或@submit.prevent，可以禁止提交表单后刷新页面

.once：@click.once，只触发1次

*键盘修饰符*

.enter：@click.enter="函数名称"

还有.ctrl/.tab/.delete/.space/.up/.down/.left/.right/.alt/.shift/./esc等等，需要注意的是在vue中修饰符是可以串联的，即可以同时使用


## vue组件
### 说明
1. 在上一片文章中已经提到，vue是可以将页面抽象为可复用的组件的，而每一个组件都含有自己的css/html/javascript
2. vue中的组件，从另一个层面来说就是减少冗余的代码，让其能复用，从而避免ctrl+c/ctrl+v
3. 组件（Component）是vue中的核心功能

### 组件使用
![](images/8.png)

### 使用props字段传值
![](images/9.png)
![](images/10.png)

### 模板的数据验证
![](images/11.png)