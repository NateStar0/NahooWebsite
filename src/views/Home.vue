<template>
    <header class="light">
      <div class="title"> Nahoo </div>   
      <div class="subtitle" id="tweetpoint"> {{currentTweet}}</div> 
      <Socials :socials="socials" />
    </header>
</template>

<script>

import Socials from "../components/Socials"

export default {
 name: "Home-page",
 components: {
    Socials
  },
  props:
        {
            socials: Array,
            currentTweet: String
        },
}
</script>
