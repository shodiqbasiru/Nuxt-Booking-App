import type {IFacility} from "~/data/types";
import {getFacilities} from "~/data/data";

export const useFacility = () => {
    const facilities = reactive<IFacility[]>([]);

    const fetchFacilities = async () => {
        const data = await getFacilities()
        facilities.push(...data);
    }

    return {
        data: {facilities},
        methods: {fetchFacilities},
    };
}