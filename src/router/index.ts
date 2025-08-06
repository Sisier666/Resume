import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
import Resume from "@/views/Resume.vue";
import Skill from "@/views/Skill.vue";
import Projects from "@/views/Projects.vue"
import Experience from "@/views/Experience.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 用嵌套路由
        {
            path: '/',
            name: '',
            component: Layout,    // 外壳（左侧栏+右侧容器）
            children: [
                // name 必须是全局唯一的 ID，否则 Vue Router 会冲突，导致组件渲染不出来。
                { path: '', redirect: ''},
                { path: '', name: 'resume', component: Resume},
                { path: 'skill', name: 'skill', component: Skill},
                { path: 'projects', name: 'projects', component: Projects},
                { path: 'experience', name: 'experience', component: Experience},
            ]
        }
    ]
})

export default router
