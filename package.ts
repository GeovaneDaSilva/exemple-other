export class Package {
    id: string;
    price: number;
    discount_price: number;
    category: string;
    description: string;
    businessEnable: boolean;
    Qrcode: boolean;
    month: string;
    title: string;
    map: boolean;
    advert_quantity: number;
    booking_quantity?: number;
    business_quantity: number;
    service_quantity: number;
    chatEnable: boolean;
    videoEnable: boolean;
    business: boolean;
    coupons: number;
    combo: boolean;
    items: boolean;
    combo_quantity: number;
    items_quantity: number;
    image: string;
    status: string;
    top: boolean;
    payment_outside: boolean;
    payment_withinapp: boolean;
}

export class Advert {
    id: string;
    title: string;
    image: string;
    status: boolean;
    startDate: number;
    type: string;
    serviceId: string;
    userId: string;
    expire: string;
    url: string;
}