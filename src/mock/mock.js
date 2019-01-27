import Mock from 'mockjs';
// 使用 Mock
Mock.mock('/contact/list', 'get', function() {
    return Mock.mock({
        "sessions|3-5": [{
              'user':{
                'name': '@cname',
                'id': '@integer(6000, 10000)',
                'img': '@image("200x100", "#000", "#fff", "png", "照片")',
              },
              'message|2-3': [
                {
                  content:'@cparagraph(2)',
                  data:'@date'
                }
              ]
          }
      ]
    });
});
