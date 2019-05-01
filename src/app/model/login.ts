export class Tun {
    name: string;
    price: any;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
