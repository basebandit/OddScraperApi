<template>
  <v-flex :class="colClasses">
    <fullscreen ref="fullscreen">
      <div class="app-card" :class="[customClasses, { 'd-none': close }]">
        <app-card-heading :heading="heading" :closeable="closeable" :reloadable="reloadable" :fullScreen="fullScreen" @onCollapse="onCollapse"
          @onReload="onReload" @onClose="onClose">
        </app-card-heading>
        <app-card-content :extraClass="[contentCustomClass]" :fullBlock="fullBlock">
          <slot></slot>
        </app-card-content>
        <app-card-footer v-if="footer">
          <slot name="footer"></slot>
        </app-card-footer>
        <app-section-loader :status="reload"></app-section-loader>
      </div>
    </fullscreen>
  </v-flex>
</template>

<script>
  import AppCardHeading from './AppCardHeader'
  import AppCardFooter from './AppCardFooter'
  import AppCardContent from './AppCardContent'
  import AppSectionLoader from './AppSectionLoader'

  export default {
    props: [
      'heading',
      'colClasses',
      'customClasses',
      'fullBlock',
      'contentCustomClass',
      'closeable',
      'reloadable',
      'fullScreen',
      'footer'
    ],
    data () {
      return {
        reload: false,
        close: false
      }
    },
    components: {
      AppCardHeading,
      AppCardFooter,
      AppCardContent,
      AppSectionLoader
    },
    methods: {
      onCollapse () {
        this.$refs['fullscreen'].toggle()
      },
      onReload () {
        this.reload = true
        let self = this
        setTimeout(() => {
          self.reload = false
        }, 1500)
      },
      onClose () {
        this.close = true
      }
    }
  }
</script>
