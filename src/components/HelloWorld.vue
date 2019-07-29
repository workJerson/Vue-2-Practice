<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ apiData.name }}</h3>
    <CustomTable :user-details="myArray"/>
  </div>
</template>

<script>
import CustomTable from './CustomTable.vue'

export default {
  name: 'HelloWorld',
  props: [
    'msg',
    'apiData'
  ],
  components: {
    CustomTable,
  },
  data() {
    return {
      myArray: [],
    };
  },
  computed: {

  },
  mounted() {
    this.myArray = [
      {
        first_name: 'Jerson',
        last_name: 'Baltazar'
      },
      {
        first_name: 'Randhall',
        last_name: 'Timtiman'
      },
    ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
