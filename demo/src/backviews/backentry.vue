<template>
    <div class="backentry">
      <header-nav></header-nav>
      <router-view></router-view>
    </div>
</template>
<script>
    import Header from '@/components/header'
    let flags = {
      interest: '感兴趣',
      collection: '个人收藏',
      recommend: '推荐'
    }
    export default {
      data () {
        return {
          flag: ''
        }
      },
      watch: {
        $route () {
          this.flag = flags[this.$route.path.slice(1)]
        }
      },
      beforeRouteEnter (to, from, next) {
        next((vm) => {
          vm.flag = flags[to.path.slice(1)]
        })
      },
      components: {
        headerNav: Header
      }
    }
</script>
<style scoped>
</style>