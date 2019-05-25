// 参数1：组件名称
// 参数2：组件内容
Vue.component('tabs', {
    template: '\
        <div class="tabs"> \
            <div class="tabs-bar"> \
            </div> \
            <div class="tabs-content"> \
                <slot></slot> \
            </div>\
        </div>'   
});