import { Socket } from 'phoenix'
import Vue, { PluginObject, VueConstructor } from 'vue'
import ChannelKeeper from './channelKeeper'
import VuePhoenixMixin from './mixin'

export * from './obey'

export default class VuePhoenix implements PluginObject<string> {
  public socket: Socket
  constructor(socket: string | Socket, params?: Record<string, unknown>) {
    this.socket =
      socket instanceof Socket
        ? socket
        : new Socket(socket, {
            params
          })
  }
  public install(localVue: VueConstructor<Vue>): void {
    Vue.prototype.$socket = this.socket
    Vue.prototype.$channelKeeper = new ChannelKeeper(this.socket)
    Vue.prototype.$vuePhoenix = this
    localVue.mixin(VuePhoenixMixin)
    this.socket.connect()
  }
}
