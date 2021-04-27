<template>
    <div class="border border-gray-100 rounded-md p-8 m-8 bg-opacity-50 flex">
        <!-- transform transition-all duration-300 ease-in scale-100 -->
        <div class="text-center">
            <img class="avatar m-auto" 
                :src="user.image" 
                :alt="user.name" 
            />
            <h1 class="text-xl mt-2 mb-2 font-semibold">{{user.name}}</h1>
            <p class="italic mt-2 mb-2">"{{user.description}}.</p>
            <div class="socialLink">
                <a v-for="(link, name) in user.links" :key="name+user.name" :href="link" target="_blank" class="p-2 text-grey text-underline">{{name}}</a>
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
        image: {type: String, required: true},
        name: {type: String, required: true},
        description: {type: String, required: true},
        links: {type: Object, required: true},
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