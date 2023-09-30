export class Modules {
    static taiko =  true;
    static scroll = false;
    static manta = false;
};



export class Taiko {
    //bridge taiko setup
    static bridge = false;
    static amountBridgeProcentIn = [10, 20];
    //taiko swap setup
    static swap = false;
    static toToken = 'horse'; // ttkjo
    static amountInProcentDex  = [10,20];
    //dex taiko setup
    static fabric = true;
    static numberTaikoContracts = 1;  
};


export class Scroll {
    //scroll bridge setup
    static bridge = false;
    static amountInProcent = [5,10]; 
     //dex scroll setup
    static fabric = true;
    static numberScrollContracts = 1;
};


export class Manta {
    static bridge = true;
    static amountProcentInBridge = [10,20];
};


