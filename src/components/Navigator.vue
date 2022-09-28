<template>
    <div class="flexable">
        <div :key="page.text" v-for="page in pages">
            <a class="highlight" :href="(page.text == 'HOME') ? '../' : '../' + page.text">{{page.text}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigator-Shell",
        props:
        {
            pages: Array,
        }
    }
</script>
