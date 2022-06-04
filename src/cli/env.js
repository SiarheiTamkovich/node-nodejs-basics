export const parseEnv = () => {
  const rssModeList = Object.entries(process.env).filter(item => item[0].indexOf('RSS_') === 0);
  rssModeList.forEach(item => {
    console.log('\x1b[36m%s\x1b[0m', item[0] + '=' + item[1] + ';')
  })
};
parseEnv();

// for Powershell terminal run commands:
// $env:RSS_name="value"; node src/cli/env
// $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env
