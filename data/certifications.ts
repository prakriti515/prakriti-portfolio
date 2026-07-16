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
    id: "aws-saa",
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-SAA-XXXXX",
    verifyUrl: "https://aws.amazon.com/verification",
    logo: "/images/certifications/aws.svg",
  },
  {
    id: "azure-admin",
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2025",
    credentialId: "AZ-104-XXXXX",
    verifyUrl: "https://learn.microsoft.com/credentials",
    logo: "/images/certifications/azure.svg",
  },
  {
    id: "cka",
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialId: "CKA-XXXXX",
    verifyUrl: "https://training.linuxfoundation.org/certification",
    logo: "/images/certifications/kubernetes.svg",
  },
  {
    id: "terraform-associate",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2024",
    credentialId: "TF-XXXXX",
    verifyUrl: "https://www.hashicorp.com/certification",
    logo: "/images/certifications/terraform.svg",
  },
  {
    id: "linux-lpic",
    name: "LPIC-1 Linux Administrator",
    issuer: "Linux Professional Institute",
    date: "2023",
    credentialId: "LPIC1-XXXXX",
    verifyUrl: "https://www.lpi.org/verify",
    logo: "/images/certifications/linux.svg",
  },
];
