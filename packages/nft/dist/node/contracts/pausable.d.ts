import { SmartContract, Field } from "o1js";
export { PausableContract, PauseEvent };
/**
 * The **PausableContract** interface provides a mechanism to dynamically enable or disable
 * certain functionalities within smart contracts. It extends the `SmartContract` class
 * and introduces methods that allow a contract to be paused and resumed, which is crucial
 * for managing emergencies, upgrades, or maintenance periods.
 *
 * By implementing the PausableContract interface, contracts gain greater control over their
 * operational states, enhancing security and flexibility in response to various scenarios.
 */
type PausableContract = SmartContract & {
    /**
     * Pauses the contract, potentially halting critical operations to protect against
     * unforeseen issues or to perform maintenance. When called, the contract enters a paused
     * state where certain functions are restricted.
     *
     * @returns A promise that resolves when the contract has been successfully paused.
     */
    pause(): Promise<void>;
    /**
     * Resumes the contract's operations after it has been paused. This method restores
     * the contract to its normal working state, allowing all functionalities to be accessible again.
     *
     * @returns A promise that resolves when the contract has been successfully resumed.
     */
    resume(): Promise<void>;
};
declare const PauseEvent_base: (new (value: {
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) => {
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}) & {
    _isStruct: true;
} & Omit<import("node_modules/o1js/dist/node/lib/provable/types/provable-intf.js").Provable<{
    isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
}, {
    isPaused: boolean;
}>, "fromFields"> & {
    fromFields: (fields: import("node_modules/o1js/dist/node/lib/provable/field.js").Field[]) => {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
} & {
    fromValue: (value: {
        isPaused: boolean | import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    toInput: (x: {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    }) => {
        isPaused: boolean;
    };
    fromJSON: (x: {
        isPaused: boolean;
    }) => {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
    empty: () => {
        isPaused: import("node_modules/o1js/dist/node/lib/provable/bool.js").Bool;
    };
};
/**
 * The **PauseEvent** class represents an event emitted whenever the contract is paused or resumed.
 * This event contains the `isPaused` boolean field, indicating the current state of the contract.
 */
declare class PauseEvent extends PauseEvent_base {
}
