<template>
<div @click="none()">
<el-container>
<sidePart>  </sidePart>
<el-container>
    <div id='test'></div>
    <el-header style="height:38px;line-height:33px;padding:0;"><top1></top1>
    </el-header>
    <el-container style="background:-webkit-linear-gradient(top,rgb(241, 244, 248),white);">
        <div style="width:100%;height:1600px">
            <div style="width:30%;height:300px;margin-left:35%;margin-top:100px;" class='test'>
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane name="first" style="height:200px">
                    <span slot="label" style="margin-left:72px;margin-right:72px;">登录</span>
                    <div style="margin-top:20px">
                    用户名：<el-input v-model="username" placeholder="请输入" style="width:50%"></el-input><br><br>
                    &nbsp;&nbsp;密码：&nbsp;&nbsp;
                    <el-input placeholder="请输入密码" 
                    v-model="password" 
                    type='password'
                    style="width:50%"></el-input>
                    </div>
                    <div style="margin-top:20px">
                        <el-button @click="enter(2)">登录</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="second" style="height:200px">
                    <span slot="label" style="margin-left:72px;margin-right:72px;">注册</span>
                    <div style="margin-top:20px">
                    用户名：<el-input v-model="username" placeholder="请输入" style="width:50%"></el-input><br><br>
                    &nbsp;&nbsp;密码：&nbsp;&nbsp;
                    <el-input placeholder="请输入密码" 
                    v-model="password"
                    type='password'
                    style="width:50%"></el-input>
                    </div>
                    <div style="margin-top:20px">
                        <el-button @click="enter(1)">注册</el-button>
                    </div></el-tab-pane>
              </el-tabs>
              <p style="color:red;">{{msg}}&nbsp;</p>
            </div>
        </div>
    </el-container >

</el-container >
</el-container></div>
</template>   

<script>
import sidePart from '../components/sidePart.vue'
import top1 from '../components/top1.vue'
export default {
    data(){
        return{
            activeName: 'first',
            username:'',
            password:'',
            input:'',
            msg:''
        }
    },
    methods:{
        enter(kind){
            if(this.username==''|this.password=='')
            {
                setTimeout(() =>{
                    this.msg="输入不能为空"
                },1);
            }
            else
            {
            this.$http.get('http://127.0.0.1:8000/api/enter?name='+this.username+'&password='+this.password+'&kind='+kind)
            .then((response) => {
            var res = JSON.parse(response.bodyText);
            this.msg=res[0]
            if(this.msg=="登录成功")
            this.$router.push({ path:'/mine'  })
            })
            }
            this.$forceUpdate();
        },
        none(){
            if(this.msg!='')
            this.msg=''
        }
    },
    components:{sidePart,top1},
}
</script>
<style scoped>
.test >>> .el-tabs__nav
{
    width:100%
    }
</style>