const CracoLessPlugin = require('craco-less');
//antd全局配置

module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' ,'@link-color':'white'},
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
    }