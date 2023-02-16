<template>
    <div class="grid grid-cols-8 w-full ">
        <div class="border-r">
            <h3 class="text-center">t\d</h3>
            <div v-for="i in endTime.getHours() - startTime.getHours()" :key="i">
                <div class="text-right pr-1 relative">
                    <div>{{ i + startTime.getHours() - 1 }}:00</div>
                    <div class="absolute border border-t left-0 top-0 w-screen border-zinc-600"></div>
                </div>
            </div>
        </div>
        <DayComponent :title="`Sun`" :start-time="startTime" :end-time="endTime" :events="events[`Sun`]"/>
        <DayComponent :title="`Mon`" :start-time="startTime" :end-time="endTime" :events="events[`Mon`]"/>
        <DayComponent :title="`Tue`" :start-time="startTime" :end-time="endTime" :events="events[`Tue`]"/>
        <DayComponent :title="`Wed`" :start-time="startTime" :end-time="endTime" :events="events[`Wed`]"/>
        <DayComponent :title="`Thu`" :start-time="startTime" :end-time="endTime" :events="events[`Thu`]"/>
        <DayComponent :title="`Fri`" :start-time="startTime" :end-time="endTime" :events="events[`Fri`]"/>
        <DayComponent :title="`Sat`" :start-time="startTime" :end-time="endTime" :events="events[`Sat`]" class="border-r-0" />
    </div>
</template>

<script setup>
import DayComponent from '@/components/Charts/DayComponent.vue';

const props = defineProps({
    groups: { type: Array, required: true },
    startTime: { type: Date, required: false, default: new Date('1970-01-01 06:00') },
    endTime: { type: Date, required: false, default: new Date('1970-01-01 23:00') },
});

const events = {};
props.groups.forEach(group => {
    group.schedule.forEach(event => {
        event.groupInfo = group;
        if (events[event.day] === undefined) {
            events[event.day] = [];
        }
        events[event.day].push(event);
    })
});
</script>

<style scoped>
</style>