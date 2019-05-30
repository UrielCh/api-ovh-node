# ovh-bill-importer

This code download all invoices from you OVH account and store them as an easy to use directory scruture, with a summary tsv file.

This tsv file can be open in any tabler to extract VAT for your accountancy.

This script use the npm packages `@ovh-api/api` and `@ovh-api/me`

## Usage

```bash
$ node index.js --help
Usage: index [options]

Options:
  -V, --version               output the version number
  -u, --utc                   use UTC times, by defaut use localhost timezone
  -d, --dest <path>           destination directory
  -s, --split <type>          hierarchy model year/month/none default is month (default: "month")
  -c, --concurrency <number>  max concurent download
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

## Tree

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
