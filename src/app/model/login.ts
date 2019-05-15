export class Tun {
    name: string;
    price: any;
    done: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
