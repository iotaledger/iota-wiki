# Interface: LoggerConfig

Logger output configuration.

## Table of contents

### Properties

- [name](LoggerConfig.md#name)
- [levelFilter](LoggerConfig.md#levelfilter)
- [targetFilter](LoggerConfig.md#targetfilter)
- [targetExclusions](LoggerConfig.md#targetexclusions)
- [colorEnabled](LoggerConfig.md#colorenabled)

## Properties

### name

• `Optional` **name**: `string`

Name of an output file, or `stdout` for standard output.

---

### levelFilter

• `Optional` **levelFilter**: `"error"` \| `"off"` \| `"warn"` \| `"info"` \| `"debug"` \| `"trace"`

Log level filter of an output.

---

### targetFilter

• `Optional` **targetFilter**: `string`[]

Log target filters of an output.

---

### targetExclusions

• `Optional` **targetExclusions**: `string`[]

Log target exclusions of an output.

---

### colorEnabled

• `Optional` **colorEnabled**: `boolean`

Color flag of an output.
