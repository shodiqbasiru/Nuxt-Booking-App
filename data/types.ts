export interface IRoom {
    id: number;
    room: string;
    slug: string;
    url: string;
    description: string;
    price: number;
    size: number;
    bedType: string;
    occupancy: number;
    view: string;
    cancellationPolicy: string;
    checkInCheckout: { checkIn: string, checkOut: string };
    smokingPolicy: string;
    petPolicy: string;
    amenity: IAmenity;
    numberOfRooms: number;
    roomNumber: number[];
    availableFrom: string;
    availableTo: string;
}

export interface IAmenity {
    id: number;
    mealPlan: string[];
    services: string[];
    bathroom: string[];
    entertainment: string[];
    roomFeatures: string[];
}

export interface IFacility {
    id: number,
    name: string,
    slug: string,
    description: string,
    url: string,
}