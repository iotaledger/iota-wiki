# Interface: ValidatorsResponse

A paginated list of all registered validators ready for the next epoch and indicates if they were active recently
(are eligible for committee selection).

## Table of contents

### Properties

- [validators](ValidatorsResponse.md#validators)
- [pageSize](ValidatorsResponse.md#pagesize)
- [cursor](ValidatorsResponse.md#cursor)

## Properties

### validators

• **validators**: [`ValidatorResponse`](ValidatorResponse.md)[]

List of registered validators ready for the next epoch.

___

### pageSize

• **pageSize**: `number`

The number of validators returned per one API request with pagination.

___

### cursor

• `Optional` **cursor**: `string`

The cursor that needs to be provided as cursor query parameter to request the next page. If empty, this was the
last page.
