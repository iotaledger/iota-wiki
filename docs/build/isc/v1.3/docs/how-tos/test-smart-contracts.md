---
keywords:
- Smart Contract Testing
- Automated Testing
- Unit Tests
- Integration Tests
- Testing Frameworks
- EVM Testnet
- Solidity Testing
description: Learn how to test smart contracts before deploying them on public networks to avoid vulnerabilities and ensure functionality aligns with requirements using unit, and integration testing, alongside frameworks and testing with the IOTA Sandbox and the EVM Testnet. 
---

# Testing Smart Contracts

Once you have deployed a smart contract on a public network, altering it to fix an error can be hard, and it goes
against the principle of immutability, which can create trust issues with users. And, even if it were simple, you could
only fix an error or vulnerability after it is discovered. So, your contract and its users may be at risk if a third
party detects a vulnerability before you do.

The best way to avoid these overheads and vulnerabilities is to test your contracts thoroughly before deploying them.
You can use [unit](#unit-tests) and [integration](#integration-tests) tests, as well
as [manual testing](#manual-testing), to ensure your contracts behave as expected.

## Automated Testing

You can use various tools to automatically test your smart contract’s code and for any error in execution. The great
benefit of automated testing is that it requires minimal human intervention, and it can be built right into your
deployment pipelines.

Automated testing also allows you to run repetitive and time-consuming tasks without testing each case manually and
avoid human errors, which can happen when you manually input tons of data.

However, you must be careful, as automated testing can lead to false positives or miss certain edge cases.

### Unit Tests

In a nutshell, unit testing ensures that each function and component works correctly by evaluating each independently.
You can use unit tests to ensure that functions return the expected values and modify your contract's state properly.
They should be simple, quick to run and provide helpful feedback if anything goes wrong. This makes them an ideal tool
to ensure your contracts run smoothly after any modifications.

#### Unit Testing Guidelines

##### Understand the logic behind your contract’s workflow

Before you can write any tests, you should understand how your contract is supposed to behave. You should know its
functionalities and how users will access them. Your tests should cover different functions a user may call when
interacting with the contract and check that functions are disabled when they should be.

#### Evaluate your contract’s assumptions

It is important to verify that every internal decision the contract takes matches your assumptions on how it should
behave. This forces you to think about edge cases rather than only thinking of the “happy path” you want your users to
take. You can write negative tests to assert how your contract would respond to invalid or malicious inputs.

##### Measure Code Coverage

Code coverage is a key metric when it comes to understanding the effectiveness of your tests. It measures the number of
lines, statements, and branches that are actually executed during your unit tests. If you don’t have thorough code
coverage, your test may give what is commonly known as a “false negative”, where your contract passed all your tests,
but your tests didn’t evaluate all the possible vulnerabilities.

#### Unit Testing Frameworks

The quality of your unit test will depend on the quality of the tools you use to write and execute them. You should use
a testing framework that is regularly maintained and updated, provides features that are relevant to your contract, and
is popular amongst other developers.

:::tip Solo

If you want to test ISC-specific functionalities, like the [magic contract](./core-contracts/introduction.md), you should use
the [Solo Framework](../solo/getting-started.md).

:::

* [Waffle](https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html#writing-tests)
* [Remix](https://remix-ide.readthedocs.io/en/latest/unittesting.html#write-tests)
* [Hardhat](https://hardhat.org/hardhat-runner/docs/guides/test-contracts)
* [Brownie](https://eth-brownie.readthedocs.io/en/v1.0.0_a/tests.html)
* [Ape](https://docs.apeworx.io/ape/stable/userguides/testing.html)
* [Foundry](https://book.getfoundry.sh/forge/writing-tests)

### Integration Tests

Integration tests are beneficial when your contract adopts a modular architecture or interfaces with other contracts
during its execution. While [unit tests](#unit-tests) focus on testing functions in isolation, trying each cog in the
machine individually, so to speak, integration tests evaluate how these functions work together as a whole, testing the
machine as a whole. You should use integration tests to detect any issues arising from interactions between different
functions in your contracts' cross-contract calls and ensure that inherited or extended functions are working as
expected.

#### Tools

You can use the [EVM Testnet](/build/networks-endpoints/#shimmerevm-testnet) to conduct integration tests without
incurring any fees or the [IOTA Sandbox](/iota-sandbox/getting-started/) if you want to run the tests locally.

## Manual Testing

Once you have a complete batch of [automated tests](#automated-testing), manually testing your contract to ensure it
behaves as expected in the real world is still good practice. However, to avoid incurring fees or deploying a faulty
contract, you can manually test your contract using a sandboxed local network and the EVM Testnet.

Testing using the [IOTA Sandbox](/iota-sandbox/getting-started/) serves well for the first stage of automated and manual
integration tests, as you have complete control over the entire local network. Once you are confident about how your
contract behaves locally, you can deploy and test on the [EVM Testnet](/build/networks-endpoints/#shimmerevm-testnet),
which replicates the IOTA EVM and ShimmerEVM networks, but also enables cost and risk-free interactions.


