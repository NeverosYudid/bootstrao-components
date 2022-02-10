<template>
  <div>
    <b-button @click="alertUser" size="lg" variant="outline-primary">
      Hello, click me!
    </b-button>
    <b-alert v-show="showAlert" show dismissible> {{ name }}! </b-alert>

    <div>
      <b-img
        src="https://picsum.photos/1024/400/?image=41"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>

    <div class="text-center">
      <b-button variant="primary">
        Notifications <b-badge variant="light">4</b-badge>
      </b-button>
    </div>

    <div>
      <b-button-toolbar
        aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
          <b-button>New</b-button>
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
        </b-button-group>
        <b-dropdown class="mx-1" right text="menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
        <b-button-group class="mx-1">
          <b-button>Save</b-button>
          <b-button>Cancel</b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      name: "This is dismissible alert",
      showAlert: false,
    };
  },
  methods: {
    alertUser() {
      return (this.showAlert = true);
    },
  },
};
</script>

