<template>
    <div class="grid grid-cols-8 w-full overflow-hidden">
        <div class="border-r">
            <h3 class="text-center">t\d</h3>
            <div v-for="i in endTime.getHours() - startTime.getHours()" :key="i">
                <div class="text-right pr-1 relative">
                    <div>{{ i + startTime.getHours() - 1 }}:00</div>
                    <div class="absolute border border-t left-0 top-0 w-screen border-zinc-600"></div>
                </div>
            </div>
        </div>
        <DayComponent v-for="(day, i) in days"
                      :key="day"
                      :class="{'border-r-0': i === (days.length-1)}"
                      :end-time="endTime"
                      :schedule="schedule[day]"
                      :start-time="startTime"
                      :title="day" />
    </div>
</template>

<script setup>
import days from '@/store/weekdays.json';
import DayComponent from '@/components/Schedule/DayComponent.vue';

const props = defineProps({
    groups: { type: Array, required: true },
    startTime: { type: Date, required: false, default: new Date('1970-01-01 06:00') },
    endTime: { type: Date, required: false, default: new Date('1970-01-01 23:00') },
    days: { type: Array, required: false, default: () => days },
});

const schedule = {};
props.groups.forEach(group => {
    group.schedule.forEach(event => {
        event.groupInfo = group;
        if (schedule[event.day] === undefined) {
            schedule[event.day] = [];
        }
        schedule[event.day].push(event);
    });
});
</script>

<style scoped>
</style>