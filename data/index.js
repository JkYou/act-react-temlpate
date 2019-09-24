const delay = require('mocker-api/utils/delay'); //延时返回
const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    _proxy: {
      proxy: {
        // '/repos/(.*)': 'https://api.github.com/',
        // '/:owner/:repo/raw/:ref/(.*)': 'http://127.0.0.1:2018'
      },
      changeHost: true,
      // modify the http-proxy options
      httpProxy: {
        options: {
          ignorePath: true,
        },
        listeners: {
          proxyReq: function (proxyReq, req, res, options) {
            console.log('proxyReq');
          },
        },
      },    
    },
    // =====================
    'GET /api/user': {
      id: 1,
      username: 'kenny',
      sex: 6
    },
    'GET /api/user/list': [
      {
        id: 1,
        username: 'kenny',
        sex: 6
      }, {
        id: 2,
        username: 'kenny',
        sex: 6
      }
    ],
    'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
      const { owner, repo, ref } = req.params;
      // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
      // owner => admin
      // repo => webpack-mock-api
      // ref => master
      // req.params[0] => add/ddd.md
      return res.json({
        id: 1,
        owner, repo, ref,
        path: req.params[0]
      });
    },
    'POST /api/login/account': (req, res) => {
      const { password, username } = req.body;
      if (password === '888888' && username === 'admin') {
        return res.json({
          status: 'ok',
          code: 0,
          token: "sdfsdfsdfdsf",
          data: {
            id: 1,
            username: 'kenny',
            sex: 6
          }
        });
      } else {
        return res.status(403).json({
          status: 'error',
          code: 403
        });
      }
    },
    'DELETE /api/user/:id': (req, res) => {
      console.log('---->', req.body)
      console.log('---->', req.params.id)
      res.send({ status: 'ok', message: '删除成功！' });
    }
  }
  module.exports = delay(proxy, 500);