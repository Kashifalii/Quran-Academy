import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { SubmissionTable } from "@/components/dashboard/SubmissionTable";
import { getRegistrationSubmissions } from "@/lib/data/submissions";

export default async function RegistrationsDashboardPage() {
  const submissions = await getRegistrationSubmissions();

  return (
    <>
      <DashboardHeader title="Registration Submissions" description="Search and sort student registration inquiries." />
      {submissions.length > 0 ? (
        <SubmissionTable
          rows={submissions}
          columns={[
            { key: "full_name", label: "Full Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "selected_course", label: "Selected Plan/Course" },
            { key: "submitted_at", label: "Date Registered" },
          ]}
        />
      ) : (
        <EmptyState title="No registration submissions" text="Registrations will appear here after visitors submit the registration form." />
      )}
    </>
  );
}
