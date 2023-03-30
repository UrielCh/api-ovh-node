# changelog

## V4.1.1

- add type OvhCredential, AccessRule, CredentialStateEnum export.

## V4.1.0

- Add ava test
- throw error if access rules are not suffisant
- reduce hard dependency to nodeJS

## V4.0.0

- ESM distibution

## V3.2.10

- change default redirection

## V3.2.9

- redirectUrl is now mandatory in ovh new certificat request.

## V3.2.8

- Improve OVHError adding access to the OvhApi object.
- Improve NOT_GRANTED_CALL error by listing current allow rules.
- Rename certCache to certCacheFile.

## V3.2.7

- fix autologin regression.

## V3.2.6

- fix open usage, that may stop the process.

## V3.2.5

- improve error handling.

## V3.2.4

- verbose login prompt.
- released as latest.
  -## V3.2.3
- verbose login prompt.
- add support for QUERY_TIME_OUT in credential validation

## V3.2.2

- fix consumerkey test.

## V3.2.1

- fix regression: missing exports.

## V3.2.0

- Refactor code
- improve concurent consumerKey renew request
- add new certificates storage system

## V3.1.10

- Improve package documentation.

## V3.1.9

- store 'X-Ovh-Queryid' response header as 'XOvhQueryid' in OvhError Exception

## V3.1.8

- accept all 2XX responce as valid. (use to be 200 only) [PR10]

## V3.1.7

- improve warning events

## V3.1.6

- fix invalid timeout handeling

## V3.1.5

- update Readme

## V3.1.4

- update Readme

## V3.1.3

- update Readme

## V3.1.2

- add escape character '/' whene used in query parameter params

## V3.1.1

- Fix bug in cache activation.

## V3.1.0

- cache is now async and it's implementation can be overwrite by $query().
- default cache can be set in OvhApi constructor.

## V3.0.2

- improve $delete() auto-discard change.

## V3.0.1

- update $cache() interface add action 'flush', 'disable'

## V3.0.0

- add $cache()
- add remove legacy get/put/post/delete root calls from typing
- add js doc

## V2.1.7

- allow OvhApi() with no param

## V2.1.6

- all console.log / console.error can be avoid
- add CertMonitorProvider
- update doc
- add launchBrower boolean to block any browser launch

## V2.1.5

- improve Http error handeling on heavy load.
- fix retry logic and display

## V2.1.4

- improve doc
- add warning events
- remove console.log
- convert Promise usage to await
- improve handeling error when writing certificat on disk

## V2.1.3

- add queryForCredencial(redirection?: string) for explicit credential generation

## V2.1.2

- reduce npm package size by half

## V2.1.1

- @ovh-api/api can now be used inside a browser
