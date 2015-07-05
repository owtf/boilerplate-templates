---
layout: template
title: SSL v3 POODLE (Padding Oracle On Downgraded Legacy Encryption)
---

Synopsis:
---------------

POODLE is a vulnerability in the design of SSL version 3.0. POODLE is actually an acronym for Padding Oracle On Downgraded Legacy Encryption. The vulnerability allows the decryption to plaintext of secure connections. The bug was discovered by Google Security Team researcher Bodo Möller in collaboration with Thai Duong and Krzysztof Kotowicz.


Description: 
------------------

POODLE vulnerability relates to the flaw in CBC ciphers used in SSLv3. The attack is feasible when a higher SSL connection (TLS 1.0 - 1.2) is downgraded to SSLv3. As the CBC ciphers used in SSLv3 are non deterministic in nature hence allows for decrpytion of SSL Connection. There is no practicle workaround to this attack and hence it is recommended to avoid SSLv3 entirely.


For more information on POODLE:-

[POODLE Official announcement website](http://poodlebleed.com/) 

[POODLE attacks on SSLv3 at ImperialViolet](https://www.imperialviolet.org/2014/10/14/poodle.html) 

Mitigation: 
-------------

The vulnerability affects the server which support SSL version 3.0 using CBC ciphers. However since its a implementation bug and the remaining RC4 cipher suites are aleady considered vulnerable hence it is recommended to disable SSLv3 completely.


- Disable SSLv3 completely. 
- If SSLv3 needs to be enabled then ensure `TLS_FALLBACK_SCSV` mode is enabled on the server.
- From client prespective we should ensure that browsers do not support SSLv3.


For more details:

[OWASP Transport Layer Protection Cheat Sheet](http://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)

[Testing for SSL TLS](http://www.owasp.org/index.php/Testing_for_SSL-TLS_%28OWASP-CM-001%29)

[OWASP TOP 10 2013 Sensitive Data Exposure](https://www.owasp.org/index.php/Top_10_2013-A6-Sensitive_Data_Exposure)


CVSS Base Score:
----------------

[4.3 (AV:N/AC:M/Au:N/C:P/I:N/A:N)](https://nvd.nist.gov/cvss.cfm?version=2&name=CVE-2014-3566&vector=%28AV:N/AC:M/Au:N/C:P/I:N/A:N%29) 
