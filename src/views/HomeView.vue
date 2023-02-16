<template>
    <h1>Hello World!</h1>
    <p>This is home page :)</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet commodi deleniti dicta, dolore eligendi eveniet ex facilis harum mollitia neque nihil, non officiis pariatur quia saepe sed, sint ullam?</p>
    <WeeklyScheduleView/>
</template>

<script>
import { defineComponent } from 'vue';
import WeeklyScheduleView from '@/views/WeeklyScheduleView.vue';

export default defineComponent({
    components: { WeeklyScheduleView },
});
</script>
