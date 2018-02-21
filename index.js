const got = require('got');

(async () => {
    try {
        let request = await got.post('https://sso3.zing.vn/alogin', {
            headers: {
                'Connection': 'keep - alive',
                'Content-Length': '729',
                'Cache-Control': 'max - age=0',
                'Origin': 'https://id.zing.vn',
                'Upgrade-Insecure-Requests': '1',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
                'Accept': 'text/html,application/xhtml + xml, application/xml;q=0.9,image/webp, image/apng,*/ *; q=0.8',
                'Referer': 'https://id.zing.vn/v2/login?apikey=92140c0e46c54994812403f564787c14&data=Kh9R1ykVUNMfLGPh',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US, en; q=0.9',
                'Cookie': '_ga = GA1.2.1971376139.1519184900; _gid=GA1.2.1125648399.1519184900; __acid=c3ce32822d029c63f849fc86911298f4.319071521157308377.1517130776537.f95f606ad5633f3d6672.3206354345; _zmp3=0.5964542065081215; __zi=2000.2e6840c5dbc4309a69d5.1519184903758.4cea4c59; otp=LOGIN_SUCCESSFULLY; _zg=38 | 1519184916',
            },
            body: 'pid=38&u1=https%3A%2F%2Fid.zing.vn%2Fv2%2Flogin%2Fcb%3Fapikey%3D92140c0e46c54994812403f564787c14%26pid%3D38%26_src%3D%26utm_source%3D%26utm_medium%3D%26utm_term%3D%26utm_content%3D%26utm_campaign%3D%26next%3Dhttps%253A%252F%252Fid.zing.vn%252Fv2%252Finfosetting%253Fapikey%253D92140c0e46c54994812403f564787c14%2526pid%253D38%26referer%3D&fp=https%3A%2F%2Fid.zing.vn%2Fv2%2Flogin%2Fcb%3Fapikey%3D92140c0e46c54994812403f564787c14%26pid%3D38%26_src%3D%26utm_source%3D%26utm_medium%3D%26utm_term%3D%26utm_content%3D%26utm_campaign%3D%26next%3Dhttps%253A%252F%252Fid.zing.vn%252Fv2%252Finfosetting%253Fapikey%253D92140c0e46c54994812403f564787c14%2526pid%253D38%26referer%3D&apikey=92140c0e46c54994812403f564787c14&u=hfcty5&p=123456789'
        })
        console.log(request.headers['set-cookie'])
        // console.log(request.body)
    } catch (error) {
        console.log(error.headers)
    }
})()