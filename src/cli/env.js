export const parseEnv = () => {
  const rssModeList = Object.entries(process.env).filter(item => item[0].indexOf('RSS_') === 0);
  rssModeList.forEach(item => {
    console.log('\x1b[36m%s\x1b[0m', item[0] + '=' + item[1] + ';')
  })
};
parseEnv();
