Reference - [https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

HTTP - Hyper Text Transfer Protocol

- Underlying protocol used by `World Wide Web`
- Client server protocol.
- The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.
- `Http Client:` user-agent is any tool that acts on the behalf of the user. This role is primarily performed by the Web browser; other possibilities are programs used by engineers and Web developers to debug their applications.
- `Http Server:` serves the document as requested by the client. A server is not necessarily a single machine, but several server software instances can be hosted on the same machine. With HTTP/1.1 and the Host header, they may even share the same IP address.
- `Http Proxy:` Between the client and the server there are numerous entities. They perform various tasks and acts as gateways, caches, routers, hubs, etc. Some of these entities like routers and modems are transparent to the HTTP layer and mostly irrelevant to the http layer. Some of the entities act at the application layer and are called Proxies. Proxies might simply relay the nmessages without modifying them or can modify the messages depending on the function they are performing. Some of the proxy functions are:
  - caching
  - filtering
  - load balancing
  - authentication
  - logging
- `Http Request:` consists of 
  - Method, 
  - Path, 
  - Protocol Version, 
  - Headers and 
  - Body
- `Http Response:` consists of 
  - Protocol Version, 
  - Status Code, 
  - Status Message, 
  - Headers, 
  - Body



HTTPS - Hyper Text Transfer Protocol Secure

- It is the secure version of HTTP where the messages between browsers and web servers are encrypted 


