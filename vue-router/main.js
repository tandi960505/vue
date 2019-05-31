const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home,
  '/about': About
}

// 小技巧：使用一个常量指向vue实例，就可以在chrome的console中动态修改vue实例的状态
const vue = new Vue({
  el: '#app',
  data: {
    // currentRoute: window.location.pathname
    // currentRoute: '/'
    currentRoute: '/about'
  },
  computed: {
    ViewComponent () {
      console.info(window.location.pathname);
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})