export const parseArgs = () => {
  const getPropValue = (flag) => {
    const arrArgs = process.argv;
    arrArgs.forEach(item => {
      if (item.indexOf(flag) !== -1) {
        console.log('\x1b[36m%s', item.slice(2) + ' is ' 
          + arrArgs[arrArgs.indexOf(item) + 1], '\x1b[0m'
        );
      }
    });
  }
  getPropValue('--prop');
};
parseArgs();

// for Powershell terminal run commands:
// node src/cli/args --propName value --prop2Name value2
