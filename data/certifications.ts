/**
 * Certifications
 *
 * Add only credentials you hold. Remove template entries you do not have.
 * verifyUrl should link to the issuer's public verification page for your credential.
 * logo: add SVG/PNG under public/images/certifications/
 */

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  logo: string;
};

export const certifications: Certification[] = [
  {
    id: "replace-cert-slug",
    name: "REPLACE: Certification Name",
    issuer: "REPLACE: Issuing Organization",
    date: "REPLACE: Year or Mon YYYY",
    credentialId: "REPLACE: Credential ID",
    verifyUrl: "REPLACE: Issuer verification URL",
    logo: "/images/certifications/aws.svg",
  },
];
