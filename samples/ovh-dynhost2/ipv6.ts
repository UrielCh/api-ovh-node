import os from 'os';
import child_process from 'child_process';

interface Win32Netipaddress {
    IPAddress: string;
    InterfaceIndex: string;
    InterfaceAlias: string;
    AddressFamily: 'IPv4' | 'IPv6';
    Type: 'Unicast' | 'Anycast';
    PrefixLength: string;
    PrefixOrigin: 'Other' | 'Manual' | 'WellKnown' | 'Dhcp' | 'RouterAdvertisement';
    SuffixOrigin: 'Other' | 'Manual' | 'WellKnown' | 'Dhcp' | 'Link' | 'Random';
    AddressState: 'Invalid' | 'Tentative' | 'Duplicate' | 'Deprecated' | 'Preferred';
    ValidLifetime: string;
    PreferredLifetime: string;
    SkipAsSource: 'False' | 'True';
    PolicyStore: 'ActiveStore' | string;
}

function getIpV6() {
    const supportedPlatforms = new Set(["aix", "android", "darwin", "freebsd", "linux", "openbsd", "sunos", "win32"]);
    let plat = os.platform();
    if (supportedPlatforms.has(plat)) {
        if (plat === "aix") {
            plat = "sunos";
        }
        switch (plat) {
            case "win32":
                const out = child_process.execSync("powershell Get-NetIPAddress -AddressFamily IPv6", { encoding: 'utf8' });
                let ips = out.split(/\r\n\r\n/g).map((lines: string) => {
                    const res = {} as Win32Netipaddress;
                    lines.split(/\r\n/g).map((line: string) => {
                        const part = line.split(/ : /g);
                        if (part.length === 2) {
                            const k = part[0].trim();
                            const v = part[1].trim();
                            (res as any)[k] = v;
                        }
                    });
                    return res;
                });
                // drop local net IPs
                ips = ips.filter(a => a.IPAddress)
                ips = ips.filter(a => !a.IPAddress.startsWith("fe80::"))
                // drop localhost
                ips = ips.filter(a => a.IPAddress !== '::1')
                const prefered = ips.find(a => a.SuffixOrigin === 'Link');
                if (prefered)
                    return prefered.IPAddress;
                if (ips.length)
                    return ips[0].IPAddress;
                return ''
                console.log(ips);
        }
    } else {
        console.error("Platform is supported");
        return '';
    }
}
