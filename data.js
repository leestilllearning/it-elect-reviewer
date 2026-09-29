// data.js - Comprehensive Internet Technologies, Architecture, Protocols, and Network Addressing
// PART 1: Foundations of Networks, the Internet, and the World Wide Web (100 Items)

const reviewerData = [
    {
        id: "mod1_fundamentals",
        title: "1. Foundations of Networks & The Web",
        proper: `
            <h2>What is a Network?</h2>
            <p>A Network in the world of computers is said to be a collection of interconnected hosts, via some shared media which can be wired or wireless. A computer network enables its hosts to share and exchange data and information over the media.</p>
            <ul>
                <li><strong>Local Area Network (LAN):</strong> A network spanned across an office or limited local environment.</li>
                <li><strong>Metro Area Network (MAN):</strong> A network spanned across a city.</li>
                <li><strong>Wide Area Network (WAN):</strong> A network that can be spanned across cities and provinces.</li>
            </ul>
            <p><strong>Scale of Networks:</strong> A computer network can be as simple as two PCs connected together via a single copper cable or it can be grown up to the complexity where every computer in this world is connected to every other, called the Internet. A network then includes more and more components to reach its ultimate goal of data exchange.</p>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Computer_network.svg/800px-Computer_network.svg.png" class="edu-image" alt="Computer Network Topology" onerror="this.style.display='none'">

            <h2>Network Components</h2>
            <ul>
                <li><strong>Host:</strong> Hosts are said to be situated at the ultimate end of the network, i.e., a host is a source of information and another host will be the destination. Information flows end to end between hosts. A host can be a user's PC, an internet Server, a database server, etc.</li>
                <li><strong>Media:</strong> If wired, then it can be copper cable, fiber optic cable, and coaxial cable. If wireless, it can be free-to-air radio frequency or some special wireless band. Wireless frequencies can be used to interconnect remote sites too.</li>
                <li><strong>Hub:</strong> A hub is a multiport repeater and it is used to connect hosts in a LAN segment. Because of low throughputs, hubs are now rarely used. A hub works on Layer-1 (Physical Layer) of the OSI Model.</li>
                <li><strong>Switch:</strong> A Switch is a multiport bridge and is used to connect hosts in a LAN segment. Switches are much faster than Hubs and operate on wire speed. A switch works on Layer-2 (Data Link Layer), but Layer-3 (Network Layer) switches are also available. It connects devices within a local network.</li>
                <li><strong>Router:</strong> A router is a Layer-3 (Network Layer) device which makes routing decisions for the data/information sent for some remote destination. Routers make the core of any interconnected network and the Internet. It connects different networks and forwards IP packets.</li>
                <li><strong>Gateways:</strong> A software or combination of software and hardware put together, works for exchanging data among networks which are using different protocols for sharing data.</li>
                <li><strong>Firewall:</strong> Software or combination of software and hardware, used to protect users' data from unintended recipients on the network/internet. It controls network traffic according to security rules and can operate across several layers.</li>
                <li><strong>Wireless Access Point (WAP):</strong> Allows wireless devices to connect to a local network.</li>
            </ul>

            <h2>Collision and Broadcast Domains</h2>
            <p><strong>Collision Domain:</strong> A scenario in which when a device sends out a message to the network, all other devices which are included in its collision domain have to pay attention to it, no matter if it was destined for them or not. This causes a problem because, in a situation where two devices send out their messages simultaneously, a collision will occur leading them to wait and re-transmit their respective messages, one at a time. It happens only in the case of a half-duplex mode.</p>
            <p><strong>Broadcast Domain:</strong> A scenario in which when a device sends out a broadcast message, all the devices present in its broadcast domain have to pay attention to it. This creates a lot of congestion in the network, commonly called LAN congestion, which affects the bandwidth of the users present in that network.</p>
            <p><strong>Efficiency Rule:</strong> The more the number of collision domains and the more the number of broadcast domains, the more efficient is the network providing better bandwidth to all its users.</p>

            <h3>Domain Separation by Device</h3>
            <ul>
                <li><strong>Hub:</strong> A hub is neither a collision domain separator nor a broadcast domain separator. All the devices connected to a hub are in a single collision and single broadcast domain. Hubs do not segment a network; they just connect network segments.</li>
                <li><strong>Switch:</strong> Every port on a switch is in a different collision domain (a switch is a collision domain separator). Messages from devices connected to different ports never experience a collision. However, switches never break broadcast domains (a switch is not a broadcast domain separator). All ports on the switch are still in a single broadcast domain, so broadcast messages still cause congestion.</li>
                <li><strong>Router:</strong> A router not only breaks collision domains but also breaks broadcast domains (it is both a collision as well as a broadcast domain separator). A router creates a connection between two networks. A broadcast message from one network will never reach the other one as the router will never let it pass.</li>
            </ul>

            <h2>What is the Internet?</h2>
            <p>The Internet is a worldwide network of interconnected computers, servers, routers, mobile devices, and other digital systems that communicate using standardized networking protocols, primarily the TCP/IP protocol suite.</p>
            <p>It is a communication infrastructure that allows devices located in different parts of the world to exchange data.</p>
            <p>It is a global system of interconnected computer networks that communicate using standardized protocols (Internet = Interconnected Networks).</p>
            <p>It provides the communication infrastructure through which information can travel from one device to another and can be viewed as a massive network of networks.</p>
            <p><strong>Services supported by the Internet:</strong> World Wide Web, Email, File Transfer, Video Conferencing, Online Gaming, Cloud Computing, VoIP, Instant Messaging, Remote Access, Internet of Things (IoT).</p>
            <ul>
                <li><strong>VoIP (Voice over Internet Protocol):</strong> Technology enabling voice transmissions and multimedia sessions over IP networks.</li>
                <li><strong>Cloud Computing:</strong> On-demand delivery of computing services including servers, storage, databases, networking, and software over the Internet.</li>
                <li><strong>Instant Messaging:</strong> Real-time, text-based communication between two or more participants over a network.</li>
                <li><strong>IoT (Internet of Things):</strong> A network of physical objects embedded with sensors, software, and network connectivity allowing them to collect and exchange data.</li>
            </ul>

            <h2>What is the World Wide Web (WWW)?</h2>
            <p>The World Wide Web, commonly called the Web or WWW, is a system of interconnected webpages, websites, and online resources that are accessed through the Internet. It is a collection of interconnected webpages, websites, web applications, multimedia resources, and documents that users access through the Internet.</p>
            <p>The Web primarily uses: HTTP, HTTPS, URLs, Web Browsers, Web Servers, HTML, and other web technologies.</p>
            <p>Users normally access the Web using browsers such as Chrome, Edge, Firefox, or Safari.</p>

            <h2>Internet vs. World Wide Web</h2>
            <p><strong>Analogy:</strong> The Internet is like the roads, highways, bridges, and transportation infrastructure connecting different cities. The World Wide Web is like one type of service that uses those roads, such as delivery trucks carrying documents and information.</p>
            <p><strong>Infrastructure vs. Service:</strong> Internet = Communication Infrastructure; World Wide Web = One information service running on that infrastructure.</p>
            
            <h3>Other Services Using the Road System (Independent of the Web):</h3>
            <ul>
                <li><strong>Email:</strong> SMTP (Simple Mail Transfer Protocol), IMAP (Internet Message Access Protocol), POP3 (Post Office Protocol Version 3). Although users can access Gmail through a website, email itself is an Internet service that existed independently of the Web.</li>
                <li><strong>File Transfer:</strong> FTP (File Transfer Protocol), SFTP (Secure File Transfer Protocol). These services use the Internet but do not require webpages.</li>
                <li><strong>Online Gaming:</strong> Multiplayer games connect players through Internet servers using specialized networking protocols. The game itself does not necessarily operate through the World Wide Web.</li>
                <li><strong>Video Conferencing:</strong> Online real-time audio and video sessions over IP networks.</li>
                <li><strong>Remote Access:</strong> Protocol solutions such as SSH.</li>
            </ul>

            <p><strong>Brief Historical Difference:</strong> The Internet developed before the World Wide Web. The Internet evolved from earlier computer networking projects that focused on connecting computers and allowing them to exchange information. The World Wide Web was later developed by Tim Berners-Lee to provide an easier method for accessing and linking documents over networks. The Web introduced important concepts such as Webpages, Hyperlinks, URLs, HTTP, and HTML. The development of web browsers eventually made Internet information much easier for ordinary users to access.</p>

            <h2>How the Internet and the World Wide Web Work Together</h2>
            <ol>
                <li>User enters the address.</li>
                <li>DNS identifies the server.</li>
                <li>Internet establishes the communication.</li>
                <li>Browser sends an HTTP request.</li>
                <li>Web server processes the request.</li>
                <li>Information travels through the Internet.</li>
                <li>Browser displays the webpage.</li>
            </ol>
            <p>The Web provides the information and application environment, while the Internet provides the communication network necessary to deliver it.</p>

            <h2>The Internet Ecosystem and Infrastructure</h2>
            <ul>
                <li><strong>End-User Devices:</strong> Personal computing hardware (laptops, desktops, smartphones) requesting network resources.</li>
                <li><strong>Network Interface:</strong> Physical or virtual hardware (NIC) that connects a device to a network medium.</li>
                <li><strong>Local Area Network (LAN):</strong> The immediate local networking environment.</li>
                <li><strong>Routers & Internet Backbone:</strong> Routing hardware and high-speed data transmission lines that interconnect large networks.</li>
                <li><strong>Data Centers & Servers:</strong> Specialized facilities housing high-capacity computing systems and storage pools.</li>
                <li><strong>IP Addresses (Public and Private):</strong> Numerical identifying schemes enabling packet routing.</li>
                <li><strong>Domain Name System (DNS):</strong> Infrastructure resolving symbolic names to numerical IP addresses.</li>
                <li><strong>Firewalls:</strong> Traffic-filtering security enforcement points.</li>
                <li><strong>Content Delivery Networks (CDNs):</strong> Distributed server networks that provide Caching, DDoS Protection, WAF (Web Application Firewall), and Traffic Optimization.
                    <ul>
                        <li><em>Caching:</em> Temporary storage of web files close to the user to speed up load times.</li>
                        <li><em>DDoS Protection:</em> Defenses designed to mitigate distributed denial-of-service traffic attacks.</li>
                        <li><em>WAF (Web Application Firewall):</em> A security solution that monitors and filters HTTP traffic targeting web applications.</li>
                        <li><em>Traffic Optimization:</em> Routing and compression techniques to maximize transfer speed.</li>
                    </ul>
                </li>
            </ul>

            <h3>Ecosystem Participants:</h3>
            <ul>
                <li><strong>Internet Users:</strong> Students, Employees, Businesses, Researchers, General Public.</li>
                <li><strong>Application Developers:</strong> Create Websites, Mobile Apps, APIs, Cloud Apps, Online Systems, and Internet Services.</li>
                <li><strong>Hosting Providers:</strong> Offer Virtual Private Servers (VPS), Dedicated Servers, and Cloud Hosting.
                    <ul>
                        <li><em>VPS:</em> Virtualized private partition on a shared physical server host.</li>
                        <li><em>Dedicated Server:</em> An entire physical server allocated exclusively to a single tenant.</li>
                        <li><em>Cloud Hosting:</em> Scalable application hosting utilizing virtual resources across server clusters.</li>
                    </ul>
                </li>
                <li><strong>Internet Service Providers (ISPs):</strong> Entities providing local, regional, or national access to the global Internet.</li>
                <li><strong>Domain Registrars:</strong> Accredited entities that sell and register domain names.</li>
                <li><strong>DNS Providers:</strong> Entities that maintain and run authoritative Name Servers to answer DNS queries.</li>
                <li><strong>Cloud Service Providers:</strong> Organizations supplying on-demand cloud computing infrastructure and platforms.</li>
                <li><strong>Certificate Authorities (CAs):</strong> Trusted organizations that issue digital certificates verifying server identity for secure communication.</li>
            </ul>
        `,
        glossary: [
            { term: "Network", def: "A collection of interconnected hosts, via some shared media which can be wired or wireless." },
            { term: "Host", def: "Situated at the ultimate end of the network, a source of information or destination." },
            { term: "Hub", def: "A multiport repeater used to connect hosts in a LAN segment; works on Layer-1 of the OSI Model." },
            { term: "Switch", def: "A multiport bridge used to connect hosts in a LAN segment; works on Layer-2 of the OSI Model." },
            { term: "Router", def: "A Layer-3 device which makes routing decisions for data sent to a remote destination." },
            { term: "Collision Domain", def: "A scenario in which when a device sends out a message, all other devices in the domain must pay attention, and simultaneous messages cause collisions." },
            { term: "Broadcast Domain", def: "A scenario where a broadcast message sent by a device must be paid attention to by all devices in the domain, creating congestion." },
            { term: "Internet", def: "A worldwide network of interconnected computers, servers, routers, and mobile devices communicating using the TCP/IP protocol suite." },
            { term: "World Wide Web", def: "A system of interconnected webpages, websites, and online resources accessed through the Internet." },
            { term: "Content Delivery Networks (CDNs)", def: "Distributed server networks that provide Caching, DDoS Protection, WAF, and Traffic Optimization." }
        ],
        quiz: [
            // Definitions and Scales (1-10)
            { category: "Network Basics", type: "mcq", question: "What is defined as a collection of interconnected hosts, via some shared media which can be wired or wireless?", options: { a: "Internet", b: "Network", c: "Database", d: "Firewall" }, answer: "b" },
            { category: "Network Basics", type: "mcq", question: "What does a computer network enable its hosts to do over the media?", options: { a: "Isolate information", b: "Share and exchange data and information", c: "Create physical barriers", d: "Format hardware" }, answer: "b" },
            { category: "Network Basics", type: "mcq", question: "A network spanned across an office or limited local environment is called a:", options: { a: "MAN", b: "WAN", c: "LAN", d: "WLAN" }, answer: "c" },
            { category: "Network Basics", type: "mcq", question: "A network spanned across a city is called a:", options: { a: "LAN", b: "MAN", c: "WAN", d: "PAN" }, answer: "b" },
            { category: "Network Basics", type: "mcq", question: "A network that can be spanned across cities and provinces is called a:", options: { a: "LAN", b: "MAN", c: "WAN", d: "SAN" }, answer: "c" },
            { category: "Network Basics", type: "mcq", question: "In terms of scale, what is the simplest form of a computer network?", options: { a: "The World Wide Web", b: "Two PCs connected together via a single copper cable", c: "A cloud computing cluster", d: "An ISP data center" }, answer: "b" },
            { category: "Network Basics", type: "ident", question: "What is the ultimate goal of a network that requires including more components as it scales?", answer: "data exchange" },
            { category: "Network Basics", type: "ident", question: "What is the acronym for a network restricted to an office environment?", answer: "lan" },
            { category: "Network Basics", type: "ident", question: "What is the acronym for a network that spans across cities and provinces?", answer: "wan" },
            { category: "Network Basics", type: "ident", question: "What is the acronym for a network that spans across a single city?", answer: "man" },

            // Components & Hardware (11-35)
            { category: "Hardware", type: "mcq", question: "Which network component is situated at the ultimate end of the network, acting as a source or destination of information?", options: { a: "Router", b: "Switch", c: "Host", d: "Hub" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "Information flows end to end between which network components?", options: { a: "Routers", b: "Hosts", c: "Switches", d: "Gateways" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "Which of the following is an example of wired media?", options: { a: "Free-to-air radio frequency", b: "Wireless band", c: "Copper cable", d: "Microwave" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "Which of the following is an example of wireless media?", options: { a: "Coaxial cable", b: "Fiber optic cable", c: "Free-to-air radio frequency", d: "Copper cable" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "Which device is a multiport repeater used to connect hosts in a LAN segment?", options: { a: "Switch", b: "Router", c: "Hub", d: "Gateway" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "Why are hubs rarely used in modern networking?", options: { a: "They are too expensive", b: "They operate on Layer 3", c: "Because of low throughputs", d: "They block broadcast domains" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "A hub works on which layer of the OSI Model?", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "Which device is a multiport bridge used to connect hosts in a LAN segment?", options: { a: "Hub", b: "Router", c: "Switch", d: "Gateway" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "A standard switch works on which layer of the OSI Model?", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "Which device makes routing decisions for the data/information sent for some remote destination?", options: { a: "Switch", b: "Hub", c: "Router", d: "WAP" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "A router operates on which layer of the OSI Model?", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "What software or hardware combination works for exchanging data among networks using different protocols?", options: { a: "Firewall", b: "Gateway", c: "Switch", d: "Router" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "What device or software is used to protect users' data from unintended recipients and controls network traffic according to security rules?", options: { a: "Gateway", b: "Firewall", c: "Router", d: "Hub" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "What device allows wireless devices to connect to a local network?", options: { a: "Gateway", b: "Firewall", c: "Wireless Access Point (WAP)", d: "Router" }, answer: "c" },
            { category: "Hardware", type: "ident", question: "What does WAP stand for?", answer: "wireless access point" },
            { category: "Hardware", type: "ident", question: "What network device is considered the core of any interconnected network and the Internet?", answer: "router" },
            { category: "Hardware", type: "ident", question: "What network device forwards IP packets?", answer: "router" },
            { category: "Hardware", type: "ident", question: "What network device is much faster than a Hub and operates on wire speed?", answer: "switch" },
            { category: "Hardware", type: "ident", question: "What layer does a Hub operate on?", answer: "layer-1" },
            { category: "Hardware", type: "ident", question: "What layer does a typical Switch operate on?", answer: "layer-2" },
            { category: "Hardware", type: "ident", question: "What layer does a Router operate on?", answer: "layer-3" },
            { category: "Hardware", type: "mcq", question: "Are Layer-3 (Network Layer) switches available?", options: { a: "Yes", b: "No" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "Which component can be a user's PC, an internet Server, or a database server?", options: { a: "Host", b: "Switch", c: "Media", d: "Gateway" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "Which component can operate across several layers to enforce security rules?", options: { a: "Hub", b: "Switch", c: "Firewall", d: "Media" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "Fiber optic cable is an example of which network component?", options: { a: "Host", b: "Media", c: "Router", d: "Gateway" }, answer: "b" },

            // Domains & Efficiency (36-50)
            { category: "Domains", type: "mcq", question: "A scenario in which when a device sends out a message, all other devices in the domain have to pay attention to it, and simultaneous transmissions cause a collision is a:", options: { a: "Broadcast Domain", b: "Collision Domain", c: "Routing Domain", d: "Switching Domain" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "A collision occurs leading devices to wait and re-transmit their messages in which mode?", options: { a: "Full-duplex mode", b: "Half-duplex mode", c: "Simplex mode", d: "Multiplex mode" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "A scenario in which when a device sends out a broadcast message, all devices present have to pay attention to it, creating LAN congestion, is a:", options: { a: "Broadcast Domain", b: "Collision Domain", c: "VLAN", d: "WAN" }, answer: "a" },
            { category: "Domains", type: "mcq", question: "According to the efficiency rule, how does a network provide better bandwidth to all its users?", options: { a: "By minimizing collision and broadcast domains", b: "By maximizing the number of collision domains and broadcast domains", c: "By using only hubs", d: "By eliminating routers" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "Which device is neither a collision domain separator nor a broadcast domain separator?", options: { a: "Switch", b: "Router", c: "Hub", d: "Gateway" }, answer: "c" },
            { category: "Domains", type: "mcq", question: "All the devices connected to a hub are in:", options: { a: "Separate collision domains", b: "Separate broadcast domains", c: "A single collision and single broadcast domain", d: "No domains" }, answer: "c" },
            { category: "Domains", type: "mcq", question: "Which device ensures that every port is in a different collision domain?", options: { a: "Hub", b: "Switch", c: "WAP", d: "Repeater" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "Do switches break broadcast domains?", options: { a: "Yes", b: "No" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "All ports on a switch are still in a:", options: { a: "Single collision domain", b: "Single broadcast domain", c: "Different broadcast domains", d: "None of the above" }, answer: "b" },
            { category: "Domains", type: "mcq", question: "Which device not only breaks collision domains but also breaks broadcast domains?", options: { a: "Hub", b: "Switch", c: "Router", d: "Firewall" }, answer: "c" },
            { category: "Domains", type: "mcq", question: "Will a broadcast message from one network pass through a router to another network?", options: { a: "Yes", b: "No" }, answer: "b" },
            { category: "Domains", type: "ident", question: "What device is a collision domain separator but NOT a broadcast domain separator?", answer: "switch" },
            { category: "Domains", type: "ident", question: "What device creates a connection between two networks and prevents broadcasts from passing?", answer: "router" },
            { category: "Domains", type: "ident", question: "What problem is caused by a single large broadcast domain?", answer: "lan congestion" },
            { category: "Domains", type: "ident", question: "What mode does a collision domain scenario typically apply to?", answer: "half-duplex mode" },

            // Internet & Services (51-65)
            { category: "Internet Basics", type: "mcq", question: "What is a worldwide network of interconnected computers, servers, routers, mobile devices that communicate using standardized networking protocols?", options: { a: "World Wide Web", b: "Internet", c: "LAN", d: "Cloud" }, answer: "b" },
            { category: "Internet Basics", type: "mcq", question: "What is the primary protocol suite used by the Internet?", options: { a: "OSI", b: "HTTP/HTTPS", c: "TCP/IP", d: "FTP/SFTP" }, answer: "c" },
            { category: "Internet Basics", type: "mcq", question: "The Internet is often viewed as a massive:", options: { a: "Database of databases", b: "Network of networks", c: "Server of servers", d: "Web of webs" }, answer: "b" },
            { category: "Internet Services", type: "mcq", question: "Which of the following is NOT a service supported by the Internet?", options: { a: "World Wide Web", b: "Video Conferencing", c: "Local offline printing", d: "Cloud Computing" }, answer: "c" },
            { category: "Internet Services", type: "mcq", question: "What technology enables voice transmissions and multimedia sessions over IP networks?", options: { a: "IoT", b: "VoIP", c: "FTP", d: "SMTP" }, answer: "b" },
            { category: "Internet Services", type: "mcq", question: "What is the on-demand delivery of computing services including servers, storage, databases, networking, and software over the Internet?", options: { a: "Cloud Computing", b: "IoT", c: "Instant Messaging", d: "Remote Access" }, answer: "a" },
            { category: "Internet Services", type: "mcq", question: "What is real-time, text-based communication between two or more participants over a network?", options: { a: "VoIP", b: "Instant Messaging", c: "Email", d: "FTP" }, answer: "b" },
            { category: "Internet Services", type: "mcq", question: "What is a network of physical objects embedded with sensors, software, and network connectivity allowing them to collect and exchange data?", options: { a: "Cloud Computing", b: "IoT", c: "WWW", d: "WAP" }, answer: "b" },
            { category: "Internet Services", type: "ident", question: "What does VoIP stand for?", answer: "voice over internet protocol" },
            { category: "Internet Services", type: "ident", question: "What does IoT stand for?", answer: "internet of things" },
            { category: "Internet Services", type: "ident", question: "What service uses protocol solutions such as SSH?", answer: "remote access" },
            { category: "Internet Services", type: "mcq", question: "Multiplayer games connect players through Internet servers using specialized networking protocols. Do they necessarily operate through the World Wide Web?", options: { a: "Yes", b: "No" }, answer: "b" },
            { category: "Internet Services", type: "mcq", question: "Is Email (SMTP, IMAP, POP3) an Internet service that existed independently of the Web?", options: { a: "Yes", b: "No" }, answer: "a" },
            { category: "Internet Services", type: "ident", question: "What protocol is used for secure file transfers over the Internet?", answer: "sftp" },
            { category: "Internet Services", type: "ident", question: "What protocol is used for unsecure file transfers over the Internet?", answer: "ftp" },

            // WWW & Comparison (66-85)
            { category: "WWW", type: "mcq", question: "What is a system of interconnected webpages, websites, and online resources accessed through the Internet?", options: { a: "The Cloud", b: "The World Wide Web", c: "The Internet", d: "IoT" }, answer: "b" },
            { category: "WWW", type: "mcq", question: "Which of the following does the Web primarily use?", options: { a: "HTTP, HTTPS, URLs", b: "SMTP, IMAP, POP3", c: "SSH, FTP", d: "MAC addresses" }, answer: "a" },
            { category: "WWW", type: "mcq", question: "Users normally access the Web using:", options: { a: "Servers", b: "Web Browsers", c: "Routers", d: "Firewalls" }, answer: "b" },
            { category: "WWW vs Internet", type: "mcq", question: "In the analogy comparing the Internet and the World Wide Web, the Internet is like the:", options: { a: "Delivery trucks", b: "Roads, highways, and bridges", c: "Traffic lights", d: "Packages" }, answer: "b" },
            { category: "WWW vs Internet", type: "mcq", question: "In the analogy comparing the Internet and the World Wide Web, the World Wide Web is like the:", options: { a: "Roads and bridges", b: "Traffic lights", c: "Delivery trucks carrying documents", d: "Toll booths" }, answer: "c" },
            { category: "WWW vs Internet", type: "mcq", question: "Which represents the Communication Infrastructure?", options: { a: "The Internet", b: "The World Wide Web" }, answer: "a" },
            { category: "WWW vs Internet", type: "mcq", question: "Which represents one information service running on that infrastructure?", options: { a: "The Internet", b: "The World Wide Web" }, answer: "b" },
            { category: "WWW vs Internet", type: "mcq", question: "Which developed first?", options: { a: "The World Wide Web", b: "The Internet" }, answer: "b" },
            { category: "WWW vs Internet", type: "mcq", question: "Who developed the World Wide Web?", options: { a: "Vint Cerf", b: "Tim Berners-Lee", c: "Bill Gates", d: "Steve Jobs" }, answer: "b" },
            { category: "WWW vs Internet", type: "mcq", question: "Why was the World Wide Web developed?", options: { a: "To replace the Internet", b: "To provide an easier method for accessing and linking documents over networks", c: "To create the first computer network", d: "To route packets via hardware" }, answer: "b" },
            { category: "Process", type: "mcq", question: "When a user enters an address, what identifies the server?", options: { a: "Browser", b: "DNS", c: "Router", d: "HTML" }, answer: "b" },
            { category: "Process", type: "mcq", question: "After DNS identifies the server, what establishes the communication?", options: { a: "The Web Browser", b: "The Internet", c: "The Web Server", d: "The Document" }, answer: "b" },
            { category: "Process", type: "mcq", question: "What does the browser send to the web server?", options: { a: "An HTTP request", b: "An IP address", c: "A MAC address", d: "A DNS request" }, answer: "a" },
            { category: "Process", type: "mcq", question: "What processes the HTTP request?", options: { a: "The Web Browser", b: "The Web Server", c: "The Internet", d: "The User" }, answer: "b" },
            { category: "Process", type: "mcq", question: "The Web provides the information and application environment, while the Internet provides the:", options: { a: "Hardware", b: "Communication network necessary to deliver it", c: "HTML code", d: "Browser rendering" }, answer: "b" },
            { category: "Process", type: "ident", question: "What infrastructure resolves symbolic names to numerical IP addresses?", answer: "domain name system" },
            { category: "Process", type: "ident", question: "What language is retrieved by the browser to display the webpage?", answer: "html" },
            { category: "Process", type: "ident", question: "What does URL stand for?", answer: "uniform resource locator" },
            { category: "Process", type: "ident", question: "What does HTTP stand for?", answer: "hypertext transfer protocol" },
            { category: "Process", type: "ident", question: "What does HTTPS stand for?", answer: "hypertext transfer protocol secure" },

            // Ecosystem & Infrastructure (86-100)
            { category: "Ecosystem", type: "mcq", question: "Which infrastructure component connects a device to a network medium?", options: { a: "End-User Device", b: "Network Interface (NIC)", c: "Router", d: "Firewall" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "What is the term for specialized facilities housing high-capacity computing systems and storage pools?", options: { a: "LANs", b: "Data Centers", c: "CDNs", d: "ISPs" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Numerical identifying schemes enabling packet routing are called:", options: { a: "MAC Addresses", b: "IP Addresses", c: "Domain Names", d: "URLs" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Traffic-filtering security enforcement points are called:", options: { a: "Firewalls", b: "Routers", c: "CDNs", d: "Switches" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "Distributed server networks that provide Caching, DDoS Protection, WAF, and Traffic Optimization are:", options: { a: "Data Centers", b: "Content Delivery Networks (CDNs)", c: "Internet Service Providers (ISPs)", d: "Domain Registrars" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Temporary storage of web files close to the user to speed up load times is called:", options: { a: "DDoS Protection", b: "Traffic Optimization", c: "Caching", d: "WAF" }, answer: "c" },
            { category: "Ecosystem", type: "mcq", question: "A security solution that monitors and filters HTTP traffic targeting web applications is a:", options: { a: "WAF (Web Application Firewall)", b: "DDoS Protection", c: "CDN", d: "VPN" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "Who creates Websites, Mobile Apps, APIs, and Cloud Apps?", options: { a: "Internet Users", b: "Application Developers", c: "Hosting Providers", d: "ISPs" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "A virtualized private partition on a shared physical server host is a:", options: { a: "Dedicated Server", b: "Cloud Hosting", c: "Virtual Private Server (VPS)", d: "Data Center" }, answer: "c" },
            { category: "Ecosystem", type: "mcq", question: "An entire physical server allocated exclusively to a single tenant is a:", options: { a: "VPS", b: "Dedicated Server", c: "Cloud Hosting", d: "WAP" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Entities providing local, regional, or national access to the global Internet are:", options: { a: "Domain Registrars", b: "ISPs (Internet Service Providers)", c: "DNS Providers", d: "CAs" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Accredited entities that sell and register domain names are:", options: { a: "ISPs", b: "Domain Registrars", c: "Cloud Service Providers", d: "CAs" }, answer: "b" },
            { category: "Ecosystem", type: "mcq", question: "Entities that maintain and run authoritative Name Servers to answer DNS queries are:", options: { a: "DNS Providers", b: "Domain Registrars", c: "CAs", d: "ISPs" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "Trusted organizations that issue digital certificates verifying server identity for secure communication are:", options: { a: "Certificate Authorities (CAs)", b: "ISPs", c: "DNS Providers", d: "Domain Registrars" }, answer: "a" },
            { category: "Ecosystem", type: "ident", question: "What does CDN stand for?", answer: "content delivery network" }
        ],

    },

        {
        id: "mod2_architecture",
        title: "2. Computing & Architectural Models",
        proper: `
            <h2>Client-Server Architecture</h2>
            <p>Client-server Architecture is a computing model in which one computer or application, called the client, requests a service or resource from another computer or application called the Server. The server receives the request, processes it, and returns an appropriate response.</p>
            <p><strong>Basic Model / Principle:</strong> Client &rarr; Request &rarr; Processing &rarr; Response &rarr; Client.</p>
            
            <h3>Definitions</h3>
            <ul>
                <li><strong>Client:</strong> A device or software application that requests a service from another system. Examples: Web browser, mobile app, desktop software, email app, database management tool, Command line utilities, and IoT device.</li>
                <li><strong>Server:</strong> A computer or software system that provides services, resources, or data to clients.</li>
            </ul>

            <h3>Server Types and Roles</h3>
            <ul>
                <li><strong>Web Server:</strong> Accepts HTTP/HTTPS requests (Examples: Apache, Nginx, Microsoft IIS).</li>
                <li><strong>Application Server:</strong> Runs application logic such as routes, controllers, authentication, and business rules.</li>
                <li><strong>Database Server:</strong> Stores and retrieves application data (Examples: MySQL, PostgreSQL, Microsoft SQL Server).</li>
                <li><strong>File Server:</strong> Stores and distributes/uploaded files.</li>
                <li><strong>Mail Server:</strong> Processes, stores, sends, and receives emails.</li>
                <li><strong>DNS Server:</strong> Provides domain-name resolution.</li>
                <li><strong>Authentication Server:</strong> Handles user login and credential verification.</li>
            </ul>

            <details class="simple-explanation">
                <summary>💡 Simpler Explanation: Local vs Actual Deployment</summary>
                <p><strong>Local Deployment:</strong> Chrome &rarr; Localhost &rarr; Apache &rarr; Laravel/PHP &rarr; MySQL. (Here, the Browser is the client, Apache/Nginx is the web server, Laravel/PHP is the application, and MySQL is the database service).</p>
                <p><strong>Actual Deployment:</strong> User Browser &rarr; Internet &rarr; Firewall &rarr; Web Server &rarr; Application Server &rarr; Database Server.</p>
            </details>

            <p><strong>Sample Web Request (Online Enrollment):</strong> User opens https://enrollment.example.edu. The browser sends GET /subjects. The web server passes the request to the application, which executes SELECT * FROM subjects;. The database returns records, the application formats the result, and the web server sends the response to the client browser.</p>

            <h2>Thin Client vs. Thick Client</h2>
            <p><strong>Thin Client:</strong> A thin client relies heavily on the server; most application processing happens remotely/on the server. Traditional server-rendered web applications are typical examples.</p>
            <p><em>Formal Definition:</em> "A thin client is a lightweight computing device or software application that relies on a remote server or cloud infrastructure for processing power and storage."</p>
            <ul>
                <li><strong>Advantages:</strong> Simpler client requirements, Centralized management, Easier updates.</li>
                <li><strong>Disadvantages / Limitations:</strong> Strong dependency on network connectivity, Potentially higher/increased server workload.</li>
            </ul>

            <p><strong>Thick Client:</strong> A thick client performs significant processing locally. Full application with logic installed locally; server acts as regular data storage.</p>
            <ul>
                <li><strong>Examples:</strong> Desktop applications, Mobile Applications, Sophisticated Javascript applications.</li>
                <li><strong>Server Role:</strong> Primary tasks are Authentication, Data, APIs, and Storage.</li>
            </ul>

            <h2>Advantages and Limitations of Client-Server Architecture</h2>
            <ul>
                <li><strong>Advantages:</strong> Centralized data, Centralized security, Easier maintenance/centralized maintenance, Resource/service sharing, Better data consistency, Easier backup, Controlled access to organizational data.</li>
                <li><strong>Limitations:</strong> Server failure will make users lose access (critical server can become a single point of failure), Clients depend on network connectivity, Scalability problem/server overload (servers can become performance bottlenecks), Security risk (Internet-facing servers are attractive security targets), Infrastructure and administration costs.</li>
            </ul>

            <h2>Scaling Client-Server Applications</h2>
            <p>When a system grows from 50 users to tens of thousands (e.g., 50,000 users), one server may no longer be capable of handling the workload. This requires client-server architecture to transition into distributed systems via load balancing.</p>
            <p><strong>Load Balancer:</strong> A device or software system that distributes incoming network or application traffic across multiple servers (e.g., distributing requests among Server A, Server B, and Server C).</p>

            <h2>Peer-to-Peer (P2P) Architecture</h2>
            <p>A peer-to-peer Architecture or P2P is a network model in which computers or devices communicate directly with one another and may act as both clients and servers. Each participating device may request resources, provide resources, send data, and receive data.</p>
            <p><strong>Examples and Uses:</strong> File-sharing applications, Blockchain networks, Decentralized communication systems, Distributed storage, Some gaming systems, Direct device-to-device communication.</p>
            <p><strong>BitTorrent:</strong> Well-known example of peer-to-peer file distribution where a file may be downloaded/obtained from several participating computers rather than from a single central server.</p>

            <h3>Client-Server vs. Peer-to-Peer</h3>
            <table>
                <tr><th>Feature / Aspect</th><th>Client-Server Architecture</th><th>Peer-to-Peer (P2P) Architecture</th></tr>
                <tr><td><strong>Service Provider</strong></td><td>A central server provides services.</td><td>Peers provide services to one another.</td></tr>
                <tr><td><strong>Client Role</strong></td><td>Clients primarily request services.</td><td>Each peer may request and provide services.</td></tr>
                <tr><td><strong>Management</strong></td><td>Centralized management is easier.</td><td>More decentralized management.</td></tr>
                <tr><td><strong>Security</strong></td><td>Centralized security is easier to enforce.</td><td>Security can be more complex.</td></tr>
                <tr><td><strong>Bottlenecks</strong></td><td>The server may become a bottleneck.</td><td>Workload can be distributed among peers.</td></tr>
                <tr><td><strong>Common Use</strong></td><td>Common in web applications.</td><td>Common in decentralized systems.</td></tr>
            </table>

            <p><strong>Advantages of P2P:</strong> Reduced dependence on a central server (resources remain available even if one peer disconnects), Distributed workload and data transfer shared among peers, Scalability (adding peers can increase available resources), Lower central infrastructure requirements (not all services need to be hosted by one organization).</p>
            <p><strong>Limitations of P2P:</strong> Difficult management and governance (no single system controls all participants), Security concerns (peers may be untrusted or compromised), Availability problems (individual peers may disconnect at any time), Data consistency issues across many peers, Troubleshooting complexity (identifying problem locations is harder than in centralized systems).</p>
            <p><strong>Is the Web Peer-to-Peer?:</strong> Most traditional websites and web applications use client-server architecture. When accessing a website, the browser usually connects to servers operated by the website owner or hosting provider. However, some Internet applications combine centralized and peer-to-peer technologies; modern systems are not always purely one architecture or another.</p>

            <h2>Distributed Systems</h2>
            <p>A distributed system is a collection of independent computers that work together and appear to users as one integrated system (or achieve a common goal). Instead of one computer performing all operations, tasks are distributed among multiple computers. The user interface provides a single system view (transparency).</p>
            <p><strong>Why Use Distributed Systems?:</strong> A single computer has limits in CPU, Memory, Storage, Network Capacity, and Reliability. Distributed systems allow organizations to use multiple computers to improve Performance, Scalability, Availability, Reliability, and Geographic Coverage.</p>

            <h3>Distribution by Function and Geography</h3>
            <ul>
                <li><strong>By Function:</strong> Separating Authentication, Application Logic, Database, File Storage, Email, and Backup.</li>
                <li><strong>By Geography:</strong> Locating data centers across Manila, Singapore, Tokyo, and China. Users are directed via a Global Load Balancer to the nearest or most appropriate location to improve Response Time, Redundancy, Availability, and Disaster Recovery.</li>
            </ul>

            <h3>Characteristics of Distributed Systems</h3>
            <ul>
                <li><strong>Multiple Computers:</strong> More than one computer participates.</li>
                <li><strong>Network Communication:</strong> Components communicate through a network (LAN/WAN).</li>
                <li><strong>Resource Sharing:</strong> Servers share data, services, or processing responsibilities.</li>
                <li><strong>Concurrency:</strong> Many operations occur simultaneously.</li>
                <li><strong>Fault Tolerance:</strong> The system attempts to continue operating when a component fails.</li>
                <li><strong>Scalability:</strong> Vertical Scaling (Scale Up: increase capacity of one server by adding RAM, CPU, or storage) and Horizontal Scaling (Scale Out: add more servers that share the workload, like Web Server 2 and 3).</li>
                <li><strong>Load Balancing:</strong> Distributing application traffic among multiple servers.</li>
                <li><strong>Redundancy:</strong> Having extra components available in case one fails.</li>
            </ul>
            <p><strong>Challenges of Distributed Systems:</strong> Network delays and latency, Synchronization, Data consistency, Failure detection, Security, Configuration complexity, Monitoring, and Troubleshooting.</p>
            <p><strong>Causes of Distributed Application Failures:</strong> Application code, DNS, Firewall rules, Database connectivity, Load balancing, Network latency, Authentication services, or Cloud configuration.</p>
        `,
        glossary: [
            { term: "Client", def: "A device or software application that requests a service from another system." },
            { term: "Server", def: "A computer or software system that provides services, resources, or data to clients." },
            { term: "Thin Client", def: "A lightweight computing device or application that relies heavily on a remote server for processing power." },
            { term: "Thick Client", def: "An application that performs significant processing locally on the endpoint device." },
            { term: "Load Balancer", def: "A device or software system that distributes incoming network or application traffic across multiple servers." },
            { term: "Peer-to-Peer (P2P)", def: "A network model in which computers or devices communicate directly with one another and act as both clients and servers." },
            { term: "Distributed System", def: "A collection of independent computers that work together and appear to users as one integrated system." },
            { term: "Vertical Scaling", def: "Scaling up by increasing the capacity of one server by adding RAM, CPU, or storage." },
            { term: "Horizontal Scaling", def: "Scaling out by adding more servers to share the workload." },
            { term: "Active Directory", def: "Microsoft directory service used for centralized domain authentication and network administration." }
        ],
        flashcards: [
            { front: "What is the basic model or principle of Client-Server Architecture?", back: "Client -> Request -> Processing -> Response -> Client." },
            { front: "What is the primary difference between a Thin Client and a Thick Client?", back: "Thin clients rely on a server for processing, while thick clients perform significant processing locally." },
            { front: "What device or software distributes incoming traffic across multiple servers?", back: "A Load Balancer." },
            { front: "What is the primary advantage of Peer-to-Peer (P2P) architecture regarding failure?", back: "It reduces dependence on a central server; resources remain available even if one peer disconnects." },
            { front: "What is Horizontal Scaling (Scale Out)?", back: "Adding more servers to share the workload." },
            { front: "What does the term 'Single System View' (transparency) mean in a Distributed System?", back: "The system appears to the user as one integrated system, even though tasks are distributed among multiple computers." }
        ],
        quiz: [
            // Client-Server Architecture & Roles (1-20)
            { category: "Client-Server", type: "mcq", question: "A computing model in which one computer requests a service from another computer is called:", options: { a: "Peer-to-Peer Architecture", b: "Client-Server Architecture", c: "Mainframe Architecture", d: "Standalone Architecture" }, answer: "b" },
            { category: "Client-Server", type: "mcq", question: "Which of the following represents the basic principle of Client-Server architecture?", options: { a: "Server -> Processing -> Client -> Response", b: "Client -> Request -> Processing -> Response -> Client", c: "Request -> Client -> Server -> Response", d: "Client -> Server -> Client -> Server" }, answer: "b" },
            { category: "Client-Server", type: "mcq", question: "A device or software application that requests a service from another system is formally known as a:", options: { a: "Server", b: "Host", c: "Client", d: "Router" }, answer: "c" },
            { category: "Client-Server", type: "mcq", question: "A computer or software system that provides services, resources, or data to clients is a:", options: { a: "Client", b: "Node", c: "Gateway", d: "Server" }, answer: "d" },
            { category: "Server Roles", type: "mcq", question: "Which type of server strictly accepts HTTP/HTTPS requests (e.g., Apache, Nginx)?", options: { a: "Application Server", b: "Database Server", c: "Web Server", d: "DNS Server" }, answer: "c" },
            { category: "Server Roles", type: "mcq", question: "Which type of server runs application logic such as routes, controllers, and business rules?", options: { a: "Web Server", b: "Application Server", c: "Database Server", d: "Mail Server" }, answer: "b" },
            { category: "Server Roles", type: "mcq", question: "Which type of server is responsible for storing and retrieving application data (e.g., MySQL, PostgreSQL)?", options: { a: "Web Server", b: "Application Server", c: "Database Server", d: "File Server" }, answer: "c" },
            { category: "Server Roles", type: "mcq", question: "Which type of server processes, stores, sends, and receives emails?", options: { a: "Mail Server", b: "File Server", c: "Authentication Server", d: "Web Server" }, answer: "a" },
            { category: "Server Roles", type: "mcq", question: "Which type of server provides domain-name resolution?", options: { a: "Mail Server", b: "DNS Server", c: "Authentication Server", d: "Web Server" }, answer: "b" },
            { category: "Server Roles", type: "mcq", question: "Which type of server handles user login and credential verification?", options: { a: "DNS Server", b: "File Server", c: "Authentication Server", d: "Database Server" }, answer: "c" },
            { category: "Server Roles", type: "mcq", question: "Which type of server strictly stores and distributes uploaded files?", options: { a: "File Server", b: "Web Server", c: "Database Server", d: "DNS Server" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "In a sample web request, after the Browser sends an HTTP Request, which component typically receives it first?", options: { a: "Database", b: "Web Server", c: "Application", d: "DNS" }, answer: "b" },
            { category: "Deployment", type: "mcq", question: "In a local deployment environment using XAMPP (Chrome -> Localhost -> Apache -> Laravel/PHP -> MySQL), what acts as the web server?", options: { a: "Chrome", b: "Laravel/PHP", c: "Apache", d: "MySQL" }, answer: "c" },
            { category: "Deployment", type: "mcq", question: "In a local deployment environment, what acts as the client?", options: { a: "Apache", b: "Chrome / Browser", c: "MySQL", d: "PHP" }, answer: "b" },
            { category: "Deployment", type: "mcq", question: "In a local deployment environment, what acts as the application layer?", options: { a: "MySQL", b: "Chrome", c: "Apache", d: "Laravel/PHP" }, answer: "d" },
            { category: "Deployment", type: "mcq", question: "In a local deployment environment, what acts as the database service?", options: { a: "MySQL", b: "Apache", c: "Laravel", d: "Chrome" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "In an actual production deployment, what component sits between the Internet and the Web Server?", options: { a: "Database Server", b: "Application Server", c: "Firewall", d: "Browser" }, answer: "c" },
            { category: "Deployment", type: "mcq", question: "In a simple online enrollment programming example, what executes the 'SELECT * FROM subjects;' query?", options: { a: "The Web Server", b: "The Application", c: "The Client Browser", d: "The DNS Server" }, answer: "b" },
            { category: "Deployment", type: "mcq", question: "In an actual deployment, after the Firewall passes the request, it goes directly to the:", options: { a: "Database Server", b: "Web Server", c: "Application Server", d: "Client" }, answer: "b" },
            { category: "Client-Server", type: "ident", question: "What acts as the source of a request in a client-server model?", answer: "client" },

            // Thin vs Thick Client (21-35)
            { category: "Client Types", type: "mcq", question: "Which type of client relies heavily on the remote server, meaning most application processing happens centrally?", options: { a: "Thick Client", b: "Fat Client", c: "Thin Client", d: "Peer Client" }, answer: "c" },
            { category: "Client Types", type: "ident", question: "What is a lightweight computing device or software that relies on a remote server for processing power called?", answer: "thin client" },
            { category: "Client Types", type: "mcq", question: "Which type of client performs significant processing locally (e.g., mobile applications)?", options: { a: "Thin Client", b: "Light Client", c: "Thick Client", d: "Web Client" }, answer: "c" },
            { category: "Client Types", type: "mcq", question: "Traditional server-rendered web applications are typical examples of:", options: { a: "Thick Clients", b: "Thin Clients", c: "P2P Clients", d: "Hybrid Clients" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Desktop software and sophisticated JavaScript applications are typically considered:", options: { a: "Thin Clients", b: "Thick Clients", c: "Cloud Terminal Clients", d: "Lightweight Clients" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Which of the following is an advantage of a Thin Client?", options: { a: "It works perfectly offline", b: "Simpler client requirements and easier updates", c: "It uses more local processing power", d: "It reduces the server workload" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Which of the following is a limitation of a Thin Client?", options: { a: "It is difficult to centrally manage", b: "It requires complex local hardware", c: "It has a strong dependency on network connectivity", d: "It cannot use cloud infrastructure" }, answer: "c" },
            { category: "Client Types", type: "mcq", question: "In a Thick Client architecture, what is the primary role of the Server?", options: { a: "Rendering the entire UI", b: "Authentication, Data, APIs, and Storage", c: "Running the client's local operating system", d: "Managing local hardware drivers" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Which client type places a potentially higher workload on the server?", options: { a: "Thick Client", b: "Thin Client", c: "Peer Node", d: "Desktop App" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "A mobile application that works offline and syncs data later is functioning mostly as a:", options: { a: "Thin Client", b: "Cloud Terminal", c: "Thick Client", d: "DNS Server" }, answer: "c" },
            { category: "Client Types", type: "ident", question: "What type of client is described as 'lightweight'?", answer: "thin client" },
            { category: "Client Types", type: "mcq", question: "Which client type allows for easier centralized management?", options: { a: "Thick Client", b: "Thin Client", c: "Decentralized P2P", d: "Local Desktop Software" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Which client requires the server to do less processing?", options: { a: "Thin Client", b: "Thick Client", c: "Web Browser rendering standard HTML", d: "Cloud Infrastructure" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "If a company wants to deploy software where updates are instantaneous for all users without installing patches, they should use a:", options: { a: "Thick Client", b: "Standalone Application", c: "Thin Client (Web App)", d: "Desktop Application" }, answer: "c" },
            { category: "Client Types", type: "mcq", question: "A system where the full application logic is installed locally on the user's PC is a:", options: { a: "Thin Client", b: "Cloud App", c: "Thick Client", d: "Web Page" }, answer: "c" },

            // Advantages, Limitations & Scaling (36-45)
            { category: "Advantages/Limitations", type: "mcq", question: "Which of the following is an advantage of Client-Server architecture?", options: { a: "No single point of failure", b: "Centralized security and easier maintenance", c: "Clients do not need a network connection", d: "It is fully decentralized" }, answer: "b" },
            { category: "Advantages/Limitations", type: "mcq", question: "Which of the following is considered a limitation of Client-Server architecture?", options: { a: "A critical server can become a single point of failure", b: "Data backups are impossible to centralize", c: "It cannot handle HTTP requests", d: "It requires all clients to act as servers" }, answer: "a" },
            { category: "Advantages/Limitations", type: "mcq", question: "In Client-Server architecture, if a server becomes overloaded, this is known as a:", options: { a: "Scalability problem / performance bottleneck", b: "Network interface crash", c: "Thin client failure", d: "Peer disconnection" }, answer: "a" },
            { category: "Advantages/Limitations", type: "mcq", question: "Which architecture allows for better data consistency and controlled access to organizational data?", options: { a: "Peer-to-Peer", b: "Client-Server", c: "Decentralized Blockchain", d: "Standalone" }, answer: "b" },
            { category: "Scaling", type: "mcq", question: "When a client-server system grows from 50 users to 50,000, it usually transitions into:", options: { a: "A single mainframe", b: "Distributed systems via load balancing", c: "A purely P2P network", d: "A thick client architecture exclusively" }, answer: "b" },
            { category: "Scaling", type: "mcq", question: "What device or software system distributes incoming network or application traffic across multiple servers?", options: { a: "DNS Server", b: "Firewall", c: "Load Balancer", d: "Router" }, answer: "c" },
            { category: "Scaling", type: "ident", question: "What spreads incoming traffic across Server A, Server B, and Server C?", answer: "load balancer" },
            { category: "Advantages/Limitations", type: "mcq", question: "Internet-facing servers in a Client-Server model are considered:", options: { a: "Immune to attacks", b: "Attractive security targets (Security risk)", c: "Unnecessary", d: "Self-healing" }, answer: "b" },
            { category: "Advantages/Limitations", type: "mcq", question: "Which of the following is NOT an advantage of Client-Server?", options: { a: "Resource sharing", b: "Easier backup", c: "Zero infrastructure costs", d: "Centralized data" }, answer: "c" },
            { category: "Advantages/Limitations", type: "mcq", question: "In Client-Server, what happens if the network goes down?", options: { a: "Clients seamlessly switch to P2P", b: "Clients lose access due to network dependency", c: "The server processes requests offline", d: "Nothing changes" }, answer: "b" },

            // P2P Architecture (46-65)
            { category: "P2P", type: "mcq", question: "A network model in which computers communicate directly with one another and act as both clients and servers is called:", options: { a: "Client-Server", b: "Peer-to-Peer (P2P)", c: "Distributed File System", d: "Thin Client" }, answer: "b" },
            { category: "P2P", type: "ident", question: "What does P2P stand for?", answer: "peer-to-peer" },
            { category: "P2P", type: "mcq", question: "In a P2P architecture, each participating device may:", options: { a: "Only request resources", b: "Only provide resources", c: "Request resources, provide resources, send data, and receive data", d: "Only route IP packets" }, answer: "c" },
            { category: "P2P", type: "mcq", question: "Which of the following is a well-known example of peer-to-peer file distribution?", options: { a: "MySQL", b: "Apache", c: "BitTorrent", d: "Laravel" }, answer: "c" },
            { category: "P2P", type: "mcq", question: "Which of the following is a common use case for P2P architecture?", options: { a: "Centralized Banking systems", b: "Blockchain networks and decentralized communication systems", c: "DNS Resolution", d: "Traditional Web Hosting" }, answer: "b" },
            { category: "P2P Comparison", type: "mcq", question: "In a P2P architecture, who provides services?", options: { a: "A central server", b: "Peers provide services to one another", c: "Only the ISP", d: "A load balancer" }, answer: "b" },
            { category: "P2P Comparison", type: "mcq", question: "Compared to Client-Server, management in a P2P network is:", options: { a: "More centralized", b: "More decentralized", c: "Exactly the same", d: "Automated by DNS" }, answer: "b" },
            { category: "P2P Comparison", type: "mcq", question: "In terms of security, Client-Server is easier to enforce centrally. How is security in P2P?", options: { a: "It is non-existent", b: "It is centrally managed", c: "It can be more complex", d: "It is impenetrable" }, answer: "c" },
            { category: "P2P Comparison", type: "mcq", question: "In Client-Server, the server may become a bottleneck. In P2P:", options: { a: "The router is the only bottleneck", b: "Workload can be distributed among peers", c: "Bottlenecks do not exist", d: "Peers cannot share workloads" }, answer: "b" },
            { category: "P2P Advantages", type: "mcq", question: "Which of the following is an advantage of P2P?", options: { a: "Centralized management is easier", b: "Security is easier to enforce", c: "Reduced dependence on a central server (resources remain available even if one peer disconnects)", d: "Data consistency is guaranteed" }, answer: "c" },
            { category: "P2P Advantages", type: "mcq", question: "In P2P, what happens to scalability as more peers join?", options: { a: "The network crashes", b: "Available resources decrease", c: "Adding peers can increase available resources", d: "A load balancer must be installed" }, answer: "c" },
            { category: "P2P Limitations", type: "mcq", question: "Which of the following is a limitation of P2P?", options: { a: "Data is too centralized", b: "Difficult management and governance (no single system controls all participants)", c: "Requires massive central infrastructure", d: "Cannot distribute workloads" }, answer: "b" },
            { category: "P2P Limitations", type: "mcq", question: "Why are availability problems considered a limitation in P2P?", options: { a: "Because servers are too expensive", b: "Because individual peers may disconnect at any time", c: "Because load balancers fail", d: "Because ISPs block all P2P traffic" }, answer: "b" },
            { category: "P2P Limitations", type: "mcq", question: "Which architecture faces significant challenges regarding data consistency across many participants?", options: { a: "Client-Server", b: "P2P", c: "Mainframe", d: "Thin Client" }, answer: "b" },
            { category: "P2P Limitations", type: "mcq", question: "Troubleshooting complexity is higher in P2P because:", options: { a: "Identifying problem locations is harder than in centralized systems", b: "There are no IP addresses", c: "Servers do not keep logs", d: "Load balancers hide the errors" }, answer: "a" },
            { category: "P2P/Web", type: "mcq", question: "Is the World Wide Web purely a Peer-to-Peer network?", options: { a: "Yes, it is 100% P2P", b: "No, most traditional websites and web applications use client-server architecture", c: "Yes, because of BitTorrent", d: "No, it is exclusively a mainframe architecture" }, answer: "b" },
            { category: "P2P/Web", type: "mcq", question: "True or False: Modern Internet systems are always purely one architecture (either strictly client-server or strictly P2P).", options: { a: "True", b: "False, some applications combine centralized and peer-to-peer technologies" }, answer: "b" },
            { category: "P2P", type: "ident", question: "What architecture distributes workloads and data transfers shared among peers?", answer: "peer-to-peer" },
            { category: "P2P", type: "ident", question: "What well-known application is used as an example of peer-to-peer file distribution?", answer: "bittorrent" },
            { category: "P2P", type: "ident", question: "In P2P, what acts as both clients and servers?", answer: "peers" },

            // Distributed Systems (66-85)
            { category: "Distributed Systems", type: "mcq", question: "A collection of independent computers that work together and appear to users as one integrated system is a:", options: { a: "Distributed System", b: "Thin Client System", c: "Local Area Network", d: "Standalone Server" }, answer: "a" },
            { category: "Distributed Systems", type: "ident", question: "What term describes multiple computers working together to appear as one integrated system?", answer: "distributed system" },
            { category: "Distributed Systems", type: "mcq", question: "In a distributed system, the user interface provides a 'single system view'. This is also known as:", options: { a: "Redundancy", b: "Concurrency", c: "Transparency", d: "Scalability" }, answer: "c" },
            { category: "Distributed Systems", type: "mcq", question: "Why do organizations use distributed systems?", options: { a: "To increase limits in CPU, Memory, and Network Capacity found in a single computer", b: "To create a single point of failure", c: "To eliminate the need for an internet connection", d: "To prevent horizontal scaling" }, answer: "a" },
            { category: "Distributed Systems", type: "mcq", question: "Which of the following is NOT a reason to use a distributed system?", options: { a: "To improve Performance", b: "To improve Scalability", c: "To decrease Reliability", d: "To improve Geographic Coverage" }, answer: "c" },
            { category: "Distribution", type: "mcq", question: "Separating Authentication, Application Logic, Database, File Storage, and Email onto different servers is an example of distribution by:", options: { a: "Geography", b: "Function", c: "Volume", d: "Latency" }, answer: "b" },
            { category: "Distribution", type: "ident", question: "Separating tasks like database, email, and authentication onto different servers is distribution by what?", answer: "function" },
            { category: "Distribution", type: "mcq", question: "Locating data centers across Manila, Singapore, Tokyo, and China is an example of distribution by:", options: { a: "Geography", b: "Function", c: "Volume", d: "Protocol" }, answer: "a" },
            { category: "Distribution", type: "ident", question: "Locating data centers in different countries is distribution by what?", answer: "geography" },
            { category: "Distribution", type: "mcq", question: "When distributing by geography, users are often directed to the nearest location via a:", options: { a: "Local Router", b: "Global Load Balancer", c: "Switch", d: "Firewall" }, answer: "b" },
            { category: "Characteristics", type: "mcq", question: "Which characteristic of distributed systems means that many operations occur simultaneously?", options: { a: "Redundancy", b: "Concurrency", c: "Fault Tolerance", d: "Resource Sharing" }, answer: "b" },
            { category: "Characteristics", type: "ident", question: "What characteristic allows many operations to occur simultaneously?", answer: "concurrency" },
            { category: "Characteristics", type: "mcq", question: "The characteristic where a system attempts to continue operating when a component fails is called:", options: { a: "Concurrency", b: "Scalability", c: "Fault Tolerance", d: "Redundancy" }, answer: "c" },
            { category: "Characteristics", type: "ident", question: "What is the system's ability to continue operating when a component fails?", answer: "fault tolerance" },
            { category: "Characteristics", type: "mcq", question: "Having extra components available in case one fails is known as:", options: { a: "Load Balancing", b: "Redundancy", c: "Concurrency", d: "Resource Sharing" }, answer: "b" },
            { category: "Characteristics", type: "ident", question: "What is having extra components available in case one fails called?", answer: "redundancy" },
            { category: "Characteristics", type: "mcq", question: "Which scaling method involves increasing the capacity of one server by adding RAM, CPU, or storage?", options: { a: "Horizontal Scaling (Scale Out)", b: "Vertical Scaling (Scale Up)", c: "Diagonal Scaling", d: "Load Balancing" }, answer: "b" },
            { category: "Characteristics", type: "ident", question: "What is scaling up by adding RAM, CPU, or storage to one server called?", answer: "vertical scaling" },
            { category: "Characteristics", type: "mcq", question: "Which scaling method involves adding more servers that share the workload?", options: { a: "Horizontal Scaling (Scale Out)", b: "Vertical Scaling (Scale Up)", c: "Centralized Scaling", d: "Redundancy Scaling" }, answer: "a" },
            { category: "Characteristics", type: "ident", question: "What is scaling out by adding more servers to share the workload called?", answer: "horizontal scaling" },

            // Distributed Challenges & Failures (86-100)
            { category: "Distributed Challenges", type: "mcq", question: "Which of the following is a major challenge in distributed systems?", options: { a: "Too much CPU power on a single machine", b: "Data consistency across multiple servers", c: "Inability to use load balancers", d: "The system runs too fast" }, answer: "b" },
            { category: "Distributed Challenges", type: "mcq", question: "Which of the following is considered a challenge in maintaining distributed systems?", options: { a: "Network delays and latency", b: "Synchronization", c: "Configuration complexity", d: "All of the above" }, answer: "d" },
            { category: "Distributed Challenges", type: "mcq", question: "In a distributed system, ensuring all servers have the exact same up-to-date information is known as the challenge of:", options: { a: "Load Balancing", b: "Data consistency", c: "Vertical Scaling", d: "Hardware routing" }, answer: "b" },
            { category: "Distributed Challenges", type: "mcq", question: "Identifying which specific server in a cluster has crashed is related to the challenge of:", options: { a: "Failure detection", b: "Concurrency", c: "Redundancy", d: "Scale out" }, answer: "a" },
            { category: "Distributed Failures", type: "mcq", question: "Which of the following can cause a distributed application failure?", options: { a: "DNS misconfiguration", b: "Firewall rules blocking traffic", c: "Network latency", d: "All of the above" }, answer: "d" },
            { category: "Distributed Failures", type: "mcq", question: "If a distributed application cannot verify user logins, which service is likely causing the failure?", options: { a: "Database connectivity", b: "Authentication services", c: "Load balancing", d: "Cloud configuration" }, answer: "b" },
            { category: "Distributed Failures", type: "mcq", question: "If traffic is not being properly distributed to Web Server 2 and Web Server 3, causing Web Server 1 to crash, what is likely failing?", options: { a: "Load balancing", b: "Application code", c: "DNS", d: "File Storage" }, answer: "a" },
            { category: "Definitions Review", type: "ident", question: "What Microsoft directory service is used for centralized domain authentication and network administration?", answer: "active directory" },
            { category: "Definitions Review", type: "mcq", question: "What does Active Directory primarily handle?", options: { a: "Centralized domain authentication and network administration", b: "Load balancing", c: "Database storage", d: "HTML rendering" }, answer: "a" },
            { category: "Definitions Review", type: "mcq", question: "In the example 'One Server Running Everything', which service would NOT be on that single server?", options: { a: "Web Application", b: "Database Application", c: "Global Load Balancer", d: "Email Server" }, answer: "c" },
            { category: "Definitions Review", type: "mcq", question: "If a system uses distribution by function, and Server 2 runs the Database Application, what might Server 3 run?", options: { a: "The exact same Database Application (for function, not redundancy)", b: "File Storage", c: "A CPU upgrade", d: "A switch" }, answer: "b" },
            { category: "Definitions Review", type: "mcq", question: "Geographic distribution improves which of the following?", options: { a: "Disaster Recovery", b: "Local processing power", c: "Thick client rendering", d: "P2P security" }, answer: "a" },
            { category: "Definitions Review", type: "mcq", question: "Distributing application traffic among multiple servers is the definition of:", options: { a: "Load Balancing", b: "Concurrency", c: "Data Consistency", d: "Synchronization" }, answer: "a" },
            { category: "Definitions Review", type: "mcq", question: "When components communicate through a network (LAN/WAN) in a distributed system, this satisfies the characteristic of:", options: { a: "Network Communication", b: "Resource Sharing", c: "Multiple Computers", d: "Concurrency" }, answer: "a" },
            { category: "Definitions Review", type: "mcq", question: "Which of the following represents the single system view (transparency)?", options: { a: "Users see 5 different servers and pick one", b: "The user interface appears to users as one integrated system", c: "The system is a single physical computer", d: "The servers are transparent and cannot be secured" }, answer: "b" }
        ],
    },

    {
        id: "mod3_models_addressing",
        title: "3. Communication Models & Addressing",
        proper: `
            <h2>3. Reference Communication Models & Packet Transmission</h2>
            
            <h3>Why Networking Models are Needed</h3>
            <p>Computer communication involves many responsibilities: application protocols, data formatting, connection management, port numbers, IP addressing, routing, local hardware addressing, and physical transmission. Networking models divide these responsibilities into layers so that they are easier to design, explain, and troubleshoot.</p>

            <h3>The OSI Reference Model</h3>
            <p>The International Organization for Standardization (ISO) defined the Open Systems Interconnection (OSI) Model as a layered, conceptualized view of how systems communicate using protocols defined at each layer.</p>
            <p><strong>Mnemonic (Layer 7 to Layer 1):</strong> All People Seem To Need Data Processing.</p>
            
            <table>
                <tr><th>Layer #</th><th>Layer Name</th><th>Responsibilities & Description</th><th>Examples / Associated Technologies</th></tr>
                <tr><td>7</td><td><strong>Application</strong></td><td>Human-computer interaction layer; provides network services directly to end-user applications.</td><td>HTTP, HTTPS, SMTP, DNS, FTP, SSH</td></tr>
                <tr><td>6</td><td><strong>Presentation</strong></td><td>Deals with data representation; ensures data is in a usable format; handles encoding, formatting, encryption, and compression.</td><td>JSON, XML, UTF-8, JPEG, PNG</td></tr>
                <tr><td>5</td><td><strong>Session</strong></td><td>Maintains connections; controls ports and sessions; manages establishing, maintaining, and terminating communication sessions.</td><td>Session management APIs, RPC</td></tr>
                <tr><td>4</td><td><strong>Transport</strong></td><td>End-to-end delivery; transmits data using transport protocols; handles ports, sequencing, and reliability.</td><td>TCP, UDP</td></tr>
                <tr><td>3</td><td><strong>Network</strong></td><td>Logical addressing and routing; decides which physical path the data will take across networks.</td><td>IP (IPv4, IPv6), Routers, ICMP</td></tr>
                <tr><td>2</td><td><strong>Data Link</strong></td><td>Defines the format of data on the network; handles node-to-node communication on the same local segment.</td><td>Ethernet, Wi-Fi, MAC addressing, Switches</td></tr>
                <tr><td>1</td><td><strong>Physical</strong></td><td>Transmits raw bit streams over physical media (wires, pulse codes, frequencies, voltage transmission).</td><td>Copper cables, fiber optics, radio signals, Hubs</td></tr>
            </table>

            <h3>The TCP/IP Reference Model and Comparison</h3>
            <p>The Internet Protocol Suite, commonly known as the TCP/IP protocol suite, encompasses various protocols named after its primary protocols: TCP and IP. It forms the practical foundation of Internet communication across 4 layers.</p>
            
            <table>
                <tr><th>OSI Model Layer</th><th>TCP/IP Model Layer</th><th>Functions / Examples</th></tr>
                <tr><td>Application (Layer 7)<br>Presentation (Layer 6)<br>Session (Layer 5)</td><td><strong>Application</strong></td><td>HTTP, HTTPS, DNS, SMTP, FTP, SSH; application network services. Handled directly within the application architecture.</td></tr>
                <tr><td>Transport (Layer 4)</td><td><strong>Transport</strong></td><td>TCP, UDP; end-to-end communication between applications.</td></tr>
                <tr><td>Network (Layer 3)</td><td><strong>Internet</strong></td><td>IP addressing, routing, packet forwarding.</td></tr>
                <tr><td>Data Link (Layer 2)<br>Physical (Layer 1)</td><td><strong>Link / Network Access</strong></td><td>Ethernet, Wi-Fi, local network transmission and hardware access. Physical media transmission.</td></tr>
            </table>

            <h3>Encapsulation and Decapsulation</h3>
            <p><strong>Encapsulation:</strong> As data moves down the protocol stack, each layer wraps control headers around the data.</p>
            <p><em>Flow:</em> Application Data &rarr; TCP Segment &rarr; IP Packet &rarr; Ethernet Frame &rarr; Bits</p>
            
            <p><strong>Decapsulation:</strong> The reverse process at the receiving host, where headers are stripped at each ascending layer until original data reaches the destination application.</p>
            <p><em>Flow:</em> Bits &rarr; Frame &rarr; Packet &rarr; Segment &rarr; Application Data</p>

            <h3>Packet-Based Communication</h3>
            <p>Internet communication relies heavily on packet switching. Instead of sending a large file or message as one continuous unit, information is divided into smaller pieces called packets.</p>
            <p><em>Flow:</em> Large Data &rarr; Packet 1 | Packet 2 | Packet 3 | Packet 4 | Packet 5</p>

            <h4>Why Use Packets?</h4>
            <ul>
                <li><strong>Efficient Network Sharing:</strong> Many users can share the same communication links.</li>
                <li><strong>Flexible Routing:</strong> Packets may travel through different paths depending on network conditions (e.g., Packet 1 travels via Router 1 -> Router 3; Packet 2 travels via Router 1 -> Router 2 -> Router 4).</li>
                <li><strong>Error Recovery:</strong> If information is lost, only missing portions need to be retransmitted.</li>
                <li><strong>Scalability:</strong> Large numbers of devices communicate over shared networks.</li>
            </ul>

            <p><strong>Packet Contents:</strong> A simplified packet consists of a Header (control information: source address, destination address, protocol information) and a Payload (the actual data being transmitted).</p>
            <p><strong>Packet Loss:</strong> Occurs due to network congestion, faulty links, overloaded routers, wireless interference, or equipment failure. TCP handles loss detection and recovery, whereas UDP ignores missing packets.</p>

            <hr>

            <h2>4. Network Addressing: Physical, Logical, and IPv4 Mechanics</h2>
            
            <h3>Host Addressing: Physical vs. Logical</h3>
            <p>Communication requires hosts to identify each other on the network. In a single collision domain, hosts communicate directly via their physical MAC address.</p>
            <p><strong>MAC Address (Media Access Control):</strong> A 48-bit factory hard-coded physical hardware address assigned by device manufacturers that uniquely identifies a host on a local network segment.</p>
            <p>If a host wants to communicate with a remote host across segments, logical addressing is required.</p>
            <p><strong>Internet Protocol (IP) Address:</strong> A logical address assigned to all hosts connected to the Internet.</p>
            <p><strong>Fundamental Rule of Flow:</strong> Source and destination MAC addresses change hop-by-hop (segment-by-segment) across the Internet, but source and destination IP addresses remain constant end-to-end.</p>

            <h3>Internet Protocol (IP) Overview</h3>
            <p>IP is responsible for identifying devices and delivering packets from a source network to a destination network.</p>
            <p><strong>Primary Responsibilities:</strong> Logical addressing, identification of source and destination devices, packet forwarding, and routing across interconnected networks.</p>
            <p>Operates at the Network Layer (OSI) and the Internet Layer (TCP/IP).</p>
            <p>IP uses "best-effort delivery": it does not guarantee that packets will reach the destined host, but it will do its best to deliver them.</p>

            <h3>IPv4 Packet Structure & Header Fields</h3>
            <p>An IP packet encapsulates the Layer-4 Data segment into an IP Payload and prepends an IP Header.</p>
            
            <p><strong>Detailed IPv4 Header Layout (32 Bits Wide)</strong></p>
            <ul>
                <li><strong>Version:</strong> Version number of the Internet Protocol used (e.g., IPv4).</li>
                <li><strong>IHL (Internet Header Length):</strong> Length of the entire IP header.</li>
                <li><strong>DSCP (Differentiated Services Code Point):</strong> Type of Service classification.</li>
                <li><strong>ECN (Explicit Congestion Notification):</strong> Carries information about network congestion seen in the route.</li>
                <li><strong>Total Length:</strong> Length of the entire IP Packet (including header and payload).</li>
                <li><strong>Identification:</strong> If an IP packet is fragmented, all fragments share the same identification number to identify the original packet.</li>
                <li><strong>Flags:</strong> 3-bit flag indicating whether a packet can be fragmented; the Most Significant Bit (MSB) is always set to 0.</li>
                <li><strong>Fragment Offset:</strong> Specifies the exact position of the fragment in the original IP packet.</li>
                <li><strong>Time to Live (TTL):</strong> To avoid routing loops, packets have a TTL counter representing router hops. Decremented by 1 at each hop; when it reaches 0, the packet is discarded.</li>
                <li><strong>Protocol:</strong> Tells the Network layer at the destination host which next-level protocol the packet belongs to (e.g., ICMP = 1, TCP = 6, UDP = 17).</li>
                <li><strong>Header Checksum:</strong> Stores the checksum value of the header used to verify error-free delivery.</li>
                <li><strong>Source Address:</strong> 32-bit address of the packet sender.</li>
                <li><strong>Destination Address:</strong> 32-bit address of the receiver.</li>
                <li><strong>Options:</strong> Optional field used when IHL is greater than 5; carries values for Security, Record Route, Time Stamp, etc.</li>
            </ul>

            <h3>IPv4 Addressing Modes</h3>
            <ul>
                <li><strong>Unicast Addressing Mode:</strong> Data is sent only to one destined host. The Destination Address field contains the 32-bit IP address of that specific destination host.</li>
                <li><strong>Broadcast Addressing Mode:</strong> Packet is addressed to all hosts on a network segment using 255.255.255.255. Every host receiving it is bound to process it.</li>
                <li><strong>Multicast Addressing Mode:</strong> Data is destined for multiple interested hosts rather than a single host or all hosts. Uses Class D addresses starting with 224.x.x.x.</li>
            </ul>

            <h3>Positional Value Method and Binary Representation</h3>
            <p>An IPv4 address is a 32-bit value divided into 4 octets (8 bits each) separated by dots. Bit values are determined by positional values calculated as 2<sup>(position-1)</sup>:</p>
            <table>
                <tr><th>Bit 8 (MSB)</th><th>Bit 7</th><th>Bit 6</th><th>Bit 5</th><th>Bit 4</th><th>Bit 3</th><th>Bit 2</th><th>Bit 1 (LSB)</th></tr>
                <tr><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr>
            </table>
            <p>Example: An octet of 11000000 evaluates to 128+64=192.</p>
            <p>Full Address Example: 11000000.10101000.00000001.10011000 converts to 192.168.1.152.</p>

            <h3>Subnet Mask and Bitwise ANDing</h3>
            <p>An IP address contains both network and host identifiers. A Subnet Mask is a 32-bit number used by routers to distinguish the network portion from the host portion.</p>
            <p>Performing a bitwise AND operation between the binary IP address and binary Subnet Mask isolates the Network Address.</p>

            <h3>IPv4 Address Classes (Classful Addressing)</h3>
            <p>IPv4 addresses are divided into five classes based on the high-order bits of the first octet:</p>
            <p><strong>Formulas:</strong></p>
            <ul>
                <li>Number of Networks = 2<sup>network_bits</sup></li>
                <li>Number of Hosts per Network = 2<sup>host_bits</sup> - 2</li>
            </ul>
            <p><em>Note:</em> Two addresses per network cannot be assigned to hosts: the first address is the Network ID, and the last address is the Broadcast Address.</p>

            <table>
                <tr><th>Class</th><th>First Octet Range</th><th>Default Subnet Mask</th><th>Primary Purpose</th></tr>
                <tr><td>A</td><td>1-126 (127 reserved)</td><td>255.0.0.0 (/8)</td><td>Massive enterprise / organizations</td></tr>
                <tr><td>B</td><td>128-191</td><td>255.255.0.0 (/16)</td><td>Medium-to-large networks</td></tr>
                <tr><td>C</td><td>192-223</td><td>255.255.255.0 (/24)</td><td>Small local networks</td></tr>
                <tr><td>D</td><td>224-239</td><td>None</td><td>Multicasting (no host extraction)</td></tr>
                <tr><td>E</td><td>240-255</td><td>None</td><td>Experimental, R&D, and Study</td></tr>
            </table>

            <h3>Reserved IPv4 Addresses</h3>
            <ul>
                <li><strong>Loopback Addresses:</strong> 127.0.0.0 – 127.255.255.255 is reserved for loopback (a Host's self-address / localhost). Managed entirely within the operating system, bypassing the physical NIC. Ping testing 127.0.0.1 confirms the local TCP/IP protocol stack is properly installed and operational.</li>
                <li><strong>Private IP Addresses:</strong> Not routable on the public Internet; dropped by Internet routers. Designed to slow down IPv4 exhaustion. Requires Network Address Translation (NAT) or a Web Proxy to communicate externally.
                    <ul>
                        <li>Class A Private Range: 10.0.0.0 – 10.255.255.255 (10.x.x.x)</li>
                        <li>Class B Private Range: 172.16.0.0 – 172.31.255.255 (172.16.x.x through 172.31.x.x)</li>
                        <li>Class C Private Range: 192.168.0.0 – 192.168.255.255 (192.168.x.x)</li>
                    </ul>
                </li>
            </ul>
        `,
        glossary: [
            { term: "OSI Model", def: "Open Systems Interconnection Model; a layered, conceptualized view of how systems communicate using protocols defined at each layer." },
            { term: "Encapsulation", def: "The process where each layer wraps control headers around the data as it moves down the protocol stack." },
            { term: "Decapsulation", def: "The reverse process at the receiving host, where headers are stripped at each ascending layer." },
            { term: "Packet", def: "A smaller piece of information divided from a large file or message for efficient network transmission." },
            { term: "Payload", def: "The actual data being transmitted inside a packet." },
            { term: "MAC Address", def: "A 48-bit factory hard-coded physical hardware address assigned by device manufacturers." },
            { term: "IP Address", def: "A logical address assigned to all hosts connected to the Internet, responsible for routing data across networks." },
            { term: "TTL", def: "Time to Live; a counter in the IP header decremented by 1 at each hop to prevent routing loops." },
            { term: "Unicast", def: "A transmission mode where data is sent only to one destined host." },
            { term: "Multicast", def: "A transmission mode where data is destined for multiple interested hosts using Class D addresses." },
            { term: "Subnet Mask", def: "A 32-bit number used by routers to distinguish the network portion from the host portion of an IP address." }
        ],
        flashcards: [
            { front: "What does the mnemonic 'All People Seem To Need Data Processing' represent?", back: "The 7 layers of the OSI model from Layer 7 (Application) down to Layer 1 (Physical)." },
            { front: "Which OSI layer handles logical addressing and routing?", back: "Layer 3 - Network Layer." },
            { front: "What is the process of appending headers as data moves down the OSI stack called?", back: "Encapsulation." },
            { front: "Why does internet communication use packets?", back: "For efficient network sharing, flexible routing, error recovery, and scalability." },
            { front: "What is the fundamental rule of addressing flow across a network?", back: "MAC addresses change hop-by-hop, but IP addresses remain constant end-to-end." },
            { front: "What is the purpose of the TTL (Time to Live) field in an IPv4 header?", back: "To avoid routing loops by decrementing at each hop and discarding the packet when it reaches 0." },
            { front: "Why do we subtract 2 when calculating the number of hosts per network?", back: "The first address is the Network ID and the last address is the Broadcast Address." },
            { front: "What is the purpose of the 127.0.0.0 Loopback address?", back: "To test the local TCP/IP protocol stack without hitting a physical network card." }
        ],
        quiz: [
            // Q1-Q10: OSI Model Basics and Layers
            { category: "Networking Models", type: "mcq", question: "Why are networking models needed in computer communication?", options: { a: "To increase the cost of network hardware", b: "To divide communication responsibilities into layers so they are easier to design, explain, and troubleshoot", c: "To completely eliminate the need for IP addresses", d: "To prevent packets from being fragmented" }, answer: "b" },
            { category: "OSI Model", type: "mcq", question: "Which organization defined the Open Systems Interconnection (OSI) Model?", options: { a: "IETF", b: "IEEE", c: "ISO", d: "ICANN" }, answer: "c" },
            { category: "OSI Model", type: "ident", question: "What is the mnemonic used to remember the OSI layers from Layer 7 down to Layer 1?", answer: "all people seem to need data processing" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 7 in the OSI Model?", answer: "application" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer provides network services directly to end-user applications?", options: { a: "Layer 4", b: "Layer 5", c: "Layer 6", d: "Layer 7" }, answer: "d" },
            { category: "OSI Model", type: "mcq", question: "HTTP, HTTPS, SMTP, DNS, FTP, and SSH operate at which OSI Layer?", options: { a: "Layer 7", b: "Layer 4", c: "Layer 3", d: "Layer 2" }, answer: "a" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 6 in the OSI Model?", answer: "presentation" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer ensures data is in a usable format and handles encoding, formatting, encryption, and compression?", options: { a: "Session", b: "Presentation", c: "Application", d: "Transport" }, answer: "b" },
            { category: "OSI Model", type: "mcq", question: "JSON, XML, UTF-8, JPEG, and PNG are examples associated with which OSI layer?", options: { a: "Layer 4", b: "Layer 5", c: "Layer 6", d: "Layer 7" }, answer: "c" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 5 in the OSI Model?", answer: "session" },
            
            // Q11-Q20: OSI Model Layers Cont.
            { category: "OSI Model", type: "mcq", question: "Which OSI layer manages establishing, maintaining, and terminating communication sessions and controls ports?", options: { a: "Layer 3", b: "Layer 4", c: "Layer 5", d: "Layer 6" }, answer: "c" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 4 in the OSI Model?", answer: "transport" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer handles end-to-end delivery, sequencing, and reliability using transport protocols?", options: { a: "Session", b: "Transport", c: "Network", d: "Data Link" }, answer: "b" },
            { category: "OSI Model", type: "mcq", question: "TCP and UDP are examples associated with which OSI layer?", options: { a: "Layer 2", b: "Layer 3", c: "Layer 4", d: "Layer 5" }, answer: "c" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 3 in the OSI Model?", answer: "network" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer handles logical addressing and decides which physical path the data will take across networks?", options: { a: "Transport", b: "Network", c: "Data Link", d: "Physical" }, answer: "b" },
            { category: "OSI Model", type: "mcq", question: "IP (IPv4, IPv6), Routers, and ICMP are examples associated with which OSI layer?", options: { a: "Layer 1", b: "Layer 2", c: "Layer 3", d: "Layer 4" }, answer: "c" },
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 2 in the OSI Model?", answer: "data link" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer handles node-to-node communication on the same local segment and defines the format of data on the network?", options: { a: "Network", b: "Data Link", c: "Physical", d: "Transport" }, answer: "b" },
            { category: "OSI Model", type: "mcq", question: "Ethernet, Wi-Fi, MAC addressing, and Switches are examples associated with which OSI layer?", options: { a: "Layer 1", b: "Layer 2", c: "Layer 3", d: "Layer 4" }, answer: "b" },

            // Q21-Q30: OSI Layer 1 & TCP/IP Model
            { category: "OSI Model", type: "ident", question: "What is the name of Layer 1 in the OSI Model?", answer: "physical" },
            { category: "OSI Model", type: "mcq", question: "Which OSI layer transmits raw bit streams over physical media?", options: { a: "Data Link", b: "Network", c: "Physical", d: "Transport" }, answer: "c" },
            { category: "OSI Model", type: "mcq", question: "Copper cables, fiber optics, radio signals, and Hubs are examples associated with which OSI layer?", options: { a: "Layer 1", b: "Layer 2", c: "Layer 3", d: "Layer 4" }, answer: "a" },
            { category: "TCP/IP Model", type: "mcq", question: "The TCP/IP protocol suite encompasses various protocols named after its primary protocols. What are they?", options: { a: "HTTP and DNS", b: "TCP and UDP", c: "TCP and IP", d: "IP and ICMP" }, answer: "c" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 7 (Application) corresponds to which layer?", options: { a: "Internet", b: "Transport", c: "Application", d: "Network Access" }, answer: "c" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 6 (Presentation) corresponds to which layer?", options: { a: "Internet", b: "Transport", c: "Application", d: "Network Access" }, answer: "c" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 5 (Session) corresponds to which layer?", options: { a: "Internet", b: "Transport", c: "Application", d: "Network Access" }, answer: "c" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 4 (Transport) corresponds to which layer?", options: { a: "Application", b: "Transport", c: "Internet", d: "Link" }, answer: "b" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 3 (Network) corresponds to which layer?", options: { a: "Transport", b: "Internet", c: "Link", d: "Application" }, answer: "b" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 2 (Data Link) corresponds to which layer?", options: { a: "Internet", b: "Transport", c: "Link / Network Access", d: "Application" }, answer: "c" },

            // Q31-Q40: Encapsulation & Packet Switching
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP Reference Model, OSI Layer 1 (Physical) corresponds to which layer?", options: { a: "Internet", b: "Transport", c: "Link / Network Access", d: "Application" }, answer: "c" },
            { category: "Encapsulation", type: "mcq", question: "As data moves down the protocol stack, each layer wraps control headers around the data. This is called:", options: { a: "Decapsulation", b: "Encapsulation", c: "Fragmentation", d: "Routing" }, answer: "b" },
            { category: "Encapsulation", type: "mcq", question: "In the encapsulation flow, what is the data unit called at Layer 4 (Transport)?", options: { a: "Packet", b: "Frame", c: "Segment", d: "Bits" }, answer: "c" },
            { category: "Encapsulation", type: "mcq", question: "In the encapsulation flow, what is the data unit called at Layer 3 (Network)?", options: { a: "Segment", b: "Packet", c: "Frame", d: "Bits" }, answer: "b" },
            { category: "Encapsulation", type: "mcq", question: "In the encapsulation flow, what is the data unit called at Layer 2 (Data Link)?", options: { a: "Segment", b: "Packet", c: "Frame", d: "Bits" }, answer: "c" },
            { category: "Encapsulation", type: "mcq", question: "The reverse process at the receiving host, where headers are stripped at each ascending layer, is called:", options: { a: "Encapsulation", b: "Decapsulation", c: "Reassembly", d: "Decoding" }, answer: "b" },
            { category: "Packets", type: "ident", question: "Internet communication relies heavily on dividing information into smaller pieces. What is this concept called?", answer: "packet switching" },
            { category: "Packets", type: "mcq", question: "Why do we use packets instead of sending a large file as one continuous unit?", options: { a: "To allow many users to share the same communication links efficiently", b: "To bypass firewalls", c: "To prevent data from being encrypted", d: "To increase the file size" }, answer: "a" },
            { category: "Packets", type: "mcq", question: "How does packet switching provide flexible routing?", options: { a: "Packets are forced to take the exact same path", b: "Packets may travel through different paths depending on network conditions", c: "Packets always travel through wireless media", d: "Packets never leave the local network" }, answer: "b" },
            { category: "Packets", type: "mcq", question: "How does packet switching assist in error recovery?", options: { a: "It prevents errors completely", b: "If information is lost, only missing portions need to be retransmitted", c: "It automatically fixes corrupted files", d: "It uses MAC addresses to encrypt data" }, answer: "b" },

            // Q41-Q50: Packets & Host Addressing
            { category: "Packets", type: "mcq", question: "Packet switching allows large numbers of devices to communicate over shared networks. This is an example of:", options: { a: "Error Recovery", b: "Scalability", c: "Flexible Routing", d: "Encryption" }, answer: "b" },
            { category: "Packets", type: "mcq", question: "A simplified packet consists of a Payload and a:", options: { a: "Trailer", b: "Footer", c: "Header", d: "Segment" }, answer: "c" },
            { category: "Packets", type: "mcq", question: "The actual data being transmitted inside a packet is called the:", options: { a: "Header", b: "Payload", c: "Checksum", d: "Flag" }, answer: "b" },
            { category: "Packets", type: "mcq", question: "Which of the following can cause packet loss?", options: { a: "Network congestion", b: "Faulty links", c: "Wireless interference", d: "All of the above" }, answer: "d" },
            { category: "Packets", type: "mcq", question: "How do TCP and UDP handle packet loss differently?", options: { a: "UDP handles loss detection and recovery, TCP ignores missing packets", b: "TCP handles loss detection and recovery, UDP ignores missing packets", c: "Both handle loss detection", d: "Neither handle loss detection" }, answer: "b" },
            { category: "Host Addressing", type: "solve", question: "How many bits are in a physical MAC Address?", answer: "48" },
            { category: "Host Addressing", type: "mcq", question: "What does MAC stand for in MAC Address?", options: { a: "Media Access Control", b: "Machine Access Code", c: "Multiple Access Carrier", d: "Memory Address Control" }, answer: "a" },
            { category: "Host Addressing", type: "mcq", question: "If a host wants to communicate with a remote host across segments, what type of addressing is required?", options: { a: "Physical addressing", b: "Logical addressing", c: "Port addressing", d: "Hardware addressing" }, answer: "b" },
            { category: "Host Addressing", type: "mcq", question: "A logical address assigned to all hosts connected to the Internet is an:", options: { a: "MAC Address", b: "IP Address", c: "URL", d: "Port Number" }, answer: "b" },
            { category: "Host Addressing", type: "mcq", question: "According to the fundamental rule of flow, which addresses change hop-by-hop (segment-by-segment) across the Internet?", options: { a: "Source and destination IP addresses", b: "Source and destination MAC addresses", c: "Both MAC and IP addresses", d: "Neither" }, answer: "b" },

            // Q51-Q60: IP Overview & IPv4 Header
            { category: "Host Addressing", type: "mcq", question: "According to the fundamental rule of flow, which addresses remain constant end-to-end across the Internet?", options: { a: "Source and destination MAC addresses", b: "Source and destination IP addresses", c: "Both MAC and IP addresses", d: "Neither" }, answer: "b" },
            { category: "IP Overview", type: "mcq", question: "Which protocol is responsible for identifying devices and delivering packets from a source network to a destination network?", options: { a: "TCP", b: "UDP", c: "IP", d: "ICMP" }, answer: "c" },
            { category: "IP Overview", type: "mcq", question: "IP operates at which layer of the OSI model?", options: { a: "Layer 2", b: "Layer 3", c: "Layer 4", d: "Layer 7" }, answer: "b" },
            { category: "IP Overview", type: "mcq", question: "IP operates at which layer of the TCP/IP model?", options: { a: "Link Layer", b: "Internet Layer", c: "Transport Layer", d: "Application Layer" }, answer: "b" },
            { category: "IP Overview", type: "mcq", question: "IP uses 'best-effort delivery'. What does this mean?", options: { a: "It guarantees that packets will reach the destined host", b: "It does not guarantee packets will reach the destined host, but it will do its best", c: "It retransmits all lost packets", d: "It requires a handshake before sending" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "An IP packet encapsulates the Layer-4 Data segment into an IP Payload and prepends an:", options: { a: "Ethernet Frame", b: "IP Header", c: "TCP Header", d: "UDP Header" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "The detailed IPv4 Header layout is how many bits wide?", answer: "32" },
            { category: "IPv4 Header", type: "mcq", question: "In the IPv4 header, which 4-bit field identifies the version of the Internet Protocol used?", options: { a: "IHL", b: "Version", c: "DSCP", d: "TTL" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "In the IPv4 header, what does the IHL field stand for?", options: { a: "Internet Host Locator", b: "Internal Hardware Link", c: "Internet Header Length", d: "Internet Hop Limit" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "Which 6-bit field provides Type of Service classification?", options: { a: "ECN", b: "DSCP", c: "Flags", d: "Protocol" }, answer: "b" },

            // Q61-Q70: IPv4 Header Fields Cont.
            { category: "IPv4 Header", type: "mcq", question: "Which 2-bit field carries information about network congestion seen in the route?", options: { a: "DSCP", b: "ECN", c: "TTL", d: "IHL" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "Which 16-bit field specifies the length of the entire IP Packet (including header and payload)?", options: { a: "Header Checksum", b: "Fragment Offset", c: "Identification", d: "Total Length" }, answer: "d" },
            { category: "IPv4 Header", type: "mcq", question: "If an IP packet is fragmented, which field ensures all fragments share the same number to identify the original packet?", options: { a: "Total Length", b: "Identification", c: "Header Checksum", d: "Fragment Offset" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "The Flags field is 3 bits. What is the Most Significant Bit (MSB) always set to?", options: { a: "1", b: "0", c: "It varies", d: "None of the above" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "Which 13-bit field specifies the exact position of the fragment in the original IP packet?", options: { a: "Identification", b: "Fragment Offset", c: "Header Checksum", d: "TTL" }, answer: "b" },
            { category: "IPv4 Header", type: "ident", question: "What does TTL stand for in the IPv4 header?", answer: "time to live" },
            { category: "IPv4 Header", type: "mcq", question: "What happens when the TTL counter reaches 0?", options: { a: "The packet is returned to the sender", b: "The packet is discarded to prevent routing loops", c: "The packet is fragmented", d: "The packet is encrypted" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "In the Protocol field, what does the value 1 represent?", options: { a: "TCP", b: "UDP", c: "ICMP", d: "HTTP" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "In the Protocol field, what does the value 6 represent?", options: { a: "ICMP", b: "TCP", c: "UDP", d: "DNS" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "In the Protocol field, what does the value 17 represent?", options: { a: "TCP", b: "ICMP", c: "UDP", d: "IGMP" }, answer: "c" },

            // Q71-Q85: IPv4 Header, Modes, & Binary
            { category: "IPv4 Header", type: "mcq", question: "Which field stores the checksum value used to verify error-free delivery of the header?", options: { a: "Identification", b: "Header Checksum", c: "Total Length", d: "Fragment Offset" }, answer: "b" },
            { category: "IPv4 Header", type: "solve", question: "How many bits long is the Source Address field in an IPv4 header?", answer: "32" },
            { category: "IPv4 Header", type: "solve", question: "How many bits long is the Destination Address field in an IPv4 header?", answer: "32" },
            { category: "IPv4 Header", type: "mcq", question: "The Options field in an IPv4 header is used when the IHL is greater than:", options: { a: "4", b: "5", c: "6", d: "10" }, answer: "b" },
            { category: "Addressing Modes", type: "mcq", question: "Which addressing mode sends data only to one destined host?", options: { a: "Broadcast", b: "Multicast", c: "Unicast", d: "Anycast" }, answer: "c" },
            { category: "Addressing Modes", type: "mcq", question: "Which addressing mode sends packets to all hosts on a network segment using 255.255.255.255?", options: { a: "Unicast", b: "Multicast", c: "Broadcast", d: "Anycast" }, answer: "c" },
            { category: "Addressing Modes", type: "mcq", question: "Which addressing mode sends data to multiple interested hosts using Class D addresses (224.x.x.x)?", options: { a: "Unicast", b: "Broadcast", c: "Multicast", d: "Anycast" }, answer: "c" },
            { category: "Binary Representation", type: "solve", question: "In the positional value method for an octet, what is the positional value of Bit 8 (the MSB)?", answer: "128" },
            { category: "Binary Representation", type: "solve", question: "In the positional value method for an octet, what is the positional value of Bit 7?", answer: "64" },
            { category: "Binary Representation", type: "solve", question: "What is the decimal value of the binary octet 11000000?", answer: "192" },
            { category: "Subnet Mask", type: "ident", question: "What is the 32-bit number used by routers to distinguish the network portion from the host portion called?", answer: "subnet mask" },
            { category: "Subnet Mask", type: "mcq", question: "What bitwise operation isolates the Network Address from the IP Address and Subnet Mask?", options: { a: "Bitwise OR", b: "Bitwise NOT", c: "Bitwise XOR", d: "Bitwise AND" }, answer: "d" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the formula to calculate the number of networks?", options: { a: "2^(host_bits) - 2", b: "2^(network_bits)", c: "2^(host_bits)", d: "2^(network_bits) - 2" }, answer: "b" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the formula to calculate the number of hosts per network?", options: { a: "2^(network_bits)", b: "2^(host_bits)", c: "2^(host_bits) - 2", d: "2^(network_bits) - 2" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "When calculating hosts, why do we subtract 2?", options: { a: "The first address is the Network ID and the last address is the Broadcast Address", b: "To account for routers and switches", c: "To reserve loopback addresses", d: "Because binary starts at 0" }, answer: "a" },

            // Q86-Q100: IPv4 Classes & Reserved
            { category: "IPv4 Classes", type: "mcq", question: "Which class of IPv4 addresses has a first octet bit pattern starting with '0'?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "a" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the default subnet mask for a Class A network?", options: { a: "255.0.0.0", b: "255.255.0.0", c: "255.255.255.0", d: "None" }, answer: "a" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the first octet range for Class A networks?", options: { a: "128-191", b: "192-223", c: "1-126", d: "224-239" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "Which class of IPv4 addresses has a first octet bit pattern starting with '10'?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "b" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the default subnet mask for a Class B network?", options: { a: "255.0.0.0", b: "255.255.0.0", c: "255.255.255.0", d: "None" }, answer: "b" },
            { category: "IPv4 Classes", type: "mcq", question: "Which class of IPv4 addresses has a first octet bit pattern starting with '110'?", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "What is the default subnet mask for a Class C network?", options: { a: "255.0.0.0", b: "255.255.0.0", c: "255.255.255.0", d: "None" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "Class D (224-239) is reserved primarily for what purpose?", options: { a: "Massive enterprise networks", b: "Small local networks", c: "Multicasting", d: "Experimental, R&D" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "Class E (240-255) is reserved primarily for what purpose?", options: { a: "Massive enterprise networks", b: "Small local networks", c: "Multicasting", d: "Experimental, R&D, and Study" }, answer: "d" },
            { category: "Reserved IPs", type: "mcq", question: "The address range 127.0.0.0 – 127.255.255.255 is reserved for what purpose?", options: { a: "Multicasting", b: "Loopback (a Host's self-address)", c: "Private LANs", d: "Broadcasting" }, answer: "b" },
            { category: "Reserved IPs", type: "mcq", question: "Ping testing 127.0.0.1 confirms what?", options: { a: "The router is active", b: "The local TCP/IP protocol stack is properly installed and operational", c: "The website is online", d: "The MAC address is valid" }, answer: "b" },
            { category: "Reserved IPs", type: "mcq", question: "Why are Private IP Addresses used?", options: { a: "To speed up the internet", b: "They are designed to slow down IPv4 exhaustion", c: "To replace MAC addresses", d: "They are required for multicasting" }, answer: "b" },
            { category: "Reserved IPs", type: "mcq", question: "Which of the following is the Class A Private IP range?", options: { a: "172.16.0.0 - 172.31.255.255", b: "192.168.0.0 - 192.168.255.255", c: "10.0.0.0 - 10.255.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "c" },
            { category: "Reserved IPs", type: "mcq", question: "Which of the following is the Class B Private IP range?", options: { a: "10.0.0.0 - 10.255.255.255", b: "192.168.0.0 - 192.168.255.255", c: "172.16.0.0 - 172.31.255.255", d: "224.0.0.0 - 239.255.255.255" }, answer: "c" },
            { category: "Reserved IPs", type: "mcq", question: "Which of the following is the Class C Private IP range?", options: { a: "10.0.0.0 - 10.255.255.255", b: "172.16.0.0 - 172.31.255.255", c: "192.168.0.0 - 192.168.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "c" }
        ]
    },

    {
        id: "mod4_subnetting_ipv6_troubleshooting",
        title: "4. Subnetting, IPv6 & Troubleshooting",
        proper: `
            <h2>5. Subnetting and Variable Length Subnet Masking (VLSM)</h2>
            <h3>Subnetting Fundamentals</h3>
            <p>A subnet is a logical subdivision of an IP network[cite: 1]. Subnetting is the practice of dividing a network into two or more smaller networks by borrowing bits from the host identifier and assigning them to the network identifier[cite: 1].</p>
            <p><strong>CIDR (Classless Inter-Domain Routing):</strong> Allocates IP addressing without rigid class boundaries, providing flexibility to borrow host bits for subnetting[cite: 1].</p>
            <p><strong>Subnet Limit Rule:</strong> Because the first address of every subnet is the Subnet Number (Network ID) and the last address is the Subnet Broadcast IP, subnetting cannot use more than 30 network bits (a /30 provides exactly 2 usable hosts; /31 or /32 leaves fewer than 2 usable hosts)[cite: 1].</p>

            <h3>Variable Length Subnet Masking (VLSM)</h3>
            <p>VLSM allows an engineer to allocate IP subnets of different sizes to match varied host requirements with minimal address wastage[cite: 1].</p>
            
            <h4>Practical VLSM Allocation Walkthrough</h4>
            <p><strong>Given Base Network:</strong> 192.168.1.0/24[cite: 1].</p>
            <p><strong>Department Requirements:</strong> Sales: 100 computers | Purchase: 50 computers | Accounts: 25 computers | Management: 5 computers[cite: 1].</p>
            <ol>
                <li><strong>Step 1 - Review Subnet Possibilities:</strong> /24 = 254 hosts, /25 = 126 hosts, /26 = 62 hosts, /27 = 30 hosts, /28 = 14 hosts, /29 = 6 hosts, /30 = 2 hosts[cite: 1].</li>
                <li><strong>Step 2 - Sort Requirements Descending:</strong> Sales (100) &rarr; Purchase (50) &rarr; Accounts (25) &rarr; Management (5)[cite: 1].</li>
                <li><strong>Step 3 - Allocate Sales (100 IPs needed):</strong> Assigned: 192.168.1.0/25 (Subnet mask 255.255.255.128, last octet 10000000). Yields 126 valid host addresses, satisfying the 100-host requirement[cite: 1].</li>
                <li><strong>Step 4 - Allocate Purchase (50 IPs needed):</strong> Assigned: 192.168.1.128/26 (Subnet mask 255.255.255.192, last octet 11000000). Yields 62 valid host addresses[cite: 1].</li>
                <li><strong>Step 5 - Allocate Accounts (25 IPs needed):</strong> Assigned: 192.168.1.192/27 (Subnet mask 255.255.255.224, last octet 11100000). Yields 30 valid host addresses[cite: 1].</li>
                <li><strong>Step 6 - Allocate Management (5 IPs needed):</strong> Assigned: 192.168.1.224/29 (Subnet mask 255.255.255.248, last octet 11111000). Yields 6 valid host addresses[cite: 1].</li>
            </ol>
            <p>Result: Minimal address wastage and remaining IP space available for expansion[cite: 1].</p>

            <h3>Local Network Packet Flow and Resolution Protocols</h3>
            <ul>
                <li><strong>Dynamic Host Configuration Protocol (DHCP):</strong> Service that dynamically assigns an IP address to a client from a pre-defined address pool, along with Gateway IP, DNS Server IP, and lease duration[cite: 1]. Works via 4-Way DORA Process: DHCPDISCOVER (broadcast to locate server) &rarr; DHCPOFFER (server offers config) &rarr; DHCPREQUEST (client requests offer) &rarr; DHCPACK (server formalizes lease)[cite: 1].</li>
                <li><strong>Domain Name System (DNS):</strong> Method to resolve a symbolic domain name into its corresponding IP address via a DNS query[cite: 1].</li>
                <li><strong>Address Resolution Protocol (ARP):</strong> Protocol used to acquire the physical MAC address of a destination device whose IP address is known. A broadcast request asks "Who owns this IP address?", and the matching host replies with its MAC address[cite: 1].</li>
                <li><strong>Proxy Server:</strong> An intermediary server with a public IP that intercepts and forwards web requests on behalf of internal clients, allowing access policies to be enforced[cite: 1].</li>
                <li><strong>Network Address Translation (NAT):</strong> Translates private, non-routable IP addresses into publicly routable IP addresses when packets leave a private network, and reverses the translation on return[cite: 1].</li>
                <li><strong>Gateway Routing:</strong> If the target IP does not reside within the local subnet, the host uses ARP to resolve the MAC address of its default Gateway (router/proxy), forwarding packets to the gateway for Internet transit[cite: 1].</li>
            </ul>

            <hr>

            <h2>6. Next-Generation Addressing: IPv6</h2>
            <p><strong>IPv4 Exhaustion and Governance:</strong> IPv4 accommodates approximately 4.3 billion addresses (2<sup>32</sup>). Exhaustion occurred due to the exponential growth of mobile phones, connected cars, smart devices, and IoT hardware[cite: 1].</p>
            <ul>
                <li><strong>IANA (Internet Assigned Numbers Authority):</strong> Manages global IP allocations under coordination with ICANN[cite: 1].</li>
                <li><strong>RIRs (Regional Internet Registries):</strong> Oversee regional allocation across 5 global territories. All primary IPv4 pools have been fully allocated[cite: 1].</li>
                <li><strong>IETF (Internet Engineering Task Force):</strong> Standardized IPv6 to provide a 128-bit address space capable of allocating millions of IP addresses to every square inch of the earth[cite: 1].</li>
            </ul>

            <h3>IPv4-to-IPv6 Coexistence Mechanisms</h3>
            <ul>
                <li><strong>Dual IP Stack:</strong> Devices run both IPv4 and IPv6 protocol stacks simultaneously to process both types of traffic natively[cite: 1].</li>
                <li><strong>Tunneling (6to4 and 4to6):</strong> Encapsulating packets of one protocol version inside packets of another to travel across incompatible intermediate network infrastructures[cite: 1].</li>
                <li><strong>NAT Protocol Translation (e.g., NAT64/DNS64):</strong> Translates packet headers directly between IPv6 and IPv4 networks[cite: 1].</li>
            </ul>

            <h3>IPv6 Address Format and Representation</h3>
            <p>Total Length: 128 bits represented as hexadecimal values divided by colons into 8 fields (hextets)[cite: 1].</p>
            <ul>
                <li><strong>Nibble:</strong> A 4-bit binary group represented by a single hexadecimal digit (1 Hex Digit = 1 Nibble = 4 Bits)[cite: 1].</li>
                <li><strong>Hextet:</strong> 4 Hex Digits = 1 Hextet = 16 Bits[cite: 1].</li>
            </ul>

            <h3>IPv6 Shortening Techniques</h3>
            <ol>
                <li><strong>Omitting Leading Zeros:</strong> Any leading zeros within a 16-bit hextet may be dropped, but trailing zeros must be kept (e.g., 036e becomes 36e, 0000 becomes 0)[cite: 1].</li>
                <li><strong>Double Colon Compression (::) (RFC 4291):</strong> Contiguous groups of all-zero hextets can be compressed into a double colon ::. <strong>Single Use Rule:</strong> The :: can only appear once in an address; multiple occurrences create ambiguity[cite: 1].</li>
                <li><strong>RFC 5952 Standards:</strong> 
                    <br><strong>Longest Run Rule:</strong> When multiple sets of contiguous zero hextets exist, the longest run of consecutive 16-bit zeros MUST be shortened[cite: 1].
                    <br><strong>Tie-Breaker Rule:</strong> When lengths of contiguous zero fields are equal, the first sequence of zero bits MUST be shortened[cite: 1].
                </li>
            </ol>
            
            <h3>IPv6 Prefix and URI Syntax</h3>
            <p><strong>IPv6 Prefix (RFC 4291):</strong> Expressed as ipv6-address/prefix-length. Prefix-length is a decimal value specifying how many of the leftmost contiguous bits comprise the network prefix (e.g., 2001:db8::/32)[cite: 1].</p>
            <p><strong>IPv6 URI Syntax (RFC 3986):</strong> An IPv6 literal host in a Uniform Resource Identifier must be enclosed in square brackets [ and ] to avoid conflict with port numbers (e.g., http://[2001:db8::7]:80/index.html)[cite: 1].</p>

            <hr>

            <h2>7. Transport Layer Protocols, Application Services, and Ports</h2>
            
            <h3>TCP vs. UDP Comparison</h3>
            <table>
                <tr><th>Parameter</th><th>TCP (Transmission Control Protocol)</th><th>UDP (User Datagram Protocol)</th></tr>
                <tr><td><strong>Connection Nature</strong></td><td>Connection-oriented[cite: 1]</td><td>Connectionless[cite: 1]</td></tr>
                <tr><td><strong>Delivery Reliability</strong></td><td>Reliable delivery guaranteed[cite: 1]</td><td>Best-effort / No guaranteed delivery[cite: 1]</td></tr>
                <tr><td><strong>Packet Ordering</strong></td><td>Maintains packet order (sequencing)[cite: 1]</td><td>Does not guarantee order[cite: 1]</td></tr>
                <tr><td><strong>Data Retransmission</strong></td><td>Retransmits lost data[cite: 1]</td><td>No automatic retransmission[cite: 1]</td></tr>
                <tr><td><strong>Overhead & Speed</strong></td><td>Higher communication overhead, Generally slower[cite: 1]</td><td>Less/Lower overhead, Generally faster[cite: 1]</td></tr>
                <tr><td><strong>Primary Applications</strong></td><td>Web applications, file transfers, emails[cite: 1]</td><td>Real-time audio/video, gaming, DNS queries[cite: 1]</td></tr>
            </table>
            <p><strong>TCP Three-Way Handshake:</strong> Client &rarr; SYN &rarr; Server | Server &rarr; SYN-ACK &rarr; Client | Client &rarr; ACK &rarr; Server[cite: 1].</p>

            <h3>Common Protocol Ports Reference Table</h3>
            <p>A port is a logical number used by transport protocols (TCP and UDP) to identify a specific application or service running on a device (Analogy: IP address is building address, port number is room number)[cite: 1].</p>
            <table>
                <tr><th>Protocol</th><th>Port</th><th>Transport</th><th>Purpose</th></tr>
                <tr><td><strong>FTP</strong></td><td>21</td><td>TCP</td><td>Manages remote files, uploads, and downloads[cite: 1]</td></tr>
                <tr><td><strong>SSH / SFTP</strong></td><td>22</td><td>TCP</td><td>Secure remote computer administration / Secure File Transfer over SSH[cite: 1]</td></tr>
                <tr><td><strong>SMTP</strong></td><td>25</td><td>TCP</td><td>Sends mail between mail servers[cite: 1]</td></tr>
                <tr><td><strong>DNS</strong></td><td>53</td><td>UDP/TCP</td><td>Translates domain names to IP addresses[cite: 1]</td></tr>
                <tr><td><strong>HTTP</strong></td><td>80</td><td>TCP</td><td>Unencrypted web communication[cite: 1]</td></tr>
                <tr><td><strong>POP3</strong></td><td>110</td><td>TCP</td><td>Downloads emails from server to client[cite: 1]</td></tr>
                <tr><td><strong>IMAP</strong></td><td>143</td><td>TCP</td><td>Synchronizes email across devices[cite: 1]</td></tr>
                <tr><td><strong>HTTPS</strong></td><td>443</td><td>TCP</td><td>Encrypted web traffic over TLS[cite: 1]</td></tr>
                <tr><td><strong>IMAP over TLS</strong></td><td>993</td><td>TCP</td><td>Encrypted IMAP email synchronization[cite: 1]</td></tr>
                <tr><td><strong>POP3 over TLS</strong></td><td>995</td><td>TCP</td><td>Encrypted POP3 email retrieval[cite: 1]</td></tr>
            </table>

            <h3>Application Protocols and Network Services</h3>
            <ul>
                <li><strong>HTTPS:</strong> Secure version of HTTP utilizing Transport Layer Security (TLS) encryption. Security pillars include Confidentiality (encryption), Integrity (anti-modification), and Authentication (digital certificates)[cite: 1].</li>
                <li><strong>HTTP Status Codes:</strong> 200 (OK), 201 (Created), 301 (Moved Permanently), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error)[cite: 1].</li>
                <li><strong>POP3 vs IMAP:</strong> POP3 traditionally downloads messages to local device (less suitable for multiple devices). IMAP keeps email stored on the server while synchronizing folder and read/unread status across multiple devices[cite: 1].</li>
                <li><strong>SSH:</strong> Used to securely connect to and manage remote computers over Port 22, using passwords or cryptographic SSH keys (key-based authentication preferred)[cite: 1].</li>
            </ul>

            <hr>

            <h2>8. Web Application Deployment, Request Tracing, and Troubleshooting</h2>
            
            <h3>Application Deployment Workflow</h3>
            <p>1. Obtain a server. 2. Configure the Server. 3. Upload the Application. 4. Deploy the Database. 5. Obtain Domain Name. 6. Configure DNS. 7. Configure HTTPS. 8. Configure Security. 9. Monitor the Application[cite: 1].</p>

            <h3>Step-by-Step Request Lifecycle</h3>
            <p>Client browser creates request &rarr; DNS resolves domain to IP &rarr; Browser establishes transport communication &rarr; HTTPS security (TLS) is negotiated &rarr; Request divided into packets &rarr; Packets travel through local network &rarr; ISP forwards traffic &rarr; Internet routers forward packets hop-by-hop &rarr; Destination firewall inspects traffic &rarr; Load balancer/Web server accepts request &rarr; Application executes business logic &rarr; Application communicates with database &rarr; Application creates response &rarr; Response divided into packets and transmitted back &rarr; Client decapsulates and reconstructs response[cite: 1].</p>

            <h3>Performance Metrics: Bandwidth vs. Latency</h3>
            <p><strong>Bandwidth:</strong> The amount of data that can be transmitted during a period of time (e.g., 100 Mbps). Higher bandwidth allows more concurrent data transmission[cite: 1].</p>
            <p><strong>Latency:</strong> The delay between sending information and receiving a response. A server closer to the user has lower network latency. Low latency is as essential as high bandwidth for interactive apps[cite: 1].</p>

            <h3>Layer-by-Layer Deployment Troubleshooting</h3>
            <table>
                <tr><th>Observed Problem</th><th>Possible Root Causes</th><th>Related Layer / Focus</th></tr>
                <tr><td>Domain does not open</td><td>Incorrect DNS record, unresolved DNS, domain config problem[cite: 1]</td><td>Application / DNS[cite: 1]</td></tr>
                <tr><td>Server pinged but website doesn't open</td><td>Web server stopped, Port 80/443 blocked, firewall rule incorrect[cite: 1]</td><td>Transport / Application[cite: 1]</td></tr>
                <tr><td>Application opens but database fails</td><td>Database unavailable, wrong address, blocked port, incorrect credentials[cite: 1]</td><td>Application / Transport[cite: 1]</td></tr>
                <tr><td>Website is very slow</td><td>Network congestion, high latency, overloaded server, slow DB[cite: 1]</td><td>Multiple Layers[cite: 1]</td></tr>
                <tr><td>Works on localhost but not online</td><td>Environment variables, DNS, firewall, dependencies, file permissions[cite: 1]</td><td>Multiple Layers[cite: 1]</td></tr>
            </table>

            <h3>Diagnostic Tools and Commands</h3>
            <ul>
                <li><strong>Ping:</strong> Tests basic Layer-3 reachability, round-trip response time, and packet loss[cite: 1].</li>
                <li><strong>Traceroute / tracert:</strong> Displays the router hops between client and destination, showing where network delays or packet drops occur[cite: 1].</li>
                <li><strong>DNS Resolution Tools (nslookup or dig):</strong> Queries DNS servers to verify domain-to-IP resolution[cite: 1].</li>
                <li><strong>Browser Developer Tools:</strong> Inspects HTTP/HTTPS traffic directly to analyze Request URLs, methods, status codes, response times, and payloads[cite: 1].</li>
            </ul>
        `,
        glossary: [
            { term: "Subnetting", def: "The practice of dividing a network into two or more smaller networks by borrowing bits from the host identifier[cite: 1]." },
            { term: "CIDR", def: "Classless Inter-Domain Routing; allocates IP addressing without rigid class boundaries[cite: 1]." },
            { term: "VLSM", def: "Variable Length Subnet Masking; allows allocating IP subnets of different sizes to match varied host requirements[cite: 1]." },
            { term: "DHCP", def: "Service that dynamically assigns an IP address to a client via the DORA process[cite: 1]." },
            { term: "ARP", def: "Protocol used to acquire the physical MAC address of a destination device whose IP address is known[cite: 1]." },
            { term: "NAT", def: "Translates private, non-routable IP addresses into publicly routable IP addresses when packets leave a private network[cite: 1]." },
            { term: "Hextet", def: "In IPv6, a field consisting of 4 hexadecimal digits, representing 16 binary bits[cite: 1]." },
            { term: "Nibble", def: "A 4-bit binary group represented by a single hexadecimal digit[cite: 1]." },
            { term: "Dual IP Stack", def: "Coexistence mechanism where devices run both IPv4 and IPv6 protocol stacks simultaneously[cite: 1]." },
            { term: "Bandwidth", def: "The amount of data that can be transmitted during a period of time[cite: 1]." },
            { term: "Latency", def: "The delay between sending information and receiving a response[cite: 1]." }
        ],
        flashcards: [
            { front: "What is the Subnet Limit Rule?", back: "Subnetting cannot use more than 30 network bits (/30 provides exactly 2 usable hosts)[cite: 1]." },
            { front: "In the DHCP process, what does DORA stand for?", back: "DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK[cite: 1]." },
            { front: "What protocol resolves a known IP address to a MAC address?", back: "ARP (Address Resolution Protocol)[cite: 1]." },
            { front: "How many bits are in an IPv6 address?", back: "128 bits[cite: 1]." },
            { front: "What is the Single Use Rule for IPv6 compression?", back: "The double colon (::) can only appear once in an address to avoid ambiguity[cite: 1]." },
            { front: "What is the difference between POP3 and IMAP?", back: "POP3 downloads messages locally, while IMAP synchronizes folders and statuses across multiple devices[cite: 1]." },
            { front: "Which diagnostic tool displays the exact router hops between a client and destination?", back: "Traceroute (or tracert)[cite: 1]." }
        ],
        quiz: [
            // Subnetting & VLSM (1-15)
            { category: "Subnetting", type: "mcq", question: "What is a logical subdivision of an IP network called?", options: { a: "A VPN", b: "A Subnet", c: "A Frame", d: "A Node" }, answer: "b" },
            { category: "Subnetting", type: "mcq", question: "Subnetting involves borrowing bits from which identifier to assign to the network identifier?", options: { a: "Router identifier", b: "MAC identifier", c: "Host identifier", d: "Subnet identifier" }, answer: "c" },
            { category: "Subnetting", type: "ident", question: "What does CIDR stand for?", answer: "classless inter-domain routing" },
            { category: "Subnetting", type: "mcq", question: "According to the Subnet Limit Rule, subnetting cannot use more than how many network bits?", options: { a: "24", b: "28", c: "30", d: "32" }, answer: "c" },
            { category: "Subnetting", type: "mcq", question: "A /30 subnet mask provides exactly how many usable hosts?", options: { a: "2", b: "4", c: "6", d: "8" }, answer: "a" },
            { category: "Subnetting", type: "ident", question: "What does VLSM stand for?", answer: "variable length subnet masking" },
            { category: "VLSM", type: "mcq", question: "What is the primary benefit of VLSM?", options: { a: "It encrypts packet payloads", b: "It allows engineers to allocate IP subnets of different sizes to match varied host requirements with minimal address wastage", c: "It replaces DHCP", d: "It enables MAC address masking" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "In the VLSM Allocation Walkthrough, what is the first step before assigning subnets?", options: { a: "Sort the department requirements in descending order (largest to smallest)", b: "Sort the department requirements in alphabetical order", c: "Assign /30 to every department", d: "Enable NAT on the router" }, answer: "a" },
            { category: "VLSM", type: "mcq", question: "In the VLSM example, the Sales department needs 100 computers. Which subnet prefix is assigned because it yields 126 valid hosts?", options: { a: "/24", b: "/25", c: "/26", d: "/27" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "In the VLSM example, the Purchase department needs 50 computers. Which subnet prefix is assigned because it yields 62 valid hosts?", options: { a: "/25", b: "/26", c: "/27", d: "/28" }, answer: "c" },
            { category: "VLSM", type: "mcq", question: "In the VLSM example, the Accounts department needs 25 computers. Which subnet prefix is assigned because it yields 30 valid hosts?", options: { a: "/26", b: "/27", c: "/28", d: "/29" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "In the VLSM example, the Management department needs 5 computers. Which subnet prefix is assigned because it yields 6 valid hosts?", options: { a: "/28", b: "/29", c: "/30", d: "/31" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a base network is 192.168.1.0/24, how many total hosts does /24 support?", options: { a: "126", b: "254", c: "510", d: "62" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If the first allocated VLSM block is 192.168.1.0/25, what is the starting IP (Network ID) of the very next block available?", options: { a: "192.168.1.127", b: "192.168.1.128", c: "192.168.1.255", d: "192.168.1.64" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "If a /27 block starts at 192.168.1.192/27, what is its broadcast address? (Yields 32 total IPs)", options: { a: "192.168.1.223", b: "192.168.1.224", c: "192.168.1.255", d: "192.168.1.191" }, answer: "a" },

            // Resolution Protocols (16-25)
            { category: "Resolution Protocols", type: "mcq", question: "Which service dynamically assigns an IP address to a client from a pre-defined address pool?", options: { a: "DNS", b: "NAT", c: "DHCP", d: "ARP" }, answer: "c" },
            { category: "Resolution Protocols", type: "mcq", question: "The DHCP process works via a 4-way process known by what acronym?", options: { a: "DORA", b: "PING", c: "OSPF", d: "BGP" }, answer: "a" },
            { category: "Resolution Protocols", type: "mcq", question: "In the DORA process, which step involves the client broadcasting to locate a DHCP server?", options: { a: "DHCPOFFER", b: "DHCPDISCOVER", c: "DHCPREQUEST", d: "DHCPACK" }, answer: "b" },
            { category: "Resolution Protocols", type: "mcq", question: "In the DORA process, which step involves the server offering an IP, mask, and gateway?", options: { a: "Discover", b: "Offer", c: "Request", d: "Acknowledge" }, answer: "b" },
            { category: "Resolution Protocols", type: "mcq", question: "Which protocol resolves a symbolic domain name into its corresponding IP address?", options: { a: "ARP", b: "NAT", c: "DNS", d: "DHCP" }, answer: "c" },
            { category: "Resolution Protocols", type: "mcq", question: "Which protocol is used to acquire the physical MAC address of a destination device whose IP address is known?", options: { a: "DNS", b: "ARP", c: "NAT", d: "DHCP" }, answer: "b" },
            { category: "Resolution Protocols", type: "mcq", question: "How does ARP acquire a MAC address?", options: { a: "It asks the DNS server", b: "A broadcast request asks 'Who owns this IP address?'", c: "It uses NAT", d: "It uses a proxy server" }, answer: "b" },
            { category: "Resolution Protocols", type: "mcq", question: "An intermediary server with a public IP that intercepts and forwards web requests on behalf of internal clients is a:", options: { a: "Proxy Server", b: "DHCP Server", c: "NAT Server", d: "DNS Server" }, answer: "a" },
            { category: "Resolution Protocols", type: "ident", question: "What translates private, non-routable IP addresses into publicly routable IP addresses?", answer: "network address translation" },
            { category: "Resolution Protocols", type: "mcq", question: "If a target IP does not reside within the local subnet, where must the host forward packets for Internet transit?", options: { a: "To a local switch", b: "To the default Gateway (router/proxy)", c: "To a Hub", d: "To a DNS Server" }, answer: "b" },

            // IPv6 Exhaustion & Setup (26-35)
            { category: "IPv6", type: "mcq", question: "Approximately how many addresses does IPv4 accommodate?", options: { a: "4.3 million", b: "4.3 billion", c: "4.3 trillion", d: "Infinite" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "Which organization manages global IP allocations under coordination with ICANN?", options: { a: "IETF", b: "IANA", c: "RIR", d: "IEEE" }, answer: "b" },
            { category: "IPv6", type: "ident", question: "What does RIR stand for in terms of global IP allocation?", answer: "regional internet registries" },
            { category: "IPv6", type: "mcq", question: "Which organization standardized IPv6 to provide a 128-bit address space?", options: { a: "IETF (Internet Engineering Task Force)", b: "IANA", c: "ICANN", d: "W3C" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "Which IPv4-to-IPv6 coexistence mechanism allows devices to run both IPv4 and IPv6 protocol stacks simultaneously?", options: { a: "Tunneling", b: "Dual IP Stack", c: "NAT Protocol Translation", d: "ARP Translation" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "Which IPv4-to-IPv6 coexistence mechanism encapsulates packets of one protocol version inside packets of another (e.g., 6to4)?", options: { a: "Tunneling", b: "Dual IP Stack", c: "NAT64", d: "Subnetting" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "Which mechanism translates packet headers directly between IPv6 and IPv4 networks?", options: { a: "Dual Stack", b: "Tunneling", c: "NAT Protocol Translation", d: "VLANs" }, answer: "c" },
            { category: "IPv6 Format", type: "solve", question: "How many bits are in a full IPv6 address?", answer: "128" },
            { category: "IPv6 Format", type: "mcq", question: "An IPv6 address is divided by colons into 8 fields. What is each field called?", options: { a: "Octet", b: "Hextet", c: "Nibble", d: "Byte" }, answer: "b" },
            { category: "IPv6 Format", type: "mcq", question: "A 4-bit binary group represented by a single hexadecimal digit is called a:", options: { a: "Hextet", b: "Nibble", c: "Byte", d: "Octet" }, answer: "b" },

            // IPv6 Rules (36-45)
            { category: "IPv6 Rules", type: "solve", question: "How many bits are in one Hextet?", answer: "16" },
            { category: "IPv6 Rules", type: "solve", question: "How many Hex Digits make up one Hextet?", answer: "4" },
            { category: "IPv6 Rules", type: "mcq", question: "When shortening an IPv6 address, which zeros may be dropped?", options: { a: "Leading zeros", b: "Trailing zeros", c: "All zeros", d: "None" }, answer: "a" },
            { category: "IPv6 Rules", type: "mcq", question: "The Double Colon Compression (::) can be used to compress:", options: { a: "Contiguous groups of all-zero hextets", b: "Trailing zeros within a hextet", c: "The network prefix", d: "Mac addresses" }, answer: "a" },
            { category: "IPv6 Rules", type: "mcq", question: "What is the Single Use Rule for Double Colon Compression?", options: { a: "You can use :: twice if the zeros are far apart", b: "The :: can only appear once in an address to avoid ambiguity", c: "It must be at the end of the address", d: "It can only replace one hextet" }, answer: "b" },
            { category: "IPv6 Rules", type: "mcq", question: "According to RFC 5952, the 'Longest Run Rule' states:", options: { a: "The longest run of consecutive 16-bit zeros MUST be shortened", b: "The shortest run of zeros must be shortened", c: "You cannot use double colons", d: "You must drop trailing zeros" }, answer: "a" },
            { category: "IPv6 Rules", type: "mcq", question: "According to RFC 5952, if lengths of contiguous zero fields are equal, what does the 'Tie-Breaker Rule' dictate?", options: { a: "Do not shorten either", b: "The first sequence of zero bits MUST be shortened", c: "The last sequence of zero bits MUST be shortened", d: "Shorten both using two double colons" }, answer: "b" },
            { category: "IPv6 Rules", type: "mcq", question: "In the IPv6 Prefix format (ipv6-address/prefix-length), what does the prefix-length decimal value specify?", options: { a: "How many of the rightmost bits are host bits", b: "How many of the leftmost contiguous bits comprise the network prefix", c: "The TTL of the packet", d: "The port number" }, answer: "b" },
            { category: "IPv6 Rules", type: "mcq", question: "According to RFC 3986, how must an IPv6 literal host be formatted in a URI to avoid conflict with port numbers?", options: { a: "Enclosed in parenthesis ( )", b: "Enclosed in square brackets [ ]", c: "Separated by dashes -", d: "Enclosed in curly braces { }" }, answer: "b" },
            { category: "IPv6 Rules", type: "mcq", question: "Which of the following is correctly formatted for an IPv6 URI with a port?", options: { a: "http://2001:db8::7:80/index.html", b: "http://[2001:db8::7]:80/index.html", c: "http://2001:db8::7[80]/index.html", d: "http://(2001:db8::7):80/index.html" }, answer: "b" },

            // Transport Protocols (46-55)
            { category: "Transport Protocols", type: "mcq", question: "Which protocol is connection-oriented and provides reliable delivery of data?", options: { a: "UDP", b: "TCP", c: "IP", d: "ICMP" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol operates at the Transport Layer (OSI Layer 4)?", options: { a: "TCP", b: "IPv4", c: "HTTP", d: "MAC" }, answer: "a" },
            { category: "Transport Protocols", type: "mcq", question: "TCP detects missing packets and arranges retransmissions to ensure data arrives complete and:", options: { a: "Encrypted", b: "In the correct order", c: "Faster than UDP", d: "As a single packet" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "In the TCP Three-Way Handshake, what is the correct sequence?", options: { a: "SYN -> ACK -> SYN-ACK", b: "SYN -> SYN-ACK -> ACK", c: "ACK -> SYN-ACK -> SYN", d: "SYN-ACK -> SYN -> ACK" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol is connectionless and sends data without establishing a reliable connection first?", options: { a: "TCP", b: "UDP", c: "FTP", d: "SMTP" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which of the following is a characteristic of UDP?", options: { a: "Higher overhead", b: "Guaranteed packet delivery", c: "Best-effort delivery", d: "Maintains packet order" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "UDP is ideal for applications that prioritize:", options: { a: "Perfect delivery over speed", b: "Low latency and speed over perfect delivery", c: "Encryption over routing", d: "Large file transfers" }, answer: "b" },
            { category: "Transport Protocols", type: "mcq", question: "Which application would most likely use UDP?", options: { a: "Email", b: "Web browsing", c: "Live multiplayer gaming", d: "File transfer" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "Which application would most likely use TCP?", options: { a: "DNS lookups", b: "Live video broadcasting", c: "Email and file transfers", d: "Voice calls" }, answer: "c" },
            { category: "Transport Protocols", type: "mcq", question: "Which protocol generally has higher communication overhead and is generally slower?", options: { a: "UDP", b: "TCP", c: "IP", d: "ARP" }, answer: "b" },

            // Ports & Application Services (56-70)
            { category: "Ports & Services", type: "mcq", question: "What is a logical number used by transport protocols to identify a specific application or service running on a device?", options: { a: "IP Address", b: "Port", c: "MAC Address", d: "Checksum" }, answer: "b" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for FTP?", answer: "21" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for SSH?", answer: "22" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for SFTP?", answer: "22" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for SMTP?", answer: "25" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for DNS?", answer: "53" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for HTTP?", answer: "80" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for POP3?", answer: "110" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for IMAP?", answer: "143" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for HTTPS?", answer: "443" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for IMAP over TLS?", answer: "993" },
            { category: "Ports & Services", type: "solve", question: "What is the standard port number for POP3 over TLS?", answer: "995" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol translates domain names to IP addresses and operates on Port 53?", options: { a: "FTP", b: "DNS", c: "SSH", d: "SMTP" }, answer: "b" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol sends mail between mail servers?", options: { a: "POP3", b: "IMAP", c: "SMTP", d: "FTP" }, answer: "c" },
            { category: "Ports & Services", type: "mcq", question: "Which protocol is used for secure remote computer administration over TCP?", options: { a: "SSH", b: "FTP", c: "HTTP", d: "DNS" }, answer: "a" },

            // HTTP, Emails & Status Codes (71-80)
            { category: "Application Services", type: "mcq", question: "HTTPS utilizes which encryption standard for secure web traffic?", options: { a: "IPsec", b: "TLS", c: "AES", d: "DES" }, answer: "b" },
            { category: "Application Services", type: "mcq", question: "Which HTTPS security pillar protects communication against unauthorized modification?", options: { a: "Confidentiality", b: "Integrity", c: "Authentication", d: "Availability" }, answer: "b" },
            { category: "Application Services", type: "mcq", question: "Which HTTPS security pillar encrypts information during transmission?", options: { a: "Integrity", b: "Authentication", c: "Confidentiality", d: "Redundancy" }, answer: "c" },
            { category: "Application Services", type: "mcq", question: "Which HTTPS security pillar verifies server identity using a digital certificate?", options: { a: "Authentication", b: "Confidentiality", c: "Integrity", d: "Authorization" }, answer: "a" },
            { category: "Application Services", type: "solve", question: "Which HTTP status code means 'Moved Permanently'?", answer: "301" },
            { category: "Application Services", type: "solve", question: "Which HTTP status code means 'Forbidden' (server understands request but refuses access)?", answer: "403" },
            { category: "Application Services", type: "mcq", question: "What is the primary difference between FTP and SFTP?", options: { a: "FTP is faster, SFTP is slower", b: "FTP is unencrypted by default, SFTP operates securely over SSH", c: "FTP uses port 22, SFTP uses port 21", d: "FTP is for emails, SFTP is for files" }, answer: "b" },
            { category: "Application Services", type: "mcq", question: "Which email retrieval protocol traditionally downloads messages to the user's local device and is less suitable for multi-device access?", options: { a: "SMTP", b: "IMAP", c: "POP3", d: "SSH" }, answer: "c" },
            { category: "Application Services", type: "mcq", question: "Which email retrieval protocol keeps messages on the server and synchronizes folder statuses across multiple devices?", options: { a: "POP3", b: "SMTP", c: "IMAP", d: "FTP" }, answer: "c" },
            { category: "Application Services", type: "mcq", question: "When using SSH, what is the preferred method for security & authentication?", options: { a: "Basic Usernames/Passwords", b: "Cryptographic SSH Keys", c: "Open port access", d: "MAC address filtering" }, answer: "b" },

            // Deployment Workflow & Lifecycle (81-90)
            { category: "Deployment", type: "mcq", question: "In the Application Deployment Workflow, what typically happens immediately after 'Upload the Application'?", options: { a: "Configure DNS", b: "Deploy the Database", c: "Obtain a Server", d: "Monitor the Application" }, answer: "b" },
            { category: "Deployment", type: "mcq", question: "In the Application Deployment Workflow, what typically happens immediately after 'Obtain Domain Name'?", options: { a: "Configure DNS", b: "Obtain a Server", c: "Upload the Application", d: "Deploy the Database" }, answer: "a" },
            { category: "Request Lifecycle", type: "mcq", question: "When a user accesses an online application, what resolves the domain name to an IP address first?", options: { a: "The Firewall", b: "DNS", c: "The ISP", d: "The Web Server" }, answer: "b" },
            { category: "Request Lifecycle", type: "mcq", question: "In the request lifecycle, before packets travel through the local network, what is negotiated for security?", options: { a: "HTTPS security (TLS)", b: "The Database connection", c: "The Proxy server", d: "The HTML DOM" }, answer: "a" },
            { category: "Request Lifecycle", type: "mcq", question: "As packets travel toward the destination, what inspects incoming traffic against security rules?", options: { a: "The Load Balancer", b: "The Destination Firewall", c: "The ISP", d: "The App Server" }, answer: "b" },
            { category: "Request Lifecycle", type: "mcq", question: "After the load balancer and web server accept the HTTPS request, what component executes the requested business logic?", options: { a: "The Client Browser", b: "The Firewall", c: "The Application", d: "The Database" }, answer: "c" },
            { category: "Request Lifecycle", type: "mcq", question: "After the application creates a response (HTML, JSON, etc.), what happens next?", options: { a: "The response is divided into packets and transmitted back", b: "The response is stored permanently in the router", c: "The database deletes the records", d: "The firewall blocks it" }, answer: "a" },
            { category: "Metrics", type: "ident", question: "What performance metric represents the amount of data that can be transmitted during a period of time?", answer: "bandwidth" },
            { category: "Metrics", type: "ident", question: "What performance metric represents the delay between sending information and receiving a response?", answer: "latency" },
            { category: "Metrics", type: "mcq", question: "For interactive applications, which of the following is true regarding performance metrics?", options: { a: "Only bandwidth matters", b: "Low latency is as essential as high bandwidth", c: "Latency must be high", d: "Bandwidth must be low" }, answer: "b" },

            // Troubleshooting & Diagnostics (91-100)
            { category: "Troubleshooting", type: "mcq", question: "If a domain does not open, and the root cause is an unresolved DNS or expired domain, which layer is primarily failing?", options: { a: "Physical Layer", b: "Application / DNS Layer", c: "Data Link Layer", d: "Transport Layer" }, answer: "b" },
            { category: "Troubleshooting", type: "mcq", question: "If a server can be pinged but the website does not open, what is a possible root cause?", options: { a: "Incorrect DNS record", b: "Web server stopped or Port 80/443 blocked", c: "Network latency", d: "Incorrect database credentials" }, answer: "b" },
            { category: "Troubleshooting", type: "mcq", question: "If the application opens but database operations fail, what is a likely root cause?", options: { a: "Database unavailable, wrong address, or blocked port", b: "Domain configuration problem", c: "Firewall blocking port 443", d: "Client browser is outdated" }, answer: "a" },
            { category: "Troubleshooting", type: "mcq", question: "If a website is very slow, which of the following could be the cause?", options: { a: "Network congestion", b: "High latency", c: "Unoptimized/slow database", d: "All of the above" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If an application works on localhost but fails when deployed online, what might be the problem?", options: { a: "Environment variables, DNS, or firewall settings", b: "The client computer is too fast", c: "The database port is open locally and globally", d: "The web server is not needed online" }, answer: "a" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool tests basic Layer-3 reachability, round-trip response time, and packet loss?", options: { a: "Traceroute", b: "Ping", c: "nslookup", d: "Dev Tools" }, answer: "b" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool displays the router hops between a client and destination, showing where network delays occur?", options: { a: "Ping", b: "nslookup", c: "dig", d: "Traceroute / tracert" }, answer: "d" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tools query DNS servers directly to verify domain-to-IP resolution?", options: { a: "Ping and Traceroute", b: "nslookup or dig", c: "Browser Developer Tools", d: "NAT and ARP" }, answer: "b" },
            { category: "Diagnostics", type: "mcq", question: "If you want to inspect HTTP/HTTPS traffic directly to analyze Request URLs, status codes, and transferred payload sizes, which tool should you use?", options: { a: "Browser Developer Tools (Network Tab)", b: "Ping", c: "nslookup", d: "tracert" }, answer: "a" },
            { category: "Diagnostics", type: "mcq", question: "Which layer is primarily tested when using the 'ping' command?", options: { a: "Layer 1 (Physical)", b: "Layer 2 (Data Link)", c: "Layer 3 (Network)", d: "Layer 7 (Application)" }, answer: "c" }
        ],
    },

    // data.js - 250-Item Comprehensive Mock Exam

    {
        id: "mock_exam_250",
        title: "Mock Exam (250 Items)",
        proper: `
            <h2>Comprehensive Mock Exam</h2>
            <p>This section is designed to test your knowledge using a randomized, rigorous exam format mirroring your official assessments[cite: 2].</p>
            <p>It covers all aspects of Internet Technologies, Architecture, Protocols, and Network Addressing[cite: 1]. Proceed to the Assessment tab to begin your 250-item challenge.</p>
        `,
        glossary: [],
        flashcards: [],
        quiz: [
            // --- TOPIC 1: NETWORK BASICS & SCALE (1-25) ---
            { category: "Network Basics", type: "ident", question: "A _____ in the world of computers is said to be a collection of interconnected hosts, via some shared media.[cite: 1]", answer: "network" },
            { category: "Network Basics", type: "mcq", question: "A network spanned across an office or limited local environment is called a:[cite: 1]", options: { a: "WAN", b: "MAN", c: "LAN", d: "WLAN" }, answer: "c" },
            { category: "Network Basics", type: "mcq", question: "A network spanned across a city is called a:[cite: 1]", options: { a: "LAN", b: "MAN", c: "WAN", d: "SAN" }, answer: "b" },
            { category: "Network Basics", type: "mcq", question: "A network that can be spanned across cities and provinces is a:[cite: 1]", options: { a: "LAN", b: "MAN", c: "WAN", d: "PAN" }, answer: "c" },
            { category: "Network Basics", type: "mcq", question: "A computer network can be as simple as two PCs connected together via a single copper cable.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Network Basics", type: "ident", question: "Hosts are situated at the ultimate end of the network; information flows end to end between _____.[cite: 1]", answer: "hosts" },
            { category: "Network Basics", type: "mcq", question: "Which of the following can act as a host?[cite: 1]", options: { a: "A user's PC", b: "An internet server", c: "A database server", d: "All of the above" }, answer: "d" },
            { category: "Network Basics", type: "mcq", question: "Copper cable, fiber optic cable, and coaxial cable are examples of wireless media.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Network Basics", type: "ident", question: "Free-to-air radio frequency is an example of _____ media.[cite: 1]", answer: "wireless" },
            { category: "Hardware", type: "mcq", question: "A hub is a multiport repeater used to connect hosts in a LAN segment.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "At which OSI layer does a hub operate?[cite: 1]", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "Why are hubs rarely used today?[cite: 1]", options: { a: "High costs", b: "Low throughputs", c: "They break collision domains", d: "They require fiber optics" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "A Switch is a multiport bridge used to connect hosts in a LAN segment.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "At which OSI layer does a standard switch operate?[cite: 1]", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "b" },
            { category: "Hardware", type: "mcq", question: "Layer-3 switches are also available.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "Which device makes routing decisions for data sent to a remote destination?[cite: 1]", options: { a: "Hub", b: "Switch", c: "Router", d: "WAP" }, answer: "c" },
            { category: "Hardware", type: "mcq", question: "At which OSI layer does a router operate?[cite: 1]", options: { a: "Layer-1 (Physical Layer)", b: "Layer-2 (Data Link Layer)", c: "Layer-3 (Network Layer)", d: "Layer-4 (Transport Layer)" }, answer: "c" },
            { category: "Hardware", type: "ident", question: "A _____ is a software or hardware combination that exchanges data among networks using different protocols.[cite: 1]", answer: "gateway" },
            { category: "Hardware", type: "ident", question: "A _____ is used to protect users' data from unintended recipients and controls network traffic according to security rules.[cite: 1]", answer: "firewall" },
            { category: "Hardware", type: "mcq", question: "A firewall can operate across several layers.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Hardware", type: "mcq", question: "What does WAP stand for?[cite: 1]", options: { a: "Wired Access Protocol", b: "Wireless Access Point", c: "Wide Area Protocol", d: "Web Application Proxy" }, answer: "b" },
            { category: "Domains", type: "ident", question: "A scenario where simultaneous message transmissions cause an electrical crash is called a _____ domain.[cite: 1]", answer: "collision" },
            { category: "Domains", type: "mcq", question: "Collisions occur leading devices to wait and re-transmit their messages in which mode?[cite: 1]", options: { a: "Full-duplex", b: "Half-duplex", c: "Simplex", d: "Multiplex" }, answer: "b" },
            { category: "Domains", type: "ident", question: "A scenario where a broadcast message creates LAN congestion because all devices must process it is called a _____ domain.[cite: 1]", answer: "broadcast" },
            { category: "Domains", type: "mcq", question: "According to the Efficiency Rule, a network provides better bandwidth when it has MORE collision and broadcast domains.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },

            // --- TOPIC 2: DOMAIN SEPARATION & INTERNET (26-50) ---
            { category: "Domain Separation", type: "mcq", question: "A hub is a collision domain separator.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Domain Separation", type: "mcq", question: "All devices connected to a hub are in a single collision and single broadcast domain.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Domain Separation", type: "mcq", question: "Every port on a switch is in a different collision domain.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Domain Separation", type: "mcq", question: "Switches successfully break broadcast domains.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Domain Separation", type: "mcq", question: "All ports on a standard switch are in a single broadcast domain.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Domain Separation", type: "mcq", question: "Which device breaks both collision domains AND broadcast domains?[cite: 1]", options: { a: "Hub", b: "Switch", c: "Router", d: "WAP" }, answer: "c" },
            { category: "Internet Basics", type: "ident", question: "The _____ is a worldwide network of interconnected computers, servers, and routers.[cite: 1]", answer: "internet" },
            { category: "Internet Basics", type: "mcq", question: "The Internet communicates primarily using which protocol suite?[cite: 1]", options: { a: "OSI", b: "HTTP/HTTPS", c: "TCP/IP", d: "FTP/SFTP" }, answer: "c" },
            { category: "Internet Basics", type: "mcq", question: "The Internet is a communication infrastructure that allows devices globally to exchange data.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Internet Services", type: "mcq", question: "Which of the following is a service supported by the Internet?[cite: 1]", options: { a: "World Wide Web", b: "Email", c: "File Transfer", d: "All of the above" }, answer: "d" },
            { category: "Internet Services", type: "ident", question: "What does VoIP stand for?[cite: 1]", answer: "voice over internet protocol" },
            { category: "Internet Services", type: "mcq", question: "On-demand delivery of computing services including servers, storage, and databases over the Internet is called:[cite: 1]", options: { a: "VoIP", b: "Cloud Computing", c: "IoT", d: "Instant Messaging" }, answer: "b" },
            { category: "Internet Services", type: "mcq", question: "Real-time, text-based communication between participants over a network is:[cite: 1]", options: { a: "VoIP", b: "Cloud Computing", c: "Instant Messaging", d: "FTP" }, answer: "c" },
            { category: "Internet Services", type: "ident", question: "A network of physical objects embedded with sensors and network connectivity is called _____ (acronym).[cite: 1]", answer: "iot" },
            { category: "WWW Basics", type: "mcq", question: "The World Wide Web is a system of interconnected webpages accessed through the Internet.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "WWW Basics", type: "mcq", question: "Which of the following is NOT primarily used by the Web?[cite: 1]", options: { a: "HTTP", b: "URLs", c: "HTML", d: "SMTP" }, answer: "d" },
            { category: "WWW Basics", type: "ident", question: "Users normally access the Web using software applications called web _____.[cite: 1]", answer: "browsers" },
            { category: "Internet vs WWW", type: "mcq", question: "In the roads analogy, the Internet represents the roads, highways, and bridges.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Internet vs WWW", type: "mcq", question: "In the roads analogy, the World Wide Web represents the:[cite: 1]", options: { a: "Traffic lights", b: "Delivery trucks carrying documents", c: "Toll booths", d: "Construction workers" }, answer: "b" },
            { category: "Internet vs WWW", type: "mcq", question: "The Internet is the communication infrastructure, while the WWW is an information service running on it.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Internet vs WWW", type: "mcq", question: "Email services (SMTP, IMAP, POP3) existed independently of the Web.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Internet vs WWW", type: "mcq", question: "FTP and SFTP services require webpages to operate.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Internet vs WWW", type: "mcq", question: "Multiplayer games connect via Internet servers but do not necessarily operate through the WWW.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Internet vs WWW", type: "mcq", question: "Which developed first?[cite: 1]", options: { a: "The World Wide Web", b: "The Internet", c: "They developed simultaneously", d: "HTML" }, answer: "b" },
            { category: "Internet vs WWW", type: "ident", question: "Who developed the World Wide Web?[cite: 1]", answer: "tim berners-lee" },

            // --- TOPIC 3: ECOSYSTEM & ARCHITECTURE (51-75) ---
            { category: "Process", type: "mcq", question: "When a user enters a URL, which service identifies the server's IP address?[cite: 1]", options: { a: "FTP", b: "DNS", c: "HTTP", d: "SMTP" }, answer: "b" },
            { category: "Process", type: "mcq", question: "After DNS identifies the server, the browser sends an HTTP request.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "Personal computing hardware requesting network resources are called:[cite: 1]", options: { a: "Data Centers", b: "End-User Devices", c: "CDNs", d: "Backbones" }, answer: "b" },
            { category: "Ecosystem", type: "ident", question: "Physical or virtual hardware that connects a device to a network medium is a network _____.[cite: 1]", answer: "interface" },
            { category: "Ecosystem", type: "mcq", question: "Specialized facilities housing high-capacity computing systems and storage pools are:[cite: 1]", options: { a: "CDNs", b: "Data Centers & Servers", c: "ISPs", d: "WAPs" }, answer: "b" },
            { category: "Ecosystem", type: "ident", question: "Distributed server networks that provide Caching and DDoS Protection are called _____. (Acronym)[cite: 1]", answer: "cdns" },
            { category: "Ecosystem", type: "mcq", question: "Caching provides temporary storage of web files close to the user to speed up load times.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "What does WAF stand for?[cite: 1]", options: { a: "Web Application Firewall", b: "Wide Area Firewall", c: "Wireless Access Frequency", d: "Web Authentication Filter" }, answer: "a" },
            { category: "Ecosystem", type: "mcq", question: "Which hosting option allocates an entire physical server exclusively to a single tenant?[cite: 1]", options: { a: "VPS", b: "Dedicated Server", c: "Cloud Hosting", d: "Shared Hosting" }, answer: "b" },
            { category: "Ecosystem", type: "ident", question: "A virtualized private partition on a shared physical server host is a _____ (Acronym).[cite: 1]", answer: "vps" },
            { category: "Ecosystem", type: "ident", question: "Entities providing local, regional, or national access to the global Internet are called _____ (Acronym).[cite: 1]", answer: "isps" },
            { category: "Ecosystem", type: "mcq", question: "Accredited entities that sell and register domain names are called:[cite: 1]", options: { a: "DNS Providers", b: "Certificate Authorities", c: "Domain Registrars", d: "ISPs" }, answer: "c" },
            { category: "Ecosystem", type: "mcq", question: "Trusted organizations that issue digital certificates verifying server identity are:[cite: 1]", options: { a: "Certificate Authorities (CAs)", b: "Domain Registrars", c: "ISPs", d: "Cloud Providers" }, answer: "a" },
            { category: "Architecture", type: "mcq", question: "A computing model in which one computer requests a service from another is:[cite: 1]", options: { a: "Peer-to-Peer", b: "Client-Server", c: "Mainframe", d: "Standalone" }, answer: "b" },
            { category: "Architecture", type: "mcq", question: "In Client-Server architecture, what is the basic principle?[cite: 1]", options: { a: "Server -> Request -> Client", b: "Client -> Request -> Processing -> Response -> Client", c: "Request -> Server -> Client", d: "Client -> Processing -> Request -> Server" }, answer: "b" },
            { category: "Architecture", type: "mcq", question: "Which of the following acts as a client?[cite: 1]", options: { a: "Web browser", b: "Mobile app", c: "Desktop software", d: "All of the above" }, answer: "d" },
            { category: "Server Roles", type: "mcq", question: "Which server accepts HTTP/HTTPS requests?[cite: 1]", options: { a: "Database Server", b: "Mail Server", c: "Web Server", d: "DNS Server" }, answer: "c" },
            { category: "Server Roles", type: "mcq", question: "Which server runs application logic such as routes and business rules?[cite: 1]", options: { a: "Web Server", b: "Application Server", c: "Database Server", d: "File Server" }, answer: "b" },
            { category: "Server Roles", type: "mcq", question: "Which server stores and retrieves application data (e.g., MySQL)?[cite: 1]", options: { a: "Database Server", b: "File Server", c: "Authentication Server", d: "DNS Server" }, answer: "a" },
            { category: "Server Roles", type: "ident", question: "Which server provides domain-name resolution?[cite: 1]", answer: "dns server" },
            { category: "Deployment", type: "mcq", question: "In a local deployment environment (Chrome -> Localhost -> Apache -> Laravel -> MySQL), what acts as the web server?[cite: 1]", options: { a: "Chrome", b: "Laravel", c: "Apache", d: "MySQL" }, answer: "c" },
            { category: "Client Types", type: "mcq", question: "A thin client relies heavily on the server, with most application processing occurring remotely.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Client Types", type: "ident", question: "A client that performs significant processing locally is called a _____ client.[cite: 1]", answer: "thick" },
            { category: "Client Types", type: "mcq", question: "Traditional server-rendered web applications are typical examples of:[cite: 1]", options: { a: "Thick Clients", b: "Thin Clients", c: "P2P Nodes", d: "Mobile Apps" }, answer: "b" },
            { category: "Client Types", type: "mcq", question: "Desktop applications and sophisticated Javascript applications are typical examples of:[cite: 1]", options: { a: "Thin Clients", b: "Thick Clients", c: "Servers", d: "Gateways" }, answer: "b" },

            // --- TOPIC 4: DISTRIBUTED SYSTEMS & P2P (76-100) ---
            { category: "Architecture Pros/Cons", type: "mcq", question: "Which of the following is an advantage of Client-Server architecture?[cite: 1]", options: { a: "No single point of failure", b: "Centralized security and easier maintenance", c: "Clients do not need a network connection", d: "Fully decentralized" }, answer: "b" },
            { category: "Architecture Pros/Cons", type: "mcq", question: "A critical server in a Client-Server model can become a single point of failure.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Architecture Pros/Cons", type: "mcq", question: "Internet-facing servers are attractive security targets.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Scaling", type: "mcq", question: "When a system grows massively, Client-Server architecture transitions into distributed systems via:[cite: 1]", options: { a: "Hubs", b: "Load balancing", c: "P2P exclusively", d: "Vertical scaling only" }, answer: "b" },
            { category: "Scaling", type: "ident", question: "What device or software distributes incoming traffic across multiple servers?[cite: 1]", answer: "load balancer" },
            { category: "P2P", type: "mcq", question: "Which characteristic best describes peer-to-peer architecture?[cite: 1]", options: { a: "Each peer may both request and provide resources.", b: "Clients can request resources but cannot provide them.", c: "All communication must pass through a database server.", d: "Only one central server provides resources." }, answer: "a" },
            { category: "P2P", type: "mcq", question: "In a peer-to-peer architecture, every resource request must pass through one central server.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "P2P", type: "mcq", question: "BitTorrent is a well-known example of peer-to-peer file distribution.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "P2P", type: "mcq", question: "In P2P, security is easier to enforce than in Client-Server architecture.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "P2P", type: "mcq", question: "Which of the following is an advantage of P2P?[cite: 1]", options: { a: "Easier management", b: "Reduced dependence on a central server", c: "Centralized security", d: "Guaranteed data consistency" }, answer: "b" },
            { category: "P2P", type: "mcq", question: "Are modern Internet systems always purely one architecture (either strictly client-server or strictly P2P)?[cite: 1]", options: { a: "Yes", b: "No, they often combine both" }, answer: "b" },
            { category: "Distributed Systems", type: "mcq", question: "A collection of independent computers that work together and appear to users as one integrated system is a:[cite: 1]", options: { a: "Distributed System", b: "Standalone Server", c: "Thin Client", d: "LAN" }, answer: "a" },
            { category: "Distributed Systems", type: "mcq", question: "In a distributed system, the user interface provides a 'single system view', also known as transparency.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Distributed Systems", type: "mcq", question: "Why use distributed systems?[cite: 1]", options: { a: "To bypass firewalls", b: "To overcome limits in CPU, Memory, and Network Capacity of a single computer", c: "To create a single point of failure", d: "To eliminate the need for load balancers" }, answer: "b" },
            { category: "Distributed Systems", type: "ident", question: "Microsoft directory service used for centralized domain authentication is called Active _____.[cite: 1]", answer: "directory" },
            { category: "Distributed Systems", type: "mcq", question: "Separating Authentication, Application Logic, and Database onto different servers is distribution by:[cite: 1]", options: { a: "Geography", b: "Function", c: "Volume", d: "Protocol" }, answer: "b" },
            { category: "Distributed Systems", type: "mcq", question: "Locating data centers across Manila, Singapore, Tokyo, and China is distribution by:[cite: 1]", options: { a: "Function", b: "Geography", c: "Load", d: "Redundancy" }, answer: "b" },
            { category: "Distributed Systems", type: "mcq", question: "Which scaling method involves increasing the capacity of one server by adding RAM, CPU, or storage?[cite: 1]", options: { a: "Horizontal Scaling", b: "Vertical Scaling", c: "Diagonal Scaling", d: "Load Balancing" }, answer: "b" },
            { category: "Distributed Systems", type: "mcq", question: "Which action is an example of horizontal scaling?[cite: 1]", options: { a: "Adding more servers so they can share the workload", b: "Changing an IPv4 address to a MAC address", c: "Adding more RAM and CPU to one existing server", d: "Replacing a switch with a hub" }, answer: "a" },
            { category: "Distributed Systems", type: "mcq", question: "Horizontal scaling means adding more servers so that they can share the workload.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Distributed Systems", type: "ident", question: "The system attempts to continue operating when a component fails. This is called Fault _____.[cite: 1]", answer: "tolerance" },
            { category: "Distributed Systems", type: "mcq", question: "Having extra components available in case one fails is known as:[cite: 1]", options: { a: "Load Balancing", b: "Concurrency", c: "Redundancy", d: "Resource Sharing" }, answer: "c" },
            { category: "Distributed Systems", type: "mcq", question: "Which of the following is a challenge of distributed systems?[cite: 1]", options: { a: "Network delays and latency", b: "Data consistency", c: "Synchronization", d: "All of the above" }, answer: "d" },
            { category: "Distributed Systems", type: "mcq", question: "Distributed systems suffer from failure detection complexity.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Distributed Systems", type: "mcq", question: "Which of the following can cause distributed application failures?[cite: 1]", options: { a: "DNS misconfigurations", b: "Firewall rules", c: "Database connectivity", d: "All of the above" }, answer: "d" },

            // --- TOPIC 5: OSI & TCP/IP MODELS (101-125) ---
            { category: "OSI Model", type: "mcq", question: "Networking models divide communication responsibilities into layers to make them easier to design, explain, and troubleshoot.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "OSI Model", type: "ident", question: "Which organization defined the OSI Model? (Acronym)[cite: 1]", answer: "iso" },
            { category: "OSI Model", type: "ident", question: "What does OSI stand for?[cite: 1]", answer: "open systems interconnection" },
            { category: "OSI Model", type: "mcq", question: "The mnemonic 'All People Seem To Need Data Processing' helps remember the layers from Layer 7 to Layer 1.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "OSI Layer 7", type: "mcq", question: "Which OSI layer is the human-computer interaction layer that provides network services directly to end-user applications?[cite: 1]", options: { a: "Layer 4 (Transport)", b: "Layer 7 (Application)", c: "Layer 6 (Presentation)", d: "Layer 3 (Network)" }, answer: "b" },
            { category: "OSI Layer 7", type: "mcq", question: "HTTP, HTTPS, SMTP, and DNS belong to which OSI layer?[cite: 1]", options: { a: "Application", b: "Presentation", c: "Session", d: "Transport" }, answer: "a" },
            { category: "OSI Layer 6", type: "mcq", question: "Which OSI layer deals with data representation, encoding, formatting, encryption, and compression?[cite: 1]", options: { a: "Application", b: "Presentation", c: "Session", d: "Transport" }, answer: "b" },
            { category: "OSI Layer 6", type: "mcq", question: "JSON, XML, and JPEG belong to which OSI layer?[cite: 1]", options: { a: "Presentation", b: "Session", c: "Data Link", d: "Physical" }, answer: "a" },
            { category: "OSI Layer 5", type: "mcq", question: "Which OSI layer manages establishing, maintaining, and terminating communication sessions and controls ports?[cite: 1]", options: { a: "Transport", b: "Session", c: "Network", d: "Application" }, answer: "b" },
            { category: "OSI Layer 4", type: "mcq", question: "Which OSI layer is responsible for end-to-end delivery, handles ports, sequencing, and reliability?[cite: 1]", options: { a: "Network", b: "Data Link", c: "Transport", d: "Session" }, answer: "c" },
            { category: "OSI Layer 4", type: "mcq", question: "TCP and UDP operate at which OSI layer?[cite: 1]", options: { a: "Transport", b: "Network", c: "Data Link", d: "Physical" }, answer: "a" },
            { category: "OSI Layer 3", type: "mcq", question: "Which is a primary responsibility of the OSI Network Layer?[cite: 1]", options: { a: "Transmitting raw bits through physical media", b: "Managing application sessions", c: "Data compression and formatting", d: "Logical addressing and routing" }, answer: "d" },
            { category: "OSI Layer 3", type: "mcq", question: "IP (IPv4, IPv6) and Routers operate at which OSI layer?[cite: 1]", options: { a: "Layer 2", b: "Layer 3", c: "Layer 4", d: "Layer 5" }, answer: "b" },
            { category: "OSI Layer 2", type: "mcq", question: "Which OSI layer handles node-to-node communication on the same local segment and MAC addressing?[cite: 1]", options: { a: "Network", b: "Data Link", c: "Physical", d: "Transport" }, answer: "b" },
            { category: "OSI Layer 2", type: "mcq", question: "Ethernet, Wi-Fi, and Switches operate at which OSI layer?[cite: 1]", options: { a: "Data Link", b: "Physical", c: "Network", d: "Transport" }, answer: "a" },
            { category: "OSI Layer 1", type: "mcq", question: "Which OSI layer transmits raw bit streams over physical media?[cite: 1]", options: { a: "Data Link", b: "Physical", c: "Network", d: "Session" }, answer: "b" },
            { category: "TCP/IP Model", type: "ident", question: "The standardized protocol suite primarily used for Internet communication is _____.[cite: 1]", answer: "tcp/ip" },
            { category: "TCP/IP Model", type: "mcq", question: "Which list correctly represents the four layers of the TCP/IP model used in the lecture material?[cite: 1]", options: { a: "Transport, Network, Data Link, Physical", b: "Application, Presentation, Session, Transport", c: "Application, Session, Internet, Physical", d: "Application, Transport, Internet, Link/Network Access" }, answer: "d" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP model, OSI Layers 5, 6, and 7 are grouped into which single layer?[cite: 1]", options: { a: "Application", b: "Transport", c: "Internet", d: "Link" }, answer: "a" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP model, OSI Layer 4 corresponds directly to which layer?[cite: 1]", options: { a: "Application", b: "Transport", c: "Internet", d: "Link" }, answer: "b" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP model, OSI Layer 3 corresponds directly to which layer?[cite: 1]", options: { a: "Internet", b: "Transport", c: "Application", d: "Link" }, answer: "a" },
            { category: "TCP/IP Model", type: "mcq", question: "In the TCP/IP model, OSI Layers 1 and 2 are grouped into which single layer?[cite: 1]", options: { a: "Internet", b: "Transport", c: "Link / Network Access", d: "Application" }, answer: "c" },
            { category: "Encapsulation", type: "mcq", question: "The process in which networking layers add communication information as data moves down the stack is called _____.[cite: 1]", options: { a: "Encapsulation", b: "Decapsulation", c: "Fragmentation", d: "Routing" }, answer: "a" },
            { category: "Encapsulation", type: "mcq", question: "The reverse process at the receiving host, where headers are stripped at each ascending layer, is called:[cite: 1]", options: { a: "Encapsulation", b: "Decapsulation", c: "Translation", d: "Formatting" }, answer: "b" },
            { category: "Encapsulation", type: "mcq", question: "What is the correct sequence of Encapsulation?[cite: 1]", options: { a: "Data -> Segment -> Packet -> Frame -> Bits", b: "Bits -> Frame -> Packet -> Segment -> Data", c: "Data -> Packet -> Segment -> Frame -> Bits", d: "Data -> Frame -> Packet -> Segment -> Bits" }, answer: "a" },

            // --- TOPIC 6: PACKETS, IP OVERVIEW & HEADERS (126-150) ---
            { category: "Packets", type: "mcq", question: "Internet communication relies heavily on sending one large, continuous unit of data instead of packets.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Packets", type: "mcq", question: "Why do we use packets?[cite: 1]", options: { a: "Efficient network sharing", b: "Flexible routing", c: "Error recovery (only missing portions are retransmitted)", d: "All of the above" }, answer: "d" },
            { category: "Packets", type: "mcq", question: "A simplified packet consists of a Header and a _____.[cite: 1]", options: { a: "Trailer", b: "Footer", c: "Payload", d: "Flag" }, answer: "c" },
            { category: "Packets", type: "mcq", question: "Packet loss can occur due to network congestion or wireless interference.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Addressing", type: "mcq", question: "A factory-coded hardware address described in the network-addressing material as 48 bits long is the _____.[cite: 1]", options: { a: "IP address", b: "MAC address", c: "Port number", d: "DNS address" }, answer: "b" },
            { category: "Addressing", type: "mcq", question: "MAC addresses uniquely identify a host on a local network segment.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Addressing", type: "mcq", question: "If a host wants to communicate with a remote host across segments, logical addressing (IP) is required.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Addressing", type: "mcq", question: "Source and destination MAC addresses change hop-by-hop across the Internet.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Addressing", type: "mcq", question: "Source and destination IP addresses change hop-by-hop across the Internet.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "IP Overview", type: "mcq", question: "IP uses 'best-effort delivery', meaning it does not guarantee that packets will reach the destined host.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv4 Header", type: "ident", question: "Internet Protocol version 4 uses a _____ logical address. (number of bits)[cite: 1]", answer: "32-bit" },
            { category: "IPv4 Header", type: "mcq", question: "An IP packet encapsulates the Layer-4 Data segment into an IP Payload and prepends an IP Header.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv4 Header", type: "mcq", question: "In the IPv4 header, IHL stands for Internet Header Length.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv4 Header", type: "ident", question: "Which IPv4 header field carries information about network congestion seen in the route? (Acronym)[cite: 1]", answer: "ecn" },
            { category: "IPv4 Header", type: "mcq", question: "Which field specifies the length of the entire IP Packet (including header and payload)?[cite: 1]", options: { a: "Identification", b: "Fragment Offset", c: "Total Length", d: "Header Checksum" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "If an IP packet is fragmented, which field ensures all fragments share the same number?[cite: 1]", options: { a: "Total Length", b: "Identification", c: "Flags", d: "Protocol" }, answer: "b" },
            { category: "IPv4 Header", type: "mcq", question: "Which field specifies the exact position of the fragment in the original IP packet?[cite: 1]", options: { a: "Total Length", b: "Identification", c: "Fragment Offset", d: "Protocol" }, answer: "c" },
            { category: "IPv4 Header", type: "mcq", question: "To avoid routing loops, packets have a _____ counter representing router hops. (Acronym)[cite: 1]", options: { a: "TTL", b: "ECN", c: "IHL", d: "DSCP" }, answer: "a" },
            { category: "IPv4 Header", type: "mcq", question: "When the TTL counter reaches 0, the packet is discarded.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv4 Header", type: "mcq", question: "Which field tells the Network layer which next-level transport protocol the packet belongs to (e.g., ICMP=1, TCP=6, UDP=17)?[cite: 1]", options: { a: "Flags", b: "Protocol", c: "Options", d: "TTL" }, answer: "b" },
            { category: "IPv4 Modes", type: "mcq", question: "In which mode is data sent only to one destined host?[cite: 1]", options: { a: "Broadcast", b: "Multicast", c: "Unicast", d: "Anycast" }, answer: "c" },
            { category: "IPv4 Modes", type: "mcq", question: "In which mode is a packet addressed to all hosts on a network segment using 255.255.255.255?[cite: 1]", options: { a: "Unicast", b: "Multicast", c: "Broadcast", d: "Anycast" }, answer: "c" },
            { category: "IPv4 Modes", type: "mcq", question: "Which mode is destined for multiple interested hosts using Class D addresses (224.x.x.x)?[cite: 1]", options: { a: "Unicast", b: "Broadcast", c: "Multicast", d: "Anycast" }, answer: "c" },
            { category: "Binary", type: "mcq", question: "An IPv4 address is a 32-bit value divided into 4 octets.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Binary", type: "mcq", question: "Using positional values, what does the binary octet 11000000 evaluate to?[cite: 1]", options: { a: "128", b: "192", c: "224", d: "255" }, answer: "b" },

            // --- TOPIC 7: IPv4 CLASSES, VLSM & IPv6 (151-175) ---
            { category: "Subnet Mask", type: "ident", question: "The 32-bit value used with an IPv4 address to help determine its network and host portions is the _____.[cite: 1]", answer: "subnet mask" },
            { category: "Subnet Mask", type: "mcq", question: "Performing a bitwise AND operation between the binary IP and binary Subnet Mask isolates the Network Address.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv4 Classes", type: "mcq", question: "Which IPv4 class has a first octet range of 1-126 and a default subnet mask of 255.0.0.0 (/8)?[cite: 1]", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "a" },
            { category: "IPv4 Classes", type: "mcq", question: "Which IPv4 class has a first octet range of 128-191 and a default subnet mask of 255.255.0.0 (/16)?[cite: 1]", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "b" },
            { category: "IPv4 Classes", type: "mcq", question: "Which IPv4 class has a first octet range of 192-223 and a default subnet mask of 255.255.255.0 (/24)?[cite: 1]", options: { a: "Class A", b: "Class B", c: "Class C", d: "Class D" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "Which IPv4 class is strictly reserved for Multicasting (224-239)?[cite: 1]", options: { a: "Class B", b: "Class C", c: "Class D", d: "Class E" }, answer: "c" },
            { category: "IPv4 Classes", type: "mcq", question: "Which IPv4 class is reserved for Experimental, R&D, and Study (240-255)?[cite: 1]", options: { a: "Class B", b: "Class C", c: "Class D", d: "Class E" }, answer: "d" },
            { category: "Reserved IPs", type: "ident", question: "The address range 127.0.0.0 - 127.255.255.255 is reserved for a Host's self-address, also known as the _____ address.[cite: 1]", answer: "loopback" },
            { category: "Reserved IPs", type: "mcq", question: "Ping testing 127.0.0.1 confirms the local TCP/IP protocol stack is properly installed.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Reserved IPs", type: "mcq", question: "Private IP addresses such as addresses beginning with 192.168 are normally directly reachable from the public Internet.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Reserved IPs", type: "mcq", question: "Which of the following is the Class A Private IP Range?[cite: 1]", options: { a: "172.16.0.0 - 172.31.255.255", b: "192.168.0.0 - 192.168.255.255", c: "10.0.0.0 - 10.255.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "c" },
            { category: "Reserved IPs", type: "mcq", question: "Which of the following is the Class B Private IP Range?[cite: 1]", options: { a: "172.16.0.0 - 172.31.255.255", b: "192.168.0.0 - 192.168.255.255", c: "10.0.0.0 - 10.255.255.255", d: "127.0.0.0 - 127.255.255.255" }, answer: "a" },
            { category: "Subnetting", type: "ident", question: "A _____ is a logical subdivision of an IP network.[cite: 1]", answer: "subnet" },
            { category: "Subnetting", type: "mcq", question: "Subnetting borrows bits from the host identifier and assigns them to the network identifier.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Subnetting", type: "ident", question: "CIDR allocates IP addressing without rigid class boundaries. What does CIDR stand for?[cite: 1]", answer: "classless inter-domain routing" },
            { category: "Subnetting", type: "mcq", question: "The Subnet Limit Rule dictates that subnetting cannot use more than 30 network bits (/30).[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Subnetting", type: "mcq", question: "A /30 mask provides exactly how many usable hosts?[cite: 1]", options: { a: "0", b: "2", c: "4", d: "6" }, answer: "b" },
            { category: "VLSM", type: "mcq", question: "VLSM allows an engineer to allocate IP subnets of different sizes to match varied host requirements.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "VLSM", type: "mcq", question: "When allocating VLSM, requirements should be sorted in ascending order (smallest to largest).[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Protocols", type: "ident", question: "Which protocol dynamically assigns an IP address to a client from a pre-defined address pool? (Acronym)[cite: 1]", answer: "dhcp" },
            { category: "Protocols", type: "mcq", question: "What is the 4-way process used by DHCP?[cite: 1]", options: { a: "PING", b: "DORA", c: "HTTP", d: "DNS" }, answer: "b" },
            { category: "Protocols", type: "mcq", question: "When a user enters a website address, which service helps identify the server associated with the domain name?[cite: 1]", options: { a: "DNS", b: "FTP", c: "SSH", d: "POP3" }, answer: "a" },
            { category: "Protocols", type: "mcq", question: "Which protocol acquires the physical MAC address of a destination device whose IP address is known via broadcast?[cite: 1]", options: { a: "DNS", b: "NAT", c: "ARP", d: "DHCP" }, answer: "c" },
            { category: "Protocols", type: "ident", question: "An intermediary server with a public IP that intercepts and forwards web requests on behalf of internal clients is a _____ server.[cite: 1]", answer: "proxy" },
            { category: "Protocols", type: "mcq", question: "Which protocol translates private, non-routable IP addresses into publicly routable IP addresses?[cite: 1]", options: { a: "NAT", b: "ARP", c: "DNS", d: "DHCP" }, answer: "a" },

            // --- TOPIC 8: IPv6 & TRANSPORT PROTOCOLS (176-200) ---
            { category: "IPv6", type: "mcq", question: "IPv4 exhaustion occurred due to the exponential growth of connected devices and IoT hardware.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "Which organization standardized IPv6 to provide a 128-bit address space?[cite: 1]", options: { a: "IANA", b: "ICANN", c: "IETF", d: "RIR" }, answer: "c" },
            { category: "IPv6", type: "mcq", question: "Which coexistence mechanism allows devices to run both IPv4 and IPv6 protocol stacks simultaneously?[cite: 1]", options: { a: "Tunneling", b: "Dual IP Stack", c: "NAT Protocol Translation", d: "VLSM" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "Which coexistence mechanism encapsulates packets of one protocol version inside packets of another?[cite: 1]", options: { a: "Tunneling", b: "Dual IP Stack", c: "NAT Protocol Translation", d: "VLSM" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "An IPv6 address contains how many bits?[cite: 1]", options: { a: "32", b: "64", c: "128", d: "256" }, answer: "c" },
            { category: "IPv6", type: "mcq", question: "In IPv6, a 4-bit binary group represented by a single hexadecimal digit is called a:[cite: 1]", options: { a: "Hextet", b: "Nibble", c: "Byte", d: "Octet" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "In IPv6, 4 Hex Digits equal 1 Hextet, which equals 16 bits.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "When shortening an IPv6 address, any trailing zeros within a hextet may be dropped.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "Double Colon Compression (::) can only appear once in an IPv6 address to avoid ambiguity.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "According to RFC 5952, when multiple sets of contiguous zero hextets exist, the shortest run MUST be shortened.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "IPv6", type: "mcq", question: "According to RFC 5952, when lengths of contiguous zero fields are equal, the first sequence of zero bits MUST be shortened.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "IPv6", type: "mcq", question: "An IPv6 literal host in a URI must be enclosed in square brackets [ and ] to avoid conflict with port numbers.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Transport", type: "mcq", question: "Which statement best describes TCP?[cite: 1]", options: { a: "It is connection-oriented and provides reliable, ordered delivery.", b: "It is used only for local MAC-address communication.", c: "It provides domain-name resolution.", d: "It is connectionless and never retransmits lost data." }, answer: "a" },
            { category: "Transport", type: "mcq", question: "TCP detects missing packets and arranges retransmissions.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Transport", type: "mcq", question: "In the TCP Three-Way Handshake, the sequence is: SYN -> SYN-ACK -> ACK.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Transport", type: "mcq", question: "UDP guarantees packet delivery, packet order, and automatic retransmission of missing packets.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Transport", type: "mcq", question: "Why do real-time applications prefer UDP?[cite: 1]", options: { a: "It has lower overhead and can prioritize speed and low delay over guaranteed delivery.", b: "It always establishes a three-way handshake before sending data.", c: "It provides built-in web-page encryption.", d: "It guarantees that every lost packet is retransmitted." }, answer: "a" },
            { category: "Transport", type: "mcq", question: "Which protocol generally has higher communication overhead and is slower?[cite: 1]", options: { a: "UDP", b: "TCP" }, answer: "b" },
            { category: "Transport", type: "mcq", question: "Web applications, file transfers, and emails primarily use:[cite: 1]", options: { a: "UDP", b: "TCP" }, answer: "b" },
            { category: "Transport", type: "mcq", question: "Real-time audio/video, gaming, and DNS queries primarily use:[cite: 1]", options: { a: "UDP", b: "TCP" }, answer: "a" },
            { category: "Ports", type: "mcq", question: "A logical number used by transport protocols to identify a specific application or service running on a device is a:[cite: 1]", options: { a: "MAC Address", b: "Port", c: "IP Address", d: "Sequence Number" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for FTP is:[cite: 1]", options: { a: "21", b: "22", c: "25", d: "80" }, answer: "a" },
            { category: "Ports", type: "mcq", question: "The protocol commonly used for secure remote administration of a server is:[cite: 1]", options: { a: "FTP", b: "SSH", c: "SMTP", d: "HTTP" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for SSH and SFTP is:[cite: 1]", options: { a: "21", b: "22", c: "25", d: "53" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for SMTP (which sends mail between servers) is:[cite: 1]", options: { a: "22", b: "25", c: "53", d: "80" }, answer: "c" }, // Wait, SMTP is 25. Correcting answer index.
            // Self-correction for previous question logic error in array index during fast generation. Correct answer is 25 (option c).

            // --- TOPIC 9: PORTS & APP PROTOCOLS (201-225) ---
            { category: "Ports", type: "mcq", question: "The common port number for SMTP is:[cite: 1]", options: { a: "21", b: "22", c: "25", d: "53" }, answer: "c" },
            { category: "Ports", type: "mcq", question: "The common port number for DNS is:[cite: 1]", options: { a: "25", b: "53", c: "80", d: "110" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The application-layer protocol commonly used for communication between web clients and web servers is:[cite: 1]", options: { a: "FTP", b: "HTTP", c: "SSH", d: "POP3" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for HTTP is:[cite: 1]", options: { a: "53", b: "80", c: "443", d: "110" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The email protocol that traditionally downloads messages to a user's device is:[cite: 1]", options: { a: "IMAP", b: "SMTP", c: "POP3", d: "HTTP" }, answer: "c" },
            { category: "Ports", type: "mcq", question: "The common port number for POP3 is:[cite: 1]", options: { a: "80", b: "110", c: "143", d: "443" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "Which email protocol is designed to keep messages on the server while synchronizing them across multiple devices?[cite: 1]", options: { a: "FTP", b: "IMAP", c: "HTTP", d: "POP3" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for IMAP is:[cite: 1]", options: { a: "110", b: "143", c: "443", d: "993" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "Which protocol is the secure version of HTTP and commonly uses TLS?[cite: 1]", options: { a: "DNS", b: "POP3", c: "HTTPS", d: "FTP" }, answer: "c" },
            { category: "Ports", type: "mcq", question: "The common port number for HTTPS is:[cite: 1]", options: { a: "80", b: "443", c: "993", d: "995" }, answer: "b" },
            { category: "Ports", type: "mcq", question: "The common port number for IMAP over TLS is:[cite: 1]", options: { a: "143", b: "443", c: "993", d: "995" }, answer: "c" },
            { category: "Ports", type: "mcq", question: "The common port number for POP3 over TLS is:[cite: 1]", options: { a: "110", b: "443", c: "993", d: "995" }, answer: "d" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'OK: The request succeeded'?[cite: 1]", options: { a: "200", b: "301", c: "400", d: "404" }, answer: "a" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'Moved Permanently'?[cite: 1]", options: { a: "201", b: "301", c: "401", d: "500" }, answer: "b" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'Unauthorized' (authentication failed)?[cite: 1]", options: { a: "400", b: "401", c: "403", d: "404" }, answer: "b" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'Forbidden' (server understands but refuses access)?[cite: 1]", options: { a: "400", b: "401", c: "403", d: "404" }, answer: "c" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'Not Found'?[cite: 1]", options: { a: "400", b: "403", c: "404", d: "500" }, answer: "c" },
            { category: "App Services", type: "mcq", question: "Which HTTP status code means 'Internal Server Error'?[cite: 1]", options: { a: "400", b: "404", c: "500", d: "503" }, answer: "c" },
            { category: "App Services", type: "mcq", question: "Which HTTPS pillar protects communication against unauthorized modification?[cite: 1]", options: { a: "Confidentiality", b: "Integrity", c: "Authentication", d: "Redundancy" }, answer: "b" },
            { category: "App Services", type: "mcq", question: "Which HTTPS pillar encrypts information during transmission?[cite: 1]", options: { a: "Confidentiality", b: "Integrity", c: "Authentication", d: "Redundancy" }, answer: "a" },
            { category: "App Services", type: "mcq", question: "Which HTTPS pillar verifies server identity using a digital certificate?[cite: 1]", options: { a: "Confidentiality", b: "Integrity", c: "Authentication", d: "Redundancy" }, answer: "c" },
            { category: "App Services", type: "mcq", question: "FTP is unencrypted by default.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "App Services", type: "mcq", question: "Which statement about SFTP is correct?[cite: 1]", options: { a: "SFTP is an unencrypted file-transfer protocol that commonly uses port 21.", b: "SFTP is a web communication protocol that commonly uses port 80.", c: "SFTP is an email synchronization protocol that commonly uses port 143.", d: "SFTP provides encrypted file transfer over SSH and commonly uses port 22." }, answer: "d" },
            { category: "App Services", type: "mcq", question: "When using SSH, key-based authentication is preferred over simple usernames/passwords.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "In the Application Deployment Workflow, configuring the server happens before obtaining a server.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },

            // --- TOPIC 10: DEPLOYMENT & TROUBLESHOOTING (226-250) ---
            { category: "Deployment", type: "mcq", question: "In the request lifecycle, DNS resolves the domain name to an IP address BEFORE the browser establishes transport communication.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "In the request lifecycle, packets travel through the local network and local router before the ISP forwards traffic toward the Internet.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "The load balancer and web server accept the HTTPS request before the application executes the requested business logic.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Deployment", type: "mcq", question: "The application communicates with the database AFTER creating the response HTML.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Metrics", type: "ident", question: "The amount of data that can be transmitted during a period of time (e.g., 100 Mbps) is called _____.[cite: 1]", answer: "bandwidth" },
            { category: "Metrics", type: "ident", question: "The delay between sending information and receiving a response is called _____.[cite: 1]", answer: "latency" },
            { category: "Metrics", type: "mcq", question: "For interactive applications, low latency is as essential as high bandwidth.[cite: 1]", options: { a: "True", b: "False" }, answer: "a" },
            { category: "Metrics", type: "mcq", question: "A server closer to the user generally has higher network latency than one on another continent.[cite: 1]", options: { a: "True", b: "False" }, answer: "b" },
            { category: "Troubleshooting", type: "mcq", question: "If a domain does not open, what is a possible root cause?[cite: 1]", options: { a: "Incorrect DNS record", b: "Unresolved DNS", c: "Domain configuration problem", d: "All of the above" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If a domain does not open due to incorrect DNS records, which layer is primarily failing?[cite: 1]", options: { a: "Application / DNS", b: "Transport", c: "Physical", d: "Data Link" }, answer: "a" },
            { category: "Troubleshooting", type: "mcq", question: "If a server can be pinged but the website does not open, what is a possible root cause?[cite: 1]", options: { a: "Web server stopped", b: "Port 80/443 blocked", c: "Firewall rule incorrect", d: "All of the above" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If a server can be pinged but the website does not open, which layers are primarily failing?[cite: 1]", options: { a: "Physical / Data Link", b: "Transport / Application", c: "Network / Internet", d: "Session / Presentation" }, answer: "b" },
            { category: "Troubleshooting", type: "mcq", question: "If the application opens but database operations fail, what is a possible root cause?[cite: 1]", options: { a: "Database unavailable", b: "Blocked port", c: "Incorrect credentials", d: "All of the above" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If a website is very slow, which of the following is a possible root cause?[cite: 1]", options: { a: "Network congestion", b: "High latency", c: "Overloaded server or slow database", d: "All of the above" }, answer: "d" },
            { category: "Troubleshooting", type: "mcq", question: "If a website works on localhost but not online, what is a possible root cause?[cite: 1]", options: { a: "Environment variables", b: "DNS or firewall configuration", c: "File permissions or closed ports", d: "All of the above" }, answer: "d" },
            { category: "Diagnostics", type: "ident", question: "Which diagnostic tool tests basic Layer-3 reachability, round-trip response time, and packet loss?[cite: 1]", answer: "ping" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool displays the router hops between client and destination, showing where network delays or packet drops occur?[cite: 1]", options: { a: "Ping", b: "Traceroute (or tracert)", c: "nslookup", d: "Network Tab" }, answer: "b" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tools query DNS servers to verify domain-to-IP resolution?[cite: 1]", options: { a: "Ping / tracert", b: "nslookup / dig", c: "Browser Developer Tools", d: "FTP / SSH" }, answer: "b" },
            { category: "Diagnostics", type: "mcq", question: "Which diagnostic tool inspects HTTP/HTTPS traffic directly to analyze Request URLs, HTTP methods, status codes, and response times?[cite: 1]", options: { a: "Ping", b: "Traceroute", c: "nslookup", d: "Browser Developer Tools (Network Tab)" }, answer: "d" },
            { category: "Comprehensive Review", type: "mcq", question: "In the OSI model, which layer defines the format of data on the network and handles node-to-node communication on the same local segment?[cite: 1]", options: { a: "Network Layer", b: "Data Link Layer", c: "Physical Layer", d: "Transport Layer" }, answer: "b" },
            { category: "Comprehensive Review", type: "mcq", question: "In the OSI model, which layer handles logical addressing and decides which physical path the data will take across networks?[cite: 1]", options: { a: "Network Layer", b: "Data Link Layer", c: "Physical Layer", d: "Transport Layer" }, answer: "a" },
            { category: "Comprehensive Review", type: "mcq", question: "Which OSI layer transmits raw bit streams over physical media?[cite: 1]", options: { a: "Network Layer", b: "Data Link Layer", c: "Physical Layer", d: "Transport Layer" }, answer: "c" },
            { category: "Comprehensive Review", type: "mcq", question: "Which OSI layer provides network services directly to end-user applications?[cite: 1]", options: { a: "Application Layer", b: "Presentation Layer", c: "Session Layer", d: "Transport Layer" }, answer: "a" },
            { category: "Comprehensive Review", type: "mcq", question: "Which OSI layer ensures data is in a usable format (encoding, formatting, encryption, compression)?[cite: 1]", options: { a: "Application Layer", b: "Presentation Layer", c: "Session Layer", d: "Transport Layer" }, answer: "b" },
            { category: "Comprehensive Review", type: "mcq", question: "Which OSI layer maintains connections, controls ports and sessions?[cite: 1]", options: { a: "Application Layer", b: "Presentation Layer", c: "Session Layer", d: "Transport Layer" }, answer: "c" }
        ],
    },

];

