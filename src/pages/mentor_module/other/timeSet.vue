<template>
  <div>
    <x-header>时间设置</x-header>
    <div class="time-set-container">
      <group>
        <calendar
          :readonly="readonly"
          v-model="time"
          title="aaa"
          disable-past
          placeholder="placeholder"
          @on-show="log('show')"
          @on-hide="log('hide')"></calendar>
      </group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "timeSet",
    data() {
      return {
        time: '',
        readonly: false
      }
    },
    methods: {
      log (str) {
        console.log(str)
      },
      onChange (val) {
        console.log('on change', val)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
