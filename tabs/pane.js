// 注意：这个组件对应的只是tabs-content下的内容

// 参数1：组件名称
// 参数2：组件的vue对象
Vue.component('pane', {
    template: 
        '<div class="pane" v-show="show"> \
            <!-- 插槽 -->\
            <slot></slot> \
         </div>'
        ,
    // 在标签上注册 name和label 两个属性    
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    // 默认显示效果为true
    data() {
        return {
            show: true
        }
    },
    methods: {
        updatePane () {
            this.$parent.updatePane();
        }
    },
    // 当前vue对象属性侦查器
    watch: {
        // 监听label变更
        label () {
            this.updatePane();
        }
    },
    mounted () {
        // 首次挂载后调用一次
        this.updatePane();
    },
});