import PageHeader from "@/components/PageHeader";
import Legal from "@/components/Legal";
export const metadata = {
  title: "Privacy Policy",
  description:
    "Starter privacy policy for Hexasoftsolutions, requiring legal review.",
};
export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        intro="Last updated: November 3, 2026"
      />
      <Legal
        sections={[
          [
            "Overview",
            "This starter policy explains how information may be handled. It is not legal advice and must be reviewed by a qualified legal professional before publication.",
          ],
          [
            "Information we collect",
            "Describe the personal information collected through forms, analytics, cookies and business communications. Replace this sample with verified practices.",
          ],
          [
            "How information is used",
            "Explain purposes, lawful bases where applicable, retention periods and user choices.",
          ],
          [
            "Sharing and service providers",
            "Identify relevant processors, integrations and circumstances in which information is shared.",
          ],
          [
            "Security and retention",
            "Describe actual safeguards and retention schedules without overstating security.",
          ],
          [
            "Your rights",
            "Explain applicable access, correction, deletion, portability and objection rights, plus how to exercise them.",
          ],
          [
            "Contact",
            "Replace with the verified privacy contact and business address.",
          ],
        ]}
      />
    </>
  );
}
