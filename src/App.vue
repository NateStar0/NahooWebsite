<template>
  <div>
    <router-view :currentTweet="currentTweet" :socials="socials" :games="games"/>
    <Navigator :pages="pages" />
  </div>
</template>

<script>
import Navigator from "./components/Navigator" 

export default {
  name: 'App',
  components: 
  {
    Navigator
  },

  data()
  {
    return {
      loadTweet: false,
      currentTweet: "Dreaming of Silver, Please stand by.",
      pages: [{ text : "HOME" }, { text : "PORTFOLIO" }],
      socials: [{ form : "twitter", link : "https://twitter.com/NateStar001"}, ],
      games: 
      [
        { 
          name: "Konsnat", 
          description: "A procedurally generated infinite runner for speedrunning and technical experimentation alike.", 
          src: "../game/kons/index.html",
          img: "Konsnat.png"
        },
      ],
    }
  },

  created()
  {
    if(this.loadTweet)
    {
      //API call (version 2, from NateStar001's user ID, calling for 5 tweets (the minimum))
      fetch('https://ctvf-cors.herokuapp.com/https://api.twitter.com/2/users/1267712538650611714/tweets?max_results=5',
            {
                headers:
                {
                    'Content-type' : 'application/json',
                    'User-Agent':'Nahoo',
                    'Access-Control-Allow-Origin': "*",
                    Authorization : 'Bearer ' + process.env.VUE_APP_TOKEN
                },
                method: "GET",
                mode: 'cors'
            })
            .then((response) => response.json())
            .then((data) => { this.currentTweet = data.data[0].text; });
    }
  }
}
</script>

<style>

/*

    PRIMARY CSS FILE FOR NAHOO.DEV!

    BY NAHOO (WHO COULDVE THOUGHT!)
*/

:root
{
    /*

        GAMEBOY COLOURS

    --background-colour: rgb(134, 192, 108);
    --text-colour: rgb(7, 57, 33);
    --highlight-colour: rgb(224, 248, 207);
    */

    --background-colour: #FFFFFF;
    --text-colour: #000;
    --highlight-colour: #888888;/*#AAAAAB;*/
    --hightlight-major-color: #AAAAAB;
    --contrast-colour: #555555;
}

html, body
{
  font-family: 'Montserrat'; font-size: 16px;
  text-align: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
  background-size: stretch;
	height: 100%;
	width: 100%;
	margin: 0;
	
	perspective: 1px;
	transform-style: preserve-3d;
  overflow-x: hidden;

  background-color: var(--background-colour);
  list-style-type: none;
}

img
{
    max-width: 100%;
    max-height: 100%;
}

.big
{
    height: 100vh;
}

.light 
{
  background-color: var(--background-colour);
}

.dark
{
  background-color: #dddddd;
}

header
{
    width: 100%;
    padding-top: 5%;
    padding-bottom: 2%;

    max-height: 100%;

    color: var(--text-colour);
}

.fa 
{
    margin: 2vw;
    padding: 16px;
    font-size: 16px;
    width: 16px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    color: var(--background-colour);
    background-color: var(--text-colour);
}

.flexable 
{
  display: flex;
  justify-content: center;
	align-items: center;
}

.title 
{
	font-size: 20vw;

  max-width: 100%;
  max-height: 100%;

  color: var(--text-colour);
}

img.title
{
    width: auto;
    max-width: auto;
    height: 120%;
    max-height: 120%;
}

p, a
{
  padding-left: 1vh;
  padding-right: 1vh;
  text-decoration: none;
}

.highlight
{
    color: var(--highlight-colour);
    cursor: pointer;
}

p.highlight:hover
{
    color: var(--hightlight-major-color);
}

iframe
{
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
}

iframe[seamless] 
{
    display: block;
}

canvas 
{
    image-rendering: optimizeSpeed;
    -webkit-interpolation-mode: nearest-neighbor;
    -ms-touch-action: none;
    touch-action: none;
    margin: 0px;
    padding: 0px;
    border: 0px;
}

:-webkit-full-screen #canvas 
{
    width: 100%;
    height: 100%;
}

</style>
