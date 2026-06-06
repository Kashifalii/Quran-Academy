create type public.profile_role as enum ('user', 'admin');
create type public.blog_status as enum ('draft', 'published');
create type public.billing_period as enum ('monthly', 'yearly', 'one_time');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role public.profile_role not null default 'user',
  created_at timestamptz not null default now()
);

create table public.fee_plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price text not null,
  billing_period public.billing_period not null default 'monthly',
  features text[] not null default '{}',
  is_recommended boolean not null default false,
  is_active boolean not null default true,
  display_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  cover_image_url text,
  body text not null,
  author_id uuid references public.profiles(id) on delete set null,
  category text not null,
  tags text[] not null default '{}',
  status public.blog_status not null default 'draft',
  read_time_minutes int not null default 1 check (read_time_minutes > 0),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  submitted_at timestamptz not null default now()
);

create table public.registration_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  selected_plan_id uuid references public.fee_plans(id) on delete set null,
  selected_course text,
  country text,
  preferred_timing text,
  message text,
  submitted_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_blogs_updated_at
before update on public.blogs
for each row execute function public.set_updated_at();

create trigger set_fee_plans_updated_at
before update on public.fee_plans
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  )
  or coalesce(auth.jwt() -> 'user_metadata' ->> 'role', '') = 'admin';
$$;

alter table public.profiles enable row level security;
alter table public.blogs enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.registration_submissions enable row level security;
alter table public.fee_plans enable row level security;

create policy "profiles can read own profile"
on public.profiles for select
using (id = auth.uid() or public.is_admin());

create policy "admins can manage profiles"
on public.profiles for all
using (public.is_admin())
with check (public.is_admin());

create policy "published blogs are public"
on public.blogs for select
using (status = 'published');

create policy "admins can manage blogs"
on public.blogs for all
using (public.is_admin())
with check (public.is_admin());

create policy "active fee plans are public"
on public.fee_plans for select
using (is_active = true);

create policy "admins can manage fee plans"
on public.fee_plans for all
using (public.is_admin())
with check (public.is_admin());

create policy "admins can read contact submissions"
on public.contact_submissions for select
using (public.is_admin());

create policy "admins can manage contact submissions"
on public.contact_submissions for all
using (public.is_admin())
with check (public.is_admin());

create policy "admins can read registration submissions"
on public.registration_submissions for select
using (public.is_admin());

create policy "admins can manage registration submissions"
on public.registration_submissions for all
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('blog-covers', 'blog-covers', true)
on conflict (id) do nothing;

create policy "public can read blog covers"
on storage.objects for select
using (bucket_id = 'blog-covers');

create policy "admins can upload blog covers"
on storage.objects for insert
with check (bucket_id = 'blog-covers' and public.is_admin());

create policy "admins can update blog covers"
on storage.objects for update
using (bucket_id = 'blog-covers' and public.is_admin())
with check (bucket_id = 'blog-covers' and public.is_admin());

create policy "admins can delete blog covers"
on storage.objects for delete
using (bucket_id = 'blog-covers' and public.is_admin());
