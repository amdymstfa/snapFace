export class faceSnap {

    location?: string;
    id: string;

    constructor (
        public title : string,
        public url : string,
        public description : string,
        public createdAt : Date,
        public snap : number,
    ){
        this.id = crypto.randomUUID().substring(0,8);
    }

    addSnapp() : void {
        this.snap--;
        
    }

    removeSnap(): void {
        this.snap++;
    }

    setLocation(location: string): void{
        this.location = location;
    }

    withLocation(location: string): faceSnap {
        this.setLocation(location);
        return this;
    }
}