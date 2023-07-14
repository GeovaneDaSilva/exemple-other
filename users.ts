export class User {
    id: string;
    displayName: string;
    email: string;
    photoURL: string;
    phoneNumber: string;
    about: string;
    block: boolean;
    badge: string;
    lat: number;
    paid: boolean;
    package: string;
    lastName: string;
    service_quantity: number;
    business_quantity: number;
    items_quantity: number;
    combos_quantity: number;
    wallet: number;
    blockers: [];
    language: Language[];
    long: number;
    unseen: [];
    country_flag: string;
    verified: boolean;
    type: string;
    top: boolean;
    joined: number;
    adverts: number;
    coupons: number;
    userId: string;
    fcm_token: string;
    category: string;
    online: boolean;
    latitude: number;
    longitude: number;
    lastSeen: number;
    status: boolean;
    address: string;
    state: string;
    cid: string;
    interest: Interest[];
    typing: boolean;
    geoShow: boolean;
    emailShow: boolean;
    bookmark: Bookmark[];
    notify: boolean;
    IamFollowers: boolean;
    isFollowing: boolean;
    followers: Followers[];
    notifications: Notifications[];
    rankings: Rankings[];
    transactions: Transactions[];
    following: Following[];
    chatlist: Chat[];
    isPro?: boolean;
    isCommunity?: boolean;
  }

  export class Language {
    id: string;
    name: string;
  }

  export class Withdraw {
        id: string;
        amount: number;
        bankaccount: string;
        bankaccount_name: string;
        bankname: string;
        paypalemail: string;
        method: string;
        date: number;
        status: string;
        swiftcode: string;
        userId: string;
  }

  export class Transactions {}

  export class Reviews {
    rate: number;
    text: string;
    time: number;
    userId: string;
}

export class Booking {
  id: string;
  meetingId: string;
  meetingIdExpire: string;
  meetingTime: string;
  phone: string;
  note: string;
  time: number;
  reason: string;
  consultantid: string;
  serviceid: string;
  location: string;
  userId: string;
  bookingdate: string;
  bookingtime: string;
  bookingid: string;
  amount: number;
  name: string;
  payment: string;
  paymentId: string;
  status: string;
}

  export class Interest {}

  export class Followers {
   
  }

  export class Bookmark {
    
  }

  export class Following {
   
  }

  export class Chat {
    chatID: string;
    chatWith: string;
    lastChat: string;
    badgeCount: number;
    inRoom: boolean;
    timestamp: Date
  }

  export class Notifications {
    type: string;
    userId: string;
    date: number;
    postId: string;
    id: number;
    status: number;
    ownerId: string;
  }

  export class Rankings {
    id: string;
    quizid: string;
    date: number;
    wrong: number;
    right: number;
  }