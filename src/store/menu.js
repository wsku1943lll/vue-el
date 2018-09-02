/*
name：菜单名称
logo:菜单图标
hasSub:是否有子菜单 最大2层
link:跳转地址
sub:子菜单
*/
export default [{
        name: "个人信息",
        logo: "el-icon-message",
        hasSub: true,
        link: "#",
        sub: [
            { name: '信息修改', hasSub: false, link: "/home/npacul", logo: "el-icon-message", sub: [] },
            {
                name: '大咖',
                hasSub: true,
                logo: "el-icon-message",
                link: "#",
                sub: [{
                    name: '子咖',
                    link: "#",
                    logo: "el-icon-message"
                }]
            }
        ]
    },
    {
        name: '系统配置',
        logo: "el-icon-menu",
        hasSub: true,
        link: "#",
        sub: [
            { name: '机构设置', hasSub: false, link: "/home/gg", logo: "el-icon-if-fenxiaozhongxin", sub: [] }
        ]
    }
];