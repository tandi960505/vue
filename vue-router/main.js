const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About,
  '*': NotFound
}

// 小技巧：使用一个常量指向vue实例，就可以在chrome的console中动态修改vue实例的状态
// 还可以用debugger来调试
const vue = new Vue({
  el: '#app',
  data: {
    // 默认
    currentRoute: '/'
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { 
    return h(this.ViewComponent) 
  }
})