export type ProfileRole = "user" | "admin";
export type BlogStatus = "draft" | "published";
export type BillingPeriod = "monthly" | "yearly" | "one_time";

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: ProfileRole;
  created_at: string;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  body: string;
  author_id: string | null;
  category: string;
  tags: string[];
  status: BlogStatus;
  read_time_minutes: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  author?: Pick<Profile, "full_name" | "avatar_url"> | null;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
};

export type RegistrationSubmission = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  selected_plan_id: string | null;
  selected_course: string | null;
  country: string | null;
  preferred_timing: string | null;
  message: string | null;
  submitted_at: string;
};

export type FeePlan = {
  id: string;
  name: string;
  price: string;
  billing_period: BillingPeriod;
  features: string[];
  is_recommended: boolean;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Partial<Profile> & { id: string };
        Update: Partial<Profile>;
        Relationships: [];
      };
      blogs: {
        Row: Blog;
        Insert: Omit<Partial<Blog>, "id" | "created_at" | "updated_at" | "author"> & {
          title: string;
          slug: string;
          excerpt: string;
          body: string;
          category: string;
        };
        Update: Partial<Omit<Blog, "id" | "created_at" | "updated_at" | "author">>;
        Relationships: [];
      };
      contact_submissions: {
        Row: ContactSubmission;
        Insert: Omit<ContactSubmission, "id" | "submitted_at">;
        Update: Partial<ContactSubmission>;
        Relationships: [];
      };
      registration_submissions: {
        Row: RegistrationSubmission;
        Insert: Omit<RegistrationSubmission, "id" | "submitted_at">;
        Update: Partial<RegistrationSubmission>;
        Relationships: [];
      };
      fee_plans: {
        Row: FeePlan;
        Insert: Omit<Partial<FeePlan>, "id" | "created_at" | "updated_at"> & {
          name: string;
          price: string;
          billing_period: BillingPeriod;
          features: string[];
        };
        Update: Partial<Omit<FeePlan, "id" | "created_at" | "updated_at">>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      profile_role: ProfileRole;
      blog_status: BlogStatus;
      billing_period: BillingPeriod;
    };
    CompositeTypes: Record<string, never>;
  };
};
