import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="Add date">
      <p>
        Hexasoftsolutions respects your privacy. This policy explains what
        information we collect through this website and how we use it.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you use the contact form we collect your name, email address,
        company, the service you are interested in and your project details.
      </p>
      <h2>How we use it</h2>
      <p>
        We use this information to respond to your enquiry and to discuss your
        project with you.
      </p>
      <h2>Sharing and retention</h2>
      <p>
        We do not sell your information. We keep enquiries only as long as
        needed to respond and to maintain business records.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete your information by emailing
        us at any time.
      </p>
    </LegalPage>
  );
}
