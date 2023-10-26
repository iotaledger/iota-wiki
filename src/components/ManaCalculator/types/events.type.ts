import { CongestionType } from "../enums";
import { ValidatorProps } from "./validator.type";

export type DeleteValidatorEvent = (id: number) => void;
export type ChangeValidatorEvent = (value: number, id: number) => void;
export type ChangeEvent = (value: number) => void;
export type ChangeCongestionEvent = (value: CongestionType) => void;
export type NewValidatorEvent = (value: ValidatorProps) => void;