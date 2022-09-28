<template>
    <div class="flexable">
        <div :key="social.form" v-for="social in socials">
            <a :href="social.link" :class="`fa fa-${social.form}`"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Socials-Buttons",
        props:
        {
            socials: Array
        }
    }
</script>