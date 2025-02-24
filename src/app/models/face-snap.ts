import { snapType } from "./snap-type.type";

export class faceSnap {

    location?: string;
    id: string;

    constructor (
        public title : string,
        public url : string,
        public description : string,
        public createdAt : Date,
        public snaps : number,
    ){
        this.id = crypto.randomUUID().substring(0,8);
    }

    snapss(snapType: snapType){
        if (snapType === 'Snap'){
            this.addSnapp();
        }else if (snapType === 'Ooups'){
            this.removeSnap();
        }
    }

    addSnapp() : void {
        this.snaps++;
        
    }

    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void{
        this.location = location;
    }

    withLocation(location: string): faceSnap {
        this.setLocation(location);
        return this;
    }
}