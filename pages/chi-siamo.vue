<template>
<div>
    <h1 class="text-center">Chi Siamo</h1>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 justify-center">
        <!-- TODO v-for for About card-->
        <ChiSiamoCard v-bind="user[0]" />
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
// import ChiSiamoCard from '@/components/chi-siamo-card/ChiSiamoCard.vue';
export default Vue.extend({
    data() {
        return {
            user : [{
                name: "Michele Vitiello Bonaventura",
                shortDescription: "Short Description",
                imgUrl: "http://mvbdev.cloud/images/mio.jpg",
                social: [
                    {name: 'instagram', link: 'instagram.com/thedarkknight197'},
                    {name:'linkedin' , link: 'linkedin.com'},
                    {name:'github', link: 'github.com/thedarkknight197'},
                ]
            }]
        }
    }
})
</script>