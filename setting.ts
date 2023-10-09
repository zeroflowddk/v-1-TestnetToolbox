export class Modules {
    static taiko =  true;
    static scroll = false;
    static manta = false;
};

export class Taiko {
    static sleep = 60;
    //bridge taiko setup
    static bridge = false;
    static amountBridgeProcentIn = [10, 20];
    //taiko swap setup
    static swap = false;
    static toToken = 'horse'; // ttkjo
    static amountInProcentDex  = [10,20];
    //dex taiko setup
    static fabric = false;
    static numberTaikoContracts = 1;  
    //dex taiko nft
    static mint = true;
};


export class Scroll {
    static sleep = 60;
    //scroll bridge setup
    static bridge = false;
    static amountInProcent = [5,10]; 
     //dex scroll setup
    static fabric = true;
    static numberScrollContracts = 1;
};


export class Manta {
    static sleep = 60;
    static bridge = true;
    static amountProcentInBridge = [10,20];
};


