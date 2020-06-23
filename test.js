const fs = require('fs');
const got = require('got');
const FormData = require('form-data');

// work fine
// (async () => {
//     const form = new FormData();
//     form.append("image", fs.createReadStream('./zctoxgqobtw.jpg'));
//     form.append("image_type", 'message')
//     const result = await got.post('https://open.feishu.cn/open-apis/image/v4/put/', {
//         body: form,
//         headers:  {
//             'Authorization': 'Bearer t-3e6b23ed8218efea37538395f381a060e1edb146' // replace your jtw token
//         }
//     }).json();
//     console.log(result)
// })()

// this's what I want but something happened
(async () => {
    const form = new FormData();
    console.log(got.stream('http://i1.shaodiyejin.com/uploads/tu/201704/10/zctoxgqobtw.jpg'));
    form.append("image", got.stream('http://i1.shaodiyejin.com/uploads/tu/201704/10/zctoxgqobtw.jpg'));
    form.append("image_type", 'message')
    const result = await got.post('https://open.feishu.cn/open-apis/image/v4/put/', {
        body: form,
        headers:  {
            'Authorization': 'Bearer t-3e6b23ed8218efea37538395f381a060e1edb146' // eplace your jtw token
        }
    }).json();
    console.log(result)
})()

