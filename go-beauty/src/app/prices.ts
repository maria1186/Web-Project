export class Prices {
    constructor(
        public category: string,
        public target: string,
        public price: string | number,
        public dds: string,
        public quantity: string | number,
        public specialist: string | number,
        public time?: number | string
    ) { }
}
