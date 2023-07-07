<template>
    <main class="breadcrumb">
        <div class="breadItem" v-for="item ,index in path " :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" v-if="index>0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
            <RouterLink  :to="`${item.path}`">
                {{ item.label }}
                
            </RouterLink>
        </div>
        
    </main>
</template>

<script setup>
import {RouterLink} from 'vue-router'

const props=defineProps({
    path:{
        type:Array,
        default: () => ([
        { 
            label: 'Home', 
            path: '/' 
        }
        ]
        
        )
    }
})
</script>

<style lang="scss" scoped>
.breadcrumb{
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .breadItem{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
            color: white;
            font-size: 2rem;
            &:hover{
                text-decoration: underline;
            }
        }
        svg{
            --size:1.7rem;
            width: var(--size);
            height: var(--size);
        }
    }
}
</style>