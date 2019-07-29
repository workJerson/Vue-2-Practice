<template>
  <div>
    <table class="table">
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr :key="index" v-for="(user, index) in userDetails">
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <button class="btn btn-primary" @click="showUserDetails(user)">Show Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name : 'CustomTable',
  props:[
    'userDetails',
  ],
  methods: {
    showUserDetails(user) {
      alert(user.first_name);
    }
  },
}
</script>

<style>

</style>
