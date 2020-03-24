<template>
  <div id="app">
    
    <!-- 匹配主键的坑 -->
    <router-view/>
  </div>
</template>

<style lang="less">
// 字体图标
@import url("//at.alicdn.com/t/font_1426139_jm7n2373nlh.css");
// 全局样式
  *{
    margin: 0;
    padding: 0;
  }
  a{
    // 继承父属性 inherit
    color: inherit;
    text-decoration: none;
  }
  a:hover{
    color:inherit
  }
  ul,li,ol{
    list-style: none;
  }
  i,em{
    font-style: normal;
  }
</style>
