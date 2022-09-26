/**
 * The HelloWorld program implements an application that
 * simply displays energy released question to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const speedLight = 2.998 * Math.pow(10, 8)

let energy: number | undefined

const massString = prompt('Enter the mass of an object in kilograms: ')

try {
  const massNumber = parseInt(massString)
  energy = massNumber * Math.pow(speedLight, 2)
  console.log(
    `\nThe energy which can be released from the object is ${energy}.`
  )
} catch (error) {
  console.log('\nInvalid number!')
}

console.log('\nDone.')
