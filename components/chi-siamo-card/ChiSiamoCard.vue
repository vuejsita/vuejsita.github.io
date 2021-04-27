<template>
    <div class="border border-gray-100 rounded-md p-8 m-8 bg-opacity-50 flex justify-center">
        <!-- transform transition-all duration-300 ease-in scale-100 -->
        <div class="text-center">
            <img class="avatar" 
                :src="this.user.imgUrl" 
                alt="Michele Vitiello Bonaventura" 
            />
            <h1 class="text-xl mt-2 mb-2">{{user.name}}</h1>
            <p class="italic mt-2 mb-2">"{{user.shortDescription}}.</p>
            <div class="socialLink">
                <a v-for="(social, k) in user.social" :key="k+social.key" :href="social.link" class="p-2 text-grey rounded-md">{{social.name}}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import  Vue from 'vue'

export default Vue.extend({
    data(){
      return {
          user: Object
      }
    },
    props: {
        imgUrl: {type: String, required: true},
        name: {type: String, required: true},
        shortDescription: {type: String, required: true},
        social: {type: Array, required: true},
    },
    mounted(): void {
        this.user = this.$props;
    },
    methods : {
      
        
    }
})
</script>

<style lang="postcss" scoped>
.avatar{
    @apply rounded-full h-56 w-56 border-4 border-white hover:shadow-lg duration-500 ease-in scale-0;
}

</style>