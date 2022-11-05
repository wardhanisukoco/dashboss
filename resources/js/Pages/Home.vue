<template>
    <div class="d-flex justify-content-center" style="min-height: 50vh;">
        <div class="m-auto">
            <p class="text-center">
                {{ content }}
            </p>
            <h1 class="logo">
                DASHBOSS
            </h1>
        </div>
    </div>
</template>


<script>

import LayoutApp from '@/Layouts/App.vue';
export default {
    layout: LayoutApp,
    props: {
        content: String
    }
}
</script>
