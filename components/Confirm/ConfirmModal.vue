<template>
  <div>
    <div v-if="opened">
      <div class="modal is-address is-background centered-window">
        <div class="inner">
          <span class="close" @click="toggleMessage()"/>
          <h2>{{heading}}</h2>
          <p class="style">
            {{description}}
          </p>
          <br>
          <br>
          <div class="buttons-row">
            <button :disabled="processing" @click="$emit('confirmed')" class="button-primary button-primary--blue toggleOption">Confirm</button>
            <button :disabled="processing" @click="scrollSwitcher(false)" class="button-primary button-primary--green toggleOption">Cancel</button>
          </div>
        </div>
      </div>
      <div class="silkscreen"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    heading:{
      type: String,
      default: 'Please, confirm action'
    },
    description:{
      type: String,
      default: 'Are you sure for confirm this action?'
    },
    processing:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      opened: false
    };
  },
  methods:{
    scrollSwitcher(state) {
      if (state) {
        document.body.style.overflow = 'hidden';
      } else {
        this.send = false;
        this.saved = false;
        document.body.style.overflow = 'auto';
      }
      this.opened = !this.opened;
    },
    toggleMessage(close=false) {
      this.scrollSwitcher(close);
    },
  }
}
</script>
