
  import { Socket, Channel } from 'phoenix';
  import ChannelHelper from './channelHelper'
  import Vue, { PluginFunction, WatchOptions } from 'vue'
  declare module "vue/types/vue" {
    interface Vue {
      $channelHelper: ChannelHelper
      $channel: Channel
      $socket: Socket
      $initChannel: (channelName: string, params?: object) => void
    }
  }
  declare module "vue/types/options" {
    interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
      phoenix?: { 
        [channelName: string] : ObeyOption
      } | ObeyOption
    }
  }
  interface ObeyOption {
    [eventName: string]: (response: any) => any
  }


