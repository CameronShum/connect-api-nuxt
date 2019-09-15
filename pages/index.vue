<template>
  <div class="container">
    <div class="button" @click="googleSignIn">
      <p class="title">
        Connect to Firebase
      </p>
    </div>
    {{ user }}
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { auth } from '~/plugins/fireDatabase'

export default {
  // async asyncData ({ googleSignIn }) {
  // const user = await googleSignIn
  // return { user }
  // },

  data: () => ({ user: firebase.auth().currentUser.uid }),

  methods: {
    // async getWifi () {
    //   console.log(await fireDatabase.getWifi('ZJD1Q307WSf5y48gw1FCTT5oGkv2'))
    // },

    async googleSignIn () {
      this.provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth()
      await auth.signInWithPopup(this.provider).then(function (result) {
        // The signed-in user info.
        this.user = result.user.uid
      }).catch(function (error) {
        const errorMessage = error.message
        const credential = error.credential
        return ({ errorMessage, credential })
      })
    }

  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  display: flex;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button {
  width: 500px;
  height: 150px;
  background-color: tomato;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  display:flex;
  align-items:center;
  justify-content:center;
}

.button:hover{
  width: 100%;
  height: 150px;
  /*opacity: 0.4; */
}
</style>
