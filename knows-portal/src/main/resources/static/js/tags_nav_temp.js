Vue.component("tag-app",{
    props:["tags"],
    template:`
    <div class="nav font-weight-light">
    <a href="tag/tag_question.html"
    class="nav-item nav-link text-info"
    v-for="tag in tags">
    <small v-text="tag.name">Java基础</small>
    </a>
    </div>
    `
})
