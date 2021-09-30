module.exports = (config) => {
  //  Passthrough the uploads folder used by forestry
  config.addPassthroughCopy('uploads');

  //  Passthrough the assets folder used for our css, favicon and other assets
  config.addPassthroughCopy('assets');

  //  Passthrough the assets folder used for our css, favicon and other assets
  config.addPassthroughCopy('package.json');

  //  Configure our money filter so the price will be properly displayed
  config.addFilter('money', (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
    });

    return formatter.format(value);
  });

  //  Configure our trim url filter so the leading '/' is removed
  config.addFilter('trimUrl', (value) => {
    return value.startsWith('/') ? value.substring(1) : value;
  });

  //  Change the default folder used by 11ty from root to src
  return {
    dir: {
      input: 'src',
    },
  };
};
