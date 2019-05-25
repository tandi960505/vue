// 参数1：组件名称
// 参数2：组件内容
Vue.component('tabs', {
    // 模板
    template: '\
        <div class="tabs"> \
            <div class="tabs-bar"> \
                <div v-for="(item, index) in paneList" :class="tabCls(item)" @click="handleChange(index)"> \
                    {{item.label}} \
                </div> \
            </div> \
            \
            <div class="tabs-content"> \
                <!-- 插槽 -->\
                <slot></slot> \
            </div>\
        </div>' 
        ,
    // 在标签上注册一个value属性，这个属性值类型为String或者Number
    // 实质就是index.html中的v-model="activeKey",全写实质为v-model:value="activeKey"
    // 可看出，当指令不指定属性名称时，默认作用于标签的value属性
    props: {
        value: {
            type: [String, Number]
        }
    },
    // 提供当前template使用的data
    data() {
        return {
            // 一开始，value为1，因为index.html中的v-model=“activeKey”(参考)
            cunrrentValue: this.value,
            paneList: []
        }
    },
    methods: {
        // 切换class
        tabCls(item) {
            return [ 'tabs-tab', {'tabs-tab-active': item.name === this.cunrrentValue} ]
        },
        // 获取到所有pane标签
        getTabs() {
            // 直接和children组件通讯
            // 即返回所有名字为pane的子标签（一个tabs下有多个pane，所以返回的是一个pane数组，该例子有3个pane标签）
            return this.$children.filter(item => {
                return item.$options.name === 'pane';
            });
        },
        // 刷新pane
        // 每一个pane标签，调用一次
        updatePane() {
            this.paneList = [];
            var _this = this; // 局部变量
            
            this.getTabs().forEach((pane, index) => { // index从0开始
            
                // 将所有pane保存到paneList
                _this.paneList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                
                // 如果pane没有设置name属性的话，name就用index作为pane的name
                if (!pane.name) pane.name = index;

            });

            this.updateStatus();
        },
        // 切换选项卡内容
        updateStatus() {
            var tabs = this.getTabs(); // 3
            var _this = this; // this局部变量，同时使用当前对象内属性时，使用该方式来区别

            // 根据cunrrentValue来设置3个pane的显示状态
            tabs.forEach(tab => {
                return tab.show = tab.name === _this.cunrrentValue; 
            });
        },
        // 点击触发事件
        handleChange(index) {
            // index表示当前点击的tabs的index

            // 获取到选中的pane对象
            var currentPane = this.paneList[index];
            var currentPaneNameValue = currentPane.name;
            this.cunrrentValue = currentPaneNameValue;
            
            // 相当于将currentPaneNameValue提交到标签上的v-model="activeKey"
            this.$emit('input', currentPaneNameValue);

            // 相当于将currentPaneNameValue提交到标签上的点击事件
            this.$emit('on-click', currentPaneNameValue);
        }
    },
    // 当前vue对象属性侦查器
    watch: {
        // 给当前对象设置一个value属性的监听，当当前对象的value属性变化时，就会自动触发该函数，val就是触发时value的值
        value(val) {
            this.cunrrentValue = val;
        },
        // cunrrentValue变化则调用updateStatus()改变显示效果
        // cunrrentValue变化说明，选项卡切换了
        cunrrentValue() {
            this.updateStatus();
        }
    },
     
});