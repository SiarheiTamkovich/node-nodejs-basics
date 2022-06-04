export const transform = async () => {

  const { stdin, stdout } = process;

  stdout.write('Enter text:\n');
  stdin.on('data', data => {
    const reverseData = data.toString().split('').reverse().join('');
    stdout.write(`Reverse: ${reverseData}`);
    process.exit();
  });
};
transform();

// for Powershell terminal run commands:
// node src/streams/transform