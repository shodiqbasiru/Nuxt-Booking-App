export function useBooking() {
    const checkIn = ref<string>('');
    const checkOut = ref<string>('');
    const guests = ref<number>(0);


    return {
        checkIn,
        checkOut,
        guests,
    };
}