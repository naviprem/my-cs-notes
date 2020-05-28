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

<div class="container">
        <div class="sync-async" style="grid-row:1/span 5">
            Synchronous script execution phase
        </div>
        <div class="document-state" style="grid-row:1/span 3">
            document.readystate = <br>"loading"
        </div>

        <div class="phases">
            <ul>
                <li>Browser creates Document object</li>
                <li>HTML Elements and their text contents on the web page are parsed</li>
                <li>Element objects and Text Nodes are added to the DOM tree</li>
            </ul>
        </div>
        <div class="phases">
            <ul><li>
                When a &lt;script&gt; tag is encountered,
                <div class="container">
                    <div>
                        If not async or not defer or not module, then
                        <ol>
                            <li>The script is downloaded and executed.</li>
                            <li>Parsing of HTML is paused while downloading and executing this script</li>
                            <li>Script can see document content that comes before it.</li>
                        </ol>
                    </div>
                    <div>
                        If `async`, then
                        <ol>
                            <li>Download of the script begins.</li>
                            <li>Any dependent modules also begins to download</li>
                            <li>Parsing of HTML continues and not paused</li>
                            <li>Script can see document content that comes before it.</li>
                            <li>Script may or may not see other document content.</li>
                        </ol>
                    </div>
                </div>
            </li></ul>
        </div>
        <div class="phases">
            <ul>
                <li>Document of the web page is completely parsed at this time.</li>
                <li>Images, videos and async scripts may still be downloading.</li>
                <li>Async scripts may have started or completed execution.</li>
            </ul>
        </div>

        <div class="document-state"  style="grid-row:4/span 2">
            document.readystate = <br>"interactive"
        </div>
        <div class="phases">
            <ul>
                <li>Images, videos and async scripts may still be downloading.</li>
                <li>Async scripts may have started or completed execution.</li>
            </ul>
        </div>

        <div class="phases">
            <ul>
                <li>
                Script tags that are 'defer' or type=module and not `async` are downloaded and executed
                </li>
                <li>
                    This marks the completion of the synchronous script execution phase
                </li>
            </ul>
        </div>

        <div class="window-event">
            "DOMContentLoaded" event fired on the window object<br><br>
            Marks the completion of synchronous script execution phase and begining of asynchronous event-driven phase.
        </div>

        <div class="sync-async" style="grid-row:6/span 4">
            Asynchronous Event driven phase
        </div>

        <div class="document-state">
        </div>
        <div class="phases">
            <ul>
                <li>Images, videos and async scripts completes downloading.</li>
                <li>Async scripts completes execution.</li>
            </ul>
        </div>
        <div class="window-event">
            "load" event fired on the window object
        </div>

        <div class="document-state">
            document.readystate = <br>"complete"
        </div>
        <div class="phases">
            <ul>
                <li>From this point onwards, event handlers are invoked asynchronously in response to
                    <ol>
                        <li>user input events</li>
                        <li>network events</li>
                        <li>timer expirations</li>
                        <li>and so on</li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
