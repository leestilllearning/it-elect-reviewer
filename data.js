// data.js - Master Network Engineering & Web Technologies Reviewer
// PART 1: Internet & Network Fundamentals (Exactly 100 Items)

const reviewerData = [
    {
        id: "net_mod1",
        title: "1. Internet & Network Fundamentals",
        proper: `
            <h2>1. Introduction to Internet Technologies and the World Wide Web</h2>
            
            <h3>The Internet</h3>
            <p><strong>Definition:</strong> A worldwide network of interconnected computers, servers, routers, mobile devices, and digital systems communicating via standardized networking protocols, primarily the TCP/IP protocol suite.</p>
            <p><strong>Core Function:</strong> A global communication infrastructure (often referred to as a "network of networks") enabling devices worldwide to exchange data seamlessly.</p>
            <p><strong>Supported Services:</strong> The Internet supports a massive variety of services including the World Wide Web (WWW), Email, File Transfer, Video Conferencing, Online Gaming, Cloud Computing, Voice over IP (VoIP), Instant Messaging, Remote Access, and the Internet of Things (IoT).</p>
            
            <h3>The World Wide Web (WWW)</h3>
            <p><strong>Definition:</strong> A collection and system of interconnected webpages, websites, web applications, multimedia resources, and documents accessed through the Internet.</p>
            <p><strong>Core Technologies:</strong> Relies heavily on Hypertext Transfer Protocol (HTTP), Hypertext Transfer Protocol Secure (HTTPS), Uniform Resource Locators (URLs), Web Browsers (e.g., Chrome, Edge, Firefox, Safari), Web Servers, and HyperText Markup Language (HTML).</p>
            
            <h3>Internet vs. World Wide Web</h3>
            <p>It is a common misconception that the Internet and the Web are the same thing. They are distinctly different:</p>
            <table>
                <tr>
                    <th>Aspect</th>
                    <th>The Internet</th>
                    <th>The World Wide Web (WWW)</th>
                </tr>
                <tr>
                    <td><strong>Analogy</strong></td>
                    <td>Roads, highways, bridges, and transportation infrastructure connecting cities.</td>
                    <td>Delivery trucks and transport services carrying documents and goods over those roads.</td>
                </tr>
                <tr>
                    <td><strong>Nature</strong></td>
                    <td>The underlying physical and logical communication infrastructure.</td>
                    <td>An information service operating on top of that infrastructure.</td>
                </tr>
                <tr>
                    <td><strong>Scope</strong></td>
                    <td>Encompasses all traffic (Email, FTP, P2P, Gaming, VoIP, etc.).</td>
                    <td>Specific to web pages, hyperlinked documents, and web applications.</td>
                </tr>
                <tr>
                    <td><strong>History</strong></td>
                    <td>Developed first from early computer networking research projects (like ARPANET).</td>
                    <td>Developed later by Tim Berners-Lee to link and access documents via hyperlinks.</td>
                </tr>
            </table>

            <h3>How the Internet and WWW Work Together</h3>
            <ol>
                <li>The user enters the address (URL) into a web browser.</li>
                <li>The Domain Name System (DNS) resolves the domain name and identifies the target server's IP.</li>
                <li>The Internet establishes the physical and logical communication path.</li>
                <li>The browser transmits an HTTP/HTTPS request across the network.</li>
                <li>The web server processes the request.</li>
                <li>The data travels back through the Internet infrastructure.</li>
                <li>The browser receives HTML, CSS, JavaScript, JSON, or media and renders the webpage.</li>
            </ol>

            <h3>Other Independent Internet Services</h3>
            <ul>
                <li><strong>Email Protocols:</strong> Simple Mail Transfer Protocol (SMTP), Internet Message Access Protocol (IMAP), and Post Office Protocol Version 3 (POP3) operate independently of the Web.</li>
                <li><strong>File Transfer Protocols:</strong> File Transfer Protocol (FTP) and SSH File Transfer Protocol (SFTP).</li>
                <li><strong>Real-Time & Administration:</strong> Online multiplayer gaming (specialized low-latency protocols), Video Conferencing, and Remote Access via Secure Shell (SSH).</li>
            </ul>

            <h3>Internet Infrastructure and Ecosystem</h3>
            <p><strong>Infrastructure Components:</strong> End-User Devices, Network Interfaces, Local Area Networks (LAN), Routers, Internet Service Providers (ISPs), Internet Backbone, Data Centers, Servers, IP Addresses (Public/Private), DNS, Firewalls, and Content Delivery Networks (CDNs).</p>
            <p><strong>Ecosystem Participants:</strong></p>
            <ul>
                <li><strong>Internet Users:</strong> Students, employees, businesses, researchers, general public.</li>
                <li><strong>Application Developers:</strong> Create websites, mobile apps, APIs, cloud apps, online systems, and Internet services.</li>
                <li><strong>Hosting Providers:</strong> Virtual Private Servers (VPS), Dedicated Servers, Cloud Hosting.</li>
                <li><strong>Infrastructure Entities:</strong> ISPs, Domain Registrars, DNS Providers, Cloud Service Providers, CDNs (providing caching, DDoS protection, Web Application Firewalls [WAF], and traffic optimization), and Certificate Authorities (CAs).</li>
            </ul>

            <hr>

            <h2>2. Network Fundamentals, Hardware Components, and Domains</h2>
            
            <h3>Network Definitions & Geographical Classifications</h3>
            <p><strong>Computer Network:</strong> A collection of interconnected hosts sharing media (wired or wireless) to exchange data, ranging from two PCs linked by copper cable to the global Internet.</p>
            <ul>
                <li><strong>Local Area Network (LAN):</strong> Spans a small area like an office, home, or single building.</li>
                <li><strong>Metropolitan Area Network (MAN):</strong> Spans a town or city.</li>
                <li><strong>Wide Area Network (WAN):</strong> Spans across multiple cities, provinces, or countries.</li>
            </ul>

            <h3>Core Network Components</h3>
            <ul>
                <li><strong>Host:</strong> Devices at the ultimate endpoints (sources and destinations) where data flows end-to-end (e.g., user PCs, web servers, database servers).</li>
                <li><strong>Transmission Media:</strong> 
                    <br>- <em>Wired:</em> Copper cables, Fiber-optic cables, Coaxial cables.
                    <br>- <em>Wireless:</em> Free-to-air Radio Frequency (RF) and specialized wireless frequency bands.
                </li>
                <li><strong>Hub:</strong> Multiport repeater operating at Layer 1 (Physical Layer) of the OSI model; broadcasts incoming traffic to all ports; low throughput and rarely used in modern environments.</li>
                <li><strong>Switch:</strong> Multiport bridge operating at Layer 2 (Data Link Layer), forwarding frames at wire speed based on MAC addresses; Layer 3 switches also provide routing capabilities.</li>
                <li><strong>Router:</strong> Layer 3 (Network Layer) device that reads logical addresses (IP) and makes routing decisions across interconnected networks and the Internet core.</li>
                <li><strong>Gateway:</strong> Software/hardware combination designed to translate and exchange data between networks running different communication protocols.</li>
                <li><strong>Firewall:</strong> Security mechanism (software/hardware) that enforces rules to protect network resources from unauthorized access.</li>
                <li><strong>Wireless Access Point (WAP):</strong> Connects wireless devices to a wired local network.</li>
            </ul>

            <h3>Collision and Broadcast Domains</h3>
            <p><strong>Collision Domain:</strong> A network segment where simultaneous packet transmissions by two devices cause an electrical/signal collision, requiring a back-off and retransmission (occurs in half-duplex mode).</p>
            <p><strong>Broadcast Domain:</strong> A network segment where a broadcast transmission sent by one host must be received and processed by every other device on that segment, leading to LAN congestion.</p>
            
            <details class="simple-explanation">
                <summary>💡 Expert Note: Device Domain Segmentation Properties</summary>
                <p>Understanding how devices break domains is critical for network engineering:</p>
                <ul>
                    <li><strong>Hub:</strong> Does not break collision domains; does not break broadcast domains (1 Collision Domain, 1 Broadcast Domain for the whole hub).</li>
                    <li><strong>Switch:</strong> Breaks collision domains (each switch port is its own unique collision domain); does not break broadcast domains (all ports share 1 Broadcast Domain).</li>
                    <li><strong>Router:</strong> Breaks BOTH collision domains and broadcast domains; stops broadcast traffic from traversing to other networks.</li>
                </ul>
                <p><strong>Design Rule:</strong> Increasing the number of collision and broadcast domains isolates traffic, minimizes collisions/congestion, and optimizes available bandwidth.</p>
            </details>
        `,
        glossary: [
            {
                term: "The Internet",
                def: "A global physical and logical communication infrastructure of interconnected networks utilizing the TCP/IP protocol suite."
            },
            {
                term: "World Wide Web",
                def: "An information service operating on top of the Internet accessing hyperlinked documents via HTTP/HTTPS."
            },
            {
                term: "LAN (Local Area Network)",
                def: "A computer network spanning a small geographical area, such as a single building or campus."
            },
            {
                term: "WAN (Wide Area Network)",
                def: "A computer network spanning large geographical distances, such as cities, provinces, or countries."
            },
            {
                term: "Hub",
                def: "A Layer 1 multiport repeater that broadcasts incoming traffic to all ports, maintaining a single collision domain."
            },
            {
                term: "Switch",
                def: "A Layer 2 device that forwards frames based on MAC addresses. It breaks collision domains per port but maintains a single broadcast domain."
            },
            {
                term: "Router",
                def: "A Layer 3 device that routes data across interconnected networks using IP addresses, successfully breaking both collision and broadcast domains."
            },
            {
                term: "Gateway",
                def: "Software or hardware designed to translate and exchange data between networks running different communication protocols."
            },
            {
                term: "Firewall",
                def: "A security mechanism that enforces strict rules to protect network resources from unauthorized access."
            },
            {
                term: "Collision Domain",
                def: "A network segment where simultaneous data transmissions can collide with one another, requiring retransmission."
            },
            {
                term: "Broadcast Domain",
                def: "A network segment where a broadcast message reaches and is processed by every connected device."
            },
            {
                term: "Host",
                def: "An endpoint device (source or destination) where data flows end-to-end, such as a user PC or web server."
            },
            {
                term: "CDN (Content Delivery Network)",
                def: "An infrastructure providing caching, DDoS protection, Web Application Firewalls, and traffic optimization."
            }
        ],
        flashcards: [
            {
                front: "Which network device operates at Layer 1 and broadcasts incoming traffic to all ports?",
                back: "A Hub."
            },
            {
                front: "Does a Switch break Collision Domains or Broadcast Domains?",
                back: "It breaks Collision Domains (each port is unique), but it DOES NOT break Broadcast Domains."
            },
            {
                front: "Which device is required to break BOTH Collision Domains and Broadcast Domains?",
                back: "A Router."
            },
            {
                front: "What is the primary difference between the Internet and the World Wide Web?",
                back: "The Internet is the underlying physical/logical network infrastructure; the WWW is an information service that runs ON TOP of the Internet."
            },
            {
                front: "What does DNS stand for and what is its role?",
                back: "Domain Name System. It resolves human-readable domain names into numerical IP addresses."
            },
            {
                front: "What type of network spans a town or city?",
                back: "MAN (Metropolitan Area Network)."
            },
            {
                front: "What is a network segment where simultaneous packet transmissions cause an electrical signal collision?",
                back: "A Collision Domain."
            },
            {
                front: "Who developed the World Wide Web?",
                back: "Tim Berners-Lee."
            }
        ],
        quiz: [
            // Q1-Q10: Internet Basics
            {
                category: "Internet Basics",
                type: "mcq",
                question: "Which of the following is defined as a worldwide network of interconnected computers, servers, and routers communicating via standardized protocols?",
                options: {
                    a: "The World Wide Web",
                    b: "The Internet",
                    c: "A Local Area Network",
                    d: "An Intranet"
                },
                answer: "b"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "What is the primary protocol suite used by the Internet for communication?",
                options: {
                    a: "OSI Protocol Suite",
                    b: "HTTP/HTTPS Suite",
                    c: "TCP/IP Protocol Suite",
                    d: "FTP/SFTP Suite"
                },
                answer: "c"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "Which of the following is considered a core function of the Internet?",
                options: {
                    a: "Rendering HTML pages for users",
                    b: "Acting as a global communication infrastructure enabling devices to exchange data",
                    c: "Storing local files on a physical hard drive",
                    d: "Translating languages automatically"
                },
                answer: "b"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "Which of the following services is NOT supported by the Internet?",
                options: {
                    a: "Voice over IP (VoIP)",
                    b: "Online Gaming",
                    c: "Cloud Computing",
                    d: "Offline local physical printing"
                },
                answer: "d"
            },
            {
                category: "Internet Basics",
                type: "ident",
                question: "What term describes the Internet as a global communication infrastructure containing many smaller networks?",
                answer: "network of networks"
            },
            {
                category: "Internet Basics",
                type: "ident",
                question: "What protocol suite primarily drives the Internet's communication standardization?",
                answer: "tcp/ip"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "Which of these is a valid Internet service running independently of the World Wide Web?",
                options: {
                    a: "Hypertext Transfer Protocol",
                    b: "Web Browsers",
                    c: "Email via SMTP",
                    d: "Web Servers"
                },
                answer: "c"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "Video conferencing and online gaming are examples of:",
                options: {
                    a: "Services supported by the Internet",
                    b: "Core technologies of the World Wide Web",
                    c: "Hardware components",
                    d: "Local Area Networks"
                },
                answer: "a"
            },
            {
                category: "Internet Basics",
                type: "mcq",
                question: "IoT stands for:",
                options: {
                    a: "Internet of Telecommunications",
                    b: "Internal Operational Tech",
                    c: "Internet of Things",
                    d: "Interconnected Online Terminals"
                },
                answer: "c"
            },
            {
                category: "Internet Basics",
                type: "ident",
                question: "What does VoIP stand for?",
                answer: "voice over ip"
            },
            
            // Q11-Q20: WWW Basics
            {
                category: "World Wide Web",
                type: "mcq",
                question: "Which of the following best defines the World Wide Web?",
                options: {
                    a: "The physical fiber-optic cables connecting continents",
                    b: "A collection of interconnected webpages and documents accessed through the Internet",
                    c: "A protocol used strictly for transferring files",
                    d: "The underlying hardware infrastructure of the Internet"
                },
                answer: "b"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "Which of the following is a core technology of the World Wide Web?",
                options: {
                    a: "Router configuration",
                    b: "Hypertext Transfer Protocol (HTTP)",
                    c: "File Transfer Protocol (FTP)",
                    d: "Simple Mail Transfer Protocol (SMTP)"
                },
                answer: "b"
            },
            {
                category: "World Wide Web",
                type: "ident",
                question: "Who is credited with developing the World Wide Web?",
                answer: "tim berners-lee"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "What does URL stand for?",
                options: {
                    a: "Universal Resource Locator",
                    b: "Uniform Resource Locator",
                    c: "Unified Routing Link",
                    d: "Universal Routing Locator"
                },
                answer: "b"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "Chrome, Edge, Firefox, and Safari are examples of:",
                options: {
                    a: "Web Servers",
                    b: "Web Browsers",
                    c: "Search Engines",
                    d: "Operating Systems"
                },
                answer: "b"
            },
            {
                category: "World Wide Web",
                type: "ident",
                question: "What does HTML stand for?",
                answer: "hypertext markup language"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "Which protocol is used to securely transfer hypertext over the World Wide Web?",
                options: {
                    a: "HTTP",
                    b: "HTTPS",
                    c: "FTP",
                    d: "SSH"
                },
                answer: "b"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "In the context of the WWW, what is the role of a Web Server?",
                options: {
                    a: "To process HTTP/HTTPS requests and serve web pages",
                    b: "To route packets across the physical Internet",
                    c: "To resolve domain names to IP addresses",
                    d: "To act as a firewall against DDoS attacks"
                },
                answer: "a"
            },
            {
                category: "World Wide Web",
                type: "ident",
                question: "What protocol is primarily used for transferring unencrypted web pages?",
                answer: "http"
            },
            {
                category: "World Wide Web",
                type: "mcq",
                question: "Which of the following is NOT a core technology of the WWW?",
                options: {
                    a: "HTML",
                    b: "Web Browsers",
                    c: "SMTP",
                    d: "URLs"
                },
                answer: "c"
            },

            // Q21-Q30: Internet vs WWW Differences
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "In the analogy comparing the Internet and the World Wide Web, if the Internet represents the roads and highways, what does the WWW represent?",
                options: {
                    a: "The traffic lights",
                    b: "The delivery trucks carrying specific documents",
                    c: "The construction workers",
                    d: "The bridges connecting continents"
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "Regarding their nature, the Internet is the physical and logical communication infrastructure, whereas the WWW is:",
                options: {
                    a: "The exact same thing",
                    b: "A completely separate, unconnected network",
                    c: "An information service operating on top of that infrastructure",
                    d: "The hardware that powers the network"
                },
                answer: "c"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "Which encompasses all network traffic including Email, FTP, and P2P?",
                options: {
                    a: "The World Wide Web",
                    b: "The Internet",
                    c: "Hypertext",
                    d: "Web Browsers"
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "Which of the two was developed first from early computer networking research projects?",
                options: {
                    a: "The World Wide Web",
                    b: "The Internet",
                    c: "They were developed at the exact same time",
                    d: "HTML"
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "ident",
                question: "Which system is specifically scoped to hyperlinked documents and web applications?",
                answer: "world wide web"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "Which system relies on Tim Berners-Lee's invention?",
                options: {
                    a: "The Internet",
                    b: "The World Wide Web",
                    c: "TCP/IP",
                    d: "The OSI Model"
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "If a user is playing an online multiplayer game using a specialized low-latency protocol, they are utilizing:",
                options: {
                    a: "The World Wide Web but not the Internet",
                    b: "The Internet but not necessarily the World Wide Web",
                    c: "Neither the Internet nor the WWW",
                    d: "Only HTML"
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "True or False: Every activity performed on the Internet is part of the World Wide Web.",
                options: {
                    a: "True, they are entirely synonymous.",
                    b: "False, the Internet supports many services outside the WWW.",
                    c: "True, because all Internet traffic uses HTTP.",
                    d: "False, the WWW is larger than the Internet."
                },
                answer: "b"
            },
            {
                category: "Internet vs WWW",
                type: "ident",
                question: "What is the underlying physical and logical communication infrastructure called?",
                answer: "internet"
            },
            {
                category: "Internet vs WWW",
                type: "mcq",
                question: "Which term describes the specific service that uses web pages and URLs?",
                options: {
                    a: "The Internet",
                    b: "The World Wide Web",
                    c: "The Network Core",
                    d: "The Extranet"
                },
                answer: "b"
            },

            // Q31-Q40: Working Together & Process Flow
            {
                category: "Process Flow",
                type: "mcq",
                question: "When a user enters a URL into a web browser, what is the very next step in the process?",
                options: {
                    a: "The web server instantly returns HTML",
                    b: "The Domain Name System (DNS) resolves the domain name to an IP address",
                    c: "The browser renders the CSS",
                    d: "The router breaks the broadcast domain"
                },
                answer: "b"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "After DNS resolves the domain name, what establishes the physical and logical communication path?",
                options: {
                    a: "The Web Browser",
                    b: "The Internet infrastructure",
                    c: "The HTML code",
                    d: "The CSS stylesheet"
                },
                answer: "b"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "Once the communication path is established, what does the browser transmit?",
                options: {
                    a: "An HTTP/HTTPS request",
                    b: "A MAC address broadcast",
                    c: "A DNS query",
                    d: "A JSON payload"
                },
                answer: "a"
            },
            {
                category: "Process Flow",
                type: "ident",
                question: "What system is responsible for resolving a domain name into an IP address?",
                answer: "dns"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "What component is responsible for processing the HTTP request once it reaches its destination?",
                options: {
                    a: "The Router",
                    b: "The DNS Server",
                    c: "The Web Server",
                    d: "The Web Browser"
                },
                answer: "c"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "After the web server processes the request, what happens to the response data?",
                options: {
                    a: "It is destroyed",
                    b: "It travels back through the Internet infrastructure",
                    c: "It is converted to a MAC address",
                    d: "It remains on the server permanently"
                },
                answer: "b"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "What is the final step for the web browser after receiving the response data?",
                options: {
                    a: "It resolves the DNS",
                    b: "It establishes a TCP handshake",
                    c: "It renders the HTML, CSS, and JavaScript into a webpage",
                    d: "It closes the internet connection entirely"
                },
                answer: "c"
            },
            {
                category: "Process Flow",
                type: "ident",
                question: "What application receives HTML, CSS, and JS and renders it for the user?",
                answer: "web browser"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "If a webpage contains dynamic data, what format is frequently received alongside HTML and CSS?",
                options: {
                    a: "MAC addresses",
                    b: "JSON or JavaScript",
                    c: "SMTP codes",
                    d: "Router logs"
                },
                answer: "b"
            },
            {
                category: "Process Flow",
                type: "mcq",
                question: "Which of the following correctly orders the first three steps of a web request?",
                options: {
                    a: "URL entered -> HTTP request sent -> DNS resolution",
                    b: "URL entered -> DNS resolution -> Internet establishes path",
                    c: "DNS resolution -> URL entered -> Web Server processes",
                    d: "Web Server processes -> Browser renders -> DNS resolution"
                },
                answer: "b"
            },

            // Q41-Q50: Other Services & Ecosystem
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Which of the following is an Email Protocol?",
                options: {
                    a: "HTTP",
                    b: "SMTP",
                    c: "FTP",
                    d: "SSH"
                },
                answer: "b"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Which of the following protocols is used for File Transfer?",
                options: {
                    a: "IMAP",
                    b: "POP3",
                    c: "SFTP",
                    d: "VoIP"
                },
                answer: "c"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Which protocol is utilized for Remote Access and secure administration?",
                options: {
                    a: "SSH",
                    b: "SMTP",
                    c: "HTTP",
                    d: "FTP"
                },
                answer: "a"
            },
            {
                category: "Ecosystem & Services",
                type: "ident",
                question: "What does SMTP stand for?",
                answer: "simple mail transfer protocol"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "IMAP and POP3 are protocols primarily used for:",
                options: {
                    a: "Downloading web pages",
                    b: "Email retrieval and synchronization",
                    c: "Video conferencing",
                    d: "Transferring large files"
                },
                answer: "b"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Which infrastructure participant provides caching, DDoS protection, and traffic optimization?",
                options: {
                    a: "Domain Registrars",
                    b: "Certificate Authorities",
                    c: "Content Delivery Networks (CDNs)",
                    d: "Internet Users"
                },
                answer: "c"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Which ecosystem participant is responsible for issuing digital certificates for HTTPS?",
                options: {
                    a: "ISPs",
                    b: "Certificate Authorities (CAs)",
                    c: "Application Developers",
                    d: "Web Browsers"
                },
                answer: "b"
            },
            {
                category: "Ecosystem & Services",
                type: "ident",
                question: "What does CDN stand for?",
                answer: "content delivery network"
            },
            {
                category: "Ecosystem & Services",
                type: "mcq",
                question: "Virtual Private Servers (VPS) and Dedicated Servers are provided by which ecosystem participant?",
                options: {
                    a: "Hosting Providers",
                    b: "Domain Registrars",
                    c: "ISPs",
                    d: "End-Users"
                },
                answer: "a"
            },
            {
                category: "Ecosystem & Services",
                type: "ident",
                question: "What does ISP stand for?",
                answer: "internet service provider"
            },

            // Q51-Q60: Geographic Classifications (LAN/MAN/WAN)
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "A network that spans a small area like an office or single building is called a:",
                options: {
                    a: "WAN",
                    b: "LAN",
                    c: "MAN",
                    d: "PAN"
                },
                answer: "b"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "A network that spans a town or city is classified as a:",
                options: {
                    a: "LAN",
                    b: "MAN",
                    c: "WAN",
                    d: "WLAN"
                },
                answer: "b"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "A network that spans across multiple cities, provinces, or countries is classified as a:",
                options: {
                    a: "LAN",
                    b: "MAN",
                    c: "WAN",
                    d: "SAN"
                },
                answer: "c"
            },
            {
                category: "Geographical Networks",
                type: "ident",
                question: "What does LAN stand for?",
                answer: "local area network"
            },
            {
                category: "Geographical Networks",
                type: "ident",
                question: "What does WAN stand for?",
                answer: "wide area network"
            },
            {
                category: "Geographical Networks",
                type: "ident",
                question: "What does MAN stand for?",
                answer: "metropolitan area network"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "Which type of network would be used to connect branch offices in Manila, Cebu, and Davao?",
                options: {
                    a: "LAN",
                    b: "MAN",
                    c: "WAN",
                    d: "WLAN"
                },
                answer: "c"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "Which type of network would a university use to connect computers within a single computer lab room?",
                options: {
                    a: "LAN",
                    b: "MAN",
                    c: "WAN",
                    d: "Internet"
                },
                answer: "a"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "Which type of network typically relies on infrastructure provided by major telecommunications companies over vast distances?",
                options: {
                    a: "LAN",
                    b: "WLAN",
                    c: "WAN",
                    d: "Collision Domain"
                },
                answer: "c"
            },
            {
                category: "Geographical Networks",
                type: "mcq",
                question: "A collection of interconnected hosts sharing media to exchange data defines a:",
                options: {
                    a: "Computer Network",
                    b: "Firewall",
                    c: "Database",
                    d: "Server"
                },
                answer: "a"
            },

            // Q61-Q70: Core Components & Hosts
            {
                category: "Core Components",
                type: "mcq",
                question: "Devices at the ultimate endpoints where data flows end-to-end (like user PCs and web servers) are called:",
                options: {
                    a: "Switches",
                    b: "Routers",
                    c: "Hosts",
                    d: "Gateways"
                },
                answer: "c"
            },
            {
                category: "Core Components",
                type: "ident",
                question: "What term is used to describe the ultimate endpoint devices in a network?",
                answer: "host"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "Copper cables, Fiber-optic cables, and Coaxial cables are examples of:",
                options: {
                    a: "Wireless Transmission Media",
                    b: "Wired Transmission Media",
                    c: "Network Hosts",
                    d: "Routing Hardware"
                },
                answer: "b"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "Free-to-air Radio Frequency (RF) is an example of:",
                options: {
                    a: "Wired Transmission Media",
                    b: "Wireless Transmission Media",
                    c: "End-user Devices",
                    d: "Layer 2 Switching"
                },
                answer: "b"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "Which component acts as the physical pathway over which data travels?",
                options: {
                    a: "Transmission Media",
                    b: "Host",
                    c: "Firewall",
                    d: "Gateway"
                },
                answer: "a"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "A user PC and a Database Server are both categorized primarily as:",
                options: {
                    a: "Transmission Media",
                    b: "Hosts",
                    c: "Routers",
                    d: "Switches"
                },
                answer: "b"
            },
            {
                category: "Core Components",
                type: "ident",
                question: "Fiber-optic cables belong to which category of transmission media?",
                answer: "wired"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "Which of the following is NOT a type of wired transmission media?",
                options: {
                    a: "Copper cable",
                    b: "Radio Frequency (RF)",
                    c: "Fiber-optic cable",
                    d: "Coaxial cable"
                },
                answer: "b"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "What is the primary function of a host in a network?",
                options: {
                    a: "To route packets between different networks",
                    b: "To act as the ultimate source or destination for data flows",
                    c: "To broadcast all frames to every port",
                    d: "To block unauthorized access"
                },
                answer: "b"
            },
            {
                category: "Core Components",
                type: "mcq",
                question: "Is an IP Address considered a physical infrastructure component or a logical component?",
                options: {
                    a: "Physical",
                    b: "Logical",
                    c: "Transmission Media",
                    d: "Security Mechanism"
                },
                answer: "b"
            },

            // Q71-Q80: Hardware Devices (Hub, Switch, Router)
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which device is a multiport repeater operating at Layer 1 that broadcasts incoming traffic to all ports?",
                options: {
                    a: "Switch",
                    b: "Router",
                    c: "Hub",
                    d: "Gateway"
                },
                answer: "c"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Why is a Hub rarely used in modern networking environments?",
                options: {
                    a: "It has low throughput and causes high collisions",
                    b: "It is too expensive",
                    c: "It routes packets too complexly",
                    d: "It blocks broadcast traffic"
                },
                answer: "a"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which device is a multiport bridge operating at Layer 2 that forwards frames based on MAC addresses?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "Router",
                    d: "WAP"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A Switch makes its forwarding decisions primarily based on which type of address?",
                options: {
                    a: "IP Address",
                    b: "MAC Address",
                    c: "Email Address",
                    d: "URL"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "ident",
                question: "What Layer 3 device reads logical addresses (IP) and makes routing decisions across interconnected networks?",
                answer: "router"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A Router operates primarily at which layer of the OSI model?",
                options: {
                    a: "Layer 1 (Physical)",
                    b: "Layer 2 (Data Link)",
                    c: "Layer 3 (Network)",
                    d: "Layer 4 (Transport)"
                },
                answer: "c"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A Hub operates primarily at which layer of the OSI model?",
                options: {
                    a: "Layer 1 (Physical)",
                    b: "Layer 2 (Data Link)",
                    c: "Layer 3 (Network)",
                    d: "Layer 4 (Transport)"
                },
                answer: "a"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A standard Switch operates primarily at which layer of the OSI model?",
                options: {
                    a: "Layer 1 (Physical)",
                    b: "Layer 2 (Data Link)",
                    c: "Layer 3 (Network)",
                    d: "Layer 4 (Transport)"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which device connects different networks together and routes traffic across the Internet core?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "Router",
                    d: "Host"
                },
                answer: "c"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which statement about Layer 3 switches is true?",
                options: {
                    a: "They only operate at Layer 1",
                    b: "They provide routing capabilities in addition to standard switching",
                    c: "They act exclusively as firewalls",
                    d: "They are another name for a Hub"
                },
                answer: "b"
            },

            // Q81-Q90: Hardware Devices (Gateway, Firewall, WAP)
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which component is designed to translate and exchange data between networks running completely different communication protocols?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "Gateway",
                    d: "WAP"
                },
                answer: "c"
            },
            {
                category: "Hardware Devices",
                type: "ident",
                question: "What software/hardware combination translates data between different protocols?",
                answer: "gateway"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A security mechanism that enforces rules to protect network resources from unauthorized access is a:",
                options: {
                    a: "Router",
                    b: "Firewall",
                    c: "Switch",
                    d: "Gateway"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "ident",
                question: "What security device enforces rules to protect against unauthorized access?",
                answer: "firewall"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "What does WAP stand for?",
                options: {
                    a: "Wide Area Protocol",
                    b: "Wireless Access Point",
                    c: "Wired Access Protocol",
                    d: "Web Application Proxy"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "What is the primary function of a Wireless Access Point (WAP)?",
                options: {
                    a: "To route traffic to the Internet backbone",
                    b: "To connect wireless devices to a wired local network",
                    c: "To block unauthorized access like a firewall",
                    d: "To translate between different network protocols"
                },
                answer: "b"
            },
            {
                category: "Hardware Devices",
                type: "ident",
                question: "What device connects wireless devices to a wired LAN?",
                answer: "wireless access point"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which of the following devices is most likely to contain complex software rules for filtering packets by IP and port to ensure security?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "Firewall",
                    d: "Transmission Media"
                },
                answer: "c"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "Which of the following is considered a combination of software and hardware designed specifically for protocol translation?",
                options: {
                    a: "Gateway",
                    b: "Host",
                    c: "Hub",
                    d: "Cable"
                },
                answer: "a"
            },
            {
                category: "Hardware Devices",
                type: "mcq",
                question: "A device that provides Wi-Fi access in a local office building is typically a:",
                options: {
                    a: "Hub",
                    b: "WAP (Wireless Access Point)",
                    c: "Firewall",
                    d: "Gateway"
                },
                answer: "b"
            },

            // Q91-Q100: Collision & Broadcast Domains
            {
                category: "Network Domains",
                type: "mcq",
                question: "A network segment where simultaneous packet transmissions by two devices cause an electrical signal crash is called a:",
                options: {
                    a: "Broadcast Domain",
                    b: "Collision Domain",
                    c: "Routing Domain",
                    d: "Gateway Segment"
                },
                answer: "b"
            },
            {
                category: "Network Domains",
                type: "ident",
                question: "What type of domain involves simultaneous packet transmissions crashing into each other?",
                answer: "collision domain"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "A network segment where a transmission sent by one host must be received and processed by every other device on that segment is called a:",
                options: {
                    a: "Collision Domain",
                    b: "Broadcast Domain",
                    c: "Unicast Segment",
                    d: "Physical Domain"
                },
                answer: "b"
            },
            {
                category: "Network Domains",
                type: "ident",
                question: "What type of domain dictates how far a broadcast message travels?",
                answer: "broadcast domain"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "Which of the following devices DOES NOT break collision domains (leaving the entire device as 1 single collision domain)?",
                options: {
                    a: "Switch",
                    b: "Router",
                    c: "Hub",
                    d: "Gateway"
                },
                answer: "c"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "Which device successfully breaks collision domains (each port is its own) but DOES NOT break broadcast domains?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "Router",
                    d: "Firewall"
                },
                answer: "b"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "If you have a 24-port Switch with devices plugged into every port, how many Collision Domains are there?",
                options: {
                    a: "1",
                    b: "24",
                    c: "0",
                    d: "12"
                },
                answer: "b"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "If you have a 24-port Switch, how many Broadcast Domains does it form by default?",
                options: {
                    a: "1",
                    b: "24",
                    c: "0",
                    d: "12"
                },
                answer: "a"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "Which device successfully breaks BOTH collision domains and broadcast domains?",
                options: {
                    a: "Hub",
                    b: "Switch",
                    c: "WAP",
                    d: "Router"
                },
                answer: "d"
            },
            {
                category: "Network Domains",
                type: "mcq",
                question: "According to network design rules, what is the benefit of increasing the number of collision and broadcast domains (e.g., using switches and routers)?",
                options: {
                    a: "It isolates traffic, minimizes congestion, and optimizes bandwidth",
                    b: "It causes more packets to drop deliberately",
                    c: "It increases the number of collisions",
                    d: "It completely disables the use of MAC addresses"
                },
                answer: "a"
            }
        ]
    },

    {
        id: "net_mod2",
        title: "2. Architectures & Layered Models",
        proper: `
            <h2>3. Communication Architectures and Distributed Systems</h2>
            
            <h3>Client-Server Architecture</h3>
            <p><strong>Definition:</strong> A distributed computing model where one system (Client) requests resources/services and another system (Server) processes requests and returns responses.</p>
            <p><strong>Fundamental Principle:</strong> Request &rarr; Processing &rarr; Response.</p>
            <ul>
                <li><strong>Client Types:</strong> Web browsers, mobile apps, desktop software, IoT devices.</li>
                <li><strong>Server Roles:</strong> Web Server (accepts HTTP), Application Server (executes business logic), Database Server (manages data), File Server, Mail Server, DNS Server.</li>
            </ul>

            <h4>Thin Client vs. Thick Client</h4>
            <table>
                <tr><th>Feature</th><th>Thin Client</th><th>Thick Client</th></tr>
                <tr><td><strong>Processing</strong></td><td>Heavy reliance on remote servers.</td><td>Significant processing runs locally.</td></tr>
                <tr><td><strong>Examples</strong></td><td>Traditional server-rendered web pages, cloud terminals.</td><td>Desktop software, mobile apps, rich SPAs.</td></tr>
            </table>

            <p><strong>Advantages & Limitations:</strong> Advantages include centralized management, unified access controls, and efficient resource sharing. Limitations include single points of failure, strict network dependency, and server bottlenecks under load.</p>

            <h3>Peer-to-Peer (P2P) Architecture</h3>
            <p><strong>Definition:</strong> A decentralized network structure where interconnected nodes communicate directly, possessing equivalent privileges and functioning concurrently as clients and servers.</p>
            <p><strong>Use Cases:</strong> BitTorrent, blockchain networks, distributed storage, direct device communication.</p>
            <p><strong>Compared to Client-Server:</strong> P2P survives individual peer disconnections and aggregates capacity as more peers join, but suffers from complex decentralized governance and security vulnerabilities.</p>

            <h3>Distributed Systems</h3>
            <p><strong>Definition:</strong> A collection of independent, interconnected computers working cooperatively that appear to end users as a single unified system (Single System View / Transparency).</p>
            <p><strong>Why Use Distributed Systems?</strong> Single physical systems face hardware ceilings. Distributed networks provide performance scaling, fault tolerance, continuous availability, and geographic coverage.</p>
            
            <h4>Scaling Strategies</h4>
            <ul>
                <li><strong>Vertical Scaling (Scale-Up):</strong> Adding hardware capacity to a single existing server (upgrading CPU, RAM, or storage drives).</li>
                <li><strong>Horizontal Scaling (Scale-Out):</strong> Adding more server machines to share operational workloads dynamically.</li>
                <li><strong>Load Balancer:</strong> A mechanism that intercepts incoming client requests and distributes them evenly across backend server pools.</li>
                <li><strong>Redundancy:</strong> Deploying duplicate hardware/software components to eliminate single failure points.</li>
                <li><strong>Fault Tolerance:</strong> The structural capacity of an entire system to remain fully operational during component failures.</li>
            </ul>

            <hr>

            <h2>4. Layered Networking Reference Models</h2>
            
            <h3>The OSI 7-Layer Reference Model</h3>
            <p>Standardized by the International Organization for Standardization (ISO). Mnemonic: <em>All People Seem To Need Data Processing</em> (Layers 7 to 1).</p>
            <ul>
                <li><strong>Layer 7 - Application Layer:</strong> Human-computer interaction layer supplying network services directly to end-user applications (HTTP, HTTPS, SMTP, DNS, FTP, SSH).</li>
                <li><strong>Layer 6 - Presentation Layer:</strong> Formats, standardizes, encrypts, and compresses data (JSON, XML, UTF-8, JPEG, PNG, TLS/SSL).</li>
                <li><strong>Layer 5 - Session Layer:</strong> Establishes, manages, controls, and terminates communication sessions and ports between remote applications.</li>
                <li><strong>Layer 4 - Transport Layer:</strong> End-to-end data delivery, reliability, flow control, sequencing, and process identification via port addresses (TCP, UDP).</li>
                <li><strong>Layer 3 - Network Layer:</strong> Logical addressing (IP addresses) and path determination/routing across interconnected networks (Routers, IP).</li>
                <li><strong>Layer 2 - Data Link Layer:</strong> Local physical network communication, framing, error checking, and hardware addressing (Switches, Bridges, MAC Addresses, Ethernet, Wi-Fi).</li>
                <li><strong>Layer 1 - Physical Layer:</strong> Hardware transmission of unstructured raw bit streams over physical media (Cables, Connectors, Frequencies, Hubs).</li>
            </ul>

            <h3>The TCP/IP Protocol Suite Model</h3>
            <ul>
                <li><strong>Application Layer:</strong> Encompasses OSI Layers 5, 6, and 7; handles high-level application communications.</li>
                <li><strong>Transport Layer:</strong> Maps directly to OSI Layer 4; provides host-to-host transport communication (TCP, UDP).</li>
                <li><strong>Internet Layer:</strong> Maps to OSI Layer 3; addresses, packages, and routes data packets across networks (IP, ICMP).</li>
                <li><strong>Network Access (Link) Layer:</strong> Encompasses OSI Layers 1 and 2; coordinates hardware interfacing, local frame delivery, and bit transmission.</li>
            </ul>

            <h3>Encapsulation and Decapsulation</h3>
            <p><strong>Encapsulation (Sender side):</strong> As application data moves downward through the stack, each layer attaches control information (headers/trailers):</p>
            <p>Application Data &rarr; TCP Segment (L4) &rarr; IP Packet (L3) &rarr; Ethernet Frame (L2) &rarr; Raw Bits (L1)</p>
            <p><strong>Decapsulation (Receiver side):</strong> The receiving host processes the bit stream upward, stripping layer headers sequentially until raw data reaches the server process.</p>
        `,
        glossary: [
            {
                term: "Client-Server Architecture",
                def: "A computing model where clients request resources and centralized servers process and return responses."
            },
            {
                term: "Peer-to-Peer (P2P)",
                def: "A decentralized network where interconnected nodes communicate directly, acting as both clients and servers."
            },
            {
                term: "Thin Client",
                def: "An application that relies heavily on a central server for processing, keeping local processing minimal."
            },
            {
                term: "Thick Client",
                def: "An application that performs a significant portion of its data processing locally on the endpoint device."
            },
            {
                term: "Vertical Scaling",
                def: "Increasing the capacity of a single existing server by upgrading its hardware (CPU, RAM, storage)."
            },
            {
                term: "Horizontal Scaling",
                def: "Adding more distinct server machines to a resource pool to share workloads dynamically."
            },
            {
                term: "Load Balancer",
                def: "A system that intercepts incoming requests and distributes them evenly across backend servers."
            },
            {
                term: "Fault Tolerance",
                def: "The structural capacity of a system to remain fully operational during component failures."
            },
            {
                term: "OSI Model",
                def: "A 7-layer theoretical networking framework standardized by the ISO."
            },
            {
                term: "Encapsulation",
                def: "The process of appending header/trailer information to data as it moves downward through the OSI stack."
            }
        ],
        flashcards: [
            {
                front: "Which architecture centralizes processing, making it easier to manage but creating a single point of failure?",
                back: "Client-Server Architecture."
            },
            {
                front: "What is the difference between Vertical Scaling and Horizontal Scaling?",
                back: "Vertical = upgrading one machine (more RAM/CPU). Horizontal = adding more machines to share the load."
            },
            {
                front: "What does a Load Balancer do?",
                back: "It intercepts incoming traffic and distributes it evenly across multiple backend servers."
            },
            {
                front: "Which OSI layer is responsible for logical addressing (IP) and routing?",
                back: "Layer 3 - Network Layer."
            },
            {
                front: "Which OSI layer is responsible for physical addressing (MAC) and framing?",
                back: "Layer 2 - Data Link Layer."
            },
            {
                front: "Which OSI layer handles end-to-end data delivery, reliability, and flow control (TCP/UDP)?",
                back: "Layer 4 - Transport Layer."
            },
            {
                front: "Which OSI layer formats, encrypts, and compresses data (e.g., JSON, TLS)?",
                back: "Layer 6 - Presentation Layer."
            },
            {
                front: "What is the process of appending headers as data moves down the OSI stack called?",
                back: "Encapsulation."
            }
        ],
        quiz: [
            // Q1-Q10: Client-Server Architecture
            {
                category: "Client-Server",
                type: "mcq",
                question: "A distributed computing model where one system requests resources and another processes requests is known as:",
                options: {
                    a: "Peer-to-Peer Architecture",
                    b: "Client-Server Architecture",
                    c: "Mainframe Architecture",
                    d: "Standalone Architecture"
                },
                answer: "b"
            },
            {
                category: "Client-Server",
                type: "ident",
                question: "What is the term for a device or application that requests services from a central system?",
                answer: "client"
            },
            {
                category: "Client-Server",
                type: "ident",
                question: "What is the term for a system that processes requests and returns responses to the client?",
                answer: "server"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "Which type of server specifically accepts HTTP/HTTPS requests (e.g., Apache, Nginx)?",
                options: {
                    a: "Database Server",
                    b: "Mail Server",
                    c: "Web Server",
                    d: "File Server"
                },
                answer: "c"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "Which type of server executes core business logic and routing controllers?",
                options: {
                    a: "Application Server",
                    b: "DNS Server",
                    c: "Web Server",
                    d: "File Server"
                },
                answer: "a"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "Which type of server primarily manages data persistence and executes queries (e.g., MySQL)?",
                options: {
                    a: "Web Server",
                    b: "Database Server",
                    c: "Mail Server",
                    d: "DNS Server"
                },
                answer: "b"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "Which of the following is an advantage of the Client-Server model?",
                options: {
                    a: "Decentralized governance",
                    b: "No single point of failure",
                    c: "Centralized data management and security enforcement",
                    d: "It requires no network connection"
                },
                answer: "c"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "Which of the following is a limitation of the Client-Server model?",
                options: {
                    a: "Single point of failure if the server goes down",
                    b: "It forces all processing to happen on the client",
                    c: "It cannot use the Internet",
                    d: "It lacks security"
                },
                answer: "a"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "In a local development environment, what typically acts as the Web Server?",
                options: {
                    a: "Chrome",
                    b: "MySQL",
                    c: "Apache",
                    d: "Laravel"
                },
                answer: "c"
            },
            {
                category: "Client-Server",
                type: "mcq",
                question: "In a local development environment, what typically acts as the Client?",
                options: {
                    a: "Apache",
                    b: "Chrome or another browser",
                    c: "MySQL",
                    d: "PHP"
                },
                answer: "b"
            },

            // Q11-Q20: Thin vs Thick Client & P2P
            {
                category: "Thin vs Thick Client",
                type: "mcq",
                question: "Which client type heavily relies on remote servers, meaning most processing happens centrally?",
                options: {
                    a: "Thick Client",
                    b: "Thin Client",
                    c: "Fat Client",
                    d: "Peer Node"
                },
                answer: "b"
            },
            {
                category: "Thin vs Thick Client",
                type: "mcq",
                question: "Which client type runs significant processing locally on the endpoint device?",
                options: {
                    a: "Thin Client",
                    b: "Light Client",
                    c: "Thick Client",
                    d: "Web Client"
                },
                answer: "c"
            },
            {
                category: "Thin vs Thick Client",
                type: "mcq",
                question: "Traditional server-rendered web pages are generally considered examples of:",
                options: {
                    a: "Thick Clients",
                    b: "Thin Clients",
                    c: "Peer-to-Peer Clients",
                    d: "Databases"
                },
                answer: "b"
            },
            {
                category: "Thin vs Thick Client",
                type: "mcq",
                question: "Desktop software and rich Single Page Applications (SPAs) are generally considered examples of:",
                options: {
                    a: "Thin Clients",
                    b: "Thick Clients",
                    c: "Servers",
                    d: "Routers"
                },
                answer: "b"
            },
            {
                category: "Peer-to-Peer",
                type: "mcq",
                question: "A decentralized network where nodes communicate directly, functioning concurrently as clients and servers is:",
                options: {
                    a: "Client-Server Architecture",
                    b: "Peer-to-Peer (P2P) Architecture",
                    c: "Mainframe Architecture",
                    d: "Thick-Client Architecture"
                },
                answer: "b"
            },
            {
                category: "Peer-to-Peer",
                type: "ident",
                question: "What does P2P stand for?",
                answer: "peer-to-peer"
            },
            {
                category: "Peer-to-Peer",
                type: "mcq",
                question: "Which of the following is a prominent use case for P2P networks?",
                options: {
                    a: "Traditional web hosting",
                    b: "BitTorrent and blockchain networks",
                    c: "Centralized DNS resolution",
                    d: "Single-server databases"
                },
                answer: "b"
            },
            {
                category: "Peer-to-Peer",
                type: "mcq",
                question: "Which of the following is an advantage of P2P over Client-Server?",
                options: {
                    a: "Centralized security enforcement",
                    b: "Survives individual peer disconnections (no single point of failure)",
                    c: "Easier to govern centrally",
                    d: "Guarantees data consistency effortlessly"
                },
                answer: "b"
            },
            {
                category: "Peer-to-Peer",
                type: "mcq",
                question: "Which of the following is a limitation of P2P architecture?",
                options: {
                    a: "It relies on a single server",
                    b: "It cannot scale",
                    c: "Complex decentralized governance and security vulnerabilities from untrusted peers",
                    d: "It strictly requires thin clients"
                },
                answer: "c"
            },
            {
                category: "Architecture",
                type: "mcq",
                question: "True or False: The modern Internet relies exclusively on either strict Client-Server OR strict P2P, never combining them.",
                options: {
                    a: "True",
                    b: "False"
                },
                answer: "b"
            },

            // Q21-Q40: Distributed Systems & Scaling
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "A collection of independent computers working cooperatively that appear to users as a single unified system is a:",
                options: {
                    a: "Distributed System",
                    b: "Standalone PC",
                    c: "Single Server",
                    d: "Local Area Network"
                },
                answer: "a"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Why do engineers use Distributed Systems instead of single physical servers?",
                options: {
                    a: "To decrease performance",
                    b: "Because single systems face hardware ceilings and lack fault resilience",
                    c: "To create a single point of failure",
                    d: "To avoid using the internet"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Decoupling responsibilities (Auth Server, App Server, DB Server) across separate machines is known as:",
                options: {
                    a: "Geographic Distribution",
                    b: "Functional Distribution",
                    c: "Vertical Scaling",
                    d: "Encapsulation"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Positioning server instances across multiple regional data centers (e.g., Manila, Singapore, Tokyo) is known as:",
                options: {
                    a: "Functional Distribution",
                    b: "Geographic Distribution",
                    c: "Vertical Scaling",
                    d: "Decapsulation"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "ident",
                question: "Adding hardware capacity (CPU, RAM) to a single existing server is known as what type of scaling?",
                answer: "vertical scaling"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Vertical Scaling is also commonly referred to as:",
                options: {
                    a: "Scale-Out",
                    b: "Scale-Up",
                    c: "Load Balancing",
                    d: "Redundancy"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "ident",
                question: "Adding more distinct server machines to share workloads dynamically is known as what type of scaling?",
                answer: "horizontal scaling"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Horizontal Scaling is also commonly referred to as:",
                options: {
                    a: "Scale-Up",
                    b: "Scale-Out",
                    c: "Vertical Scaling",
                    d: "Decapsulation"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "A mechanism that intercepts incoming client requests and distributes them evenly across backend server pools is a:",
                options: {
                    a: "Load Balancer",
                    b: "DNS Server",
                    c: "Switch",
                    d: "Hub"
                },
                answer: "a"
            },
            {
                category: "Distributed Systems",
                type: "ident",
                question: "What term describes deploying duplicate hardware or software components to eliminate single failure points?",
                answer: "redundancy"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "The structural capacity of an entire system to remain fully operational during component failures is called:",
                options: {
                    a: "Vertical Scaling",
                    b: "Load Balancing",
                    c: "Fault Tolerance",
                    d: "Encapsulation"
                },
                answer: "c"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Which of the following is a common challenge in Distributed Systems?",
                options: {
                    a: "Data consistency across nodes",
                    b: "Single point of failure",
                    c: "Lack of scalability",
                    d: "Inability to use load balancers"
                },
                answer: "a"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Which component sits directly between the Users/Clients and the Web/App servers in a modern distributed diagram?",
                options: {
                    a: "Distributed Database",
                    b: "Load Balancer",
                    c: "Storage Drive",
                    d: "RAM"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "If a system uses three Web/App servers (S1, S2, S3) processing requests simultaneously, it has implemented:",
                options: {
                    a: "Vertical Scaling",
                    b: "Horizontal Scaling",
                    c: "Thin Client architecture",
                    d: "A single point of failure"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Which issue involves network delay between sending a packet and receiving an acknowledgment, challenging distributed systems?",
                options: {
                    a: "Bandwidth",
                    b: "Latency",
                    c: "Redundancy",
                    d: "Fault Tolerance"
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "If a database connection pool is exhausted, this is considered a:",
                options: {
                    a: "Challenge/Failure Factor in distributed systems",
                    b: "Benefit of vertical scaling",
                    c: "Type of Load Balancer",
                    d: "Security firewall"
                },
                answer: "a"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "What is the primary difference between Redundancy and Fault Tolerance?",
                options: {
                    a: "They mean the exact same thing",
                    b: "Redundancy is having backup components; Fault tolerance is the system's ability to seamlessly use those backups to stay online.",
                    c: "Redundancy scales up; Fault tolerance scales out.",
                    d: "Redundancy applies to hardware; Fault tolerance applies to software."
                },
                answer: "b"
            },
            {
                category: "Distributed Systems",
                type: "ident",
                question: "What term describes the illusion that a distributed system is just a single computer to the end user?",
                answer: "single system view"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Which of the following is NOT typically decoupled in functional distribution?",
                options: {
                    a: "Authentication Server",
                    b: "Database Server",
                    c: "Motherboard CPU",
                    d: "Email Server"
                },
                answer: "c"
            },
            {
                category: "Distributed Systems",
                type: "mcq",
                question: "Using a Global Load Balancer to route users in Asia to a Tokyo server and users in Europe to a London server is an example of:",
                options: {
                    a: "Geographic Distribution",
                    b: "Functional Distribution",
                    c: "Vertical Scaling",
                    d: "Peer-to-Peer Routing"
                },
                answer: "a"
            },

            // Q41-Q70: OSI 7-Layer Model
            {
                category: "OSI Model",
                type: "ident",
                question: "What does OSI stand for?",
                answer: "open systems interconnection"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "How many layers are in the OSI Reference Model?",
                options: {
                    a: "4",
                    b: "5",
                    c: "7",
                    d: "9"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 7 of the OSI Model?",
                options: {
                    a: "Presentation Layer",
                    b: "Session Layer",
                    c: "Application Layer",
                    d: "Transport Layer"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 6 of the OSI Model?",
                options: {
                    a: "Presentation Layer",
                    b: "Session Layer",
                    c: "Application Layer",
                    d: "Transport Layer"
                },
                answer: "a"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 5 of the OSI Model?",
                options: {
                    a: "Transport Layer",
                    b: "Session Layer",
                    c: "Network Layer",
                    d: "Presentation Layer"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 4 of the OSI Model?",
                options: {
                    a: "Data Link Layer",
                    b: "Network Layer",
                    c: "Transport Layer",
                    d: "Session Layer"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 3 of the OSI Model?",
                options: {
                    a: "Data Link Layer",
                    b: "Network Layer",
                    c: "Transport Layer",
                    d: "Physical Layer"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 2 of the OSI Model?",
                options: {
                    a: "Physical Layer",
                    b: "Network Layer",
                    c: "Data Link Layer",
                    d: "Transport Layer"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "What is Layer 1 of the OSI Model?",
                options: {
                    a: "Physical Layer",
                    b: "Data Link Layer",
                    c: "Network Layer",
                    d: "Application Layer"
                },
                answer: "a"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer is the human-computer interaction layer that supplies network services directly to end-user applications?",
                options: {
                    a: "Layer 7 - Application",
                    b: "Layer 6 - Presentation",
                    c: "Layer 5 - Session",
                    d: "Layer 4 - Transport"
                },
                answer: "a"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "HTTP, HTTPS, SMTP, DNS, and FTP operate at which OSI Layer?",
                options: {
                    a: "Layer 3",
                    b: "Layer 4",
                    c: "Layer 7",
                    d: "Layer 1"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer formats, standardizes, encrypts, and compresses data?",
                options: {
                    a: "Layer 7 - Application",
                    b: "Layer 6 - Presentation",
                    c: "Layer 5 - Session",
                    d: "Layer 4 - Transport"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "JSON, XML, UTF-8, JPEG, and TLS/SSL encryption occur at which OSI Layer?",
                options: {
                    a: "Layer 7",
                    b: "Layer 6",
                    c: "Layer 5",
                    d: "Layer 4"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer establishes, manages, controls, and terminates communication sessions and ports?",
                options: {
                    a: "Layer 7 - Application",
                    b: "Layer 6 - Presentation",
                    c: "Layer 5 - Session",
                    d: "Layer 4 - Transport"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer handles end-to-end data delivery, reliability, flow control, and sequencing?",
                options: {
                    a: "Layer 5 - Session",
                    b: "Layer 4 - Transport",
                    c: "Layer 3 - Network",
                    d: "Layer 2 - Data Link"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "TCP and UDP operate at which OSI Layer?",
                options: {
                    a: "Layer 3",
                    b: "Layer 4",
                    c: "Layer 5",
                    d: "Layer 7"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer handles logical addressing (IP addresses) and path determination/routing?",
                options: {
                    a: "Layer 4 - Transport",
                    b: "Layer 3 - Network",
                    c: "Layer 2 - Data Link",
                    d: "Layer 1 - Physical"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Routers operate at which OSI Layer?",
                options: {
                    a: "Layer 2",
                    b: "Layer 3",
                    c: "Layer 4",
                    d: "Layer 7"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer handles local physical network communication, framing, error checking, and hardware addressing?",
                options: {
                    a: "Layer 4 - Transport",
                    b: "Layer 3 - Network",
                    c: "Layer 2 - Data Link",
                    d: "Layer 1 - Physical"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Switches and MAC Addresses operate at which OSI Layer?",
                options: {
                    a: "Layer 1",
                    b: "Layer 2",
                    c: "Layer 3",
                    d: "Layer 4"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer handles the hardware transmission of unstructured raw bit streams over physical media?",
                options: {
                    a: "Layer 3 - Network",
                    b: "Layer 2 - Data Link",
                    c: "Layer 1 - Physical",
                    d: "Layer 4 - Transport"
                },
                answer: "c"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Cables, connectors, voltage levels, and Hubs operate at which OSI Layer?",
                options: {
                    a: "Layer 1",
                    b: "Layer 2",
                    c: "Layer 3",
                    d: "Layer 7"
                },
                answer: "a"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which mnemonic correctly orders the OSI model from Layer 7 down to Layer 1?",
                options: {
                    a: "Please Do Not Throw Sausage Pizza Away",
                    b: "All People Seem To Need Data Processing",
                    c: "Every Boy Does Fine",
                    d: "Some People Try New Data Programs"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer sits immediately below the Application Layer?",
                options: {
                    a: "Session Layer",
                    b: "Presentation Layer",
                    c: "Transport Layer",
                    d: "Network Layer"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "Which layer sits immediately above the Data Link Layer?",
                options: {
                    a: "Physical Layer",
                    b: "Network Layer",
                    c: "Transport Layer",
                    d: "Session Layer"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "mcq",
                question: "At which layer do Ethernet and Wi-Fi framing primarily occur?",
                options: {
                    a: "Layer 1",
                    b: "Layer 2",
                    c: "Layer 3",
                    d: "Layer 4"
                },
                answer: "b"
            },
            {
                category: "OSI Model",
                type: "ident",
                question: "What layer is responsible for logical IP addressing?",
                answer: "network layer"
            },
            {
                category: "OSI Model",
                type: "ident",
                question: "What layer is responsible for physical MAC addressing?",
                answer: "data link layer"
            },
            {
                category: "OSI Model",
                type: "ident",
                question: "What layer converts application data into standardized formats like JSON or JPEG?",
                answer: "presentation layer"
            },
            {
                category: "OSI Model",
                type: "ident",
                question: "What layer transmits raw bit streams of 1s and 0s over cables?",
                answer: "physical layer"
            },

            // Q71-Q85: TCP/IP Model Mapping
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "How many layers does the TCP/IP Reference Model have?",
                options: {
                    a: "4",
                    b: "5",
                    c: "7",
                    d: "9"
                },
                answer: "a"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "In the TCP/IP Model, the Application Layer encompasses which OSI Layers?",
                options: {
                    a: "Layers 1, 2, 3",
                    b: "Layers 5, 6, 7",
                    c: "Layers 4, 5",
                    d: "It only maps to Layer 7"
                },
                answer: "b"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "In the TCP/IP Model, which layer maps directly to OSI Layer 4?",
                options: {
                    a: "Application Layer",
                    b: "Transport Layer",
                    c: "Internet Layer",
                    d: "Network Access Layer"
                },
                answer: "b"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "In the TCP/IP Model, which layer maps directly to OSI Layer 3?",
                options: {
                    a: "Transport Layer",
                    b: "Internet Layer",
                    c: "Network Access Layer",
                    d: "Application Layer"
                },
                answer: "b"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "In the TCP/IP Model, the Network Access (or Link) Layer encompasses which OSI Layers?",
                options: {
                    a: "Layers 1 and 2",
                    b: "Layers 2 and 3",
                    c: "Layers 3 and 4",
                    d: "Layers 6 and 7"
                },
                answer: "a"
            },
            {
                category: "TCP/IP Model",
                type: "ident",
                question: "What layer in the TCP/IP model corresponds to the OSI Network layer?",
                answer: "internet layer"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "Which TCP/IP layer handles high-level protocols like HTTP, SSH, and DNS?",
                options: {
                    a: "Transport Layer",
                    b: "Internet Layer",
                    c: "Network Access Layer",
                    d: "Application Layer"
                },
                answer: "d"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "Which TCP/IP layer handles host-to-host communication using TCP and UDP?",
                options: {
                    a: "Application Layer",
                    b: "Transport Layer",
                    c: "Internet Layer",
                    d: "Network Access Layer"
                },
                answer: "b"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "Which TCP/IP layer coordinates hardware interfacing and local frame delivery?",
                options: {
                    a: "Internet Layer",
                    b: "Transport Layer",
                    c: "Network Access (Link) Layer",
                    d: "Application Layer"
                },
                answer: "c"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "The Internet Protocol (IP) and ICMP operate at which TCP/IP layer?",
                options: {
                    a: "Application Layer",
                    b: "Transport Layer",
                    c: "Internet Layer",
                    d: "Network Access Layer"
                },
                answer: "c"
            },
            {
                category: "TCP/IP Model",
                type: "ident",
                question: "What does TCP/IP stand for? (Format: word/word)",
                answer: "transmission control protocol/internet protocol"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "True or False: The OSI model has 7 layers, while the traditional TCP/IP suite model has 4 layers.",
                options: {
                    a: "True",
                    b: "False"
                },
                answer: "a"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "Which OSI layers are merged into the TCP/IP Network Access Layer?",
                options: {
                    a: "Physical and Data Link",
                    b: "Network and Transport",
                    c: "Session and Presentation",
                    d: "Application and Presentation"
                },
                answer: "a"
            },
            {
                category: "TCP/IP Model",
                type: "mcq",
                question: "Which OSI layers are merged into the TCP/IP Application Layer?",
                options: {
                    a: "Layers 1, 2, 3",
                    b: "Layers 3, 4, 5",
                    c: "Layers 5, 6, 7",
                    d: "Layers 4, 5, 6"
                },
                answer: "c"
            },
            {
                category: "TCP/IP Model",
                type: "ident",
                question: "What TCP/IP layer packages and routes data packets across networks?",
                answer: "internet layer"
            },

            // Q86-Q100: Encapsulation & Decapsulation
            {
                category: "Encapsulation",
                type: "mcq",
                question: "As application data moves downward through the network stack on the sender's side, each layer attaches control information. This process is called:",
                options: {
                    a: "Decapsulation",
                    b: "Encapsulation",
                    c: "Routing",
                    d: "Switching"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "ident",
                question: "What is the process called when the receiver strips layer headers sequentially upward?",
                answer: "decapsulation"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "During encapsulation, Application Data is first passed down to Layer 4 where it becomes a:",
                options: {
                    a: "Packet",
                    b: "Frame",
                    c: "TCP Segment",
                    d: "Raw Bit"
                },
                answer: "c"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "During encapsulation, a TCP Segment (Layer 4) is passed down to Layer 3 where it becomes an:",
                options: {
                    a: "IP Packet",
                    b: "Ethernet Frame",
                    c: "Application Payload",
                    d: "Raw Bit"
                },
                answer: "a"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "During encapsulation, an IP Packet (Layer 3) is passed down to Layer 2 where it becomes an:",
                options: {
                    a: "IP Segment",
                    b: "Ethernet Frame",
                    c: "Raw Bit Stream",
                    d: "Application Protocol"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "Finally, at Layer 1, the Ethernet Frame is transmitted across the physical media as:",
                options: {
                    a: "Packets",
                    b: "Segments",
                    c: "Unstructured Raw Bits",
                    d: "Datagrams"
                },
                answer: "c"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "Which of the following represents the correct sequence of Encapsulation (from top to bottom)?",
                options: {
                    a: "Data -> Frame -> Packet -> Segment -> Bits",
                    b: "Data -> Segment -> Packet -> Frame -> Bits",
                    c: "Bits -> Frame -> Packet -> Segment -> Data",
                    d: "Segment -> Data -> Packet -> Frame -> Bits"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "Which of the following represents the correct sequence of Decapsulation (from bottom to top)?",
                options: {
                    a: "Data -> Segment -> Packet -> Frame -> Bits",
                    b: "Bits -> Frame -> Packet -> Segment -> Data",
                    c: "Frame -> Bits -> Segment -> Packet -> Data",
                    d: "Packet -> Frame -> Bits -> Data -> Segment"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "ident",
                question: "At which OSI layer is the data unit referred to as a 'Segment'?",
                answer: "transport layer"
            },
            {
                category: "Encapsulation",
                type: "ident",
                question: "At which OSI layer is the data unit referred to as a 'Packet'?",
                answer: "network layer"
            },
            {
                category: "Encapsulation",
                type: "ident",
                question: "At which OSI layer is the data unit referred to as a 'Frame'?",
                answer: "data link layer"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "Headers and trailers are attached to the payload during which process?",
                options: {
                    a: "Decapsulation",
                    b: "Encapsulation",
                    c: "Subnetting",
                    d: "Load Balancing"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "During decapsulation, when Layer 3 finishes processing the IP Packet, it strips its header and passes the payload UP to Layer 4 as a:",
                options: {
                    a: "Frame",
                    b: "Segment",
                    c: "Raw Bit",
                    d: "Application Data"
                },
                answer: "b"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "During decapsulation, when Layer 4 finishes processing the TCP Segment, it strips its header and passes the payload UP to the application as:",
                options: {
                    a: "A Packet",
                    b: "A Frame",
                    c: "Application Data",
                    d: "Raw Bits"
                },
                answer: "c"
            },
            {
                category: "Encapsulation",
                type: "mcq",
                question: "What is the general term for the control information attached to the front of a data unit during encapsulation?",
                options: {
                    a: "Trailer",
                    b: "Header",
                    c: "Payload",
                    d: "Checksum"
                },
                answer: "b"
            }
        ]
    } ,

    {
        id: "net_mod3",
        title: "3. Protocols, Ports & Addressing",
        proper: `
            <h2>5. Transport Protocols and Internet Services</h2>
            <h3>Transmission Control Protocol (TCP)</h3>
            <p><strong>Definition:</strong> A connection-oriented transport protocol operating at Layer 4 that guarantees reliable, ordered data delivery between communicating applications.</p>
            <ul>
                <li><strong>Key Features:</strong> Connection establishment, sequencing, acknowledgments, error detection, automatic retransmissions, flow control, and connection termination.</li>
                <li><strong>Three-Way Handshake:</strong> SYN &rarr; SYN-ACK &rarr; ACK.</li>
                <li><strong>Reliability:</strong> If fragments arrive out of sequence, TCP reorders them. If a packet drops, TCP triggers a retransmission.</li>
            </ul>

            <h3>User Datagram Protocol (UDP)</h3>
            <p><strong>Definition:</strong> A lightweight, connectionless transport protocol that transmits datagrams without pre-establishing connections or verifying delivery.</p>
            <ul>
                <li><strong>Key Features:</strong> Best-effort delivery, minimal protocol overhead, fast transmission speeds, no packet ordering guarantees, no automatic retransmission of lost packets.</li>
                <li><strong>Use Cases:</strong> DNS queries, real-time voice (VoIP), online gaming, live video streaming, IoT sensors where low delay takes priority over minor packet loss.</li>
            </ul>

            <h3>Application Protocols and Ports</h3>
            <p><strong>Port Numbers:</strong> 16-bit logical identifiers used by transport layers to deliver packets to specific application processes running on an IP host. (Analogy: IP = Building address; Port = Room number).</p>
            <table>
                <tr><th>Protocol</th><th>Port</th><th>Purpose</th></tr>
                <tr><td><strong>FTP</strong></td><td>21</td><td>Unencrypted file transfer</td></tr>
                <tr><td><strong>SSH / SFTP</strong></td><td>22</td><td>Secure remote administration / encrypted file transfer</td></tr>
                <tr><td><strong>SMTP</strong></td><td>25</td><td>Email routing and delivery</td></tr>
                <tr><td><strong>DNS</strong></td><td>53</td><td>Domain Name Resolution</td></tr>
                <tr><td><strong>HTTP</strong></td><td>80</td><td>Unencrypted web communication</td></tr>
                <tr><td><strong>POP3</strong></td><td>110</td><td>Email retrieval (downloads to local client)</td></tr>
                <tr><td><strong>IMAP</strong></td><td>143</td><td>Email synchronization (messages remain on server)</td></tr>
                <tr><td><strong>HTTPS</strong></td><td>443</td><td>Secure web communication (encrypted via TLS)</td></tr>
            </table>

            <h3>Common HTTP Status Codes</h3>
            <ul>
                <li><strong>200 - OK:</strong> Request succeeded.</li>
                <li><strong>201 - Created:</strong> Resource created successfully.</li>
                <li><strong>301 - Moved Permanently:</strong> Target resource redirected.</li>
                <li><strong>400 - Bad Request:</strong> Client submitted invalid syntax.</li>
                <li><strong>401 - Unauthorized:</strong> Authentication required or invalid.</li>
                <li><strong>403 - Forbidden:</strong> Server understands request but refuses access.</li>
                <li><strong>404 - Not Found:</strong> Requested URI path not found.</li>
                <li><strong>500 - Internal Server Error:</strong> Unhandled server-side failure.</li>
            </ul>

            <h2>6. Network Addressing: IPv4, IPv6, and Architecture</h2>
            <p><strong>MAC Address (Physical Address):</strong> 48-bit factory-burned hardware identifier on the NIC. Facilitates local frame delivery. Changes hop-by-hop at every router.</p>
            <p><strong>IP Address (Logical Address):</strong> Network-layer identifier assigned to route data across different networks. Remains constant end-to-end.</p>

            <h3>IPv4 Packet Structure and Header Fields</h3>
            <p>IPv4 uses a 32-bit logical address space structured into 4 octets.</p>
            <ul>
                <li><strong>Version (4 bits):</strong> Version of IP used.</li>
                <li><strong>IHL (4 bits):</strong> Internet Header Length.</li>
                <li><strong>DSCP (6 bits):</strong> Differentiated Services Code Point (Type of Service).</li>
                <li><strong>ECN (2 bits):</strong> Explicit Congestion Notification.</li>
                <li><strong>Total Length (16 bits):</strong> Total size of packet including header and data payload.</li>
                <li><strong>Identification (16 bits):</strong> Identifies original packet fragments.</li>
                <li><strong>Flags (3 bits):</strong> Controls fragmentation.</li>
                <li><strong>Fragment Offset (13 bits):</strong> Specifies fragment position.</li>
                <li><strong>Time to Live / TTL (8 bits):</strong> Hop limit decremented by 1 at each router; discarded at 0 to prevent routing loops.</li>
                <li><strong>Protocol (8 bits):</strong> Next-level transport protocol (ICMP=1, TCP=6, UDP=17).</li>
                <li><strong>Header Checksum (16 bits):</strong> Detects errors in the header.</li>
                <li><strong>Source & Destination Addresses:</strong> 32 bits each.</li>
            </ul>

            <h3>IPv4 Transmission Modes</h3>
            <ul>
                <li><strong>Unicast:</strong> Data sent to a single specific destination IP.</li>
                <li><strong>Broadcast:</strong> Sent to all hosts on a local subnet using 255.255.255.255.</li>
                <li><strong>Multicast:</strong> Packets sent to an interested subscriber group using Class D IPs (224.x.x.x).</li>
            </ul>

            <h3>Classful IPv4 Addressing</h3>
            <table>
                <tr><th>Class</th><th>First Octet Binary</th><th>First Octet Range</th><th>Default Subnet Mask</th></tr>
                <tr><td><strong>Class A</strong></td><td>0...</td><td>1 - 126</td><td>255.0.0.0 (/8)</td></tr>
                <tr><td><strong>Class B</strong></td><td>10...</td><td>128 - 191</td><td>255.255.0.0 (/16)</td></tr>
                <tr><td><strong>Class C</strong></td><td>110...</td><td>192 - 223</td><td>255.255.255.0 (/24)</td></tr>
                <tr><td><strong>Class D</strong></td><td>1110...</td><td>224 - 239</td><td>N/A (Multicasting)</td></tr>
                <tr><td><strong>Class E</strong></td><td>1111...</td><td>240 - 255</td><td>N/A (Experimental)</td></tr>
            </table>

            <h3>Reserved Address Spaces & IPv6</h3>
            <p><strong>Private IP Ranges (RFC 1918):</strong> Non-routable on the Internet; conserved for internal LAN use.
                <br>Class A: 10.0.0.0 - 10.255.255.255
                <br>Class B: 172.16.0.0 - 172.31.255.255
                <br>Class C: 192.168.0.0 - 192.168.255.255
            </p>
            <p><strong>Loopback Address:</strong> 127.0.0.1 (Used to test local TCP/IP stack without hitting a physical NIC).</p>
            <p><strong>IPv6:</strong> Utilizes a 128-bit address space. Coexistence mechanisms include Dual IP Stack, Tunneling (6to4), and NAT Protocol Translation.</p>
        `,
        glossary: [
            { term: "TCP", def: "Transmission Control Protocol; a connection-oriented, reliable Layer 4 protocol." },
            { term: "UDP", def: "User Datagram Protocol; a connectionless, best-effort Layer 4 protocol." },
            { term: "Port", def: "A 16-bit logical identifier that routes traffic to specific application processes on a host." },
            { term: "TTL", def: "Time to Live; an 8-bit field in an IPv4 header that prevents infinite routing loops." },
            { term: "Unicast", def: "A transmission mode where data is sent to one specific destination IP." },
            { term: "Multicast", def: "A transmission mode where packets are sent to an interested subscriber group." },
            { term: "MAC Address", def: "A 48-bit hardware identifier that changes hop-by-hop during transmission." }
        ],
        quiz: [
            // TCP vs UDP (1-20)
            { category: "Transport Protocols", type: "ident", question: "What does TCP stand for?", answer: "transmission control protocol" },
            { category: "Transport Protocols", type: "ident", question: "What does UDP stand for?", answer: "user datagram protocol" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol is connection-oriented and guarantees reliable, ordered data delivery?", options: { a: "UDP", b: "TCP", c: "IP", d: "ICMP" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol is connectionless and provides best-effort delivery without verifying delivery?", options: { a: "TCP", b: "UDP", c: "HTTP", d: "FTP" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "What type of handshake is required to establish a TCP connection?", options: { a: "Two-way handshake", b: "Three-way handshake", c: "Four-way handshake", d: "No handshake" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "In a TCP three-way handshake, what is the first step sent by the client?", options: { a: "ACK", b: "SYN-ACK", c: "SYN", d: "FIN" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "In a TCP three-way handshake, what does the server send back to the client?", options: { a: "SYN", b: "ACK", c: "SYN-ACK", d: "RST" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "In a TCP three-way handshake, what is the final step sent by the client to establish the connection?", options: { a: "SYN", b: "SYN-ACK", c: "ACK", d: "FIN" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "If data fragments arrive out of sequence, which protocol is responsible for reordering them?", options: { a: "UDP", b: "TCP", c: "IP", d: "Ethernet" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "If a packet drops during transmission, which protocol automatically triggers a retransmission?", options: { a: "TCP", b: "UDP", c: "IP", d: "ARP" }, answer: "a" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol has minimal protocol overhead and faster transmission speeds?", options: { a: "TCP", b: "HTTP", c: "FTP", d: "UDP" }, answer: "d" },
            { category: "Transport Protocols", type: "mcq", question: "Online gaming, live video streaming, and VoIP primarily use which transport protocol?", options: { a: "TCP", b: "UDP", c: "SMTP", d: "POP3" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Web browsing, email, and file transfers heavily rely on which transport protocol for guaranteed delivery?", options: { a: "UDP", b: "TCP", c: "ICMP", d: "IGMP" }, answer: "b" },
            { category: "Transport Protocols", type: "ident", question: "What is the acronym for the transport protocol that provides best-effort delivery?", answer: "udp" },
            { category: "Transport Protocols", type: "mcq", question: "Why is UDP preferred for live video streaming?", options: { a: "It guarantees no packets are lost", b: "It retransmits dropped frames automatically", c: "Low delay takes priority over minor packet loss", d: "It uses a three-way handshake for security" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol operates at Layer 4 of the OSI model?", options: { a: "IP", b: "TCP", c: "HTTP", d: "MAC" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which feature is NOT provided by TCP?", options: { a: "Error detection", b: "Connectionless delivery", c: "Flow control", d: "Sequencing" }, answer: "b" },
            { category: "Transport Protocols", type: "ident", question: "What term describes TCP's ability to regulate the rate of data transmission to prevent overwhelming the receiver?", answer: "flow control" },
            { category: "Transport Protocols", type: "mcq", question: "Which of the following is true about UDP?", options: { a: "It guarantees ordered delivery", b: "It has higher protocol overhead than TCP", c: "It does not retransmit lost packets", d: "It establishes a session before sending data" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "DNS queries primarily utilize which lightweight transport protocol?", options: { a: "TCP", b: "UDP", c: "HTTPS", d: "SFTP" }, answer: "b" },

            // Ports & Services (21-40)
            { category: "Ports & Services", type: "mcq", question: "How many bits are used for a logical Port Number?", options: { a: "8-bit", b: "16-bit", c: "32-bit", d: "64-bit" }, answer: "b" },
            { category: "Ports & Services", type: "ident", question: "What analogy is given for an IP Address and a Port Number?", answer: "building address and room number" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for FTP?", answer: "21" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for SSH?", answer: "22" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for SFTP?", answer: "22" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for SMTP?", answer: "25" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for DNS?", answer: "53" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for HTTP?", answer: "80" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for POP3?", answer: "110" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for IMAP?", answer: "143" },
            { category: "Ports & Services", type: "solve", question: "What is the default port number for HTTPS?", answer: "443" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol is used for unencrypted file transfers and managing directories?", options: { a: "SFTP", b: "FTP", c: "SSH", d: "SMTP" }, answer: "b" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol is used for secure remote administration and runs on Port 22?", options: { a: "SSH", b: "HTTP", c: "DNS", d: "POP3" }, answer: "a" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol is strictly responsible for email routing and delivery (sending)?", options: { a: "IMAP", b: "POP3", c: "SMTP", d: "FTP" }, answer: "c" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol retrieves email by downloading it directly to a local client?", options: { a: "IMAP", b: "SMTP", c: "POP3", d: "HTTP" }, answer: "c" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol synchronizes email folders and statuses across multiple devices?", options: { a: "POP3", b: "IMAP", c: "SMTP", d: "SFTP" }, answer: "b" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol secures HTTP web communication using TLS encryption?", options: { a: "SFTP", b: "HTTPS", c: "SSH", d: "DNS" }, answer: "b" },
            { category: "Ports & Services", type: "ident", question: "What protocol operates on Port 53?", answer: "dns" },
            { category: "Ports & Services", type: "mcq", question: "Secure file transfer (SFTP) operates over which secure tunnel?", options: { a: "HTTPS", b: "SSH", c: "TLS", d: "SSL" }, answer: "b" },
            { category: "Ports & Services", type: "mcq", question: "The three security pillars of HTTPS are Authentication, Integrity, and:", options: { a: "Availability", b: "Confidentiality", c: "Non-repudiation", d: "Speed" }, answer: "b" },

            // HTTP Status Codes (41-50)
            { category: "Status Codes", type: "solve", question: "Which HTTP status code means 'OK - Request succeeded'?", answer: "200" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code means 'Created - Resource created successfully'?", answer: "201" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code means 'Moved Permanently'?", answer: "301" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code signifies a 'Bad Request' (invalid client syntax)?", answer: "400" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code signifies 'Unauthorized' (authentication required)?", answer: "401" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code signifies 'Forbidden' (server refuses access)?", answer: "403" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code signifies 'Not Found'?", answer: "404" },
            { category: "Status Codes", type: "solve", question: "Which HTTP status code signifies an 'Internal Server Error'?", answer: "500" },
            { category: "Status Codes", type: "mcq", question: "If a user attempts to access a protected admin dashboard without logging in, which status code should the server return?", options: { a: "200", b: "301", c: "401", d: "500" }, answer: "c" },
            { category: "Status Codes", type: "mcq", question: "If a backend database crashes and the application code fails to handle it, what status code is typically returned to the user?", options: { a: "400", b: "404", c: "403", d: "500" }, answer: "d" },

            // MAC vs IP & Transmission Modes (51-60)
            { category: "Addressing", type: "mcq", question: "How many bits are in a MAC Address?", options: { a: "16-bit", b: "32-bit", c: "48-bit", d: "128-bit" }, answer: "c" },
            { category: "Addressing", type: "mcq", question: "How many bits are in an IPv4 Address?", options: { a: "16-bit", b: "32-bit", c: "48-bit", d: "128-bit" }, answer: "b" },
            { category: "Addressing", type: "mcq", question: "Which address facilitates local frame delivery within the same collision/broadcast domain?", options: { a: "IP Address", b: "MAC Address", c: "Port Number", d: "DNS Address" }, answer: "b" },
            { category: "Addressing", type: "mcq", question: "Which address changes hop-by-hop at every router across local links?", options: { a: "Source IP Address", b: "Destination IP Address", c: "MAC Address", d: "Port Number" }, answer: "c" },
            { category: "Addressing", type: "mcq", question: "Which address remains constant end-to-end during a data flow across the internet?", options: { a: "MAC Address", b: "IP Address", c: "Frame Check Sequence", d: "Ethernet Header" }, answer: "b" },
            { category: "Transmission", type: "mcq", question: "Data sent to a single specific destination IP is known as:", options: { a: "Unicast", b: "Broadcast", c: "Multicast", d: "Anycast" }, answer: "a" },
            { category: "Transmission", type: "mcq", question: "Data sent to all hosts on a local subnet is known as:", options: { a: "Unicast", b: "Multicast", c: "Broadcast", d: "Anycast" }, answer: "c" },
            { category: "Transmission", type: "mcq", question: "Data sent to an interested subscriber group using Class D IPs is known as:", options: { a: "Unicast", b: "Multicast", c: "Broadcast", d: "Anycast" }, answer: "b" },
            { category: "Transmission", type: "mcq", question: "What IP address is explicitly used for local subnet broadcasting?", options: { a: "127.0.0.1", b: "255.255.255.255", c: "0.0.0.0", d: "192.168.1.1" }, answer: "b" },
            { category: "Transmission", type: "ident", question: "What specific transmission mode uses Class D IP addresses (224.x.x.x)?", answer: "multicast" },

            // IPv4 Header Fields (61-80)
            { category: "IPv4 Header", type: "solve", question: "How many bits long is the entire Source IP Address field in an IPv4 header?", answer: "32" },
            { category: "IPv4 Header", type: "solve", question: "How many bits are used for the Version field in an IPv4 header?", answer: "4" },
            { category: "IPv4 Header", type: "mcq", question: "What does IHL stand for in the IPv4 header?", options: { a: "Internet Host Locator", b: "Internet Header Length", c: "Internal Host Link", d: "Internet Hop Limit" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "How many bits are used for the IHL field?", answer: "4" },
            { category: "IPv4 Header", type: "mcq", question: "What does the DSCP field represent?", options: { a: "Data Sequence Control Parameter", b: "Differentiated Services Code Point", c: "Dynamic Subnet Control Protocol", d: "Destination Source Checksum Pointer" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "How many bits are used for the DSCP field?", answer: "6" },
            { category: "IPv4 Header", type: "mcq", question: "What does the ECN (2 bits) field do?", options: { a: "Encrypts Control Nodes", b: "Enables Checksum Notification", c: "Explicit Congestion Notification", d: "Error Correction Number" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "Which 16-bit field specifies the entire size of the packet including the header and data payload?", options: { a: "Total Length", b: "Identification", c: "Fragment Offset", d: "Header Checksum" }, answer: "a" },
            { category: "IPv4 Header", type: "mcq", question: "Which 16-bit field is used specifically to identify original packet fragments?", options: { a: "Header Checksum", b: "Identification", c: "Total Length", d: "Fragment Offset" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "How many bits are assigned to the Flags field that controls fragmentation?", answer: "3" },
            { category: "IPv4 Header", type: "mcq", question: "Which 13-bit field specifies a fragment's position relative to the original packet?", options: { a: "Identification", b: "DSCP", c: "Fragment Offset", d: "Header Checksum" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "Which field prevents routing loops by decrementing its value by 1 at each router hop?", options: { a: "Time to Live (TTL)", b: "Fragment Offset", c: "Protocol", d: "DSCP" }, answer: "a" },
            { category: "IPv4 Header", type: "solve", question: "How many bits is the TTL field?", answer: "8" },
            { category: "IPv4 Header", type: "mcq", question: "What happens when a packet's TTL value reaches 0?", options: { a: "It is returned to the sender", b: "It is cached", c: "It is discarded to prevent routing loops", d: "It is fragmented" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "Which 8-bit field indicates the next-level transport protocol (e.g., TCP or UDP)?", options: { a: "Flags", b: "Protocol", c: "Options", d: "DSCP" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "In the IPv4 Protocol field, what numerical value represents ICMP?", answer: "1" },
            { category: "IPv4 Header", type: "solve", question: "In the IPv4 Protocol field, what numerical value represents TCP?", answer: "6" },
            { category: "IPv4 Header", type: "solve", question: "In the IPv4 Protocol field, what numerical value represents UDP?", answer: "17" },
            { category: "IPv4 Header", type: "mcq", question: "Which 16-bit field detects errors specifically within the IPv4 header?", options: { a: "Header Checksum", b: "Options", c: "Identification", d: "Fragment Offset" }, answer: "a" },
            { category: "IPv4 Header", type: "mcq", question: "When is the Options field active in an IPv4 packet?", options: { a: "Always", b: "When TTL reaches 0", c: "When IHL > 5", d: "When the packet is fragmented" }, answer: "c" },

            // IP Classes & Reserved Ranges (81-95)
            { category: "IP Classes", type: "mcq", question: "Which class of IP addresses always begins with a '0' in the first octet binary?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "a" },
            { category: "IP Classes", type: "mcq", question: "Which class of IP addresses spans the first octet range of 128 - 191?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "b" },
            { category: "IP Classes", type: "mcq", question: "Which class of IP addresses utilizes the default subnet mask 255.255.255.0 (/24)?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class E" }, answer: "c" },
            { category: "IP Classes", type: "mcq", question: "Class D IP addresses (224 - 239) are strictly reserved for what transmission mode?", options: { a: "Unicast", b: "Broadcast", c: "Multicast", d: "Experimental" }, answer: "c" },
            { category: "IP Classes", type: "mcq", question: "Class E IP addresses (240 - 255) are strictly reserved for:", options: { a: "Multicasting", b: "Loopback testing", c: "R&D / Experimental use", d: "Private LANs" }, answer: "c" },
            { category: "IP Classes", type: "mcq", question: "What is the default subnet mask for a Class A network?", options: { a: "255.0.0.0", b: "255.255.0.0", c: "255.255.255.0", d: "255.255.255.255" }, answer: "a" },
            { category: "IP Classes", type: "mcq", question: "What is the default subnet mask for a Class B network?", options: { a: "255.0.0.0", b: "255.255.0.0", c: "255.255.255.0", d: "255.255.255.255" }, answer: "b" },
            { category: "Reserved IP", type: "mcq", question: "Private IP ranges (RFC 1918) are non-routable on the Internet. Which of the following is the Class A private range?", options: { a: "172.16.0.0 - 172.31.255.255", b: "192.168.0.0 - 192.168.255.255", c: "10.0.0.0 - 10.255.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "c" },
            { category: "Reserved IP", type: "mcq", question: "Which of the following represents the Class B Private IP range?", options: { a: "172.16.0.0 - 172.31.255.255", b: "192.168.0.0 - 192.168.255.255", c: "10.0.0.0 - 10.255.255.255", d: "169.254.0.0 - 169.254.255.255" }, answer: "a" },
            { category: "Reserved IP", type: "mcq", question: "Which of the following represents the Class C Private IP range?", options: { a: "10.0.0.0 - 10.255.255.255", b: "172.16.0.0 - 172.31.255.255", c: "192.168.0.0 - 192.168.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "c" },
            { category: "Reserved IP", type: "ident", question: "What is the primary purpose of RFC 1918 Private IP addresses?", answer: "internal lan use" },
            { category: "Reserved IP", type: "mcq", question: "The address 127.0.0.1 is specifically used for:", options: { a: "Multicasting", b: "Broadcasting to a local subnet", c: "Testing the local TCP/IP stack without hitting a physical NIC", d: "Default gateway assignment" }, answer: "c" },
            { category: "Reserved IP", type: "ident", question: "What is the common name for the 127.x.x.x address space?", answer: "loopback address" },
            { category: "Addressing", type: "solve", question: "What is the decimal value of the binary octet 11000000? (Hint: 128 + 64)", answer: "192" },
            { category: "Addressing", type: "mcq", question: "What bitwise operation does a computer use to separate the Network ID from the Host ID using the subnet mask?", options: { a: "Bitwise OR", b: "Bitwise XOR", c: "Bitwise AND", d: "Bitwise NOT" }, answer: "c" },

            // IPv6 & Coexistence (96-100)
            { category: "IPv6", type: "solve", question: "How many bits does an IPv6 address contain?", answer: "128" },
            { category: "IPv6", type: "mcq", question: "Which organization manages global IP address allocation?", options: { a: "IETF", b: "IEEE", c: "IANA", d: "ISO" }, answer: "c" },
            { category: "IPv6", type: "mcq", question: "Which IPv6 coexistence mechanism allows devices to run both IPv4 and IPv6 protocol stacks concurrently?", options: { a: "Tunneling", b: "Dual IP Stack", c: "NAT Translation", d: "Subnetting" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "Which IPv6 coexistence mechanism involves encapsulating IPv6 packets inside IPv4 packets (e.g., 6to4)?", options: { a: "Dual Stack", b: "NAT Translation", c: "Tunneling", d: "CIDR" }, answer: "c" },
            { category: "IPv6", type: "mcq", question: "Which IPv6 coexistence mechanism actively translates packets between IPv6 and IPv4 networks?", options: { a: "NAT Protocol Translation", b: "Tunneling", c: "Dual Stack", d: "MAC address spoofing" }, answer: "a" }
        ]
    },
    {
        id: "net_mod4",
        title: "4. Subnetting & Troubleshooting",
        proper: `
            <h2>7. IPv4 Subnetting and Variable Length Subnet Masking (VLSM)</h2>
            <h3>Subnetting Fundamentals</h3>
            <p><strong>Subnetting:</strong> The practice of borrowing host bits and reallocating them as network bits to subdivide a large network into smaller, efficient sub-networks.</p>
            <p><strong>CIDR (Classless Inter-Domain Routing):</strong> Replaces rigid classful boundaries by allowing variable-length prefix lengths (e.g., /24, /25, /26). This notation explicitly indicates the number of active network bits.</p>
            <p><strong>Subnetting Formulas:</strong></p>
            <ul>
                <li><strong>Number of Subnets (Networks)</strong> = 2<sup>(borrowed_network_bits)</sup></li>
                <li><strong>Number of Usable Hosts per Subnet</strong> = 2<sup>(remaining_host_bits)</sup> - 2</li>
            </ul>
            <p><em>Why subtract 2?</em> The first address is strictly reserved for the <strong>Network ID</strong>, and the last address is strictly reserved for the <strong>Broadcast IP</strong>.</p>
            <p><strong>Maximum Mask Rule:</strong> Subnetting cannot exceed 30 network bits (/30). A /30 mask leaves exactly 2 host bits. 2<sup>2</sup> - 2 = 2 usable hosts. Using a /31 or /32 leaves zero assignable hosts.</p>

            <h3>Subnet Block Sizes (Based on Class C /24)</h3>
            <ul>
                <li><strong>/24</strong>: 0 bits borrowed. 256 total IPs. <strong>254 usable hosts.</strong></li>
                <li><strong>/25</strong>: 1 bit borrowed. 128 total IPs. <strong>126 usable hosts.</strong></li>
                <li><strong>/26</strong>: 2 bits borrowed. 64 total IPs. <strong>62 usable hosts.</strong></li>
                <li><strong>/27</strong>: 3 bits borrowed. 32 total IPs. <strong>30 usable hosts.</strong></li>
                <li><strong>/28</strong>: 4 bits borrowed. 16 total IPs. <strong>14 usable hosts.</strong></li>
                <li><strong>/29</strong>: 5 bits borrowed. 8 total IPs. <strong>6 usable hosts.</strong></li>
                <li><strong>/30</strong>: 6 bits borrowed. 4 total IPs. <strong>2 usable hosts.</strong></li>
            </ul>

            <h3>Variable Length Subnet Masking (VLSM) Procedure</h3>
            <p>VLSM allows engineers to subnet an already-divided subnet to match exact host requirements, preventing the massive waste of IP addresses inherent in traditional subnetting.</p>
            <p><strong>Golden Rule of VLSM:</strong> You MUST sort all department requirements in <strong>descending order</strong> (largest host requirement to smallest) before allocating blocks.</p>
            <p><strong>Example Allocation from base 192.168.1.0/24:</strong></p>
            <ol>
                <li><strong>Sales (100 Hosts):</strong> Requires a /25 block (Capacity: 126 hosts).
                    <br>Network ID: 192.168.1.0/25. Broadcast: 192.168.1.127.
                </li>
                <li><strong>Purchase (50 Hosts):</strong> Requires a /26 block (Capacity: 62 hosts).
                    <br>Network ID: 192.168.1.128/26. Broadcast: 192.168.1.191.
                </li>
                <li><strong>Accounts (25 Hosts):</strong> Requires a /27 block (Capacity: 30 hosts).
                    <br>Network ID: 192.168.1.192/27. Broadcast: 192.168.1.223.
                </li>
                <li><strong>Management (5 Hosts):</strong> Requires a /29 block (Capacity: 6 hosts).
                    <br>Network ID: 192.168.1.224/29. Broadcast: 192.168.1.231.
                </li>
            </ol>

            <h2>8. Packet Flow, Network Operations, and Troubleshooting</h2>
            <h3>Helper Protocols in Packet Flow</h3>
            <ul>
                <li><strong>DHCP (Dynamic Host Configuration Protocol):</strong> Automatically leases IP configuration parameters to booting hosts. Operates via the four-step <strong>DORA</strong> process:
                    <ol>
                        <li><strong>D</strong>HCPDISCOVER: Client broadcasts to locate DHCP servers.</li>
                        <li><strong>D</strong>HCPOFFER: Server offers an IP, mask, and gateway.</li>
                        <li><strong>R</strong>EQUEST: Client formally requests the offered lease.</li>
                        <li><strong>A</strong>CK: Server acknowledges and finalizes the IP assignment.</li>
                    </ol>
                </li>
                <li><strong>DNS (Domain Name System):</strong> Resolves human-readable domain names into target IP addresses.</li>
                <li><strong>ARP (Address Resolution Protocol):</strong> Resolves known Layer 3 IP addresses into Layer 2 MAC addresses via a local broadcast query ("Who owns this IP?"). The target responds with a unicast MAC reply.</li>
                <li><strong>NAT (Network Address Translation):</strong> Translates non-routable private IP addresses into publicly routable IP addresses at the boundary router/gateway.</li>
                <li><strong>Proxy Server:</strong> An intermediary server that submits Internet requests on behalf of internal clients to enforce access policies and provide caching.</li>
            </ul>

            <h3>End-to-End Web Visit Flow</h3>
            <ol>
                <li>User types URL into browser.</li>
                <li>Host queries DNS to resolve the domain to a public IP.</li>
                <li>Host determines IP is external, so it broadcasts an ARP Request to find the Default Gateway's MAC address.</li>
                <li>Client establishes a TCP Handshake (port 443) and TLS negotiation.</li>
                <li>HTTP GET payload is encapsulated into an IP packet, framed, and sent to the router.</li>
                <li>Router uses NAT and forwards packet across Internet core routers to the Web Server.</li>
                <li>Web server processes request via App Server / Database, and returns packetized response to render the page.</li>
            </ol>

            <h3>Network Diagnostics & Troubleshooting</h3>
            <p><strong>Bandwidth vs. Latency:</strong> Bandwidth is the total data transmission volume over time (capacity). Latency is the round-trip transit delay between sending a packet and receiving its acknowledgment.</p>
            <ul>
                <li><strong>ping:</strong> Sends ICMP packets to check Layer 3 reachability, latency, and packet loss.</li>
                <li><strong>traceroute / tracert:</strong> Identifies intermediate router hops and pinpoints routing bottlenecks.</li>
                <li><strong>nslookup / dig:</strong> Queries DNS name servers directly to verify resolution records.</li>
                <li><strong>Browser Dev Tools:</strong> Inspects HTTP status codes, headers, and payload rendering times.</li>
            </ul>

            <h3>Troubleshooting Matrix</h3>
            <table>
                <tr><th>Observed Failure Scenario</th><th>Probable Root Cause</th><th>Responsible Layer / Area</th></tr>
                <tr><td>Domain does not open (browser shows "Cannot find server")</td><td>Incorrect DNS records, unresolved DNS, expired domain.</td><td>Application / DNS</td></tr>
                <tr><td>Server responds to ping, but website will not open</td><td>Web server process stopped, port 80/443 blocked by firewall.</td><td>Transport / Application / Security</td></tr>
                <tr><td>Website loads, but database operations fail</td><td>Database service down, incorrect credentials, blocked DB port.</td><td>Application / Transport</td></tr>
                <tr><td>Website is extremely slow</td><td>Network congestion, high latency, unoptimized queries.</td><td>Multiple Layers</td></tr>
                <tr><td>Works on localhost, fails when deployed online</td><td>Environment variables, missing dependencies, firewall closed ports.</td><td>Cloud Config / Multiple Layers</td></tr>
            </table>
        `,
        glossary: [
            { term: "Subnetting", def: "The process of borrowing host bits to create smaller sub-networks from a larger network block." },
            { term: "CIDR", def: "Classless Inter-Domain Routing; replaces rigid classes with variable-length prefix routing (e.g., /24)." },
            { term: "VLSM", def: "Variable Length Subnet Masking; allocating subnets of various sizes based on exact host demands." },
            { term: "DHCP", def: "Dynamic Host Configuration Protocol; automatically leases IP configurations using the DORA sequence." },
            { term: "ARP", def: "Address Resolution Protocol; resolves an IP address into a physical MAC address on a local segment." },
            { term: "NAT", def: "Network Address Translation; translates private internal IPs to a public IP to access the Internet." },
            { term: "Latency", def: "The round-trip delay time experienced by a packet traversing the network from source to destination." },
            { term: "Ping", def: "A diagnostic tool that uses ICMP echo requests to verify Layer 3 network reachability." }
        ],
        flashcards: [
            { front: "Why do we subtract 2 when calculating usable hosts?", back: "Because the first IP is the Network ID, and the last IP is the Broadcast IP." },
            { front: "What is the maximum allowable subnet mask prefix for a functional network?", back: "/30 (which leaves exactly 2 usable hosts for point-to-point links)." },
            { front: "What is the golden rule when allocating VLSM subnets?", back: "You MUST sort and allocate department requirements in descending order (largest to smallest)." },
            { front: "What does the DORA process stand for in DHCP?", back: "Discover, Offer, Request, Acknowledge." },
            { front: "What is the difference between Bandwidth and Latency?", back: "Bandwidth is the total volume/capacity of data over time. Latency is the round-trip delay time." },
            { front: "Which diagnostic tool shows you every router hop a packet takes?", back: "Traceroute (or tracert in Windows)." }
        ],
        quiz: [
            // Subnetting Definitions & Formulas (1-15)
            { category: "Subnetting", type: "mcq", question: "The practice of borrowing host bits and reallocating them as network bits to subdivide a network is called:", options: { a: "Routing", b: "Subnetting", c: "Encapsulation", d: "Translation" }, answer: "b" },
            { category: "Subnetting", type: "ident", question: "What is the practice of borrowing host bits to subdivide a network called?", answer: "subnetting" },
            { category: "Subnetting", type: "mcq", question: "What does CIDR stand for?", options: { a: "Classless Inter-Domain Routing", b: "Classful Internet Data Routing", c: "Centralized IP Domain Router", d: "Categorized Internal Domain Registry" }, answer: "a" },
            { category: "Subnetting", type: "mcq", question: "Which notation replaces rigid classful boundaries by allowing variable-length prefixes like /24 or /26?", options: { a: "MAC Notation", b: "IPv6 Notation", c: "CIDR Notation", d: "VLSM Hierarchy" }, answer: "c" },
            { category: "Subnetting", type: "mcq", question: "What is the formula to calculate the number of subnets (networks) created?", options: { a: "2^(host_bits)", b: "2^(network_bits) - 2", c: "2^(borrowed_network_bits)", d: "2^(host_bits) - 2" }, answer: "c" },
            { category: "Subnetting", type: "mcq", question: "What is the formula to calculate the number of usable hosts per subnet?", options: { a: "2^(borrowed_network_bits) - 2", b: "2^(host_bits) - 2", c: "2^(host_bits)", d: "2^(network_bits)" }, answer: "b" },
            { category: "Subnetting", type: "mcq", question: "Why must you subtract 2 when calculating the number of usable hosts per subnet?", options: { a: "To account for the Router IP and Switch IP", b: "To reserve the Network ID and the Broadcast IP", c: "To reserve the loopback and gateway addresses", d: "Because the first 2 IPs are always given to DHCP" }, answer: "b" },
            { category: "Subnetting", type: "mcq", question: "The very first address in any subnet block is strictly reserved for the:", options: { a: "Gateway", b: "Broadcast IP", c: "Network ID", d: "DNS Server" }, answer: "c" },
            { category: "Subnetting", type: "mcq", question: "The very last address in any subnet block is strictly reserved for the:", options: { a: "Network ID", b: "Broadcast IP", c: "Gateway", d: "Loopback" }, answer: "b" },
            { category: "Subnetting", type: "mcq", question: "What is the absolute maximum subnet mask prefix you can use for a functional network?", options: { a: "/28", b: "/30", c: "/31", d: "/32" }, answer: "b" },
            { category: "Subnetting", type: "mcq", question: "Why is /30 the maximum functional subnet mask?", options: { a: "Because it leaves exactly 2 usable host bits (4 IPs total, minus 2 = 2 usable hosts).", b: "Because IPv4 only has 30 bits.", c: "Because /31 and /32 are reserved for multicast.", d: "Because routers cannot read beyond /30." }, answer: "a" },
            { category: "Subnetting", type: "mcq", question: "If you use a /31 subnet mask, how many assignable hosts do you have based on standard IPv4 rules?", options: { a: "2", b: "1", c: "0", d: "4" }, answer: "c" },
            { category: "Subnetting", type: "solve", question: "If you borrow 3 network bits, how many subnets do you create? (2^3)", answer: "8" },
            { category: "Subnetting", type: "solve", question: "If a subnet leaves 4 host bits, what is the total capacity of IPs before subtracting reserved ones? (2^4)", answer: "16" },
            { category: "Subnetting", type: "solve", question: "If a subnet leaves 4 host bits, how many USABLE hosts are available? (2^4 - 2)", answer: "14" },

            // Subnetting Block Sizes (16-35)
            { category: "Subnet Blocks", type: "solve", question: "A /24 subnet has how many total IPs? (Hint: 8 host bits, 2^8)", answer: "256" },
            { category: "Subnet Blocks", type: "solve", question: "A /24 subnet has how many USABLE hosts? (256 - 2)", answer: "254" },
            { category: "Subnet Blocks", type: "solve", question: "A /25 subnet has how many total IPs? (Hint: 7 host bits, 2^7)", answer: "128" },
            { category: "Subnet Blocks", type: "solve", question: "A /25 subnet has how many USABLE hosts? (128 - 2)", answer: "126" },
            { category: "Subnet Blocks", type: "solve", question: "A /26 subnet has how many total IPs? (Hint: 6 host bits, 2^6)", answer: "64" },
            { category: "Subnet Blocks", type: "solve", question: "A /26 subnet has how many USABLE hosts? (64 - 2)", answer: "62" },
            { category: "Subnet Blocks", type: "solve", question: "A /27 subnet has how many total IPs? (Hint: 5 host bits, 2^5)", answer: "32" },
            { category: "Subnet Blocks", type: "solve", question: "A /27 subnet has how many USABLE hosts? (32 - 2)", answer: "30" },
            { category: "Subnet Blocks", type: "solve", question: "A /28 subnet has how many total IPs? (Hint: 4 host bits, 2^4)", answer: "16" },
            { category: "Subnet Blocks", type: "solve", question: "A /28 subnet has how many USABLE hosts? (16 - 2)", answer: "14" },
            { category: "Subnet Blocks", type: "solve", question: "A /29 subnet has how many total IPs? (Hint: 3 host bits, 2^3)", answer: "8" },
            { category: "Subnet Blocks", type: "solve", question: "A /29 subnet has how many USABLE hosts? (8 - 2)", answer: "6" },
            { category: "Subnet Blocks", type: "solve", question: "A /30 subnet has how many total IPs? (Hint: 2 host bits, 2^2)", answer: "4" },
            { category: "Subnet Blocks", type: "solve", question: "A /30 subnet has how many USABLE hosts? (4 - 2)", answer: "2" },
            { category: "Subnet Blocks", type: "mcq", question: "Which CIDR prefix provides exactly 6 usable hosts?", options: { a: "/27", b: "/28", c: "/29", d: "/30" }, answer: "c" },
            { category: "Subnet Blocks", type: "mcq", question: "Which CIDR prefix provides exactly 14 usable hosts?", options: { a: "/27", b: "/28", c: "/29", d: "/30" }, answer: "b" },
            { category: "Subnet Blocks", type: "mcq", question: "Which CIDR prefix provides exactly 30 usable hosts?", options: { a: "/25", b: "/26", c: "/27", d: "/28" }, answer: "c" },
            { category: "Subnet Blocks", type: "mcq", question: "Which CIDR prefix provides exactly 62 usable hosts?", options: { a: "/25", b: "/26", c: "/27", d: "/28" }, answer: "b" },
            { category: "Subnet Blocks", type: "mcq", question: "Which CIDR prefix provides exactly 126 usable hosts?", options: { a: "/24", b: "/25", c: "/26", d: "/27" }, answer: "b" },
            { category: "Subnet Blocks", type: "mcq", question: "If you need to assign IP addresses to a point-to-point router link (requiring exactly 2 IPs), which prefix should you use to waste the fewest addresses?", options: { a: "/28", b: "/29", c: "/30", d: "/31" }, answer: "c" },

            // VLSM Rules & Application (36-50)
            { category: "VLSM", type: "mcq", question: "What does VLSM stand for?", options: { a: "Variable Length Subnet Masking", b: "Virtual Local Subnet Mapping", c: "Verified Logical System Mask", d: "Variable Level Subnet Management" }, answer: "a" },
            { category: "VLSM", type: "mcq", question: "What is the primary benefit of using VLSM?", options: { a: "It encrypts network traffic", b: "It allows subnets of varying sizes to match exact host requirements, preventing IP waste", c: "It replaces MAC addresses", d: "It automatically resolves DNS queries" }, answer: "b" },
            { category: "VLSM", type: "ident", question: "What technique allows engineers to subnet an already-divided subnet into varying sizes?", answer: "vlsm" },
            { category: "VLSM", type: "mcq", question: "What is the Golden Rule of VLSM allocation?", options: { a: "Allocate subnets in alphabetical order", b: "Allocate subnets in ascending order (smallest to largest)", c: "Allocate subnets randomly to prevent collisions", d: "Allocate subnets in descending order (largest host requirement to smallest)" }, answer: "d" },
            { category: "VLSM", type: "mcq", question: "If you have requirements for 5, 25, 50, and 100 hosts, which group must be allocated FIRST in VLSM?", options: { a: "5", b: "25", c: "50", d: "100" }, answer: "d" },
            { category: "VLSM", type: "mcq", question: "If a department requires 100 hosts, which CIDR prefix provides the smallest suitable block (capacity of 126)?", options: { a: "/24", b: "/25", c: "/26", d: "/27" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a department requires 50 hosts, which CIDR prefix provides the smallest suitable block (capacity of 62)?", options: { a: "/25", b: "/26", c: "/27", d: "/28" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a department requires 25 hosts, which CIDR prefix provides the smallest suitable block (capacity of 30)?", options: { a: "/26", b: "/27", c: "/28", d: "/29" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a department requires 12 hosts, which CIDR prefix provides the smallest suitable block (capacity of 14)?", options: { a: "/27", b: "/28", c: "/29", d: "/30" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a department requires 5 hosts, which CIDR prefix provides the smallest suitable block (capacity of 6)?", options: { a: "/28", b: "/29", c: "/30", d: "/31" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "In a /25 subnet (192.168.1.0/25), what is the broadcast address?", options: { a: "192.168.1.255", b: "192.168.1.127", c: "192.168.1.128", d: "192.168.1.63" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If the first VLSM block is 192.168.1.0/25, what is the starting Network ID of the next block?", options: { a: "192.168.1.127", b: "192.168.1.128", c: "192.168.1.255", d: "192.168.1.64" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "In a /26 subnet starting at 192.168.1.128/26, what is the broadcast address? (Hint: 128 + 64 IPs - 1)", options: { a: "192.168.1.191", b: "192.168.1.192", c: "192.168.1.255", d: "192.168.1.127" }, answer: "a" },
            { category: "VLSM", type: "mcq", question: "If the second VLSM block ends at broadcast 192.168.1.191, what is the Network ID of the third block?", options: { a: "192.168.1.192", b: "192.168.1.224", c: "192.168.1.255", d: "192.168.1.0" }, answer: "a" },
            { category: "VLSM", type: "mcq", question: "In a /27 subnet starting at 192.168.1.192/27, what is the broadcast address? (Hint: 192 + 32 IPs - 1)", options: { a: "192.168.1.223", b: "192.168.1.224", c: "192.168.1.255", d: "192.168.1.191" }, answer: "a" },

            // Helper Protocols (51-70)
            { category: "Helper Protocols", type: "mcq", question: "Which protocol automatically leases IP configuration parameters to booting hosts?", options: { a: "DNS", b: "ARP", c: "DHCP", d: "NAT" }, answer: "c" },
            { category: "Helper Protocols", type: "ident", question: "What does DHCP stand for?", answer: "dynamic host configuration protocol" },
            { category: "Helper Protocols", type: "mcq", question: "The four-step process used by DHCP to lease an IP is known as:", options: { a: "OSPF", b: "DORA", c: "PING", d: "CIDR" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "In the DORA process, what does the 'D' stand for?", options: { a: "DHCPDISCOVER", b: "DHCPDATA", c: "DHCPDELIVER", d: "DHCPDROP" }, answer: "a" },
            { category: "Helper Protocols", type: "mcq", question: "In the DORA process, which step involves the server offering an IP, mask, and gateway?", options: { a: "Discover", b: "Offer", c: "Request", d: "Acknowledge" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "In the DORA process, what does the 'R' stand for?", options: { a: "Receive", b: "Record", c: "Request", d: "Resolve" }, answer: "c" },
            { category: "Helper Protocols", type: "mcq", question: "In the DORA process, what does the 'A' stand for?", options: { a: "Assign", b: "Acknowledge", c: "Automate", d: "Address" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "Which protocol resolves human-readable domain names into target IP addresses?", options: { a: "DHCP", b: "NAT", c: "DNS", d: "ARP" }, answer: "c" },
            { category: "Helper Protocols", type: "ident", question: "What system resolves domain names into numerical IP addresses?", answer: "domain name system" },
            { category: "Helper Protocols", type: "mcq", question: "Which protocol resolves known Layer 3 IP addresses into Layer 2 MAC addresses?", options: { a: "DHCP", b: "NAT", c: "DNS", d: "ARP" }, answer: "d" },
            { category: "Helper Protocols", type: "ident", question: "What does ARP stand for?", answer: "address resolution protocol" },
            { category: "Helper Protocols", type: "mcq", question: "How does an ARP request locate a MAC address?", options: { a: "It asks the DNS server", b: "It sends a local broadcast query ('Who owns this IP?')", c: "It pings the router", d: "It uses NAT translation" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "How does the target respond to an ARP broadcast query?", options: { a: "With a broadcast reply", b: "With a unicast MAC reply directly to the sender", c: "By dropping the packet", d: "By assigning a DHCP lease" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "Which mechanism translates non-routable private IP addresses into publicly routable IP addresses across Internet gateways?", options: { a: "Proxy Server", b: "DNS", c: "NAT", d: "ARP" }, answer: "c" },
            { category: "Helper Protocols", type: "ident", question: "What does NAT stand for?", answer: "network address translation" },
            { category: "Helper Protocols", type: "mcq", question: "Where does NAT translation typically occur?", options: { a: "On the client's PC", b: "At the boundary router or gateway", c: "On the switch", d: "Inside the DNS server" }, answer: "b" },
            { category: "Helper Protocols", type: "mcq", question: "An intermediary server that submits Internet requests on behalf of internal clients to enforce access policies and provide caching is a:", options: { a: "DHCP Server", b: "Proxy Server", c: "DNS Server", d: "Switch" }, answer: "b" },
            { category: "Helper Protocols", type: "ident", question: "What type of server acts as an intermediary for client requests to enforce policies?", answer: "proxy server" },
            { category: "Helper Protocols", type: "mcq", question: "Which protocol is absolutely necessary if a device knows the destination IP but needs to format an Ethernet frame to send data on the local network?", options: { a: "DNS", b: "DHCP", c: "ARP", d: "NAT" }, answer: "c" },
            { category: "Helper Protocols", type: "mcq", question: "Which protocol is absolutely necessary if a client is connected to a router but has not yet been assigned an IP address?", options: { a: "DNS", b: "DHCP", c: "ARP", d: "Proxy" }, answer: "b" },

            // Packet Flow & Diagnostics (71-90)
            { category: "Packet Flow", type: "mcq", question: "In the end-to-end web visit flow, what happens immediately after a user types a URL into their browser?", options: { a: "The browser sends an HTTP GET request", b: "The host queries DNS to resolve the domain to a public IP", c: "The TCP handshake completes", d: "The router applies NAT" }, answer: "b" },
            { category: "Packet Flow", type: "mcq", question: "After a host resolves the public IP and realizes it is outside the local subnet, what is its next step?", options: { a: "It broadcasts an ARP Request to find the Default Gateway's MAC address", b: "It sends an HTTP GET directly to the public IP", c: "It reconfigures its DHCP lease", d: "It drops the packet" }, answer: "a" },
            { category: "Packet Flow", type: "mcq", question: "Before sending the HTTP GET payload, what must the client establish with the remote server on Port 443?", options: { a: "An ARP reply", b: "A DHCP Discover", c: "A TCP Handshake and TLS negotiation", d: "A VPN tunnel" }, answer: "c" },
            { category: "Packet Flow", type: "mcq", question: "As the packet leaves the local network, the router modifies the source IP from a private IP to a public IP. This is called:", options: { a: "DNS Resolution", b: "NAT", c: "ARP", d: "Encapsulation" }, answer: "b" },
            { category: "Packet Flow", type: "mcq", question: "When the Web Server receives the request but needs to fetch dynamic data from a database, it forwards the request to the:", options: { a: "DNS Server", b: "Proxy Server", c: "Application Server", d: "Load Balancer" }, answer: "c" },
            { category: "Diagnostics", type: "mcq", question: "What is the specific difference between Bandwidth and Latency?", options: { a: "Bandwidth is speed; latency is volume.", b: "Bandwidth is total data volume over time; latency is the round-trip transit delay.", c: "They are two words for the exact same metric.", d: "Bandwidth measures MAC addresses; latency measures IPs." }, answer: "b" },
            { category: "Diagnostics", type: "ident", question: "What diagnostic metric measures the round-trip transit delay of a packet?", answer: "latency" },
            { category: "Diagnostics", type: "ident", question: "What diagnostic metric measures the total data transmission volume over time?", answer: "bandwidth" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool checks Layer 3 reachability, latency, and packet loss by sending ICMP echo requests?", options: { a: "ping", b: "traceroute", c: "nslookup", d: "dig" }, answer: "a" },
            { category: "Diagnostics", type: "ident", question: "What command-line tool sends ICMP packets to verify reachability?", answer: "ping" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool identifies intermediate router hops and pinpoints routing bottlenecks along a network path?", options: { a: "ping", b: "traceroute / tracert", c: "nslookup", d: "ipconfig" }, answer: "b" },
            { category: "Diagnostics", type: "ident", question: "What command-line tool traces the exact router path a packet takes to its destination?", answer: "traceroute" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tools are primarily used to query DNS name servers directly to verify resolution records?", options: { a: "ping and arp", b: "traceroute and tracert", c: "nslookup and dig", d: "netstat and nmap" }, answer: "c" },
            { category: "Diagnostics", type: "ident", question: "Name one of the two tools used to directly query DNS resolution records.", answer: "nslookup" },
            { category: "Diagnostics", type: "mcq", question: "If you want to inspect HTTP status codes, headers, and payload rendering times on a website, what is the best tool?", options: { a: "ping", b: "traceroute", c: "Browser Dev Tools (Network Tab)", d: "ARP table" }, answer: "c" },
            { category: "Diagnostics", type: "ident", question: "What protocol does the 'ping' command use under the hood?", answer: "icmp" },
            { category: "Packet Flow", type: "mcq", question: "When the Database Server returns records to the Application Server, what does the Application Server do next?", options: { a: "Drops the connection", b: "Builds the HTTP response to send back to the client", c: "Initiates a new TCP handshake", d: "Changes the DNS record" }, answer: "b" },
            { category: "Packet Flow", type: "mcq", question: "In the final step of the web visit flow, what component receives the packetized response, decapsulates it, and renders the page?", options: { a: "The Router", b: "The Firewall", c: "The Web Server", d: "The Client Browser" }, answer: "d" },
            { category: "Diagnostics", type: "mcq", question: "If a ping command returns 'Request timed out', what does this typically indicate?", options: { a: "The DNS resolved perfectly", b: "Packet loss or the destination is unreachable/blocking ICMP", c: "The website rendered successfully", d: "The MAC address is invalid" }, answer: "b" },
            { category: "Diagnostics", type: "mcq", question: "Which tool would you use to verify if your domain name is pointing to the correct IP address?", options: { a: "traceroute", b: "arp", c: "nslookup", d: "ping" }, answer: "c" },

            // Troubleshooting Matrix (91-100)
            { category: "Troubleshooting", type: "mcq", question: "If a domain does not open and the browser shows 'Cannot find server', what is the most probable root cause?", options: { a: "Web server process stopped", b: "Database service down", c: "Incorrect DNS records, unresolved DNS, or expired domain", d: "Network congestion" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "A DNS failure occurs primarily at which layer of the OSI model?", options: { a: "Physical Layer", b: "Data Link Layer", c: "Transport Layer", d: "Application Layer" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If a server responds successfully to a 'ping', but the website refuses to load, what is the most probable root cause?", options: { a: "The physical ethernet cable is unplugged", b: "The IP address is invalid", c: "Port 80/443 is blocked by a firewall or the web service is stopped", d: "The DNS record is expired" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "A firewall blocking Port 443 is a failure primarily involving which OSI layer?", options: { a: "Physical Layer", b: "Data Link Layer", c: "Transport Layer", d: "Network Layer" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "If a website loads its structure perfectly, but user logins fail or product lists are empty, what is the probable cause?", options: { a: "Database service down, incorrect credentials, or blocked DB port", b: "DNS expired", c: "The web server process is completely stopped", d: "The physical router broke" }, answer: "a" },
            { category: "Troubleshooting", type: "mcq", question: "A database connection failure is a problem isolated to which architectural component?", options: { a: "The Client Browser", b: "The DNS Server", c: "The Application / Database Server layer", d: "The physical transmission media" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "If a website is extremely slow, what is the most likely root cause?", options: { a: "The DNS is expired", b: "The database port is closed", c: "Network congestion, high latency, or unoptimized queries", d: "The physical cable is cut" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "High latency and network congestion affect which layers of the network?", options: { a: "Only the Application layer", b: "Only the Physical layer", c: "Multiple layers across the network path", d: "Only the Session layer" }, answer: "c" },
            { category: "Troubleshooting", type: "mcq", question: "If an application works perfectly on a local computer (localhost) but fails when deployed online, what is the probable cause?", options: { a: "The computer is too fast", b: "Environment variables, missing dependencies, or cloud firewall configurations", c: "The DNS is pointing to localhost globally", d: "The browser is outdated" }, answer: "b" },
            { category: "Troubleshooting", type: "mcq", question: "Which troubleshooting step should you take FIRST if a user complains they cannot reach a specific website?", options: { a: "Reinstall their operating system", b: "Check if the domain resolves to an IP using ping or nslookup", c: "Replace their network card", d: "Reconfigure the database server" }, answer: "b" }
        ]
    }

];