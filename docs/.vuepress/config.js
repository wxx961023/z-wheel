module.exports = {
    base:'/z-wheel/',
    title: 'Z-Wheel UI 框架',
    description: '一个学习Vue的UI框架',
    themeConfig:{
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Star', link: 'https://github.com/wxx961023/z-wheel'},
            {text: 'Github', link: 'https://github.com/wxx961023'}
        ],
        sidebar:[
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
            {
                title:'入门',
                children:[
                    '/install/',
                    '/get-started/',
                ]
            },{
                title:'组件',
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                ]
            }
        ]
    }
}