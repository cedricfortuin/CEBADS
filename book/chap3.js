import * as tf from '@tensorflow/tfjs';

// Tensors are collections of data in a structured type.

const one_d = [1, 2, 3];
const two_d = [
  [1, 2, 3],
  [4, 5, 6]
];
const three_d = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [6, 5, 4],
    [3, 2, 1]
  ]
];


const image = tf.tensor([
  [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1]
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ]
]);

console.log(image)