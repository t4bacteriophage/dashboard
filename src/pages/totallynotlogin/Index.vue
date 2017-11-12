<template>
  <v-layout>
    <v-card contextual-style="dark">
       <div slot="body">Hello, world! </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import VLayout from '@/layouts/Minimal';
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'totallynotlogin-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
