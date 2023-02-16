<template>
    <div ref="dayColumn" class="border-r">
        <h3 class="text-center">{{ title }}</h3>
        <div v-if="isMounted" class="relative">
            <div v-for="e in events"
                 :key="e.groupInfo.id"
                 :style="{'top': e.top + 'px', 'height': e.height + 'px', 'background-color': e.groupInfo.color}"
                 class="left-0 right-0 mx-auto bg-red-400 w-2/3 absolute opacity-50"
            ></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isMounted = ref(false);

const props = defineProps({
    title: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    events: { type: Array, required: false, default: () => [] },
});

let events = ref(props.events);

const dayColumn = ref(null);

onMounted(() => {
    let columnDuration = Math.ceil(Math.abs(props.endTime - props.startTime) / (1000 * 60));
    let columnHeight = dayColumn.value.clientHeight - dayColumn.value.querySelector('h3').clientHeight;

    props.events.forEach((e, i, a) => {
        let eventStartTime = new Date('1970-01-01 ' + e.start);
        let eventEndTime = new Date('1970-01-01 ' + e.end);
        let eventDuration = Math.ceil(Math.abs(eventEndTime - eventStartTime) / (1000 * 60));
        let eventStartPositionMinutes = Math.ceil(Math.abs(eventStartTime - props.startTime) / (1000 * 60));

        a[i].top = Math.ceil((columnHeight * eventStartPositionMinutes) / columnDuration);
        a[i].height = Math.ceil((columnHeight * eventDuration) / columnDuration);
    });

    isMounted.value = true;
});

</script>

<style scoped>
</style>