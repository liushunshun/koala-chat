import Mock from 'mockjs';
// 使用 Mock
Mock.mock('/contact/list', 'get', function() {
    return Mock.mock({
        "sessions|3-5": [{
              'id':'@integer(1, 5)',
              'user':{
                'name': '@cname',
                'id': '@integer(6000, 10000)',
                'img': '//g.alicdn.com/xspace/xspace-ui/2.5.3/favicon-96x96.png',
              },
              'message|2-3': [
                {
                  content:'@cparagraph(2)',
                  date:'@date'
                }
              ]
          }
      ]
    });
});

Mock.mock('/message/list', 'get', function() {
    return Mock.mock({
        "messages|10": [{
              'id':'@integer(1, 5)',
              'time':'@date',
              'text':'@cparagraph(2)'
          }
      ]
    });
});
