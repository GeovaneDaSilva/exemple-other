export class Business {
    id: string;
    images: Images[];
    address: string;
    name: string;
    latitude: number;
    longitude: number;
    phone: string;
    description: string;
    review: Review[];
    timeopen: number;
    timeclose: number;
    website: string;
    category: string;
    status: boolean;
    type: string;
    userId: string;
    state: string;
    icon: string;
    star_one: number;
    star_two: number;
    star_three: number;
    star_four: number;
    star_five: number;
    mon_open: number;
    mon_closed: number;
    tue_open: number;
    tue_closed: number;
    wed_open: number;
    wed_closed: number;
    thu_open: number;
    thu_closed: number;
    fri_open: number;
    fri_closed: number;
    sat_open: number;
    sat_closed: number;
    sun_open: number;
    sun_closed: number;
}

export class Images {}

export class Review {}

