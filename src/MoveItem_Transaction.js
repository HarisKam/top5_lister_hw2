import jsTPS_Transaction from "./jsTPS";


/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveItem_Transaction extends jsTPS_Transaction {
    constructor(initModel, initOld, initNew) {
        super();
        this.model = initModel;
        this.oldItemIndex = initOld;
        this.newItemIndex = initNew;
    }

    doTransaction() {
        this.model.swapItem(this.oldItemIndex, this.newItemIndex);
    }
    
    undoTransaction() {
        this.model.swapItem(this.newItemIndex, this.oldItemIndex);
    }
}