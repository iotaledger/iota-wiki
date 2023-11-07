import {
  CONGESTION_HIGH,
  CONGESTION_LOW,
  CONGESTION_MEDIUM,
} from '../constants';

export enum UserType {
  DELEGATOR,
  VALIDATOR,
}

export enum NetworkType {
  IOTA = 'IOTA',
  SHIMMER = 'SMR',
}

export enum CongestionType {
  LOW = CONGESTION_LOW,
  MEDIUM = CONGESTION_MEDIUM,
  HIGH = CONGESTION_HIGH,
}
