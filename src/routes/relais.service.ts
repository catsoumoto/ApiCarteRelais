export class RelaisService {

    constructor() {
    }

    public active = (_req, res) => {
        console.log("active");
        res.status(200).json("OK");
    };
}