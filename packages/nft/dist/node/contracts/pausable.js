import { Struct, Bool } from "o1js";
export { PauseEvent };
/**
 * The **PauseEvent** class represents an event emitted whenever the contract is paused or resumed.
 * This event contains the `isPaused` boolean field, indicating the current state of the contract.
 */
class PauseEvent extends Struct({
    /**
     * Indicates whether the contract is currently paused.
     */
    isPaused: Bool,
}) {
}
//# sourceMappingURL=pausable.js.map