import OvhEngine from '@ovh-api/api';
import apiAuth from '@ovh-api/auth';

const accessRules = `GET /domain/zone/*, PUT /domain/zone/*, POST /domain/zone/*, DELETE /domain/zone/*`;

async function main() {
  const ovhEngine = new OvhEngine({ accessRules });
  const auth = apiAuth(ovhEngine);
  const current = await auth.currentCredential.$get();
  const config = `# OVH API credentials used by Certbot
# created Date: ${current.creation}
# expire Date: ${current.expiration}
dns_ovh_endpoint = ovh-eu
dns_ovh_application_key = ${ovhEngine.appKey}
dns_ovh_application_secret = ${ovhEngine.appSecret}
dns_ovh_consumer_key = ${ovhEngine.consumerKey}`;
  console.log('');
  console.log('Copy this line to a file like ~/.secrets/certbot/ovh.ini');
  console.log('then use certbot like:')
  console.log('certbot certonly --dns-ovh --dns-ovh-credentials ~/.secrets/certbot/ovh.ini --dns-ovh-propagation-seconds 60 -d example.com')
  console.log('');
  console.log(config);
}

main();