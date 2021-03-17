
# ZAP Scanning Report

Generated on Wed, 17 Mar 2021 13:06:41


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 4 |
| Low | 5 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| Content Security Policy (CSP) Header Not Set | Medium | 11 | 
| Reverse Tabnabbing | Medium | 11 | 
| Sub Resource Integrity Attribute Missing | Medium | 11 | 
| X-Frame-Options Header Not Set | Medium | 11 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| X-Content-Type-Options Header Missing | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 9 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### Content Security Policy (CSP) Header Not Set
##### Medium (High)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-114 MuiButton-root-87 MuiButton-text-89 MuiButton-textPrimary-90 MuiButton-textSizeSmall-100 MuiButton-sizeSmall-106" tabindex="0" aria-disabled="false" target="_blank" rel="noopener" href="https://twitter.com/archifiltre"><span class="MuiButton-label-88"><span class="MuiButton-startIcon-109 MuiButton-iconSizeSmall-111"><svg class="MuiSvgIcon-root-127" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></span>Nous suivre sur Twitter</span></a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-113 MuiButton-root-86 MuiButton-text-88 MuiButton-textPrimary-89 MuiButton-textSizeSmall-99 MuiButton-sizeSmall-105" tabindex="0" aria-disabled="false" target="_blank" href="https://github.com/SocialGouv/archifiltre/projects/1"><span class="MuiButton-label-87">Consulter la roadmap<span class="MuiButton-endIcon-109 MuiButton-iconSizeSmall-110"><svg class="MuiSvgIcon-root-126" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"></path></svg></span></span></a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiTypography-root-54 MuiLink-root-49 MuiLink-underlineHover-51 MuiTypography-colorPrimary-77" href="https://fr.matomo.org/" target="_blank">Matomo</a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-115 MuiButton-root-88 MuiButton-text-90 MuiButton-textPrimary-91" tabindex="0" aria-disabled="false" target="_blank" rel="noopener" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"><span class="MuiButton-label-89">Documentation<span class="MuiButton-endIcon-111 MuiButton-iconSizeMedium-113"><svg class="MuiSvgIcon-root-128" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></span></span></a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-113 MuiButton-root-86 MuiButton-text-88 MuiButton-textPrimary-89" tabindex="0" aria-disabled="false" target="_blank" href="https://raw.githubusercontent.com/SocialGouv/archifiltre/master/scripts/load-from-filesystem.ps1" rel="noopener"><span class="MuiButton-label-87"><span class="MuiButton-startIcon-108 MuiButton-iconSizeMedium-111"><svg class="MuiSvgIcon-root-126" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg></span>Windows</span></a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiTypography-root-56 MuiLink-root-51 MuiLink-underlineHover-53 MuiTypography-colorPrimary-79" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiTypography-root-54 MuiLink-root-49 MuiLink-underlineHover-51 MuiTypography-colorPrimary-77" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiTypography-root-54 MuiLink-root-49 MuiLink-underlineHover-51 MuiTypography-colorPrimary-77" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-115 MuiButton-root-88 MuiButton-text-90 MuiButton-textPrimary-91" tabindex="0" aria-disabled="false" target="_blank" rel="noopener" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"><span class="MuiButton-label-89">Documentation<span class="MuiButton-endIcon-111 MuiButton-iconSizeMedium-113"><svg class="MuiSvgIcon-root-128" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></span></span></a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiTypography-root-54 MuiLink-root-49 MuiLink-underlineHover-51 MuiTypography-colorPrimary-77" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre" target="_blank" rel="noopener">Documentation</a>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="MuiButtonBase-root-115 MuiButton-root-88 MuiButton-text-90 MuiButton-textPrimary-91" tabindex="0" aria-disabled="false" target="_blank" rel="noopener" href="https://github.com/SocialGouv/archifiltre/wiki/Wiki-Archifiltre"><span class="MuiButton-label-89">Documentation<span class="MuiButton-endIcon-111 MuiButton-iconSizeMedium-113"><svg class="MuiSvgIcon-root-128" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></span></span></a>`
  
  
  
  
Instances: 11
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Sub Resource Integrity Attribute Missing
##### Medium (High)
  
  
  
  
#### Description
<p>The integrity attribute is missing on a script or link tag served by an external server. The integrity tag prevents an attacker who have gained access to this server from injecting a malicious content. </p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<link rel="preconnect" href="https://matomo.fabrique.social.gouv.fr"/>`
  
  
  
  
Instances: 11
  
### Solution
<p>Provide a valid integrity attribute to the tag.</p>
  
### Reference
* https://developer.mozilla.org/en/docs/Web/Security/Subresource_Integrity

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive. </p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-statistiques-tsx-9c3c7903f8143bb1189e.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-statistiques-tsx-9c3c7903f8143bb1189e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/framework-55f7b2ba736e89fdc740.js](https://archifiltre.fabrique.social.gouv.fr/framework-55f7b2ba736e89fdc740.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/app-7a25d8ba9c7abfea7753.js](https://archifiltre.fabrique.social.gouv.fr/app-7a25d8ba9c7abfea7753.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 3
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/robots.txt](https://archifiltre.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/robots.txt](https://archifiltre.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/robots.txt](https://archifiltre.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scan rule will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://owasp.org/www-community/Security_Headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-134`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-134`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-133`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-134`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-134`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `MuiSvgIcon-fontSizeInherit-132`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>2蒾\x0002\x001c���{R�7��\x0017��ߵ�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-produit-mdx-958c987021ad24d7aac8.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-produit-mdx-958c987021ad24d7aac8.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-social-tsx-42440706683655268adc.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-social-tsx-42440706683655268adc.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/polyfill-eb1689f2703803ef144d.js](https://archifiltre.fabrique.social.gouv.fr/polyfill-eb1689f2703803ef144d.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `username`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/framework-55f7b2ba736e89fdc740.js](https://archifiltre.fabrique.social.gouv.fr/framework-55f7b2ba736e89fdc740.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `select`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-telechargements-tsx-2d55403fec877ec657cd.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-telechargements-tsx-2d55403fec877ec657cd.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `from`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-statistiques-tsx-9c3c7903f8143bb1189e.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-statistiques-tsx-9c3c7903f8143bb1189e.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `XXX`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/app-7a25d8ba9c7abfea7753.js](https://archifiltre.fabrique.social.gouv.fr/app-7a25d8ba9c7abfea7753.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `bug`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/commons-ccc943a53f9a61294e81.js](https://archifiltre.fabrique.social.gouv.fr/commons-ccc943a53f9a61294e81.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/component---src-pages-index-tsx-5a0ce07f007a4612b8a7.js](https://archifiltre.fabrique.social.gouv.fr/component---src-pages-index-tsx-5a0ce07f007a4612b8a7.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 9
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bBUG\b and was detected in the element starting with: "(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{HsiY:function(e,t,n){"use strict";var r=n("TqRt"),s=n("284h");Object.d", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite](https://archifiltre.fabrique.social.gouv.fr/politique-de-confidentialite)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript><picture><source srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" /><img loading="lazy" width="160" height="20" srcset="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png 1x,
/static/86e16619c82a5b0111416c498a93a6ca/d957f/logo.png 1.5x,
/static/86e16619c82a5b0111416c498a93a6ca/b04d7/logo.png 2x" src="/static/86e16619c82a5b0111416c498a93a6ca/48bf3/logo.png" alt="Logo Archifiltre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/social](https://archifiltre.fabrique.social.gouv.fr/social)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/robots.txt](https://archifiltre.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/faq](https://archifiltre.fabrique.social.gouv.fr/faq)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/mentions-legales](https://archifiltre.fabrique.social.gouv.fr/mentions-legales)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/co-construction](https://archifiltre.fabrique.social.gouv.fr/co-construction)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/telechargements](https://archifiltre.fabrique.social.gouv.fr/telechargements)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `712016698`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `2050432530`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `712016698`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `712016698`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `2050432530`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/produit](https://archifiltre.fabrique.social.gouv.fr/produit)
  
  
  * Method: `GET`
  
  
  * Evidence: `2050432530`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/sitemap.xml](https://archifiltre.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `712016698`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr](https://archifiltre.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `2050432530`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/](https://archifiltre.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `2050432530`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `34522444`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `026967152`
  
  
  
  
* URL: [https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous](https://archifiltre.fabrique.social.gouv.fr/qui-sommes-nous)
  
  
  * Method: `GET`
  
  
  * Evidence: `712016698`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>712016698, which evaluates to: 1992-07-24 22:24:58</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
