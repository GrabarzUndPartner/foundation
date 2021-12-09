const provider = {
  azure: require('./.semantic-release/azure.json')
};

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [
    value, key
  ]) => {
    args[String(value).replace(/-/g, '')] = key;
    return args;
  }, {});

module.exports = provider[args.provider || 'azure'];
