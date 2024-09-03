import {getRooms} from "~/data/data";
import type {IRoom} from "~/data/types";

export const useRoom = () => {
    const rooms = reactive<IRoom[]>([]);

    const fetchRooms = async () => {
        const data = await getRooms()
        rooms.push(...data);
    }

    return {
        data: {rooms},
        methods: {fetchRooms},
    };
}