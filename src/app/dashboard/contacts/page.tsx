import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { SubmissionTable } from "@/components/dashboard/SubmissionTable";
import { getContactSubmissions } from "@/lib/data/submissions";

export default async function ContactsDashboardPage() {
  const submissions = await getContactSubmissions();

  return (
    <>
      <DashboardHeader title="Contact Submissions" description="Search and sort messages received from the public contact form." />
      {submissions.length > 0 ? (
        <SubmissionTable
          rows={submissions}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "message", label: "Message" },
            { key: "submitted_at", label: "Date Submitted" },
          ]}
        />
      ) : (
        <EmptyState title="No contact submissions" text="Messages will appear here after visitors submit the contact form." />
      )}
    </>
  );
}
