# ovh-bill-importer

[![NPM Version](https://img.shields.io/npm/v/ovh-bill-importer.svg?style=flat)](https://www.npmjs.org/package/ovh-bill-importer)

This code download all invoices from you OVH account and store them as an easy to use directory scruture, with a summary tsv file.

This tsv file can be open in any tabler to extract VAT for your accountancy.

This script use the npm packages `@ovh-api/api` and `@ovh-api/me`

## setup

```bash
npm install -g ovh-bill-importer
```

or use `npx`

```bash
npx ovh-bill-importer --help
```


## ChangeLog

- V 1.2.0 replace Bluebird by Nativebird, fix --api parameter
- V 1.1.1 add --max-age <time-range> with time-range like 4m for 4 month, 1y for 1 year, 10d for 10 days.
- V 1.1.0 add --api <type> with type in (eu, ca, us).
- V 1.0.6 fix regression in incremental execution.
- V 1.0.5 properly handle error whene downloading invoices.
- V 1.0.4 properly recover on too many request error.
- V 1.0.3 properly handle API connexion errors.

## Usage

```bash
$ ovh-bill-importer --help
Usage: index [options]

Options:
  -V, --version               output the version number
  -u, --utc                   use UTC times, by defaut use localhost timezone
  -d, --dest <path>           destination directory
  -s, --split <type>          hierarchy model year/month/none default is month (default: "month")
  -c, --concurrency <number>  max concurent download
  --token <tokenfile>         save and reuse the certificat by storing them in a file
  -m, --max-age <timeYMD>     max time back you want to download, end with Y/M/D (Year/Month/Day) (default: "1Y")
  -h, --help                  output usage information
```

### formats -s

- *month* create a directory per month ie: 2019/01
- *year* create a directory per year ie: 2019/01
- *none* do not create any directory just place all invoice in the same directory

### utc / locale -u

If *utc* flag is enabled, convert add date as UTC.
If not the script will use your current timezone.

### destination -d

Provide a local path to save all invoice, a directory containing the nic-handle will be create into this destination to avoid mixing invoice from different accounts.

### concurrency -c

Download multiple invoice un parallel, Do not ask for much concurrency, or Ovh will block your IP.

## sample

```bash
npm install -g ovh-bill-importer
ovh-bill-importer --dest=bill --split=month --concurrency=3 --token=token.json
```

![ovh-vps-config-failover on vps](https://github.com/UrielCh/api-ovh-node/blob/master/samples/ressources/ovh-bill-importer.gif?raw=true "preview")


## Tree

``````

The destination directory may look like that:

```bash
nichandle-ovh
 - summary.tsv
 - 2019
    - 01
        - 2019-01-01_FR123406_12.99EUR.pdf
        - 2019-01-05_FR123407_2.99EUR.pdf
    - 02
        - 2019-02-05_FR123461_2.99EUR.pdf
    - 03
        - 2019-03-15_FR123801_299.99EUR.pdf
        - 2019-03-25_FR123802_2.99EUR.pdf
```



