Vue.component('v-select', VueSelect.VueSelect);
let createQuestionApp = new Vue({
    el:'#createQuestionApp',
    data:{
        title:'',
        selectedTags:[],
        tags:[],
        selectedTeachers:[],
        teachers:[]
    },
    methods:{

        createQuestion:function(){
            let content = $('#summernote').val();
            console.log(content);
            //data 对象，与服务器端QuestionVo的属性对应
            let form =new FormData();
            form.append("title",this.title);
            form.append("tagNames",this.selectedTags);
            form.append("teacherNicknames",this.selectedTeachers);
            form.append("content",content);
            form.append("accessToken",token);
            console.log(form);
            axios({
                url:'http://localhost:9000/v2/questions',
                method:'POST',
                data:form,
            }).then(function(r){
                console.log(r.data);
                // let OK = 200;
                if(r.status=="ok"){
                    location.href="/index_student.html";
                }else{
                    console.log(r.data);
                }
            })
        },
        loadTags:function () {
            console.log("loadTags");
            axios({
                url:'http://localhost:9000/v2/tags',
                method: 'GET'
            }).then(function(r){
                console.log(r);
                let OK = 200;
                if(r.status == OK){
                    let list=r.data;
                    let tags = [];
                    for (let i=0;i<list.length; i++) {
                        tags.push(list[i].name);
                    }
                    createQuestionApp.tags = tags;
                }
            })
        },
        loadTeachers:function () {
            console.log("loadTeachers");
            axios({
                url:'http://localhost:9000/v1/users/master',
                method: 'GET'
            }).then(function(r){
                console.log(r);
                let OK = 200;
                if(r.status == OK){
                    let list=r.data;
                    let teachers = [];
                    for (let i=0;i<list.length; i++) {
                        teachers.push(list[i].nickname);
                    }
                    createQuestionApp.teachers= teachers;
                }
            })
        }
    },
    created:function () {
        this.loadTags();
        this.loadTeachers();
    }
});
