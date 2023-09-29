export class Modules {
    static taiko: true;
    static scroll: true;
    static manta: true;
};



export class Taiko {
    //bridge taiko setup
    static amountBridgeProcentIn = [10, 20];
    //taiko swap setup
    static amountInProcentDex  = [10,20];
    static swapPath = ['eth', 'horse', 'ttkjo']
    //dex taiko setup
    static numberTaikoContracts = 5;  
};


export class Scroll {
    //scroll bridge setup
    static amountInProcent = [10,15]; 
     //dex scroll setup
    static numberScrollContracts = 5;
};


export class Manta {
    static amountProcentInBridge = [10,20];
};


