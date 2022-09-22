import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsFilterStore = defineStore('DestinationCities', () => {

    let DestinationCities = ref([
        { id: 1, name: 'Turkey', isActive: true },
        { id: 2, name: 'Namibia', isActive: true },
        { id: 3, name: 'New Mexico', isActive: true },
    ]);

    function removeCity(key) {
        let toogleDestionation = DestinationCities.value.find((item) => item.id == key);
        toogleDestionation.isActive = !toogleDestionation.isActive;
    }

    let ActiveCities = DestinationCities.value.filter(city => city.isActive);

    return { DestinationCities, removeCity, ActiveCities }
})
