export class faceSnap {

    location?: string;

    constructor (
        public title : string,
        public url : string,
        public description : string,
        public createdAt : Date,
        public snap : number,
    ){

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