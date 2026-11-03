import PageHeader from "@/components/PageHeader";
import Legal from "@/components/Legal";
export const metadata = {
  title: "Terms of Service",
  description:
    "Starter terms of service for Hexasoftsolutions, requiring legal review.",
};
export default function Terms() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        intro="Last updated: November 3, 2026"
      />
      <Legal
        sections={[
          [
            "Agreement",
            "These starter terms are placeholders and must be reviewed by a qualified legal professional before publication.",
          ],
          [
            "Use of this website",
            "Describe permitted use, restrictions and applicable eligibility requirements.",
          ],
          [
            "Services and proposals",
            "Explain that project scope, deliverables, fees and timelines are governed by signed agreements.",
          ],
          [
            "Intellectual property",
            "Set out ownership, licenses, third-party materials and client responsibilities.",
          ],
          [
            "Disclaimers and liability",
            "Insert legally reviewed warranty disclaimers and liability limitations appropriate to your jurisdiction.",
          ],
          [
            "Privacy",
            "Refer to the Privacy Policy and explain how personal information is handled.",
          ],
          [
            "Changes and contact",
            "Describe updates to terms and provide verified contact details.",
          ],
        ]}
      />
    </>
  );
}
