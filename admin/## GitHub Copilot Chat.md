## GitHub Copilot Chat

- Extension Version: 0.27.2 (prod)
- VS Code: vscode/1.100.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.5 (70 ms)
- DNS ipv6 Lookup: Error (135 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (28 ms)
- Electron fetch (configured): Error (7420 ms): Error: net::ERR_NETWORK_CHANGED
    at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10511)
    at SimpleURLLoaderWrapper.emit (node:events:524:28)
    at SimpleURLLoaderWrapper.emit (node:domain:489:12)
    at SimpleURLLoaderWrapper.topLevelDomainCallback (node:domain:161:15)
    at SimpleURLLoaderWrapper.callbackTrampoline (node:internal/async_hooks:128:24)
- Node.js https: HTTP 200 (773 ms)
- Node.js fetch: HTTP 200 (871 ms)
- Helix fetch: HTTP 200 (791 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.22 (53 ms)
- DNS ipv6 Lookup: Error (46 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (12 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: HTTP 200 (1391 ms)
- Node.js fetch: HTTP 200 (965 ms)
- Helix fetch: HTTP 200 (963 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).