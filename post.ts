

export class Post {
    id: string;
    userId: string;
    date: number;
    postedDate: number;
    color: string;
    reactions: Reactions[];
    bookmarks: Bookmarks[];
    quote: string;
    reactionLength: number;
    category: string;
    status: boolean;
    type: string;
    gif: string;
    voters: Voters[];
    contender: Contender[];
    description: string;
    image: Image[];
    showMore: boolean;
    postId: string;
    question: string;
    state: string;
    expire: number;
    contenderId: string;
    haveIvoted: boolean;
    haveILiked: boolean;
    emoji: string;
    haveIbooked: boolean;
    comments: Comments[];

    posterId: string;
    dateShared: number;
    shared: boolean;
    
  }

  export class Image {}

  export class Service {
    id: string;
    name: string;
    image: string;
    able: boolean;
    map: boolean;
    category: string;
    reason: string;
    office: string;
    images: Images[];
    youtubelink: string;
    payment: string;
    zipcode: string;
    phone: string;
    time: string;
    charges: string;
    package: string;
    items: boolean;
    combo_quantity: number;
    items_quantity: number;
    top: boolean;
    state: string;
    customers: Customer[];
    userId: string;
    available: Available[];
    coupons: Coupons[];
    language: Language[];
    title: string;
    description: string;
    star_one: number;
    star_two: number;
    star_three: number;
    notify: string;
    star_four: number;
    star_five: number;
    lat: number;
    long: number;
    online: string;
  }


  export class Images {}
  export class Language {
    id: string;
    name: string;
  }
  export class Coupons {}
  export class Customer {}

  export class Available {
    id: string;
    day: string;
    dayname: string;
    enable: boolean;
    time: string;
    compare: string;
  }

  export class Servicecat {
    id: string;
    name: string;
    image: string;
    icon: string;
    certificate: boolean;
    enableCertificate: boolean;
    enableDocument: boolean;
    enableIdCard: boolean;
  }

  export class Reactions {
    emoji: string;
    userId: string;
  }

  export class Bookmarks {}

  export class Voters {
    voterId: string;
    contenderId: string;
  }

  export class Contender {
    Id: string;
    name: string;
    count: number;
  }

  export class Comments {
    id: number;
    text: string;
    userId: string;
    date: number;
    postId: string;
    repliesLength: number;
    repliesList: Replies[];
    likes: Likes[];
    likesCount: number;
  }

  export class Likes {}

  export class Replies {
    userId: string;
    date: number;
    id: number;
    text: string;
  }


  export class Resolution {
    id: string;
    messages: Messages[];
    status: string;
    date: number;
  }

  export class Messages {

  }