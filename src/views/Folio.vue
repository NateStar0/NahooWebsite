<template>
    <div >
        <div :key="game.name" v-for="(game, index) in games" :class="(index % 2) == 0 ? 'big light' : 'big dark'">
            <header>
                <img :src="require(`@/assets/${game.img}`)" :alt="game.name" class="title" />
                <h1> {{game.name}} </h1>
                <div class="subtitle"> {{game.description}} </div>        
                <br><a :href="`/GAME/${game.name}`">Play</a>
            </header>
        </div>
    </div>
</template>

<script>
export default {
 name: "Portflio-page",
 props:
 {
    games: Array
 }
}
</script>

