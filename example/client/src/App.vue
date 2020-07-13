<template>
  <div id="app">
    <v-app>
      <v-form ref="form" @keyup.native.enter="handleSubmit">
        <div>
          <v-list ref="list" class="message-list" two-line subheader>
            <v-subheader>Message list:</v-subheader>
            <v-list-item v-for="(history, index) in historyList" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ history.sender }}</v-list-item-title>
                <v-list-item-subtitle>{{ history.message }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <v-divider></v-divider>
        <v-layout class="send-box" mx-3 row wrap>
          <v-flex xs12 sm6>
            <v-text-field v-model="sender" label="Your Name" maxlength="20"></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field v-model="message" label="Message"></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-btn class="float-right" @click.native.stop="handleSubmit">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Obey } from '@vip30/vue-phoenix'
import { Component, Vue } from 'vue-property-decorator'
import {
  VApp,
  VCard,
  VForm,
  VList,
  VLayout,
  VSubheader,
  VDivider,
  VFlex,
  VTextField,
  VBtn,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle
} from 'vuetify/lib'
@Component({
  components: {
    VApp,
    VCard,
    VForm,
    VLayout,
    VList,
    VSubheader,
    VDivider,
    VFlex,
    VTextField,
    VBtn,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle
  }
})
export default class App extends Vue {
  public sender = ''
  public message = ''
  public historyList: object[] = []
  public $refs: any
  public handleSubmit() {
    this.$channel.push('shout', {
      message: this.message,
      sender: this.sender
    })
    this.message = ''
  }

  @Obey('shout')
  public onShout(payload: object) {
    this.historyList.push(payload)
    this.$nextTick(() => {
      this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight
    })
  }

  public created() {
    this.$initChannel('room:lobby')
  }
}
</script>

<style lang="css">
/* @import '~vuetify/src/styles/main'; */
.message-list {
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.send-box {
  height: 20vh;
}

.float-right {
  float: right;
}
</style>
