const https = require('https');
https.get('https://sites.google.com/lendahandindia.org/nep-vocational-education/kaushal-bodh-student-registration', (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        const matches = body.match(/<iframe[^>]+src=[\\"']+(https[^\\"']+)[\\"']+/gi);
        console.log("Matches:", matches);
    });
});
