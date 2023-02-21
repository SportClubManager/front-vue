<template>
    <table-component>
        <template #thead>
            <th class="text-left">Day</th>
            <th class="text-left">Start</th>
            <th class="text-left">End</th>
            <th class="text-right w-20">Actions</th>
        </template>
        <template #tbody>
            <tr>
                <td>
                    <select v-model="newEventDay" :class="{error: newEventDayError}">
                        <option disabled selected value="">Day</option>
                        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                    </select>
                </td>
                <td><input
                    v-model="newEventStart"
                    :class="{error: newEventStartError}"
                    onfocus="this.showPicker()"
                    type="time"></td>
                <td><input
                    v-model="newEventEnd"
                    :class="{error: newEventEndError}"
                    onfocus="this.showPicker()"
                    type="time"></td>
                <td class="text-right">
                    <button class="button button-primary" @click="onEventAdd">+ add</button>
                </td>
            </tr>
            <tr v-for="event in schedule" :key="event.id">
                <td>{{ event.day }}</td>
                <td>{{ event.start }}</td>
                <td>{{ event.end }}</td>
                <td class="text-right">
                    <button class="button button-danger" @click.prevent="onEventDelete(event.id)">delete</button>
                </td>
            </tr>
        </template>
    </table-component>
</template>

<script setup>
import { ref } from 'vue';
import days from '@/store/weekdays.json';
import TableComponent from '@/components/TableComponent.vue';

defineProps({ schedule: { type: Array, required: true } });

const newEventDay = ref('');
const newEventStart = ref('00:00:00');
const newEventEnd = ref('00:00:00');

const newEventDayError = ref(false);
const newEventStartError = ref(false);
const newEventEndError = ref(false);

const emit = defineEmits(['eventDelete', 'eventAdd']);
const onEventDelete = id => emit('eventDelete', id);
const onEventAdd = () => {
    if (newEventDay.value === '') {
        newEventDayError.value = true;
    }
    if (newEventStart.value === '00:00:00') {
        newEventStartError.value = true;
    }
    if (newEventEnd.value === '00:00:00') {
        newEventEndError.value = true;
    }

    setTimeout(() => {
        newEventDayError.value = false;
        newEventStartError.value = false;
        newEventEndError.value = false;
    }, 1000);

    if (!newEventDayError.value && !newEventStartError.value && !newEventEndError.value) {
        emit('eventAdd', {
            day: newEventDay.value,
            start: newEventStart.value,
            end: newEventEnd.value,
        });
        newEventDay.value = '';
        newEventStart.value = '00:00:00';
        newEventEnd.value = '00:00:00';
    }
};
</script>

<style scoped>
.error {
    color: red;
}

select:not(.error), input:not(.error) {
    -webkit-transition: color 1s ease-out;
    -moz-transition: color 1s ease-out;
    -o-transition: color 1s ease-out;
    transition: color 1s ease-out;
}
</style>
