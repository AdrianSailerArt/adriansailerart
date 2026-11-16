/**
 * Urheberangaben für alle ausgelieferten Bilder. Google Bilder liest sie aus den
 * eingebetteten Metadaten (IPTC/XMP) und zeigt sie als „Credit“ und „Copyright“ an.
 * Genutzt in nuxt.config.ts (Bildserver) und im Schema.org-Bild der Seiten.
 */
export const PHOTO_CREDIT = {
    creator: 'Adrian Sailer',
    credit: 'Adrian Sailer Art',
    copyright: '© Adrian Sailer Art – alle Rechte vorbehalten',
    url: 'https://adriansailer.de/'
} as const;

/**
 * sharp: nur XMP (0b00010) schreiben. EXIF bleibt weg, weil es das Lightroom-Vorschaubild
 * mitschleppt (rund 12 KB pro Bild); Google liest die Urheberangaben aus XMP.
 */
export const IMAGE_METADATA_BITS = 0b00010;

const escapeXml = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** XMP mit den IPTC-Feldern Creator, Credit Line, Copyright Notice und Web Statement */
export const photoCreditXmp = `<?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
      xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">
      <dc:creator><rdf:Seq><rdf:li>${escapeXml(PHOTO_CREDIT.creator)}</rdf:li></rdf:Seq></dc:creator>
      <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">${escapeXml(PHOTO_CREDIT.copyright)}</rdf:li></rdf:Alt></dc:rights>
      <photoshop:Credit>${escapeXml(PHOTO_CREDIT.credit)}</photoshop:Credit>
      <xmpRights:Marked>True</xmpRights:Marked>
      <xmpRights:WebStatement>${escapeXml(PHOTO_CREDIT.url)}</xmpRights:WebStatement>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
