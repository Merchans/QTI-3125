import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsFilterStore = defineStore('DestinationCities', () => {

    let DestinationCities = ref([

        'Turkey',
        'Namibia',
        'New Mexico',

    ]);

    function removeCity(key) {
        DestinationCities.value = DestinationCities.value.filter(
            (item, index) => index !== key
        );
    }


    //   const SelectedDestinationCities = DestinationCities.filter()

    return { DestinationCities, removeCity }
})
