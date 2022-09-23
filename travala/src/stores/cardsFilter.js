import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsFilterStore = defineStore('DestinationCities', () => {

    let DestinationCities = ref([
        { id: 1, name: 'Turkey', isActive: true },
        { id: 2, name: 'Namibia', isActive: true },
        { id: 3, name: 'New Mexico', isActive: true },
    ]);

    const FilteredDestinationCities = computed(
        () => {
            return DestinationCities.value.filter((city) => {
                return city.isActive;
            });
        }
    );

    function removeCity(key) {
        let toogleDestionation = DestinationCities.value.find((item) => item.id == key);
        toogleDestionation.isActive = !toogleDestionation.isActive;
    }
    
    return { DestinationCities, removeCity, FilteredDestinationCities }
})
