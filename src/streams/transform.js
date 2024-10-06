import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = () => new Transform({
  transform(chunk, encoding, callback) {
    const reversedText = chunk.toString().split('').reverse().join('') + '\n\n';
    callback(null, reversedText);
  },
});

stdin.pipe(transform()).pipe(stdout);
