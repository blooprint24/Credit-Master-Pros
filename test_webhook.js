import * as https from 'https';

function fetchPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function verify() {
    const html = await fetchPage('https://credit-master-pros.vercel.app/');
    console.log("Found HTML. Searching for JS assets...");

    const matches = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
    if (matches && matches[1]) {
        const jsUrl = 'https://credit-master-pros.vercel.app' + matches[1];
        console.log("Fetching JS:", jsUrl);
        const jsContent = await fetchPage(jsUrl);

        if (jsContent.includes('Kgy9PmdaCpptD2rNp8fe')) {
            console.log("SUCCESS: Webhook URL is successfully baked into the Vercel JS bundle!");
        } else {
            console.log("FAILURE: The Webhook URL is NOT present in the JS bundle. Vercel didn't build it correctly.");
        }

        if (jsContent.includes('GHL Webhook URL is not set. Simulating submission.')) {
            console.log("NOTE: The generic 'Simulating submission' string is present.");
        }
    } else {
        console.log("Could not find the main JS asset.", html.slice(0, 500));
    }
}

verify();
