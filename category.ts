export class Category {
    id: string;
    name: string;
    description: string;
    image: string;
    able: boolean;
}

export class Quiz {
    id: string;
    name: string;
    state: string;
    description: string;
    category: string;
    price: number;
    status: string;
    time: number;
    taken: number;
    users: Users[];
    questions: Questions[];
}

export class Users {

}

export class  Questions {
    id: string;
    question: string;
    image: string;
    options: Options[];
}

export class Options {

}