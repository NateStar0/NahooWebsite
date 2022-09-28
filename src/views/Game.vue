<template>
    <div>
        <div v-for="game in games" :key="game.name">
            <iframe v-if="game.name == this.$route.path.split('/').slice(-1)[0]" :src="game.src" frameborder="0" class="big"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "Game-page",
    props:
    {
        games: Array,
        current_game: String
    }
}
</script>
