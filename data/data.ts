import Room1 from "~/assets/images/room-1.jpg";
import Room2 from "~/assets/images/room-2.jpg";
import Room3 from "~/assets/images/room-3.jpeg";
import Room4 from "~/assets/images/room-4.jpg";
import Room5 from "~/assets/images/room-5.jpg";
import Room6 from "~/assets/images/room-6.jpeg";
import Room7 from "~/assets/images/room-7.jpg";
import Room8 from "~/assets/images/room-8.jpg";
import Facility1 from "~/assets/images/sp.jpg";
import Facility2 from "~/assets/images/rh.jpg";
import Facility3 from "~/assets/images/gym.jpg";
import Facility4 from "~/assets/images/billiard.jpg";
import Facility5 from "~/assets/images/meeting.jpg";
import Facility6 from "~/assets/images/business-center.jpg";
import Facility7 from "~/assets/images/adventure-kids.jpg";
import Facility8 from "~/assets/images/spa.jpg";
import type {IFacility, IRoom} from "~/data/types";


export const getRooms = (): IRoom => {
    return [
        {
            id: 1,
            room: "Deluxe Room",
            slug: "deluxe-room",
            url: Room1,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 200,
            size: 35,
            bedType: "Queen",
            occupancy: 2,
            view: "City View",
            cancellationPolicy: "Free cancellation up to 24 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets not allowed",
            amenity: {
                id: "1",
                mealPlan: ["Breakfast"],
                services: ["Room Service", "Daily Housekeeping"],
                bathroom: ["shower"],
                entertainment: ["TV", "Satellite Channels"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                ],
            },
            numberOfRooms: 5,
            roomNumber: [101, 102, 103, 104, 105],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        },
        {
            id: 2,
            room: "Deluxe Balcony Room",
            slug: "deluxe-balcony-room",
            url: Room2,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 250,
            size: 40,
            bedType: "King",
            occupancy: 2,
            view: "Sea View",
            cancellationPolicy: "Free cancellation up to 24 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets not allowed",
            amenity: {
                id: 2,
                mealPlan: ["Breakfast", "Coffee & Tea"],
                services: ["Room Service", "Daily Housekeeping"],
                bathroom: ["shower"],
                entertainment: ["TV", "Satellite Channels"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                ],
            },
            numberOfRooms: 5,
            roomNumber: [201, 202, 203, 204, 205]
        },
        {
            id: 3,
            room: "Superior Room",
            slug: "superior-room",
            url: Room3,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 300,
            size: 45,
            bedType: "Queen",
            occupancy: 3,
            view: "Garden View",
            cancellationPolicy: "Non-refundable",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets not allowed",
            amenity: {
                id: 3,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner"],
                services: ["Room Service", "Daily Housekeeping", "Laundry Service"],
                bathroom: ["shower", "bathtub", "Hairdryer"],
                entertainment: ["HD TV", "Satellite Channels"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                ],
            },
            numberOfRooms: 5,
            roomNumber: [301, 302, 303, 304, 305],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        },
        {
            id: 4,
            room: "Studio Room",
            slug: "studio-room",
            url: Room4,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 350,
            size: 50,
            bedType: "King",
            occupancy: 2,
            view: "City View",
            cancellationPolicy: "Free cancellation up to 48 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets allowed with extra charge",
            amenity: {
                id: 4,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner"],
                services: ["Room Service", "Daily Housekeeping", "In-Room Massage"],
                bathroom: ["shower", "Hairdryer", "Bathrobe", "Shaver outlet"],
                entertainment: ["HD TV", "Satellite Channels", "DVD Player"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                    "Safety Deposit Box",
                ],
            },
            numberOfRooms: 5,
            roomNumber: [401, 402, 403, 404, 405],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        },
        {
            id: 5,
            room: "Premier Room",
            slug: "premier-room",
            url: Room5,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 400,
            size: 55,
            bedType: "King",
            occupancy: 2,
            view: "Sea View",
            cancellationPolicy: "Free cancellation up to 72 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets not allowed",
            amenity: {
                id: 5,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner"],
                services: ["Room Service", "Daily Housekeeping", "Laundry Service", "In-Room Massage"],
                bathroom: ["shower", "Hairdryer", "Bathrobe", "Shaver outlet"],
                entertainment: ["HD TV", "Satellite Channels", "DVD Player", "Netflix"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                    "Safety Deposit Box",
                    "Tea/Coffee Maker",
                    "Refrigerator",
                ],
            },
            numberOfRooms: 2,
            roomNumber: [501, 502, 503, 504, 505],
            availableFrom: "2024-09-06",
            availableTo: "2024-09-10"
        },
        {
            id: 6,
            room: "Premier Balcony Room",
            slug: "premier-balcony-room",
            url: Room6,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 450,
            size: 60,
            bedType: "King",
            occupancy: 3,
            view: "Sea View",
            cancellationPolicy: "Free cancellation up to 48 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets not allowed",
            amenity: {
                id: 6,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner", "Lunch"],
                services: ["Room Service", "Daily Housekeeping", "Laundry Service", "In-Room Massage", "Valet Parking", "Breakfast in Bed"],
                bathroom: ["shower", "Hairdryer", "Bathrobe", "Shaver outlet", "Slippers"],
                entertainment: ["HD TV", "Satellite Channels", "DVD Player", "Netflix", "PlayStation"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                    "Safety Deposit Box",
                    "Tea/Coffee Maker",
                    "Refrigerator",
                    "Microwave",
                ],
            },
            numberOfRooms: 3,
            roomNumber: [601, 602, 603],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        },
        {
            id: 7,
            room: "Family Suite",
            slug: "family-suite",
            url: Room7,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 500,
            size: 70,
            bedType: "King",
            occupancy: 4,
            view: "Mountain View",
            cancellationPolicy: "Non-refundable",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets allowed with extra charge",
            amenity: {
                id: 7,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner", "Lunch", "Snacks"],
                services: ["Room Service", "Daily Housekeeping", "Laundry Service", "Car Rental Service", "Valet Parking", "Breakfast in Bed", "Wi-Fi Premium"],
                bathroom: ["shower", "Hairdryer", "Bathrobe", "Shaver outlet", "Slippers"],
                entertainment: ["HD TV", "Satellite Channels", "DVD Player", "Netflix", "PlayStation", "Apple TV", "Sound System", "Board Games"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                    "Safety Deposit Box",
                    "Tea/Coffee Maker",
                    "Refrigerator",
                    "Microwave",
                    "Dining Area",
                    "Dining Table",
                    "Outdoor Furniture",
                    "Outdoor Dining Area",
                    "Balcony",
                ],
            },
            numberOfRooms: 2,
            roomNumber: [701, 702],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        },
        {
            id: 8,
            room: "Gallery Suite",
            slug: "gallery-suite",
            url: Room8,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
            price: 550,
            size: 75,
            bedType: "King",
            occupancy: 4,
            view: "Panoramic View",
            cancellationPolicy: "Free cancellation up to 72 hours before check-in",
            checkInCheckOut: {checkIn: "14:00", checkOut: "12:00"},
            smokingPolicy: "Non-Smoking",
            petPolicy: "Pets allowed with extra charge",
            amenity: {
                id: 8,
                mealPlan: ["Breakfast", "Coffee & Tea", "Dinner", "Lunch", "Snacks"],
                services: ["Room Service", "Daily Housekeeping", "Laundry Service", "Car Rental Service", "Valet Parking", "Breakfast in Bed", "Wi-Fi Premium", "In-Room Massage"],
                bathroom: ["shower", "Hairdryer", "Bathrobe", "Shaver outlet", "Slippers", "Toiletries", "Towels"],
                entertainment: ["HD TV", "Satellite Channels", "DVD Player", "Netflix", "PlayStation", "Apple TV", "Sound System", "Board Games", "Books", "Magazines"],
                roomFeatures: [
                    "Air Conditioning",
                    "Heating",
                    "Soundproofing",
                    "Desk",
                    "Carpeted",
                    "Sofa",
                    "Wardrobe or closet",
                    "Clothes rack",
                    "Trash cans",
                    "Socket near the bed",
                    "Adapter",
                    "Non-feather pillow",
                    "Ironing Facilities",
                    "Safety Deposit Box",
                    "Tea/Coffee Maker",
                    "Refrigerator",
                    "Microwave",
                    "Dining Area",
                    "Dining Table",
                    "Outdoor Furniture",
                    "Outdoor Dining Area",
                    "Balcony",
                    "Jacuzzi",
                ],
            },
            numberOfRooms: 2,
            roomNumber: [801, 802],
            availableFrom: "2024-09-03",
            availableTo: "2024-09-10"
        }
    ]
};

export const getFacilities = (): IFacility => {
    return [
        {
            id: 1,
            name: "Swimming Pool",
            slug: "swimming-pool",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility1
        },
        {
            id: 2,
            name: "Restaurant & Bar",
            slug: "restaurant-bar",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility2
        },
        {
            id: 3,
            name: "Spa & Wellness",
            slug: "spa-wellness",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility8
        },
        {
            id: 4,
            name: "Fitness Center",
            slug: "fitness-center",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility3
        },
        {
            id: 5,
            name: "Meeting Room",
            slug: "meeting-room",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility5
        },
        {
            id: 6,
            name: "Business Center",
            slug: "business-center",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility6
        },
        {
            id: 7,
            name: "Billiard Room",
            slug: "billiard-room",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility4
        },
        {
            id: 8,
            name: "Kids Adventure Club",
            slug: "kids-adventure-club",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.`,
            url: Facility7
        }
    ]
}
