<template>
  <div class="hm-checkox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HmCheckboxGroup",
  props:{
      value:{
          type:Array
      }
  },
  provide(){
      return{
          CheckboxGroup:this
      }
  }
};
</script>
<style>
</style>