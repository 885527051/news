<template>
  <div>
    <!-- 导航页 -->
    <NavigateBar title="编辑资料"/>
    <!-- 头像 -->
    <div class="avatar">
      <img :src="$axios.defaults.baseURL + userInfor.head_img" alt="">
      <van-uploader :after-read="afterRead" class="uploader"/>
    </div>
    <!-- 按钮列表 -->
    <Listbar label="昵称" :tips="userInfor.nickname" @click.native="show = true"/>
    <!-- 编辑昵称的弹窗 -->
    <!-- v-model: value和input/change两种数据的集合，
    这里的v-model作用只要控制弹窗的显示和隐藏
    @confirm点击确定按钮时候的事件
    -->
    <van-dialog v-model="show" title="修改昵称" show-cancel-button @confirm="handleChangeNickname">
      <van-field v-model="nickname" placeholder="请输入用户名" />
    </van-dialog>

    <Listbar label="密码" tips="******" @click.native="showPassword = true"/>
     <van-dialog v-model="showPassword" title="修改密码" show-cancel-button @confirm="handleChangePassword">
      <van-field v-model="password" type="password" placeholder="请输入密码" />
    </van-dialog>
    <Listbar label="性别" :tips="['女','男'][userInfor.gender]"/>
  </div>
</template>


<script>
// 头部导航组件
import NavigateBar from "@/components/NavigateBar"
// 导入列表按钮栏的组件
import Listbar from "@/components/Listbar";

export default {
  components: {
    NavigateBar,
    Listbar
  },
  data(){
    return {
      // 用户详情
      userInfor:{},
      // 本地的用户数据
      userJson: {},
      show: false,
      // 是否显示编辑密码的弹窗
      showPassword: false,
      // 单独记录弹窗输入框昵称
      nickname:"",
      // 单独记录弹窗输入框密码
      password:""
    }
  },
  mounted(){
    // 只要能进入这个页面就表示肯定已经登陆
    const userJson = JSON.parse(localStorage.getItem('userInfo'))
    // 保存到data，就可以在methods的方法是调用了
    this.userJson = userJson
    // 请求用户详情
    this.$axios({
      url:"/user/" + userJson.user.id,
      // 添加头信息
      headers:{
        Authorization:userJson.token
      }
    }).then(res => {
      const { data } = res.data;
      // 保存到data
      this.userInfor = data
      // console.log(this.userInfor)
      this.nickname = data.nickname
    })
  },
  methods:{
    // 图片上传的方法，file是对文件对象（认为它是不可读的）
    afterRead(file){
      console.log(file)
      // 创建一个表单对象，上传图片资源必须是表单类型,不能用json
      // 大家不用去纠结json还是表单的头信息，axios会自动设置的
      const formData = new FormData()

      // console.log(formData)

      // 通过原有的方法append给表单添加元素
      // 第一个字符串的file表示接口接收的属性，第二个 file.file是文件对象
      formData.append('file', file.file)
      console.log(formData)
      // 开始上传
      this.$axios({
        url:"/upload",
        // post请求
        method:"post",
        // 添加头信息
        headers:{
          Authorization:this.userJson.token
        },
        data:formData
      }).then(res => {
        console.log(res)
        // url就是图片的路径
        const {url} = res.data.data;
        // 替换掉当前的头像路径
        this.userInfor.head_img = url
        // 图片上传成功之后调用编辑用户信息的方法
        this.handleEdit({
          head_img:url
        })
      })
    },
    // 编辑用户信息的函数,可以修改头像，昵称。。。
    // data就是请求的参数
    handleEdit(data){
      this.$axios({
        url:"/user_update/"+this.userInfor.id,
        method:"post",
        // 添加头信息
        headers:{
          Authorization:this.userJson.token
        },
        data
      }).then(res => {
        console.log(res)
        this.$toast.success("修改成功")
      })
    },
    handleChangeNickname(){
      // 调用编辑用户信息的函数
      this.handleEdit({nickname:this.nickname})
      // 同步的修改当前显示的数据
      this.userInfor.nickname = this.nickname
    },
    // 修改密码的事件
    handleChangePassword(){
      // 调用编辑用户信息的函数
      this.handleEdit({password:this.password})
    }
  }
}
</script>

<style lang="less" scoped>
  .avatar{
    display: flex;
    padding: 20 / 360 * 100vw;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
      width: 100 / 360 * 100vw;
      height: 100 / 360 * 100vw;
      border-radius: 50%;
    }
    .uploader{
      position: absolute;
      width: 100 / 360 * 100vw;
      height: 100 / 360 * 100vw;
      left: 50%;
      top: 50%;
      transform: translateX(-50 / 360 * 100vw) translateY(-50 / 360 * 100vw);
      opacity: 0;
    }
  }
</style>